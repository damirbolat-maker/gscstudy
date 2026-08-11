// Сидирует стартовые данные только если тестов ещё нет — безопасно для прода
// (не затирает правки, сделанные в админке). Запускается на каждом деплое.
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let count = 0;
try {
  count = await prisma.test.count();
} catch {
  count = 0;
}
await prisma.$disconnect();

if (count > 0) {
  console.log(`[seed] данные есть (tests=${count}) — сиды пропускаем.`);
  process.exit(0);
}

console.log("[seed] пустая БД — заливаем стартовые данные…");
await import("./seed.mjs");
