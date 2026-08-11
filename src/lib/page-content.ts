// Редактируемый из админки контент страниц (CMS).
// Возвращает переопределения для конкретной страницы+языка; пустой объект, если правок нет.

import { prisma } from "@/lib/prisma";
import type { Locale } from "@/i18n/config";

// Поля, которые можно переопределять из админки (общие для всех страниц).
export type PageOverride = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  metaTitle?: string;
  metaDescription?: string;
};

export const PAGE_SLUGS = [
  "home",
  "school",
  "exams",
  "abroad",
  "camps",
  "about",
] as const;
export type PageSlug = (typeof PAGE_SLUGS)[number];

export const PAGE_LABELS: Record<PageSlug, string> = {
  home: "Главная",
  school: "Языковая школа",
  exams: "Экзамены",
  abroad: "За рубеж",
  camps: "Лагеря",
  about: "О нас",
};

function parse(data: string | undefined | null): PageOverride {
  if (!data) return {};
  try {
    const obj = JSON.parse(data);
    return obj && typeof obj === "object" ? (obj as PageOverride) : {};
  } catch {
    return {};
  }
}

// Одна страница + язык.
export async function getPageContent(
  slug: PageSlug,
  locale: Locale
): Promise<PageOverride> {
  const row = await prisma.pageContent.findUnique({
    where: { slug_locale: { slug, locale } },
  });
  return parse(row?.data);
}

// Все языки для страницы (для админ-редактора).
export async function getPageContentAll(
  slug: PageSlug
): Promise<Record<Locale, PageOverride>> {
  const rows = await prisma.pageContent.findMany({ where: { slug } });
  const out: Record<string, PageOverride> = { ru: {}, kz: {}, en: {} };
  for (const r of rows) out[r.locale] = parse(r.data);
  return out as Record<Locale, PageOverride>;
}

// Убирает пустые строки, чтобы не затирать дефолты пустотой.
export function cleanOverride(o: PageOverride): PageOverride {
  const out: PageOverride = {};
  (Object.keys(o) as (keyof PageOverride)[]).forEach((k) => {
    const v = o[k];
    if (typeof v === "string" && v.trim()) out[k] = v.trim();
  });
  return out;
}
