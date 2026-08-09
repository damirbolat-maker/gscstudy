import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    // TODO: сохранение в БД (Prisma) и отправка в Bitrix24.
    // Пока просто логируем заявку на сервере.
    console.log("[lead]", {
      name,
      phone,
      city: body.city ?? null,
      source: body.source ?? "site",
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Некорректный запрос" },
      { status: 400 }
    );
  }
}
