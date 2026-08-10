import { headers } from "next/headers";
import { isLocale, defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function getServerLocale(): Promise<Locale> {
  const h = await headers();
  const l = h.get("x-locale");
  return isLocale(l) ? l : defaultLocale;
}

export async function getServerDict() {
  const locale = await getServerLocale();
  return { locale, dict: getDictionary(locale) };
}
