import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { prisma } from "@/lib/prisma";
import { getServerLocale } from "@/lib/locale";
import { getTestsDict } from "@/i18n/pages/tests";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Онлайн-тесты уровня — English, IELTS, SAT | GSC Study",
  description:
    "Бесплатные онлайн-тесты: уровень английского (взрослые и дети), примерный балл IELTS и готовность к Digital SAT. Результат сразу.",
};

export default async function TestsHubPage() {
  const locale = await getServerLocale();
  const t = getTestsDict(locale);

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
            <span className="tag-pill">{t.hub.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              {t.hub.title}
            </h1>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              {t.hub.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {tests.map((test) => (
                <Link
                  key={test.id}
                  href={`/test/${test.slug}`}
                  className="card-premium bg-white p-8 flex flex-col group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon name={test.audience === "kids" ? "group" : "quiz"} className="text-2xl" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                      {test.audience === "kids" ? t.hub.forKids : t.hub.forAdults}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{test.title}</h3>
                  <p className="text-on-surface-variant flex-1">{test.description}</p>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-border-subtle">
                    <span className="text-sm text-on-surface-variant">
                      {test._count.questions} {t.hub.questions} ·{" "}
                      {test.timeLimit ? `${test.timeLimit} ${t.hub.minutes}` : t.hub.noLimit}
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-secondary group-hover:gap-2 transition-all">
                      {t.hub.start} <Icon name="arrow_forward" className="text-sm" />
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
