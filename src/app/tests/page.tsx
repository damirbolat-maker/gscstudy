import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Онлайн-тесты уровня — English, IELTS, SAT | GSC Study",
  description:
    "Бесплатные онлайн-тесты: уровень английского (взрослые и дети), примерный балл IELTS и готовность к Digital SAT. Результат сразу.",
};

export default async function TestsHubPage() {
  const tests = await prisma.test.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
    include: { _count: { select: { questions: true } } },
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-surface-container-lowest bg-dots">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="tag-pill">Бесплатно</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              Онлайн-тесты уровня
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Пройдите тест за 10–15 минут и сразу узнайте результат. Мы пришлём
              разбор и подберём программу.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {tests.map((t) => (
                <Link
                  key={t.id}
                  href={`/test/${t.slug}`}
                  className="card-premium bg-white p-8 flex flex-col group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon name={t.audience === "kids" ? "group" : "quiz"} className="text-2xl" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      {t.audience === "kids" ? "Для детей" : "Для взрослых и подростков"}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{t.title}</h3>
                  <p className="text-on-surface-variant flex-1">{t.description}</p>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-border-subtle">
                    <span className="text-sm text-on-surface-variant">
                      {t._count.questions} вопросов ·{" "}
                      {t.timeLimit ? `${t.timeLimit} мин` : "без лимита"}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-secondary group-hover:gap-2 transition-all">
                      Пройти <Icon name="arrow_forward" className="text-sm" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
