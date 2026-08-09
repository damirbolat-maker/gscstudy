import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AbroadConsult from "@/components/abroad/AbroadConsult";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Образование за рубежом — поступление в вузы 25+ стран | GSC Study",
  description:
    "Поступление в университеты Великобритании, Германии, Канады, ОАЭ и США. Подбор программы, документы, мотивационное письмо и сопровождение до зачисления. Foundation, Bachelor, Pre-Master.",
};

const countries = [
  {
    code: "UK",
    name: "Британия",
    color: "#00247d",
    rows: [
      ["Уровни", "Foundation, Bachelor"],
      ["Язык", "IELTS 6.0–7.0"],
      ["Подача", "UCAS"],
      ["Дедлайн", "январь"],
    ] as [string, string][],
  },
  {
    code: "DE",
    name: "Германия",
    color: "#FFCE00",
    text: "#000000",
    rows: [
      ["Уровни", "Foundation, Bachelor"],
      ["Язык", "IELTS / немецкий B2"],
      ["Госвузы", "без платы за обучение"],
      ["Дедлайн", "июль и январь"],
    ] as [string, string][],
    accentRow: 2,
  },
  {
    code: "CA",
    name: "Канада",
    color: "#FF0000",
    rows: [
      ["Уровни", "Foundation, Bachelor"],
      ["Язык", "IELTS 6.0–6.5"],
      ["После учёбы", "work permit"],
      ["Дедлайн", "январь–март"],
    ] as [string, string][],
    primaryRow: 2,
  },
  {
    code: "AE",
    name: "ОАЭ",
    color: "#00732f",
    rows: [
      ["Уровни", "Foundation, Bachelor"],
      ["Язык", "IELTS 5.5–6.5"],
      ["Кампусы", "филиалы вузов UK и US"],
      ["Дедлайн", "несколько наборов в год"],
    ] as [string, string][],
  },
  {
    code: "US",
    name: "США",
    color: "#3C3B6E",
    rows: [
      ["Уровни", "Bachelor, Pre-Master"],
      ["Экзамены", "Digital SAT + IELTS"],
      ["Подача", "Common App"],
      ["Дедлайн", "ноябрь и январь"],
    ] as [string, string][],
  },
];

const who = [
  {
    num: "01",
    title: "Выпускникам 11 класса",
    text: "До подачи остаётся один сезон. Нужно быстро определить реалистичный список вузов, добрать языковой балл и не пропустить дедлайны.",
  },
  {
    num: "02",
    title: "Ученикам 9–10 классов",
    text: "Есть два-три года в запасе — самая выигрышная позиция. Можно спокойно поднять язык, собрать портфолио и целиться в конкурсные программы.",
  },
  {
    num: "03",
    title: "Тем, кому важно финансирование",
    text: "Учёба за рубежом не обязательно означает полную оплату. Разбираем, где есть гранты и стипендии и что нужно, чтобы на них претендовать.",
  },
  {
    num: "04",
    title: "Тем, кто уже получил отказ",
    text: "Разбираем, что именно не сработало — балл, письмо или выбор программы — и готовим подачу на следующий набор.",
  },
];

const whatWeDo = [
  { n: 1, title: "Подбор университета", text: "Список из нескольких вузов: с запасом, по профилю и надёжный вариант. Смотрим на аттестат, баллы, бюджет и шансы, а не на позицию в рейтинге." },
  { n: 2, title: "Мотивационное письмо", text: "Помогаем собрать текст, который отвечает на вопрос приёмной комиссии, а не пересказывает биографию. Разбираем черновики построчно." },
  { n: 3, title: "Документы и переводы", text: "Аттестат, транскрипт, рекомендации, справки. Проверяем комплект под требования каждого вуза — они различаются сильнее, чем кажется." },
  { n: 4, title: "Подача заявок", text: "UCAS для Британии, Common App для США, порталы вузов для остальных стран. Следим за дедлайнами, чтобы заявка не ушла в последнюю ночь." },
  { n: 5, title: "Общение с вузом", text: "Отвечаем на запросы приёмной комиссии, отслеживаем статус и напоминаем о подтверждении места, когда придёт оффер." },
  { n: 6, title: "Подготовка к визе", text: "Собираем пакет документов, разбираем типичные вопросы собеседования и порядок подачи в конкретной стране." },
];

const timeline = [
  { when: "За 12 месяцев", title: "Определяем страну и уровень", text: "Разбираем аттестат, бюджет и цель. На этом этапе становится понятно, нужен ли Foundation и какой языковой балл придётся набрать.", edge: true },
  { when: "За 10 месяцев", title: "Готовимся к экзаменам", text: "IELTS, при необходимости Digital SAT. Закладываем запас на пересдачу — с первого раза нужный балл получают не все." },
  { when: "За 6 месяцев", title: "Собираем документы", text: "Транскрипт, рекомендации, мотивационное письмо. Письмо переписывается несколько раз, поэтому начинаем заранее." },
  { when: "За 4 месяца", title: "Подаём заявки", text: "UCAS, Common App или порталы вузов. Подаём в несколько университетов сразу, чтобы не зависеть от одного ответа." },
  { when: "За 2 месяца", title: "Оффер и виза", text: "Подтверждаем место, вносим депозит, собираем визовый пакет и готовимся к собеседованию." },
  { when: "Август–сентябрь", title: "Отъезд", text: "Жильё, страховка, билеты и первые недели на месте. На связи остаёмся и после зачисления.", last: true },
];

const faqs = [
  { q: "Хватит ли казахстанского аттестата?", a: "Для части стран — да, для Британии и ряда программ Канады обычно требуется Foundation, потому что там школа длится дольше. Это не отказ, а дополнительный год при университете, после которого вы переходите на первый курс." },
  { q: "Можно ли учиться бесплатно?", a: "В государственных вузах Германии нет платы за обучение — остаются только сбор за семестр и расходы на жизнь. В остальных странах бывают стипендии и гранты, но они конкурсные и требуют высоких баллов." },
  { q: "Когда начинать подготовку?", a: "За год до предполагаемого старта учёбы. Большую часть этого времени занимает язык: подтянуть уровень с B1 до нужного балла за пару месяцев не получается, а без сертификата заявку не примут." },
  { q: "В сколько вузов подавать?", a: "Обычно в четыре-пять: один-два амбициозных, два по профилю и один надёжный. UCAS ограничивает пятью программами за сезон, у остальных стран лимитов, как правило, нет." },
  { q: "Что если придёт отказ?", a: "Поэтому и подаём в несколько вузов. Если отказали везде, разбираем причину — чаще это балл или слабое мотивационное письмо — и готовим подачу на следующий набор или на Foundation." },
];

export default function AbroadPage() {
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
                  Главная
                </Link>
                <Icon name="chevron_right" className="text-sm" />
                <span className="text-primary">Образование за рубежом</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
                Поступление в вузы <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  25+ стран
                </span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                Подбираем университет под аттестат, баллы и бюджет, готовим
                документы и ведём до письма о зачислении. Не «отправим заявку», а
                доведём до результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#consult"
                  className="bg-secondary text-white px-8 py-4 rounded-lg text-base font-bold hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20 flex items-center justify-center gap-2"
                >
                  Подобрать программу
                  <Icon name="arrow_forward" className="text-sm" />
                </a>
                <a
                  href="#countries"
                  className="bg-white text-on-surface border border-border-subtle px-8 py-4 rounded-lg text-base font-bold hover:bg-surface-container-low hover:border-outline-variant transition-all flex items-center justify-center gap-2"
                >
                  Страны и требования
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border-subtle">
                {[
                  ["25+", "Стран поступления"],
                  ["3", "Уровня: Foundation, Bachelor, Pre-Master"],
                  ["12", "Месяцев — типичный цикл подачи"],
                  ["0 ₸", "Первичная консультация"],
                ].map(([v, l]) => (
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
                      Ваш путь к зачислению
                    </div>
                    <div className="text-xs text-on-surface-variant">
                      Мы берём на себя всю бюрократию
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
                        Подбор вуза и стратегии
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Оценка шансов, выбор направления
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
                        Сбор документов
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Переводы, мотивационное письмо
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
                        Зачисление и виза
                      </div>
                      <div className="text-xs text-on-surface-variant mt-1">
                        Подача заявки, получение оффера
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
                Направления
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                Пять основных стран
              </h2>
              <p className="text-lg text-on-surface-variant">
                С этими системами работаем чаще всего и знаем их дедлайны
                наизусть. Остальные страны — по запросу.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((c) => (
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
                      {c.name}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {c.rows.map(([k, v], idx) => (
                      <div
                        key={k}
                        className={`flex justify-between items-center py-2 ${
                          idx < c.rows.length - 1
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
                  Кому подходит
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                  Узнаёте себя?
                </h2>
                <p className="text-lg text-on-surface-variant mb-8">
                  Мы работаем не только с выпускниками. Чем раньше начать, тем
                  больше вариантов остаётся открытыми.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors"
                  href="#consult"
                >
                  Получить план действий
                  <Icon name="arrow_forward" />
                </a>
              </div>
              <div className="lg:col-span-7 space-y-6">
                {who.map((w) => (
                  <div
                    key={w.num}
                    className="flex gap-6 p-6 rounded-lg bg-surface hover:bg-surface-container-low transition-colors border border-transparent hover:border-border-subtle shadow-sm"
                  >
                    <div className="text-4xl font-black text-primary/20">
                      {w.num}
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
                Уровни
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                С чего начинать именно вам
              </h2>
              <p className="text-lg text-on-surface-variant">
                Зависит от аттестата и языкового уровня. Казахстанская школа не
                всегда даёт прямой вход на бакалавриат — и это нормально.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-21st p-8 flex flex-col h-full hover-lift">
                <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4">
                    1 год · переход на Bachelor
                  </span>
                  <h4 className="text-2xl font-bold text-on-surface">Foundation</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">
                  Подготовительный год при университете для тех, чей аттестат не
                  проходит напрямую. Заканчивается переводом на первый курс того же
                  вуза.
                </p>
              </div>
              <div className="bg-primary p-8 rounded-xl shadow-xl flex flex-col h-full transform md:-translate-y-4 hover-lift">
                <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-4">
                    3–4 года
                  </span>
                  <h4 className="text-2xl font-bold text-white">Bachelor</h4>
                </div>
                <p className="text-sm text-white/80 leading-relaxed flex-grow">
                  Основная программа после школы. Нужны аттестат, языковой
                  сертификат, мотивационное письмо, иногда SAT.
                </p>
              </div>
              <div className="card-21st p-8 flex flex-col h-full hover-lift">
                <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
                    6–12 месяцев
                  </span>
                  <h4 className="text-2xl font-bold text-on-surface">Pre-Master</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed flex-grow">
                  Мост между бакалавриатом и магистратурой за рубежом, если
                  академического профиля не хватает для прямого поступления.
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
                Сопровождение
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                Что мы берём на себя
              </h2>
              <p className="text-lg text-on-surface-variant">
                Всё, кроме экзаменов и визового собеседования — их вы проходите
                сами, но подготовим к обоим.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
              {whatWeDo.map((w) => (
                <div key={w.n} className="relative pl-12 group">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-lg bg-surface border border-border-subtle group-hover:border-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center text-sm font-bold text-on-surface-variant transition-colors shadow-sm">
                    {w.n}
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
                Финансирование
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                Сколько это стоит на самом деле
              </h2>
              <p className="text-lg text-on-surface-variant">
                Самый частый стоп-фактор — уверенность, что учёба за рубежом
                доступна единицам. Разбираем бюджет честно, до подачи документов.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-border-subtle">
                <span className="inline-block py-1 px-3 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-bold mb-6">
                  Из чего складывается бюджет
                </span>
                <h3 className="text-2xl font-bold text-on-surface mb-4">
                  Обучение — не единственная статья
                </h3>
                <p className="text-sm text-on-surface-variant mb-8">
                  Считать нужно всё сразу, иначе к третьему курсу деньги
                  заканчиваются. На консультации собираем полную смету по конкретной
                  стране.
                </p>
                <div className="space-y-4">
                  {[
                    ["Обучение", "от 0 ₸ в госвузах Германии", true],
                    ["Проживание", "основная статья расходов", false],
                    ["Виза и страховка", "разовые платежи", false],
                    ["Депозит на счёте", "требуют почти везде", false],
                    ["Подработка", "разрешена не во всех странах", false],
                  ].map(([k, v, accent]) => (
                    <div
                      key={k as string}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-border-subtle"
                    >
                      <span className="text-sm text-on-surface-variant">{k}</span>
                      <strong
                        className={`text-sm ${accent ? "text-primary" : "text-on-surface"}`}
                      >
                        {v}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary rounded-lg p-8 md:p-12 shadow-xl text-white">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-bold mb-6">
                  Гранты и стипендии
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Как снизить стоимость
                </h3>
                <p className="text-sm text-white/80 mb-8">
                  Полное покрытие получают немногие, а частичное — вполне реально.
                  Но заявку на стипендию готовят параллельно с поступлением, а не
                  после.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    ["Стипендии вузов", "за академические результаты"],
                    ["Госпрограммы", "у каждой страны свои"],
                    ["Что решает", "баллы, эссе, портфолио"],
                    ["Когда подавать", "вместе с заявкой в вуз"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/20"
                    >
                      <span className="text-sm text-white/80">{k}</span>
                      <strong className="text-sm text-white">{v}</strong>
                    </div>
                  ))}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-white/20">
                    <span className="text-sm text-white/80">Германия</span>
                    <strong className="text-sm text-secondary bg-white px-2 py-0.5 rounded">
                      обучение бесплатно и без гранта
                    </strong>
                  </div>
                </div>
                <a
                  className="inline-flex items-center justify-center w-full py-4 rounded-lg border-2 border-white/30 font-bold hover:bg-white hover:text-primary transition-colors"
                  href="#consult"
                >
                  Обсудить бюджет
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
                Сроки
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
                Год до поступления
              </h2>
              <p className="text-lg text-on-surface-variant">
                Типичный цикл для осеннего набора. Главная ошибка — начинать за три
                месяца до дедлайна, когда язык уже не успеть подтянуть.
              </p>
            </div>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-4 md:before:ml-[25%] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-subtle before:to-transparent">
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-[2px] md:ml-0 ${
                      t.edge || t.last
                        ? "bg-primary text-white"
                        : "bg-surface-container-high text-on-surface-variant group-hover:bg-primary/20 transition-colors"
                    }`}
                  />
                  <div
                    className={`w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-6 rounded-lg border shadow-sm transition-all hover:shadow-md ml-4 md:ml-0 group-odd:mr-auto group-even:ml-auto ${
                      t.last
                        ? "border-primary/20 bg-primary/5 hover:border-primary/40"
                        : "border-border-subtle bg-white hover:border-primary/30"
                    }`}
                  >
                    <div
                      className={`text-sm font-bold mb-2 uppercase tracking-wider ${
                        t.edge || t.last ? "text-primary" : "text-on-surface-variant"
                      } ${t.edge ? "text-secondary" : ""}`}
                    >
                      {t.when}
                    </div>
                    <h4 className="text-lg font-bold text-on-surface mb-2">
                      {t.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant">{t.text}</p>
                  </div>
                </div>
              ))}
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
                Вопросы
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">
                О поступлении за рубеж
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item, i) => (
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
