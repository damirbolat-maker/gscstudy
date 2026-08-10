"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { site } from "@/lib/site";
import Logo from "@/components/Logo";
import { useLocale } from "@/i18n/useLocale";
import { getDictionary } from "@/i18n/dictionaries";
import { withLocale, stripLocale, locales, type Locale } from "@/i18n/config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const router = useRouter();
  const locale = useLocale();
  const t = getDictionary(locale);

  const nav = [
    { label: t.nav.school, href: "/school" },
    { label: t.nav.exams, href: "/exams" },
    { label: t.nav.abroad, href: "/abroad" },
    { label: t.nav.camps, href: "/camps" },
    { label: t.nav.centers, href: "/#offices" },
  ];

  const basePath = stripLocale(pathname);
  const isActive = (href: string) =>
    href.startsWith("/#") ? false : basePath === href;

  function switchLang(l: Locale) {
    router.push(withLocale(l, basePath));
  }

  return (
    <>
      <header className="glass-nav fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Logo href={withLocale(locale, "/")} />
            </div>

            <nav className="hidden md:flex space-x-8">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className={`text-sm font-semibold transition-colors ${
                    isActive(item.href)
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex bg-gray-100 p-1 rounded-full">
                {locales.map((l) => (
                  <button
                    key={l}
                    onClick={() => switchLang(l)}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-colors uppercase ${
                      locale === l
                        ? "bg-white shadow-sm text-primary"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <a
                href={`tel:${site.phone.tel}`}
                className="text-sm font-bold text-gray-900 hover:text-primary"
              >
                {site.phone.display}
              </a>
              <a
                href="#consult"
                className="btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm"
              >
                {t.actions.consult}
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                aria-label="Меню"
                onClick={() => setMenuOpen(true)}
                className="text-gray-500 hover:text-gray-900 p-2"
                type="button"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-white ${menuOpen ? "" : "hidden"}`}>
        <div className="pt-20 pb-6 px-4 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex bg-gray-100 p-1 rounded-full">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => {
                    setMenuOpen(false);
                    switchLang(l);
                  }}
                  className={`px-3 py-1 text-xs font-bold rounded-full uppercase ${
                    locale === l ? "bg-white shadow-sm text-primary" : "text-gray-500"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              aria-label="Закрыть"
              onClick={() => setMenuOpen(false)}
              className="text-gray-500 hover:text-gray-900 p-2"
              type="button"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
          </div>
          <nav className="grid gap-y-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-gray-900 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <a href={`tel:${site.phone.tel}`} className="block text-xl font-bold text-gray-900 mb-4">
              {site.phone.display}
            </a>
            <a
              href="#consult"
              onClick={() => setMenuOpen(false)}
              className="btn-primary block w-full text-center px-5 py-3 rounded-lg text-base font-semibold shadow-sm"
            >
              {t.actions.consult}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
