import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

/**
 * Временный шаблон внутренней страницы.
 * Будет заменён на дизайн из Stitch, когда он придёт.
 * Шапка / футер / форма переиспользуются.
 */
export default function PagePlaceholder({ eyebrow, title, subtitle }: Props) {
  return (
    <>
      <Header />
      <main className="pt-20 relative z-10">
        <section className="hero-section min-h-[60vh] flex items-center pt-24 pb-24 rounded-b-[3rem] shadow-sm">
          <div className="hero-blob w-[500px] h-[500px] top-0 left-[-200px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="tag-pill">{eyebrow}</span>
                <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                  {title}
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
                <p className="text-sm font-semibold text-primary bg-primary-fixed inline-block px-4 py-2 rounded-full">
                  Страница в разработке — скоро здесь появится подробная информация.
                </p>
              </div>
              <div id="consult" className="lg:col-span-5 relative scroll-mt-28">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl transform rotate-3 scale-105 blur-lg" />
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
