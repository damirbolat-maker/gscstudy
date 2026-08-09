import Link from "next/link";

const directions = [
  {
    num: "01",
    title: "Языковая школа",
    text: "Английский от A1 до C2 и китайский язык. Общий, академический, деловой и детский форматы.",
    cta: "Смотреть курсы",
    href: "/school",
  },
  {
    num: "02",
    title: "Экзамены",
    text: "Подготовка к IELTS и Digital SAT с пробными тестами и прогнозной оценкой до реального экзамена.",
    cta: "Подготовка к экзаменам",
    href: "/exams",
  },
  {
    num: "03",
    title: "За рубеж",
    text: "Подбор университета, подготовка документов и сопровождение до зачисления в вузы 25+ стран.",
    cta: "Программы за рубежом",
    href: "/abroad",
  },
  {
    num: "04",
    title: "Лагеря",
    text: "Языковые смены для школьников 12–17 лет с сопровождающим от GSC Study. Лето 2026.",
    cta: "Смотреть лагеря",
    href: "/camps",
  },
];

export default function Directions() {
  return (
    <section
      id="directions"
      className="py-32 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="tag-pill">Направления</span>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Четыре направления GSC Study
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Язык, экзамен и поступление связаны между собой. Мы ведём студента по
            всей цепочке, а не по отдельному курсу.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {directions.map((d) => (
            <div
              key={d.num}
              className="card-premium p-10 flex flex-col h-full group hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl rounded-2xl bg-white/95 backdrop-blur"
            >
              <div className="text-5xl font-black text-gray-200 group-hover:text-white/20 mb-6 transition-colors">
                {d.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{d.title}</h3>
              <p className="text-gray-600 group-hover:text-white/80 mb-8 flex-grow text-base leading-relaxed">
                {d.text}
              </p>
              <Link
                href={d.href}
                className="inline-flex items-center text-base font-bold text-primary group-hover:text-white mt-auto"
              >
                {d.cta}
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
