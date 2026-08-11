"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { logout } from "@/app/admin/actions";

const nav = [
  { href: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/admin/pages", label: "Страницы", icon: "web" },
  { href: "/admin/exams", label: "Тесты", icon: "quiz" },
  { href: "/admin/leads", label: "Заявки", icon: "group" },
  { href: "/admin/camps", label: "Лагеря", icon: "event_available" },
  { href: "/admin/settings", label: "Настройки", icon: "settings" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full flex-col p-4 z-50 bg-primary-container shadow-xl w-64 text-on-primary-container">
      <div className="mb-8 px-4 pt-2">
        <h1 className="text-2xl font-extrabold text-white tracking-tight">
          GSC Study
        </h1>
        <p className="text-[10px] uppercase tracking-widest text-white/70 mt-1">
          Admin Console
        </p>
      </div>

      <ul className="flex flex-col gap-1 flex-grow">
        {nav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:translate-x-1 duration-200 ${
                  active
                    ? "bg-white/15 text-white font-bold"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon name={item.icon} className="text-xl" />
                <span className="font-semibold text-sm">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto border-t border-white/15 pt-4">
        <a
          href="/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm font-semibold"
        >
          <Icon name="public" className="text-xl" />
          Открыть сайт
        </a>
        <form action={logout}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-all text-sm font-semibold"
          >
            <Icon name="logout" className="text-xl" />
            Выйти
          </button>
        </form>
      </div>
    </nav>
  );
}
