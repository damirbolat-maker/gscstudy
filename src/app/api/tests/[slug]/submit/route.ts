import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { computeLevel } from "@/lib/scoring";
import { sendLeadToBitrix } from "@/lib/bitrix";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { name, phone, email, answers } = body ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    const test = await prisma.test.findUnique({
      where: { slug },
      include: { questions: { include: { options: true } } },
    });
    if (!test) {
      return NextResponse.json(
        { ok: false, error: "Тест не найден" },
        { status: 404 }
      );
    }

    const picked: Record<string, string> =
      answers && typeof answers === "object" ? answers : {};

    let score = 0;
    const total = test.questions.length;
    for (const q of test.questions) {
      const chosen = picked[q.id];
      const correct = q.options.find((o) => o.correct);
      if (chosen && correct && chosen === correct.id) score += 1;
    }

    const level = computeLevel(test.kind, score, total);

    // заявка (лид)
    const lead = await prisma.lead.create({
      data: {
        name: String(name).slice(0, 200),
        phone: String(phone).slice(0, 60),
        email: email ? String(email).slice(0, 200) : null,
        interest: `${test.title} — ${level}`,
        source: `test:${slug}`,
        extra: JSON.stringify({ level, score, total }),
      },
    });

    await prisma.testResult.create({
      data: {
        testId: test.id,
        name: String(name).slice(0, 200),
        phone: String(phone).slice(0, 60),
        email: email ? String(email).slice(0, 200) : null,
        score,
        total,
        level,
        answers: JSON.stringify(picked),
        leadId: lead.id,
      },
    });

    await sendLeadToBitrix({
      name: String(name),
      phone: String(phone),
      email: email ?? null,
      source: `test:${slug}`,
      title: `Тест «${test.title}» — ${level}`,
      comment: `Результат теста «${test.title}»: ${level}\nПравильных: ${score} из ${total}`,
    });

    return NextResponse.json({ ok: true, score, total, level });
  } catch (e) {
    console.error("[test submit] error:", e);
    return NextResponse.json(
      { ok: false, error: "Не удалось сохранить результат" },
      { status: 500 }
    );
  }
}
