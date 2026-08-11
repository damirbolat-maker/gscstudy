// Хранилище настроек сайта (ключ-значение) в БД.
// Значения из БД имеют приоритет над переменными окружения.

import { prisma } from "@/lib/prisma";

export type SettingKey =
  | "bitrixWebhookUrl"
  | "contactPhone"
  | "contactWhatsapp"
  | "contactEmail"
  | "notifyEmail";

export async function getSetting(key: SettingKey): Promise<string | null> {
  const row = await prisma.setting.findUnique({ where: { key } });
  return row?.value ?? null;
}

export async function getSettings(
  keys: SettingKey[]
): Promise<Record<string, string>> {
  const rows = await prisma.setting.findMany({ where: { key: { in: keys } } });
  const out: Record<string, string> = {};
  for (const r of rows) out[r.key] = r.value;
  return out;
}

export async function setSetting(key: SettingKey, value: string): Promise<void> {
  const trimmed = value.trim();
  if (!trimmed) {
    // пустое значение — удаляем запись, чтобы сработал fallback на env
    await prisma.setting.deleteMany({ where: { key } });
    return;
  }
  await prisma.setting.upsert({
    where: { key },
    update: { value: trimmed },
    create: { key, value: trimmed },
  });
}

// Bitrix webhook: сперва из БД, затем из переменной окружения.
export async function getBitrixWebhookUrl(): Promise<string | null> {
  const fromDb = await getSetting("bitrixWebhookUrl");
  return fromDb || process.env.BITRIX_WEBHOOK_URL || null;
}
