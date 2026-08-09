import { prisma } from "@/lib/prisma";
import Icon from "@/components/Icon";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const [totalLeads, newLeads, enrolled, testsCount, campsCount, recent] =
    await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({ where: { status: "new" } }),
      prisma.lead.count({ where: { status: "enrolled" } }),
      prisma.test.count(),
      prisma.camp.count(),
      prisma.lead.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
    ]);

  const metrics = [
    { icon: "groups", color: "text-primary bg-primary/10", label: "Всего заявок", value: totalLeads },
    { icon: "group", color: "text-tertiary bg-tertiary-container/10", label: "Новые заявки", value: newLeads },
    { icon: "assignment_turned_in", color: "text-secondary bg-secondary/10", label: "Записаны", value: enrolled },
    { icon: "quiz", color: "text-clever-green bg-clever-green/10", label: "Тестов уровня", value: testsCount },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">
          Обзор
        </h1>
        <p className="text-on-surface-variant mt-1">
          Что происходит в GSC Study прямо сейчас.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white border border-border-subtle rounded-2xl p-6"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${m.color}`}>
              <Icon name={m.icon} className="text-2xl" />
            </div>
            <div className="text-on-surface-variant text-sm mb-1">{m.label}</div>
            <div className="text-3xl font-extrabold text-on-surface">
              {m.value}
            </div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white border border-border-subtle rounded-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-primary">Последние заявки</h2>
            <Link href="/admin/leads" className="text-secondary font-semibold hover:underline">
              Все заявки
            </Link>
          </div>
          {recent.length ? (
            <div className="divide-y divide-border-subtle">
              {recent.map((l) => (
                <div key={l.id} className="flex items-center gap-3 py-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {l.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="font-medium text-on-surface flex-1">{l.name}</span>
                  <span className="text-on-surface-variant text-sm">
                    {l.interest ?? l.source ?? "заявка"}
                  </span>
                  <span className="text-outline text-sm whitespace-nowrap">
                    {new Date(l.createdAt).toLocaleDateString("ru-RU", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant py-8 text-center">
              Заявок пока нет.
            </p>
          )}
        </section>

        <section className="bg-white border border-border-subtle rounded-2xl p-6">
          <h2 className="text-xl font-bold text-primary mb-6">Быстрые действия</h2>
          <div className="space-y-3">
            <Link
              href="/admin/exams"
              className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle hover:border-primary hover:bg-primary/5 transition-all"
            >
              <Icon name="post_add" className="text-primary text-xl" />
              <span className="font-semibold text-on-surface">Создать тест</span>
              <Icon name="chevron_right" className="ml-auto text-outline" />
            </Link>
            <Link
              href="/admin/camps"
              className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle hover:border-primary hover:bg-primary/5 transition-all"
            >
              <Icon name="event_available" className="text-tertiary text-xl" />
              <span className="font-semibold text-on-surface">Лагеря ({campsCount})</span>
              <Icon name="chevron_right" className="ml-auto text-outline" />
            </Link>
            <Link
              href="/admin/leads"
              className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle hover:border-primary hover:bg-primary/5 transition-all"
            >
              <Icon name="group" className="text-secondary text-xl" />
              <span className="font-semibold text-on-surface">Заявки</span>
              <Icon name="chevron_right" className="ml-auto text-outline" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
