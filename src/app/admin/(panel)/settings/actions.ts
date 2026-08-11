"use server";

import { revalidatePath } from "next/cache";
import {
  setSetting,
  getBitrixWebhookUrl,
  type SettingKey,
} from "@/lib/settings";
import { sendLeadToBitrix } from "@/lib/bitrix";

const KEYS: SettingKey[] = [
  "bitrixWebhookUrl",
  "contactPhone",
  "contactWhatsapp",
  "notifyEmail",
  "contactEmail",
];

export async function saveSettings(formData: FormData): Promise<void> {
  for (const key of KEYS) {
    const value = String(formData.get(key) ?? "");
    await setSetting(key, value);
  }
  revalidatePath("/admin/settings");
}

export async function sendTestLead(): Promise<{ ok: boolean; reason?: string }> {
  const url = await getBitrixWebhookUrl();
  if (!url) {
    return { ok: false, reason: "no-webhook" };
  }

  const ok = await sendLeadToBitrix({
    name: "Тест из админки",
    phone: "+70000000000",
    title: "Проверка вебхука Bitrix24",
    comment: "Тестовая заявка, можно удалить.",
    source: "admin-test",
  });

  return { ok };
}
