import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { getServerLocale } from "@/lib/locale";
import { getAboutDict } from "@/i18n/pages/about";

export const metadata: Metadata = {
  title: "О нас — GSC Study",
  description:
    "GSC Study — образование без границ с 2011 года. Более 15 000 студентов, центры в Алматы и Астане, поступление в вузы 25+ стран.",
};

const statsMeta = [
  { icon: "calendar_month", color: "text-clever-green" },
  { icon: "school", color: "text-secondary" },
  { icon: "location_city", color: "text-tertiary" },
  { icon: "public", color: "text-primary" },
];

const valuesMeta = [
  { icon: "verified", ring: "bg-primary/10 group-hover:bg-primary", color: "text-primary" },
  { icon: "trending_up", ring: "bg-secondary/10 group-hover:bg-secondary", color: "text-secondary" },
  { icon: "visibility", ring: "bg-clever-green/10 group-hover:bg-clever-green", color: "text-clever-green" },
  { icon: "travel_explore", ring: "bg-tertiary-container/20 group-hover:bg-tertiary-container", color: "text-tertiary" },
];

const partners = ["CAMBRIDGE", "IELTS", "BRITISH COUNCIL", "TOEFL"];

export default async function AboutPage() {
  const locale = await getServerLocale();
  const t = getAboutDict(locale);
  const stats = statsMeta.map((m, i) => ({ ...m, ...t.stats[i] }));
  const values = valuesMeta.map((m, i) => ({ ...m, ...t.values.items[i] }));
  return (
    <>
      <Header />
      <main className="pt-20 relative">
        <div className="blob-bg bg-primary w-96 h-96 top-20 left-10" />
        <div className="blob-bg bg-secondary w-[500px] h-[500px] top-[40%] right-0" />

        {/* Hero */}
        <section className="px-mobile-margin md:px-desktop-margin py-section-gap max-w-container-max mx-auto relative z-10 bg-dots">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex flex-col gap-stack-lg">
              <span className="font-label-caps text-label-caps uppercase tracking-widest bg-secondary-fixed/40 text-secondary inline-block w-max px-3 py-1 rounded-full">
                {t.hero.eyebrow}
              </span>
              <h1 className="text-display-lg-mobile md:text-display-lg text-primary text-balance">
                {t.hero.title}
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg">
                {t.hero.text}
              </p>
              <div className="flex gap-4">
                <a
                  href="#journey"
                  className="inline-flex items-center bg-primary text-on-primary font-button text-button px-8 py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-md hover:shadow-lg"
                >
                  {t.hero.cta}
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="glass-card rounded-xl p-2 rotate-2 hover-card-lift">
                {/* TODO: заменить на реальное фото центра/команды */}
                <div className="w-full h-[400px] rounded-lg border border-border-subtle bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center">
                  <Icon name="school" className="text-primary/40 text-[80px]" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-4 rounded-xl shadow-[0px_10px_30px_rgba(19,86,133,0.1)] border border-border-subtle flex items-center gap-4">
                <Icon name="workspace_premium" className="text-secondary text-4xl" />
                <div>
                  <div className="text-headline-sm text-primary">{t.hero.badge.value}</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    {t.hero.badge.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section
          id="journey"
          className="px-mobile-margin md:px-desktop-margin py-section-gap bg-surface-container-lowest border-y border-border-subtle relative z-10 scroll-mt-20"
        >
          <div className="max-w-container-max mx-auto readability-track">
            <div className="flex flex-col items-center text-center gap-stack-md mb-12">
              <h2 className="text-headline-md text-primary">{t.journey.title}</h2>
              <div className="w-16 h-1 bg-secondary rounded-full" />
            </div>
            <div className="text-body-lg text-on-surface-variant space-y-6">
              <p>{t.journey.p1}</p>
              <p>{t.journey.p2}</p>
              <div className="glass-card p-8 rounded-xl my-8 border-l-4 border-l-secondary text-primary text-headline-sm text-balance">
                {t.journey.quote}
              </div>
              <p>{t.journey.p3}</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-mobile-margin md:px-desktop-margin py-section-gap max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-grid-gutter">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 hover-card-lift"
              >
                <Icon name={s.icon} className={`text-4xl ${s.color}`} />
                <div className="text-display-lg text-primary">{s.value}</div>
                <div className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  {s.label}
                </div>
                {s.sub && (
                  <div className="text-xs text-on-surface-variant/70">{s.sub}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="px-mobile-margin md:px-desktop-margin py-section-gap bg-surface-container-low border-y border-border-subtle relative z-10">
          <div className="max-w-container-max mx-auto">
            <div className="flex flex-col items-center text-center gap-stack-md mb-12">
              <h2 className="text-headline-md text-primary">{t.values.title}</h2>
              <p className="text-body-md text-on-surface-variant max-w-2xl">
                {t.values.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-surface-container-lowest p-8 rounded-xl border border-border-subtle flex gap-6 hover-card-lift group"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors ${v.ring}`}
                  >
                    <Icon
                      name={v.icon}
                      className={`${v.color} group-hover:text-white transition-colors text-2xl`}
                    />
                  </div>
                  <div>
                    <h3 className="text-headline-sm text-primary mb-2">
                      {v.title}
                    </h3>
                    <p className="text-body-md text-on-surface-variant">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="px-mobile-margin md:px-desktop-margin py-section-gap max-w-container-max mx-auto relative z-10 text-center">
          <div className="flex flex-col items-center text-center gap-stack-md mb-12">
            <h2 className="text-headline-md text-primary">{t.partners.title}</h2>
            <p className="text-body-md text-on-surface-variant">
              {t.partners.text}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {partners.map((p) => (
              <div
                key={p}
                className="text-headline-sm text-primary-fixed-dim font-bold tracking-widest"
              >
                {p}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-mobile-margin md:px-desktop-margin py-section-gap mb-12 max-w-container-max mx-auto relative z-10">
          <div className="bg-primary rounded-2xl p-12 text-center relative overflow-hidden flex flex-col items-center shadow-xl">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-fixed rounded-full opacity-20 blur-3xl" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6 items-center">
              <h2 className="text-display-lg-mobile md:text-headline-md text-on-primary">
                {t.cta.title}
              </h2>
              <p className="text-body-lg text-primary-fixed">
                {t.cta.text}
              </p>
              <Link
                href="/#consult"
                className="inline-flex items-center bg-secondary text-on-primary font-button text-button px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all active:scale-95 mt-4 shadow-lg gap-2"
              >
                {t.cta.button}
                <Icon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
