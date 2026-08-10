export const locales = ["ru", "kz", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export function isLocale(v: string | undefined | null): v is Locale {
  return !!v && (locales as readonly string[]).includes(v);
}

// добавить префикс локали к пути (ru — без префикса)
export function withLocale(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  // якоря/хэши сохраняем
  return `/${locale}${clean === "/" ? "" : clean}`;
}

// определить локаль из pathname (клиент)
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return isLocale(seg) ? seg : defaultLocale;
}

// путь без префикса локали
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (isLocale(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || "/";
  }
  return pathname;
}
