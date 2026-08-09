const reviews = [
  {
    text: "Сдал IELTS на 7.5 благодаря отличной подготовке! Преподаватели очень внимательны к деталям.",
    author: "Алихан, Астана",
    course: "Курс IELTS Academic",
    accent: false,
  },
  {
    text: "Поступила в Канаду, весь процесс прошел гладко. Помогли с выбором вуза и оформлением визы.",
    author: "Мадина, Алматы",
    course: "Поступление за рубеж",
    accent: true,
  },
  {
    text: "Отличные преподаватели и атмосфера. Подтянул английский с B1 до C1 за полгода интенсивных занятий.",
    author: "Данияр, Алматы",
    course: "Общий Английский",
    accent: false,
  },
  {
    text: "Ребенок в восторге от летнего лагеря! Практика языка каждый день плюс отличная культурная программа.",
    author: "Динара, Астана",
    course: "Летние лагеря",
    accent: true,
  },
];

function ReviewCard({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="card-premium p-8 w-80 flex-shrink-0 bg-white/95 backdrop-blur">
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        &ldquo;{r.text}&rdquo;
      </p>
      <div className="font-bold text-gray-900">{r.author}</div>
      <div
        className={`text-xs mt-1 ${r.accent ? "text-secondary" : "text-primary"}`}
      >
        {r.course}
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-gray-layered overflow-hidden my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="tag-pill">Отзывы</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Что говорят студенты
          </h2>
        </div>
      </div>
      <div className="marquee-container mask-marquee w-full overflow-hidden">
        <div className="flex w-fit animate-marquee gap-6 py-4 px-4">
          <div className="flex gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={`a-${i}`} r={r} />
            ))}
          </div>
          <div className="flex gap-6" aria-hidden="true">
            {reviews.map((r, i) => (
              <ReviewCard key={`b-${i}`} r={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
