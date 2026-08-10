import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbroadConsult from "@/components/abroad/AbroadConsult";
import Icon from "@/components/Icon";
import { getServerLocale } from "@/lib/locale";
import { getAbroadDict } from "@/i18n/pages/abroad";
import { getPageContent } from "@/lib/page-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const ov = await getPageContent("abroad", locale);
  return {
    title:
      ov.metaTitle ??
      "Образование за рубежом — поступление в вузы 25+ стран | GSC Study",
    description:
      ov.metaDescription ??
      "Поступление в университеты Великобритании, Германии, Канады, ОАЭ и США. Подбор программы, документы, мотивационное письмо и сопровождение до зачисления. Foundation, Bachelor, Pre-Master.",
  };
}

const countriesMeta = [
  { code: "UK", color: "#00247d" },
  { code: "DE", color: "#FFCE00", text: "#000000", accentRow: 2 },
  { code: "CA", color: "#FF0000", primaryRow: 2 },
  { code: "AE", color: "#00732f" },
  { code: "US", color: "#3C3B6E" },
] as {
  code: string;
  color: string;
  text?: string;
  accentRow?: number;
  primaryRow?: number;
}[];

const whoNums = ["01", "02", "03", "04"];

const whatWeDoNums = [1, 2, 3, 4, 5, 6];

const budgetAccent = [true, false, false, false, false];

const timelineMeta = [
  { edge: true },
  {},
  {},
  {},
  {},
  { last: true },
] as { edge?: boolean; last?: boolean }[];

export default async function AbroadPage() {
  const locale = await getServerLocale();
  const t = getAbroadDict(locale);
  const ov = await getPageContent("abroad", locale);

  return (
    <>
      <Header />
      <main className="pt-20 relative z-10 bg-background">
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-16 pb-24 overflow-hidden bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-background z-0" />
          <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-64 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
          <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant mb-6 uppercase tracking-wider">
                <Link className="hover:text-primary transition-colors" href="/">
                  {t.hero.breadcrumbHome}
                </Link>
                <Icon name="chevron_right" className="text-sm" />
                <span className="text-primary">
                  {ov.heroEyebrow ?? t.hero.breadcrumbCurrent}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
                {ov.heroTitle ? (
                  ov.heroTitle
                ) : (
                  <>
                    {t.hero.title1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {t.hero.title2}
                    </span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                {ov.heroSubtitle ?? t.hero.text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#consult"
                  className="bg-secondary text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 flex items-center justify-center gap-2"
                >
                  {t.hero.ctaPrimary}
                  <Icon name="arrow_forward" className="text-sm" />
                </a>
                <a
                  href="#countries"
                  className="bg-white text-on-surface border border-border-subtle px-8 py-4 rounded-lg text-base font-bold hover:bg-surface-container-low hover:border-outline-variant transition-all flex items-center justify-center gap-2"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border-subtle">
                {t.hero.stats.map(([v, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-extrabold text-primary mb-1">
                      {v}
                    </div>
                    <div className="text-xs font-semibold text-on-surface-variant uppercase tracking-wide">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="glass-card rounded-lg p-8 shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name="school" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-on-surface">
                      {t.hero.card.title}
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      {t.hero.card.subtitle}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold z-10 shadow-md">
                        1
                      </div>
                      <div className="w-0.5 h-12 bg-primary/20" />
                    </div>
                    <div className="pt-1">
                      <div className="text-sm font-bold text-on-surface">
                        {t.hero.card.steps[0][0]}
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        {t.hero.card.steps[0][1]}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center text-sm font-bold z-10">
                        2
                      </div>
                      <div className="w-0.5 h-12 bg-border-subtle" />
                    </div>
                    <div className="pt-1">
                      <div className="text-sm font-bold text-on-surface">
                        {t.hero.card.steps[1][0]}
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        {t.hero.card.steps[1][1]}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center text-sm font-bold z-10">
                        3
                      </div>
                    </div>
                    <div className="pt-1">
                      <div className="text-sm font-bold text-on-surface">
                        {t.hero.card.steps[2][0]}
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        {t.hero.card.steps[2][1]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Countries */}
        <section id="countries" className="py-24 bg-surface-container-lowest scroll-mt-20">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {t.countries.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                {t.countries.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {t.countries.text}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countriesMeta.map((c, ci) => (
                <a key={c.code} href="#consult" className="group block card-21st p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold border"
                      style={{
                        backgroundColor: `${c.color}1a`,
                        color: c.text ?? c.color,
                        borderColor: `${c.color}33`,
                      }}
                    >
                      {c.code}
                    </div>
                    <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {t.countries.items[ci].name}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {t.countries.items[ci].rows.map(([k, v], idx) => (
                      <div
                        key={k}
                        className={`flex justify-between items-center py-2 ${
                          idx < t.countries.items[ci].rows.length - 1
                            ? "border-b border-border-subtle"
                            : ""
                        }`}
                      >
                        <span className="text-sm text-on-surface-variant">{k}</span>
                        <span
                          className={`text-sm font-semibold text-right ${
                            c.accentRow === idx
                              ? "text-secondary"
                              : c.primaryRow === idx
                                ? "text-primary"
                                : "text-on-surface"
                          }`}
                        >
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Who */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-4">
                  {t.who.eyebrow}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                  {t.who.title}
                </h2>
                <p className="text-lg text-on-surface-variant mb-8">
                  {t.who.text}
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                  href="#consult"
                >
                  {t.who.cta}
                  <Icon name="arrow_forward" />
                </a>
              </div>
              <div className="lg:col-span-7 space-y-6">
                {t.who.items.map((w, wi) => (
                  <div
                    key={whoNums[wi]}
                    className="flex gap-6 p-6 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-border-subtle shadow-sm"
                  >
                    <div className="text-4xl font-black text-primary/20">
                      {whoNums[wi]}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-on-surface mb-2">
                        {w.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        {w.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Levels */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {t.levels.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                {t.levels.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {t.levels.text}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-21st p-8 flex flex-col h-full hover-lift">
                <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4">
                    {t.levels.foundation.badge}
                  </span>
                  <h4 className="text-2xl font-bold text-on-surface">Foundation</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">
                  {t.levels.foundation.text}
                </p>
              </div>
              <div className="bg-primary p-8 rounded-xl shadow-xl flex flex-col h-full transform md:-translate-y-4 hover-lift">
                <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                    {t.levels.bachelor.badge}
                  </span>
                  <h4 className="text-2xl font-bold text-white">Bachelor</h4>
                </div>
                <p className="text-sm text-white/80 leading-relaxed flex-grow">
                  {t.levels.bachelor.text}
                </p>
              </div>
              <div className="card-21st p-8 flex flex-col h-full hover-lift">
                <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    {t.levels.premaster.badge}
                  </span>
                  <h4 className="text-2xl font-bold text-on-surface">Pre-Master</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">
                  {t.levels.premaster.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="py-24 bg-white border-y border-border-subtle relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {t.whatWeDo.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                {t.whatWeDo.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {t.whatWeDo.text}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
              {t.whatWeDo.items.map((w, wi) => (
                <div key={whatWeDoNums[wi]} className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-surface border border-border-subtle group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center text-sm font-bold text-on-surface-variant transition-colors shadow-sm">
                    {whatWeDoNums[wi]}
                  </div>
                  <h4 className="text-lg font-bold text-on-surface mb-2 pt-1">
                    {w.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {t.money.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                {t.money.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {t.money.text}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-border-subtle">
                <span className="inline-block py-1 px-3 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold mb-6">
                  {t.money.budget.badge}
                </span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">
                  {t.money.budget.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-8">
                  {t.money.budget.text}
                </p>
                <div className="space-y-4">
                  {t.money.budget.rows.map(([k, v], bi) => (
                    <div
                      key={k}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-border-subtle"
                    >
                      <span className="text-sm text-on-surface-variant">{k}</span>
                      <strong
                        className={`text-sm ${budgetAccent[bi] ? "text-primary" : "text-on-surface"}`}
                      >
                        {v}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-lg p-8 md:p-12 shadow-xl text-white">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-6">
                  {t.money.grants.badge}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.money.grants.title}
                </h3>
                <p className="text-sm text-white/80 mb-8">
                  {t.money.grants.text}
                </p>
                <div className="space-y-4 mb-8">
                  {t.money.grants.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/20"
                    >
                      <span className="text-sm text-white/80">{k}</span>
                      <strong className="text-sm text-white">{v}</strong>
                    </div>
                  ))}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/20">
                    <span className="text-sm text-white/80">{t.money.grants.special[0]}</span>
                    <strong className="text-sm text-secondary bg-white px-2 py-0.5 rounded">
                      {t.money.grants.special[1]}
                    </strong>
                  </div>
                </div>
                <a
                  className="inline-flex items-center justify-center w-full py-4 rounded-lg border-2 border-white/30 font-bold hover:bg-white hover:text-primary transition-colors"
                  href="#consult"
                >
                  {t.money.grants.cta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white">
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {t.timeline.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                {t.timeline.title}
              </h2>
              <p className="text-lg text-on-surface-variant">
                {t.timeline.text}
              </p>
            </div>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 md:before:ml-[25%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
              {t.timeline.items.map((item, i) => {
                const meta = timelineMeta[i];
                return (
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-[2px] md:ml-0 ${
                      meta.edge || meta.last
                        ? "bg-primary text-white"
                        : "bg-surface-container-high text-on-surface-variant group-hover:bg-primary/20 transition-colors"
                    }`}
                  />
                  <div
                    className={`w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-lg border shadow-sm transition-all hover:shadow-md ml-4 md:ml-0 group-odd:mr-auto group-even:ml-auto ${
                      meta.last
                        ? "border-primary/20 bg-primary/5 hover:border-primary/40"
                        : "border-border-subtle bg-white hover:border-primary/30"
                    }`}
                  >
                    <div
                      className={`text-sm font-bold mb-2 uppercase tracking-wider ${
                        meta.edge || meta.last ? "text-primary" : "text-on-surface-variant"
                      } ${meta.edge ? "text-secondary" : ""}`}
                    >
                      {item.when}
                    </div>
                    <h4 className="text-lg font-bold text-on-surface mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">{item.text}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="py-24 bg-surface-container-lowest border-t border-border-subtle"
        >
          <div className="max-w-[820px] mx-auto px-6">
            <div className="mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                {t.faq.eyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">
                {t.faq.title}
              </h2>
            </div>
            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <details
                  key={i}
                  className="group border border-border-subtle rounded-lg bg-white overflow-hidden"
                >
                  <summary className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer list-none">
                    <span className="font-bold text-lg text-on-surface pr-8">
                      {item.q}
                    </span>
                    <Icon
                      name="expand_more"
                      className="text-primary transition group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-on-surface-variant leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Consult */}
        <AbroadConsult />
      </main>
      <Footer />
    </>
  );
}
