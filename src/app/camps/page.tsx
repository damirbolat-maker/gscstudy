import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CampsConsult from "@/components/camps/CampsConsult";
import Icon from "@/components/Icon";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Языковые лагеря за рубежом — лето 2026 для школьников | GSC Study",
  description:
    "Языковые лагеря за рубежом для школьников 12–17 лет. Уроки английского, экскурсии, проживание и сопровождающий от GSC Study.",
};

const gradients = [
  "from-[#1e3a5f] to-[#2c5f8a]",
  "from-[#b8860b] to-[#daa520]",
  "from-[#8a2c2c] to-[#c14040]",
  "from-[#2d4a3e] to-[#3f6b57]",
  "from-[#4a2d5f] to-[#7a4f9c]",
  "from-[#2d5f5a] to-[#3f9c8f]",
];

const included = [
  { n: "01", icon: "menu_book", title: "Уроки английского", text: "Пятнадцать уроков в неделю в международных группах. Ребёнок оказывается среди ровесников из других стран, где английский — единственный общий язык." },
  { n: "02", icon: "hotel", title: "Проживание и питание", text: "Кампус или резиденция, комнаты на двоих, трёхразовое питание. Все площадки лицензированы и работают с подростками много лет." },
  { n: "03", icon: "local_activity", title: "Экскурсии и досуг", text: "Программа на вторую половину дня и выходные: город, музеи, спорт, поездки за пределы города. Свободного времени без присмотра нет." },
  { n: "04", icon: "group", title: "Сопровождающий", text: "Наш сотрудник летит вместе с группой и остаётся на всю смену. Он на связи с родителями и решает вопросы на месте." },
  { n: "05", icon: "flight_takeoff", title: "Виза и перелёт", text: "Готовим визовый пакет и подаём документы, бронируем групповой перелёт. Родителям остаётся собрать справки и сдать биометрию." },
  { n: "06", icon: "health_and_safety", title: "Страховка", text: "Медицинская страховка на весь период поездки, включая дни перелёта." },
];

const schedule = [
  { icon: "restaurant", title: "Завтрак", time: "8:00", text: "В столовой кампуса вместе с группой." },
  { icon: "school", title: "Уроки английского", time: "9:00 – 12:30", text: "Три урока в международной группе своего уровня. Уровень определяют тестом в первый день." },
  { icon: "lunch_dining", title: "Обед", time: "13:00", text: "И свободный час на территории." },
  { icon: "directions_walk", title: "Экскурсия или активность", time: "14:00 – 18:00", text: "Город, музей, спорт или мастер-класс — по программе смены." },
  { icon: "celebration", title: "Ужин и вечерняя программа", time: "19:00", text: "Игры, кино, дискотека или квиз с другими группами." },
  { icon: "bedtime", title: "Отбой", time: "22:00", text: "Вожатые проверяют комнаты, сопровождающий пишет родителям в общий чат." },
];

const safety = [
  ["Сопровождающий", "с группой всю смену"],
  ["Связь с родителями", "ежедневно, общий чат"],
  ["Площадки", "лицензированные центры"],
  ["Страховка", "на весь период"],
  ["Свободное время", "только на территории"],
];

const booking = [
  ["Заявка", "форма или WhatsApp"],
  ["Консультация", "подбор направления"],
  ["Договор и депозит", "фиксируют место"],
  ["Документы на визу", "за 2–3 месяца до вылета"],
  ["Встреча группы", "за неделю до отъезда"],
];

const faqs = [
  { q: "Какой уровень английского нужен?", a: "Достаточно A2 — базового школьного. В первый день ребёнка тестируют и определяют в группу своего уровня, поэтому он не окажется среди тех, кто говорит намного лучше." },
  { q: "Ребёнок никогда не летал один. Это безопасно?", a: "Он летит не один: группа собирается в Алматы или Астане и летит вместе с сопровождающим от GSC Study, который остаётся с ними до возвращения. Родители получают сообщения каждый день." },
  { q: "Что если не дадут визу?", a: "Мы готовим пакет документов и заранее оцениваем риски. Условия возврата при отказе прописываются в договоре — обсуждаем их до внесения депозита, а не после." },
  { q: "Сколько стоит смена?", a: "Зависит от направления, дат и курса валют, поэтому цену называем на консультации. В неё входит всё, кроме карманных денег: обучение, проживание, питание, экскурсии, перелёт, виза и страховка." },
  { q: "Когда нужно определиться?", a: "Оптимально за три-четыре месяца до вылета. Визовые сроки и групповые тарифы на билеты не позволяют бронировать позже, а места в группе ограничены." },
];

export default async function CampsPage() {
  const dbCamps = await prisma.camp.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });

  const camps = dbCamps.map((c, i) => {
    const [from, to] = gradients[i % gradients.length].split(" ");
    const rows: [string, string][] = [
      ["Страна", c.country],
      ["Даты", c.dates ?? ""],
      ["Возраст", c.ageRange ?? ""],
      ["Проживание", c.housing ?? ""],
    ].filter(([, v]) => v) as [string, string][];
    return {
      num: String(i + 1).padStart(2, "0"),
      city: c.city,
      seats: c.seats ? `${c.seats} мест` : c.price || "",
      desc: c.summary ?? "",
      rows,
      from,
      to,
    };
  });

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-surface py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl mix-blend-multiply" />
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <nav className="flex items-center space-x-2 text-sm font-semibold text-on-surface-variant mb-8">
                <Link className="hover:text-primary transition-colors" href="/">
                  Главная
                </Link>
                <span>·</span>
                <span className="text-primary">Лагеря за рубежом</span>
              </nav>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-on-surface tracking-tight mb-6 leading-tight">
                Лето 2026: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  четыре направления
                </span>
              </h1>
              <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-2xl">
                Две-три недели языковой практики в стране языка: уроки в первой
                половине дня, экскурсии во второй, ровесники со всего мира вокруг.
                Для школьников 12–17 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold rounded-full shadow-lg text-white bg-secondary hover:bg-[#8f0048] transition-all hover:-translate-y-1"
                  href="#consult"
                >
                  Забронировать место
                </a>
                <a
                  className="inline-flex justify-center items-center px-8 py-4 border-2 border-primary text-lg font-bold rounded-full text-primary hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
                  href="#camps"
                >
                  Смотреть направления
                  <Icon name="arrow_downward" className="ml-2" />
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 border-t border-border-subtle pt-10">
                {[
                  ["12–17", "возраст участников"],
                  ["2–3", "недели длится смена"],
                  ["15", "уроков английского в неделю"],
                  ["1", "сопровождающий от GSC Study в каждой группе"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="text-3xl font-extrabold text-primary mb-1">
                      {v}
                    </div>
                    <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Camps */}
        <section id="camps" className="py-24 bg-surface-container-low scroll-mt-20">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider uppercase mb-4">
                Направления
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6">
                Куда едем этим летом
              </h2>
              <p className="text-lg text-on-surface-variant">
                Места ограничены размером группы — сопровождающий физически не
                может вести больше двадцати подростков.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {camps.map((c) => (
                <a
                  key={c.city}
                  href="#consult"
                  className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border-subtle"
                >
                  <div
                    className={`relative h-64 overflow-hidden bg-gradient-to-br ${c.from} ${c.to}`}
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-bold text-primary shadow-sm">
                      {c.seats}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="text-white/80 font-bold text-sm mb-1">
                        {c.num}
                      </div>
                      <h3 className="text-3xl font-extrabold text-white">
                        {c.city}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-on-surface-variant mb-8 flex-1">{c.desc}</p>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                      {c.rows.map(([k, v]) => (
                        <div key={k}>
                          <span className="block text-on-surface-variant mb-1 text-xs uppercase tracking-wider font-semibold">
                            {k}
                          </span>
                          <b className="text-on-surface">{v}</b>
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Included */}
        <section className="py-24 bg-white">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wider uppercase mb-4">
                Что входит
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6">
                Всё, кроме карманных денег
              </h2>
              <p className="text-lg text-on-surface-variant">
                Стоимость смены зависит от направления и дат — назовём на
                консультации.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {included.map((it) => (
                <div
                  key={it.n}
                  className="p-8 rounded-2xl bg-surface-container-low border border-border-subtle hover:border-primary/30 transition-colors"
                >
                  <div className="text-5xl font-black text-primary/10 mb-4 leading-none">
                    {it.n}
                  </div>
                  <h4 className="text-xl font-bold text-on-surface mb-3 flex items-center gap-2">
                    <Icon name={it.icon} className="text-secondary" />
                    {it.title}
                  </h4>
                  <p className="text-on-surface-variant">{it.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daily schedule */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider uppercase mb-4">
                Распорядок
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6">
                Как выглядит день в лагере
              </h2>
              <p className="text-lg text-on-surface-variant">
                Расписание отличается по направлениям, но структура одинаковая.
              </p>
            </div>
            <div className="max-w-3xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
              {schedule.map((s, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8 last:mb-0"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Icon name={s.icon} className="text-xl" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-border-subtle">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-lg text-on-surface">
                        {s.title}
                      </h4>
                      <span className="font-extrabold text-secondary">
                        {s.time}
                      </span>
                    </div>
                    <p className="text-on-surface-variant">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Booking */}
        <section className="py-24 bg-white">
          <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary font-bold text-sm tracking-wider uppercase mb-6">
                  Родителям
                </span>
                <h3 className="text-3xl font-extrabold text-on-surface mb-6">
                  Как мы отвечаем за безопасность
                </h3>
                <p className="text-on-surface-variant mb-8 text-lg">
                  Главный страх при отправке ребёнка за границу — что он останется
                  без присмотра. Поэтому группа не остаётся одна ни на одном этапе.
                </p>
                <ul className="space-y-4">
                  {safety.map(([t, d]) => (
                    <li
                      key={t}
                      className="flex items-start gap-3 border-b border-border-subtle pb-4 last:border-0 last:pb-0"
                    >
                      <Icon
                        name="check_circle"
                        className="text-secondary mt-1"
                      />
                      <div>
                        <span className="font-semibold text-on-surface block">
                          {t}
                        </span>
                        <span className="text-on-surface-variant">{d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-container-low rounded-3xl p-8 lg:p-12 border border-border-subtle">
                <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-wider uppercase mb-6">
                  Бронирование
                </span>
                <h3 className="text-3xl font-extrabold text-on-surface mb-6">
                  Как забронировать место
                </h3>
                <p className="text-on-surface-variant mb-8 text-lg">
                  Места закрываются задолго до лета: визовые сроки и групповые
                  тарифы на перелёт не позволяют принимать заявки в последний
                  момент.
                </p>
                <ul className="space-y-4 mb-10">
                  {booking.map(([t, d], i) => (
                    <li
                      key={t}
                      className="flex gap-4 border-b border-border-subtle pb-4 last:border-0 last:pb-0"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <span className="font-semibold text-on-surface block">
                          {t}
                        </span>
                        <span className="text-on-surface-variant">{d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  className="inline-flex justify-center items-center w-full px-6 py-3.5 border-2 border-primary text-base font-bold rounded-xl text-primary hover:bg-primary hover:text-white transition-all"
                  href="#consult"
                >
                  Забронировать
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wider uppercase mb-4">
                Вопросы
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6">
                О лагерях
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-2xl border border-border-subtle open:border-primary/30 transition-colors"
                  open={i === 0}
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none p-6 text-lg font-bold text-on-surface group-open:text-primary">
                    <span>{item.q}</span>
                    <Icon
                      name="expand_more"
                      className="transition group-open:rotate-180 text-secondary"
                    />
                  </summary>
                  <div className="text-on-surface-variant px-6 pb-6 pt-0 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Consult */}
        <CampsConsult />
      </main>
      <Footer />
    </>
  );
}
