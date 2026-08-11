"use client";

import { usePathname } from "next/navigation";
import { localeFromPath } from "./config";

export function useLocale() {
  const pathname = usePathname() || "/";
  return localeFromPath(pathname);
}
