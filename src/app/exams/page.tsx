import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import ExamsConsult from "@/components/exams/ExamsConsult";
import { getServerLocale } from "@/lib/locale";
import { getExamsDict } from "@/i18n/pages/exams";

export const metadata: Metadata = {
  title: "Подготовка к IELTS и Digital SAT на нужный балл | GSC Study",
  description:
    "Подготовка к IELTS (Academic и General Training) и Digital SAT: диагностика, план до целевого балла, тренировка по секциям и пробные тесты. Средний балл IELTS 7.0+.",
};

const container = "max-w-[1280px] mx-auto px-6 lg:px-8";
const card =
  "bg-surface-container-lowest border border-surface-variant/60 rounded-xl p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_8px_32px_-12px_rgba(0,0,0,0.1)]";
const btnOutline =
  "inline-flex items-center justify-center border border-outline-variant text-on-surface font-semibold rounded-lg px-6 py-3 transition-colors hover:border-primary hover:text-primary hover:bg-surface-container-lowest";

const methodMeta = [
  { n: "01", accent: true },
  { n: "02", accent: false },
  { n: "03", accent: false },
  { n: "04", accent: false },
];

const testSlugs = ["general-english", "ielts-placement", "sat-placement"];

const targetScores = ["5.5", "6.0", "6.5", "7.0"];

export default async function ExamsPage() {
  const locale = await getServerLocale();
  const t = getExamsDict(locale);
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-surface-container-lowest">
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#135685 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className={`${container} relative z-10`}>
            <div className="max-w-3xl md:mx-0">
              <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant mb-8">
                <Link className="hover:text-primary transition-colors" href="/">
                  {t.hero.breadcrumbHome}
                </Link>
                <Icon name="chevron_right" className="text-[16px]" />
                <span className="text-primary font-semibold">
                  {t.hero.breadcrumbCurrent}
                </span>
              </div>
              <h1 className="text-display-lg-mobile md:text-[56px] font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
                {t.hero.title1} <br />
                <span className="text-primary">{t.hero.title2}</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                {t.hero.text}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
                <a
                  className="inline-flex items-center justify-center bg-secondary text-white font-semibold rounded-lg px-6 py-3 transition-all hover:bg-[#8f0048] w-full sm:w-auto"
                  href="#consult"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-surface-container-high text-on-surface hover:bg-surface-variant transition-all w-full sm:w-auto group"
                  href="#how"
                >
                  {t.hero.ctaSecondary}
                  <Icon
                    name="arrow_forward"
                    className="ml-2 text-xl transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {t.hero.stats.map(([v, l]) => (
                <div
                  key={l}
                  className="bg-surface p-6 rounded-xl border border-surface-variant/50"
                >
                  <div className="text-[32px] md:text-[40px] font-extrabold text-primary mb-2 leading-none">
                    {v}
                  </div>
                  <div className="text-sm font-medium text-on-surface-variant leading-snug">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two exams */}
        <section className="py-20 md:py-32 bg-surface">
          <div className={container}>
            <div className="max-w-3xl mb-16 text-center mx-auto">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-label-caps tracking-widest uppercase mb-6">
                {t.exams.eyebrow}
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight">
                {t.exams.title}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {t.exams.text}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {/* IELTS */}
              <div className={`${card} flex flex-col h-full border-t-[6px] border-t-primary`}>
                <div className="mb-8 flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-on-surface leading-tight">
                    {t.exams.ielts.title}
                  </h3>
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Icon name="language" className="text-[28px]" />
                  </span>
                </div>
                <p className="text-on-surface-variant mb-10 flex-grow leading-relaxed">
                  {t.exams.ielts.text}
                </p>
                <div className="space-y-4 mb-10 bg-surface rounded-xl p-6 border border-surface-variant/50">
                  {t.exams.ielts.params.map(([k, v], i) => (
                    <div
                      key={k}
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${
                        i < t.exams.ielts.params.length - 1
                          ? "pb-4 border-b border-surface-variant/60"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-on-surface-variant font-medium">
                        {k}
                      </span>
                      <span className="text-sm font-bold text-on-surface sm:text-right">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
                <a href="#consult" className={`${btnOutline} w-full text-center`}>
                  {t.exams.ielts.cta}
                </a>
              </div>
              {/* SAT */}
              <div className={`${card} flex flex-col h-full border-t-[6px] border-t-secondary`}>
                <div className="mb-8 flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-on-surface leading-tight">
                    {t.exams.sat.title}
                  </h3>
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                    <Icon name="school" className="text-[28px]" />
                  </span>
                </div>
                <p className="text-on-surface-variant mb-10 flex-grow leading-relaxed">
                  {t.exams.sat.text}
                </p>
                <div className="space-y-4 mb-10 bg-surface rounded-xl p-6 border border-surface-variant/50">
                  {t.exams.sat.params.map(([k, v], i) => (
                    <div
                      key={k}
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${
                        i < t.exams.sat.params.length - 1
                          ? "pb-4 border-b border-surface-variant/60"
                          : ""
                      }`}
                    >
                      <span className="text-sm text-on-surface-variant font-medium">
                        {k}
                      </span>
                      <span className="text-sm font-bold text-on-surface sm:text-right">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
                <a href="#consult" className={`${btnOutline} w-full text-center`}>
                  {t.exams.sat.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Method */}
        <section id="how" className="py-20 md:py-32 bg-surface-container-lowest scroll-mt-20">
          <div className={container}>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-label-caps tracking-widest uppercase mb-6">
                {t.method.eyebrow}
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight">
                {t.method.title}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {t.method.text}
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-surface-variant/60 -z-10" />
              {methodMeta.map((m, i) => (
                <div
                  key={m.n}
                  className="relative bg-surface p-6 rounded-xl border border-surface-variant/50 shadow-sm md:bg-transparent md:p-0 md:border-none md:shadow-none h-full flex flex-col"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center font-extrabold text-2xl mb-6 shadow-sm border mx-auto md:mx-0 ${
                      m.accent
                        ? "bg-primary/10 text-primary border-primary/10"
                        : "bg-surface-container-highest text-on-surface border-surface-variant"
                    }`}
                  >
                    {m.n}
                  </div>
                  <h3 className="text-xl font-bold text-on-surface mb-3 text-center md:text-left">
                    {t.method.items[i].title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 flex-grow text-center md:text-left">
                    {t.method.items[i].text}
                  </p>
                  <div className="text-center md:text-left">
                    <span className="inline-block px-3 py-1.5 bg-surface-container-high text-xs font-bold text-on-surface rounded-md">
                      {t.method.items[i].tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free tests */}
        <section id="tests" className="py-20 md:py-32 bg-surface">
          <div className={container}>
            <div className="max-w-3xl mb-16 mx-auto text-center">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-label-caps tracking-widest uppercase mb-6">
                {t.placement.eyebrow}
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight">
                {t.placement.title}
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {t.placement.text}
              </p>
              <Link
                href="/tests"
                className="inline-flex items-center gap-1 mt-4 font-bold text-primary hover:text-secondary transition-colors"
              >
                {t.placement.allTestsLink}
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {t.placement.items.map((item, i) => (
                <div
                  key={item.title}
                  className={`${card} flex flex-col !p-6 sm:!p-8 hover:-translate-y-1 transition-transform duration-300`}
                >
                  <h3 className="text-xl font-bold text-on-surface mb-4">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
                    {item.text}
                  </p>
                  <div className="flex gap-6 mb-8 pt-6 border-t border-surface-variant/60">
                    <div>
                      <div className="text-[20px] font-extrabold text-on-surface mb-1">
                        {t.placement.timeValue}
                      </div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                        {t.placement.timeLabel}
                      </div>
                    </div>
                    <div>
                      <div className="text-[20px] font-extrabold text-on-surface mb-1">
                        {item.result}
                      </div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                        {t.placement.resultLabel}
                      </div>
                    </div>
                  </div>
                  <Link href={`/test/${testSlugs[i]}`} className={`${btnOutline} w-full py-3`}>
                    {t.placement.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Targets */}
        <section className="py-20 md:py-32 bg-surface-container-lowest">
          <div className={container}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-label-caps tracking-widest uppercase mb-6">
                  {t.targets.eyebrow}
                </span>
                <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-4 tracking-tight">
                  {t.targets.title}
                </h2>
                <p className="text-lg text-on-surface-variant">
                  {t.targets.text}
                </p>
              </div>
              <Link
                className="inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity group pb-2 border-b-2 border-primary/20 hover:border-primary"
                href="/abroad"
              >
                {t.targets.countriesLink}
                <Icon
                  name="arrow_forward"
                  className="ml-2 transition-transform group-hover:translate-x-1 text-xl"
                />
              </Link>
            </div>
            <div className="space-y-4">
              {t.targets.items.map((item, i) => (
                <div
                  key={targetScores[i]}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 sm:p-8 bg-surface rounded-xl border border-surface-variant/60 hover:border-primary/30 transition-colors"
                >
                  <div className="text-[40px] font-extrabold text-primary w-24 flex-shrink-0 leading-none">
                    {targetScores[i]}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-on-surface mb-2">
                      {item.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm">{item.text}</p>
                  </div>
                  <div className="md:text-right text-sm font-bold text-on-surface-variant/80 md:w-48 flex-shrink-0 bg-surface-container p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
                    {item.note}
                  </div>
                </div>
              ))}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 sm:p-8 bg-secondary/5 rounded-xl border border-secondary/20">
                <div className="text-[40px] font-extrabold text-secondary w-32 flex-shrink-0 leading-none">
                  1300+
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-on-surface mb-2">
                    {t.targets.satSpecial.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    {t.targets.satSpecial.text}
                  </p>
                </div>
                <div className="md:text-right text-sm font-bold text-on-surface-variant/80 md:w-48 flex-shrink-0 bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
                  {t.targets.satSpecial.note}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 md:py-32 bg-surface">
          <div className={`${container} max-w-3xl`}>
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-label-caps tracking-widest uppercase mb-6">
                {t.faq.eyebrow}
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface tracking-tight">
                {t.faq.title}
              </h2>
            </div>
            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <details
                  key={i}
                  className="group bg-surface-container-lowest border border-surface-variant/60 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <summary className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer list-none">
                    <span className="font-bold text-on-surface text-lg">
                      {item.q}
                    </span>
                    <Icon
                      name="expand_more"
                      className="text-primary transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-on-surface-variant text-base leading-relaxed border-t border-surface-variant/30 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Consult */}
        <ExamsConsult />
      </main>
      <Footer />
    </>
  );
}
