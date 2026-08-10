import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchoolPrograms from "@/components/school/SchoolPrograms";
import ConsultSection from "@/components/ConsultSection";
import Icon from "@/components/Icon";
import { getServerLocale } from "@/lib/locale";
import { getSchoolDict } from "@/i18n/pages/school";

export const metadata: Metadata = {
  title: "Языковая школа — курсы английского A1–C2 в Алматы и Астане | GSC Study",
  description:
    "Курсы английского языка от A1 до C2: общий, академический, деловой и детский. Группы до восьми человек, индивидуальные занятия и онлайн. Тест уровня и пробный урок бесплатно.",
};

export default async function SchoolPage() {
  const locale = await getServerLocale();
  const t = getSchoolDict(locale);
  const levels = t.levels;
  const formats = t.formats;
  const lesson = t.lesson;
  const faqs = t.faqs;

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-[120px]">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/5 blur-3xl mix-blend-multiply" />
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 font-button text-button text-on-surface-variant mb-8">
                <Link className="hover:text-primary transition-colors" href="/">
                  {t.hero.breadcrumbHome}
                </Link>
                <span>·</span>
                <span className="text-primary">{t.hero.breadcrumbCurrent}</span>
              </nav>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                {t.hero.title1} <br />
                <em className="text-secondary not-italic">{t.hero.title2}</em>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                {t.hero.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#consult"
                  className="inline-flex justify-center items-center px-8 py-4 font-button text-button rounded-xl text-white bg-secondary hover:bg-[#8f0048] transition-all hover:-translate-y-1 shadow-cta hover:shadow-cta-hover"
                >
                  {t.hero.ctaPrimary}
                </a>
                <a
                  href="#levels"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary font-button text-button rounded-xl text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  {t.hero.ctaSecondary}
                  <Icon name="arrow_downward" className="ml-2" />
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 border-t border-border-subtle pt-10">
                {t.hero.stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display-lg text-[32px] font-extrabold text-primary mb-1 leading-tight">
                      {v}
                    </div>
                    <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Levels */}
        <section
          id="levels"
          className="py-[120px] bg-white border-t border-border-subtle scroll-mt-20"
        >
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <div className="sticky top-28">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps tracking-wider uppercase mb-4">
                    {t.levelsSection.eyebrow}
                  </span>
                  <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                    {t.levelsSection.title}
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    {t.levelsSection.text}
                  </p>
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-4">
                  {levels.map((lv) => (
                    <div
                      key={lv.code}
                      className="spot bg-surface rounded-xl p-6 border border-border-subtle flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                    >
                      <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center font-display-lg text-[24px] shrink-0">
                        {lv.code}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                          {lv.name}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                          {lv.desc}
                        </p>
                      </div>
                      <div className="text-sm font-button text-secondary whitespace-nowrap bg-secondary/10 px-3 py-1.5 rounded-full">
                        {lv.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs (client, filterable) */}
        <SchoolPrograms />

        {/* Formats */}
        <section className="py-[120px] bg-white border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps tracking-wider uppercase mb-4">
                {t.formatsSection.eyebrow}
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                {t.formatsSection.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {formats.map((f) => (
                <div
                  key={f.num}
                  className="spot bg-surface rounded-xl p-8 border border-border-subtle"
                >
                  <div className="font-display-lg text-[48px] font-black text-primary/10 mb-4 leading-none">
                    {f.num}
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-primary mb-3">
                    {f.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online vs Offline */}
        <section className="py-[120px] bg-surface-container-low border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps tracking-wider uppercase mb-4">
                {t.where.eyebrow}
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                {t.where.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {t.where.text}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  {t.where.offline.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {t.where.offline.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  {t.where.offline.text}
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                  {t.where.offline.rows.map(([k, v]) => (
                    <div key={k}>
                      <span className="block text-on-surface-variant text-sm mb-1">
                        {k}
                      </span>
                      <b className="text-primary text-sm">{v}</b>
                    </div>
                  ))}
                </div>
                <Link
                  href="/#offices"
                  className="inline-flex justify-center items-center w-full px-6 py-3 border-2 border-primary font-button text-button rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
                >
                  {t.where.offline.cta}
                </Link>
              </div>
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  {t.where.online.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {t.where.online.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  {t.where.online.text}
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                  {t.where.online.rows.map(([k, v]) => (
                    <div key={k}>
                      <span className="block text-on-surface-variant text-sm mb-1">
                        {k}
                      </span>
                      <b className="text-primary text-sm">{v}</b>
                    </div>
                  ))}
                </div>
                <a
                  href="#consult"
                  className="inline-flex justify-center items-center w-full px-6 py-3 border-2 border-primary font-button text-button rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
                >
                  {t.where.online.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson */}
        <section className="py-[120px] bg-white border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps tracking-wider uppercase mb-4">
                {t.lessonSection.eyebrow}
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                {t.lessonSection.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {t.lessonSection.text}
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {lesson.map((step, i) => (
                <div
                  key={i}
                  className="spot bg-surface rounded-xl p-6 border border-border-subtle flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="font-button text-secondary whitespace-nowrap bg-secondary/10 px-4 py-2 rounded-lg shrink-0 w-full sm:w-32 text-center">
                    {step.time}
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[20px] text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="font-body-md text-on-surface-variant">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trial & Who */}
        <section className="py-[120px] bg-surface-container-low border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  {t.trialWho.trial.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {t.trialWho.trial.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  {t.trialWho.trial.text}
                </p>
                <div className="space-y-4 mb-8">
                  {t.trialWho.trial.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between border-b border-border-subtle pb-2"
                    >
                      <span className="text-sm text-on-surface-variant">{k}</span>
                      <b className="text-sm text-primary">{v}</b>
                    </div>
                  ))}
                </div>
                <a
                  href="#consult"
                  className="inline-flex justify-center items-center w-full px-6 py-3 border-2 border-primary font-button text-button rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
                >
                  {t.trialWho.trial.cta}
                </a>
              </div>
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  {t.trialWho.who.tag}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {t.trialWho.who.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  {t.trialWho.who.text}
                </p>
                <div className="space-y-4 mb-8">
                  {t.trialWho.who.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between border-b border-border-subtle pb-2"
                    >
                      <span className="text-sm text-on-surface-variant">{k}</span>
                      <b className="text-sm text-primary">{v}</b>
                    </div>
                  ))}
                </div>
                <Link
                  href="/exams"
                  className="inline-flex justify-center items-center w-full px-6 py-3 border-2 border-primary font-button text-button rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
                >
                  {t.trialWho.who.cta}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Certificate */}
        <section className="py-[120px] bg-white border-t border-border-subtle">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 border border-primary/10 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps tracking-wider uppercase mb-4">
                  {t.certificate.eyebrow}
                </span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4">
                  {t.certificate.title}
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  {t.certificate.text}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {["A1", "A2", "B1", "B2", "C1", "C2"].map((c) => (
                  <span
                    key={c}
                    className="w-12 h-12 rounded-lg bg-white border border-border-subtle flex items-center justify-center font-button text-primary shadow-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-[120px] bg-surface-container-low border-t border-border-subtle"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps tracking-wider uppercase mb-4">
                {t.faqSection.eyebrow}
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                {t.faqSection.title}
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-border-subtle open:border-primary/30 transition-colors hover:shadow-sm"
                  open={i === 0}
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none p-6 font-headline-sm text-[18px] text-primary">
                    <span>{item.q}</span>
                    <Icon
                      name="expand_more"
                      className="transition group-open:rotate-180 text-secondary"
                    />
                  </summary>
                  <div className="font-body-md text-body-md text-on-surface-variant px-6 pb-6 pt-0 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Consult */}
        <ConsultSection
          eyebrow={t.consult.eyebrow}
          courses={t.courseOptions}
          source="school-consult"
        />
      </main>
      <Footer />
    </>
  );
}
