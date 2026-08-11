"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function saveTestMeta(
  testId: string,
  data: { title: string; description: string; timeLimit: number | null; published: boolean }
) {
  await prisma.test.update({
    where: { id: testId },
    data: {
      title: data.title,
      description: data.description || null,
      timeLimit: data.timeLimit,
      published: data.published,
    },
  });
  revalidatePath(`/admin/exams/${testId}`);
  revalidatePath("/admin/exams");
}

export async function addQuestion(testId: string) {
  const count = await prisma.question.count({ where: { testId } });
  await prisma.question.create({
    data: {
      testId,
      order: count,
      text: "Новый вопрос",
      options: {
        create: [
          { order: 0, text: "Вариант 1", correct: true },
          { order: 1, text: "Вариант 2" },
        ],
      },
    },
  });
  revalidatePath(`/admin/exams/${testId}`);
}

export async function deleteQuestion(testId: string, questionId: string) {
  await prisma.question.delete({ where: { id: questionId } });
  revalidatePath(`/admin/exams/${testId}`);
}

export async function saveQuestion(
  testId: string,
  questionId: string,
  text: string,
  options: { id: string; text: string }[],
  correctId: string
) {
  await prisma.question.update({ where: { id: questionId }, data: { text } });
  for (const o of options) {
    await prisma.option.update({
      where: { id: o.id },
      data: { text: o.text, correct: o.id === correctId },
    });
  }
  revalidatePath(`/admin/exams/${testId}`);
}

export async function importQuestions(testId: string, raw: string) {
  try {
    const lines = raw.split("\n");
    const parsed: { text: string; options: { text: string; correct: boolean }[] }[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue; // blank lines ignored
      if (!trimmed.includes("|")) continue; // no options — skip

      const parts = trimmed.split("|").map((p) => p.trim()).filter((p) => p.length > 0);
      const text = parts.shift();
      if (!text || parts.length === 0) continue;

      const options = parts.map((p) => {
        const correct = p.startsWith("*");
        return { text: correct ? p.slice(1).trim() : p, correct };
      });

      // default first option to correct if none starred
      if (!options.some((o) => o.correct)) {
        options[0].correct = true;
      }

      parsed.push({ text, options });
    }

    if (parsed.length === 0) {
      return { ok: false as const, error: "Не найдено ни одного вопроса." };
    }

    const startOrder = await prisma.question.count({ where: { testId } });

    for (let i = 0; i < parsed.length; i++) {
      const q = parsed[i];
      await prisma.question.create({
        data: {
          testId,
          order: startOrder + i,
          text: q.text,
          options: {
            create: q.options.map((opt, oi) => ({
              order: oi,
              text: opt.text,
              correct: opt.correct,
            })),
          },
        },
      });
    }

    revalidatePath(`/admin/exams/${testId}`);
    revalidatePath("/admin/exams");
    return { ok: true as const, added: parsed.length };
  } catch (e) {
    return { ok: false as const, error: e instanceof Error ? e.message : "Ошибка импорта." };
  }
}

export async function addOption(testId: string, questionId: string) {
  const count = await prisma.option.count({ where: { questionId } });
  await prisma.option.create({
    data: { questionId, order: count, text: `Вариант ${count + 1}` },
  });
  revalidatePath(`/admin/exams/${testId}`);
}

export async function deleteOption(testId: string, optionId: string) {
  await prisma.option.delete({ where: { id: optionId } });
  revalidatePath(`/admin/exams/${testId}`);
}
