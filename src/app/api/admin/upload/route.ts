import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { randomUUID } from "node:crypto";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

const MAX_BYTES = 6 * 1024 * 1024; // 6 МБ
const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function POST(request: Request) {
  // только для авторизованного админа
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!(await verifySessionToken(token))) {
    return NextResponse.json({ ok: false, error: "Не авторизовано" }, { status: 401 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, error: "Файл не передан" }, { status: 400 });
    }
    const ext = ALLOWED[file.type];
    if (!ext) {
      return NextResponse.json(
        { ok: false, error: "Поддерживаются JPG, PNG, WebP, GIF" },
        { status: 400 }
      );
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Файл больше 6 МБ" },
        { status: 400 }
      );
    }

    const buf = Buffer.from(await file.arrayBuffer());
    const name = `${randomUUID()}.${ext}`;
    const dir = path.join(process.cwd(), "public", "uploads");
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, name), buf);

    return NextResponse.json({ ok: true, url: `/uploads/${name}` });
  } catch (e) {
    console.error("[upload] error:", e);
    return NextResponse.json(
      { ok: false, error: "Не удалось загрузить файл" },
      { status: 500 }
    );
  }
}
