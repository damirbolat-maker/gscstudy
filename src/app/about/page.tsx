import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "О нас — GSC Study",
  description:
    "GSC Study — образование без границ с 2011 года. Более 15 000 студентов, центры в Алматы и Астане, поступление в вузы 25+ стран.",
};

const stats = [
  { icon: "calendar_month", color: "text-clever-green", value: "15+", label: "лет на рынке" },
  { icon: "school", color: "text-secondary", value: "15 000+", label: "студентов обучено" },
  { icon: "location_city", color: "text-tertiary", value: "2", label: "центра", sub: "Алматы, Астана" },
  { icon: "public", color: "text-primary", value: "25+", label: "стран поступления" },
];

const values = [
  { icon: "verified", ring: "bg-primary/10 group-hover:bg-primary", color: "text-primary", title: "Качество", text: "Держим высокие стандарты в программах и консалтинге, чтобы результат был премиального уровня." },
  { icon: "trending_up", ring: "bg-secondary/10 group-hover:bg-secondary", color: "text-secondary", title: "Ориентация на результат", text: "Наш успех измеряется поступлениями, баллами и прогрессом наших студентов — и ничем иным." },
  { icon: "visibility", ring: "bg-clever-green/10 group-hover:bg-clever-green", color: "text-clever-green", title: "Прозрачность", text: "Честная оценка, понятный маршрут и открытая коммуникация на всех этапах поступления." },
  { icon: "travel_explore", ring: "bg-tertiary-container/20 group-hover:bg-tertiary-container", color: "text-tertiary", title: "Возможности без границ", text: "Уверены: география не должна ограничивать потенциал. Соединяем местные таланты с университетами по всему миру." },
];

const partners = ["CAMBRIDGE", "IELTS", "BRITISH COUNCIL", "TOEFL"];

export default function AboutPage() {
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
                С 2011 года
              </span>
              <h1 className="text-display-lg-mobile md:text-display-lg text-primary text-balance">
                GSC Study — образование без границ с 2011 года
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg">
                Мы открываем студентам возможности по всему миру. Больше 15 лет мы
                — надёжный мост к качественному образованию, ведём
                целеустремлённых ребят в лучшие университеты мира.
              </p>
              <div className="flex gap-4">
                <a
                  href="#journey"
                  className="inline-flex items-center bg-primary text-on-primary font-button text-button px-8 py-4 rounded-xl hover:bg-primary/90 transition-all active:scale-95 shadow-md hover:shadow-lg"
                >
                  Наша миссия
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
                  <div className="text-headline-sm text-primary">15+ лет</div>
                  <div className="font-label-caps text-label-caps text-on-surface-variant">
                    безупречной работы
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
              <h2 className="text-headline-md text-primary">Наш путь</h2>
              <div className="w-16 h-1 bg-secondary rounded-full" />
            </div>
            <div className="text-body-lg text-on-surface-variant space-y-6">
              <p>
                GSC Study основан в 2011 году с простой, но важной миссией —
                сделать образование мирового уровня доступным для
                целеустремлённых студентов Казахстана. То, что начиналось как
                небольшой консультационный офис, выросло в ведущий образовательный
                центр, известный своим подходом к академической честности и
                результату студентов.
              </p>
              <p>
                Наш рост — результат доверия тысяч семей. Мы уверены: настоящий
                образовательный консалтинг — это не про «заполнить заявку», а про
                то, чтобы формировать будущее. Мы смотрим на студента целостно:
                находим сильные стороны каждого и подбираем вуз, где он раскроется
                и академически, и лично.
              </p>
              <div className="glass-card p-8 rounded-xl my-8 border-l-4 border-l-secondary text-primary text-headline-sm text-balance">
                «Образование — самое мощное оружие, которым можно изменить мир. В
                GSC мы даём это оружие в руки студентам.»
              </div>
              <p>
                Сегодня, с современными центрами в Алматы и Астане, мы продолжаем
                совершенствовать методики подготовки к экзаменам и расширять сеть
                международных партнёров, чтобы наши студенты всегда были на шаг
                впереди.
              </p>
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
              <h2 className="text-headline-md text-primary">Наши ценности</h2>
              <p className="text-body-md text-on-surface-variant max-w-2xl">
                Принципы, на которых строится наш подход к обучению и консалтингу.
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
            <h2 className="text-headline-md text-primary">Аккредитации и партнёры</h2>
            <p className="text-body-md text-on-surface-variant">
              Нам доверяют ведущие международные образовательные организации.
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
                Готовы начать свой путь?
              </h2>
              <p className="text-body-lg text-primary-fixed">
                Запишитесь на персональную консультацию — обсудим ваши цели и
                составим маршрут к поступлению.
              </p>
              <Link
                href="/#consult"
                className="inline-flex items-center bg-secondary text-on-primary font-button text-button px-8 py-4 rounded-xl hover:bg-secondary/90 transition-all active:scale-95 mt-4 shadow-lg gap-2"
              >
                Получить консультацию
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
