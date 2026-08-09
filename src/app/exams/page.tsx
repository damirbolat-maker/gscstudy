import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import ExamsConsult from "@/components/exams/ExamsConsult";

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

const ielts = [
  ["Секции", "Listening · Reading · Writing · Speaking"],
  ["Длительность", "около 2 ч 45 мин"],
  ["Шкала", "0–9 баллов"],
  ["Срок подготовки", "3–6 месяцев"],
  ["Действителен", "2 года"],
];
const sat = [
  ["Секции", "Reading & Writing · Math"],
  ["Длительность", "около 2 ч 14 мин"],
  ["Шкала", "400–1600 баллов"],
  ["Срок подготовки", "3–6 месяцев"],
  ["Формат", "адаптивный, на компьютере"],
];

const method = [
  { n: "01", title: "Диагностика", text: "Полный пробный тест в условиях экзамена. Видим не общий уровень, а провал по конкретным секциям.", tag: "бесплатно", accent: true },
  { n: "02", title: "План до целевого балла", text: "От разницы между текущим и нужным баллом считаем срок и нагрузку. Если срок нереалистичен, говорим об этом сразу.", tag: "на консультации" },
  { n: "03", title: "Тренировка по секциям", text: "Стратегии под каждый тип задания: тайминг в Reading, структура эссе, шаблоны ответов в Speaking.", tag: "2–3 занятия в неделю" },
  { n: "04", title: "Пробные тесты и разбор", text: "Регулярные mock-тесты с разбором каждой ошибки. На экзамен идёте, уже зная свой примерный балл.", tag: "раз в 2–3 недели" },
];

const tests = [
  { title: "General English 13+", text: "Определяет уровень английского по шкале A1–C2 — с него начинается любая подготовка.", result: "A1–C2" },
  { title: "IELTS Placement", text: "Показывает примерный балл IELTS и сколько нужно готовиться до целевого результата.", result: "Прогноз" },
  { title: "SAT Placement", text: "Оценивает готовность к Digital SAT по секциям Verbal и Math и показывает, где остались пробелы.", result: "Готовность" },
];

const targets = [
  { score: "5.5", title: "Foundation-программы", text: "Подготовительный год при университете, ОАЭ и часть вузов Британии", note: "старт с уровня B1" },
  { score: "6.0", title: "Бакалавриат, средний порог", text: "Канада, ОАЭ, многие программы Германии на английском", note: "старт с уровня B1–B2" },
  { score: "6.5", title: "Бакалавриат, вузы первого выбора", text: "Британия, конкурсные программы Канады", note: "старт с уровня B2" },
  { score: "7.0", title: "Топ-университеты и магистратура", text: "Ведущие вузы Британии, гуманитарные и юридические программы", note: "старт с уровня B2–C1" },
];

const faqs = [
  { q: "Сколько времени нужно на подготовку к IELTS?", a: "В среднем 3–6 месяцев. С B1 до 6.5 обычно уходит около полугода, с B2 до 7.0 — три-четыре месяца. Точный срок называем после диагностики: важна не только текущая оценка, но и то, какая секция проседает." },
  { q: "Что если мой уровень ниже B1?", a: "Тогда сначала общий курс. Готовить к IELTS человека с A2 бессмысленно: экзамен проверяет владение языком, а не знание формата, и никакая стратегия не заменит недостающий словарный запас." },
  { q: "Чем Digital SAT отличается от бумажного?", a: "Он короче, сдаётся на компьютере и адаптивный: сложность второго модуля зависит от того, как вы ответили в первом. Секции две — Reading & Writing и Math. Бумажный формат больше не проводится." },
  { q: "Сколько пробных тестов будет?", a: "Первый — на диагностике, дальше раз в две-три недели, ближе к экзамену чаще. Каждый разбираем по ошибкам: важно не количество тестов, а то, что вы перестаёте повторять один и тот же промах." },
  { q: "Вы регистрируете на экзамен?", a: "Подскажем даты, площадки и порядок регистрации и поможем выбрать дату так, чтобы результат пришёл до дедлайна подачи документов. Саму регистрацию сдающий проходит от своего имени." },
];

export default function ExamsPage() {
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
                  Главная
                </Link>
                <Icon name="chevron_right" className="text-[16px]" />
                <span className="text-primary font-semibold">
                  Подготовка к экзаменам
                </span>
              </div>
              <h1 className="text-display-lg-mobile md:text-[56px] font-extrabold tracking-tight text-on-surface mb-6 leading-[1.1]">
                IELTS и Digital SAT <br />
                <span className="text-primary">на нужный балл</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                Готовим не «к английскому вообще», а к конкретному баллу для
                конкретного университета. Начинаем с диагностики, дальше идём по
                плану и проверяем себя пробными тестами.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
                <a
                  className="inline-flex items-center justify-center bg-secondary text-white font-semibold rounded-lg px-6 py-3 transition-all hover:bg-[#8f0048] w-full sm:w-auto"
                  href="#consult"
                >
                  Записаться на диагностику
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold bg-surface-container-high text-on-surface hover:bg-surface-variant transition-all w-full sm:w-auto group"
                  href="#how"
                >
                  Как мы готовим
                  <Icon
                    name="arrow_forward"
                    className="ml-2 text-xl transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                ["7.0+", "средний балл IELTS у студентов"],
                ["3–6", "месяцев подготовки в среднем"],
                ["B1+", "уровень входа на курс"],
                ["0 ₸", "диагностический тест"],
              ].map(([v, l]) => (
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
                Экзамены
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight">
                Два экзамена, две разные логики
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                IELTS проверяет владение языком, Digital SAT — академические
                навыки на английском. Программы и стратегии у них не
                пересекаются.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
              {/* IELTS */}
              <div className={`${card} flex flex-col h-full border-t-[6px] border-t-primary`}>
                <div className="mb-8 flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-on-surface leading-tight">
                    IELTS Academic и General Training
                  </h3>
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    <Icon name="language" className="text-[28px]" />
                  </span>
                </div>
                <p className="text-on-surface-variant mb-10 flex-grow leading-relaxed">
                  Нужен для поступления в вузы Великобритании, Канады, ОАЭ и для
                  визовых целей. Academic — для учёбы, General Training — для
                  миграции и работы.
                </p>
                <div className="space-y-4 mb-10 bg-surface rounded-xl p-6 border border-surface-variant/50">
                  {ielts.map(([k, v], i) => (
                    <div
                      key={k}
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${
                        i < ielts.length - 1
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
                  Начать подготовку
                </a>
              </div>
              {/* SAT */}
              <div className={`${card} flex flex-col h-full border-t-[6px] border-t-secondary`}>
                <div className="mb-8 flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-on-surface leading-tight">
                    Digital SAT для поступления в США
                  </h3>
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-secondary/10 text-secondary flex-shrink-0">
                    <Icon name="school" className="text-[28px]" />
                  </span>
                </div>
                <p className="text-on-surface-variant mb-10 flex-grow leading-relaxed">
                  Сдаётся на компьютере и адаптируется: сложность второго модуля
                  зависит от того, как вы прошли первый. Нужен для американских
                  университетов и части стипендий.
                </p>
                <div className="space-y-4 mb-10 bg-surface rounded-xl p-6 border border-surface-variant/50">
                  {sat.map(([k, v], i) => (
                    <div
                      key={k}
                      className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${
                        i < sat.length - 1
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
                  Начать подготовку
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
                Метод
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight">
                Как строится подготовка
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Одинаково для обоих экзаменов: сначала измеряем, потом планируем,
                дальше тренируем слабое место.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
              <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-surface-variant/60 -z-10" />
              {method.map((m) => (
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
                    {m.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6 flex-grow text-center md:text-left">
                    {m.text}
                  </p>
                  <div className="text-center md:text-left">
                    <span className="inline-block px-3 py-1.5 bg-surface-container-high text-xs font-bold text-on-surface rounded-md">
                      {m.tag}
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
                Бесплатно
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-6 tracking-tight">
                Проверьте себя перед стартом
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Онлайн-тест с таймером и мгновенным результатом. Нужны только имя
                и телефон, чтобы прислать разбор.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {tests.map((t) => (
                <div
                  key={t.title}
                  className={`${card} flex flex-col !p-6 sm:!p-8 hover:-translate-y-1 transition-transform duration-300`}
                >
                  <h3 className="text-xl font-bold text-on-surface mb-4">
                    {t.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-8 flex-grow leading-relaxed">
                    {t.text}
                  </p>
                  <div className="flex gap-6 mb-8 pt-6 border-t border-surface-variant/60">
                    <div>
                      <div className="text-[20px] font-extrabold text-on-surface mb-1">
                        15 мин
                      </div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                        время
                      </div>
                    </div>
                    <div>
                      <div className="text-[20px] font-extrabold text-on-surface mb-1">
                        {t.result}
                      </div>
                      <div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                        результат
                      </div>
                    </div>
                  </div>
                  <a href="#consult" className={`${btnOutline} w-full py-3`}>
                    Пройти тест
                  </a>
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
                  Ориентиры
                </span>
                <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface mb-4 tracking-tight">
                  Какой балл нужен вам
                </h2>
                <p className="text-lg text-on-surface-variant">
                  Типичные требования вузов. Точные — у конкретной программы,
                  проверим на консультации.
                </p>
              </div>
              <Link
                className="inline-flex items-center text-primary font-bold hover:opacity-80 transition-opacity group pb-2 border-b-2 border-primary/20 hover:border-primary"
                href="/abroad"
              >
                Требования по странам
                <Icon
                  name="arrow_forward"
                  className="ml-2 transition-transform group-hover:translate-x-1 text-xl"
                />
              </Link>
            </div>
            <div className="space-y-4">
              {targets.map((t) => (
                <div
                  key={t.score}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 sm:p-8 bg-surface rounded-xl border border-surface-variant/60 hover:border-primary/30 transition-colors"
                >
                  <div className="text-[40px] font-extrabold text-primary w-24 flex-shrink-0 leading-none">
                    {t.score}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-bold text-on-surface mb-2">
                      {t.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm">{t.text}</p>
                  </div>
                  <div className="md:text-right text-sm font-bold text-on-surface-variant/80 md:w-48 flex-shrink-0 bg-surface-container p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
                    {t.note}
                  </div>
                </div>
              ))}
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 p-6 sm:p-8 bg-secondary/5 rounded-xl border border-secondary/20">
                <div className="text-[40px] font-extrabold text-secondary w-32 flex-shrink-0 leading-none">
                  1300+
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-on-surface mb-2">
                    Digital SAT для сильных вузов США
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    Из 1600. Для стипендиальных программ обычно требуется выше
                  </p>
                </div>
                <div className="md:text-right text-sm font-bold text-on-surface-variant/80 md:w-48 flex-shrink-0 bg-white/50 p-3 rounded-lg md:bg-transparent md:p-0 md:rounded-none">
                  Verbal + Math
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
                Вопросы
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-on-surface tracking-tight">
                О подготовке к экзаменам
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item, i) => (
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
