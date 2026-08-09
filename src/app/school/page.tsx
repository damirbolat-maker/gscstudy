import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SchoolPrograms from "@/components/school/SchoolPrograms";
import ConsultSection from "@/components/ConsultSection";

export const metadata: Metadata = {
  title: "Языковая школа — курсы английского A1–C2 в Алматы и Астане | GSC Study",
  description:
    "Курсы английского языка от A1 до C2: общий, академический, деловой и детский. Группы до восьми человек, индивидуальные занятия и онлайн. Тест уровня и пробный урок бесплатно.",
};

const levels = [
  { code: "A1", name: "Beginner", desc: "Рассказать о себе, семье и работе простыми фразами", note: "с нуля · 4–5 месяцев" },
  { code: "A2", name: "Elementary", desc: "Бытовые ситуации: магазин, аэропорт, отель, знакомство", note: "4–5 месяцев" },
  { code: "B1", name: "Intermediate", desc: "Поддержать разговор на знакомую тему, объяснить своё мнение", note: "5–6 месяцев · порог для IELTS" },
  { code: "B2", name: "Upper-Intermediate", desc: "Свободное общение, рабочая переписка, фильмы без субтитров", note: "5–6 месяцев · IELTS 6.0–6.5" },
  { code: "C1", name: "Advanced", desc: "Учёба в зарубежном вузе, переговоры, сложные тексты", note: "6 месяцев · IELTS 7.0+" },
  { code: "C2", name: "Proficiency", desc: "Уровень, близкий к носителю, включая нюансы и юмор", note: "6 месяцев" },
];

const formats = [
  { num: "01", title: "Группа до восьми человек", text: "Основной формат. Малый размер группы означает, что говорит каждый, а не только двое самых смелых. Группы стартуют ежемесячно." },
  { num: "02", title: "Индивидуально", text: "Когда нужен свой темп, нестандартная цель или жёсткий дедлайн. Программа собирается под вас, расписание — тоже." },
  { num: "03", title: "Онлайн", text: "Те же преподаватели и программа для тех, кто не в Алматы и Астане или не хочет тратить время на дорогу." },
];

const lesson = [
  { time: "10 минут", title: "Разогрев", text: "Короткий разговор на свободную тему, чтобы переключиться на английский и снять зажатость." },
  { time: "15 минут", title: "Разбор домашнего", text: "Не сдача на оценку, а работа с ошибками: почему именно так и где это встретится снова." },
  { time: "25 минут", title: "Новая тема", text: "Грамматика или лексика вводится через ситуацию, а не через правило на доске." },
  { time: "30 минут", title: "Практика в парах", text: "Диалоги, ролевые ситуации, обсуждение. Главная часть занятия — здесь говорит каждый." },
  { time: "10 минут", title: "Итог и задание", text: "Закрепляем, что выучили, и разбираем домашнее задание, чтобы дома не буксовать." },
];

const faqs = [
  { q: "Как определяют мой уровень?", a: "Бесплатным онлайн-тестом на 15 минут: он показывает балл и уровень по шкале A1–C2. Результат обсуждаем на консультации и при необходимости уточняем короткой устной частью, потому что говорение тест не измеряет." },
  { q: "Сколько длится один уровень?", a: "В среднем 4–6 месяцев при двух-трёх занятиях в неделю. На интенсиве тот же объём проходят за 1–2 месяца, но нагрузка заметно выше и нужен свободный график." },
  { q: "Можно присоединиться к уже идущей группе?", a: "Да, если группа ушла недалеко и ваш уровень совпадает. Если разрыв большой, предложим следующий старт или несколько индивидуальных занятий, чтобы догнать." },
  { q: "Что если я пропущу занятие?", a: "Материал занятия и домашнее задание останутся у вас, а преподаватель разберёт сложные места на следующей встрече. При длительном отсутствии можно взять индивидуальную отработку." },
  { q: "Сколько стоит обучение?", a: "Зависит от курса, формата и интенсивности, поэтому цену называем после консультации — когда понятны ваш уровень и цель. Оставьте заявку, и менеджер пришлёт расчёт по выбранной программе." },
];

const courseOptions = [
  "General English",
  "Academic English",
  "Business English",
  "English for Kids",
  "English for Teens",
  "Speaking Club",
  "Китайский язык",
  "Интенсив",
  "Ещё не решил(а)",
];

export default function SchoolPage() {
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
                  Главная
                </Link>
                <span>·</span>
                <span className="text-primary">Языковая школа</span>
              </nav>
              <h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">
                Английский <br />
                <em className="text-secondary not-italic">от нуля до свободного</em>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                Восемь программ для всех уровней и возрастов. Группу подбираем по
                результату теста, чтобы вы не переучивали пройденное и не тонули в
                чужом темпе.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#consult"
                  className="inline-flex justify-center items-center px-8 py-4 font-button text-button rounded-xl text-white bg-secondary hover:bg-[#8f0048] transition-all hover:-translate-y-1 shadow-cta hover:shadow-cta-hover"
                >
                  Подобрать курс за 1 минуту
                </a>
                <a
                  href="#levels"
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary font-button text-button rounded-xl text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                >
                  Уровни A1–C2
                  <span className="material-symbols-outlined ml-2">
                    arrow_downward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 border-t border-border-subtle pt-10">
                {[
                  ["A1–C2", "все уровни по шкале Cambridge"],
                  ["8", "максимум человек в группе"],
                  ["3", "формата: группа, индивидуально, онлайн"],
                  ["0 ₸", "тест уровня и пробный урок"],
                ].map(([v, l]) => (
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
                    Уровни
                  </span>
                  <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                    Шесть ступеней до свободного английского
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Каждая ступень — это отдельный курс со своим финальным
                    результатом. Стартовую определяем тестом, а не на глаз.
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
                Форматы
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Как проходят занятия
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
                Где заниматься
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                В центре или онлайн
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Программа и преподаватели одинаковые. Разница — в том, что вам
                удобнее и что лучше держит дисциплину.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  Офлайн
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Занятия в учебном центре
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  Живое общение в группе, куда сложнее не прийти. Подходит тем,
                  кому нужна внешняя дисциплина и общение с реальными людьми, а не
                  с окошками на экране.
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                  {[
                    ["Города", "Алматы, Астана"],
                    ["Группа", "до 8 человек"],
                    ["Занятие", "90 минут"],
                    ["В неделю", "2–3 занятия"],
                  ].map(([k, v]) => (
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
                  Адреса центров
                </Link>
              </div>
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  Онлайн
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Занятия из любого города
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  Те же преподаватели и та же программа. Подходит, если вы не в
                  Алматы и Астане, много ездите или не хотите тратить час на
                  дорогу ради полутора часов урока.
                </p>
                <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                  {[
                    ["Где угодно", "весь Казахстан"],
                    ["Группа", "до 8 человек"],
                    ["Материалы", "остаются у вас"],
                    ["Пропуск", "разбор потом"],
                  ].map(([k, v]) => (
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
                  Подобрать формат
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
                Занятие
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                Как проходит урок
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Полтора часа, из которых студент говорит большую часть времени.
                Лекций и монолога преподавателя у доски нет.
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
                  Пробный урок
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Что происходит на первом занятии
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  Вы попадаете на настоящее занятие своей группы, а не на
                  показательную встречу для новичков. Решение принимаете после
                  него.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    ["Формат", "реальное занятие группы"],
                    ["Длительность", "полтора часа"],
                    ["Стоимость", "бесплатно"],
                    ["Обязательства", "никаких"],
                  ].map(([k, v]) => (
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
                  Записаться
                </a>
              </div>
              <div className="spot bg-white rounded-xl p-8 lg:p-10 border border-border-subtle flex flex-col">
                <span className="inline-block w-fit px-3 py-1 rounded-md bg-secondary/10 text-secondary font-label-caps text-[11px] uppercase mb-6">
                  Кому подходит
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  С чем к нам приходят
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
                  Цель определяет программу: одному нужен разговорный английский к
                  отпуску, другому — 7.0 для британского вуза.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    ["Свободно говорить", "General English"],
                    ["Учиться за рубежом", "Academic English"],
                    ["Работа и карьера", "Business English"],
                    ["Ребёнку 7–12 лет", "English for Kids"],
                    ["Сдать экзамен", "IELTS и SAT"],
                  ].map(([k, v]) => (
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
                  Подготовка к экзаменам
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
                  Результат
                </span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4">
                  Сертификат по окончании каждого уровня
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  В конце курса — итоговый тест. Сдали — получаете сертификат с
                  уровнем по шкале CEFR: общеевропейскому стандарту, который
                  понимают работодатели и приёмные комиссии.
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
                Вопросы
              </span>
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6">
                О языковых курсах
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
                    <span className="transition group-open:rotate-180 material-symbols-outlined text-secondary">
                      expand_more
                    </span>
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
          eyebrow="Первый шаг"
          courses={courseOptions}
          source="school-consult"
        />
      </main>
      <Footer />
    </>
  );
}
