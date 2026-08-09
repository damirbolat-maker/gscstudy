const steps = [
  { num: 1, title: "Консультация", text: "Определяем цели и уровень.", accent: false },
  { num: 2, title: "Подготовка", text: "Учим язык и сдаем экзамены.", accent: false },
  { num: 3, title: "Зачисление", text: "Подаем документы в вуз.", accent: true },
];

export default function Steps() {
  return (
    <section
      id="steps"
      className="py-24 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-pill">Как начать</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Шаги к поступлению
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((s) => (
            <div key={s.num}>
              <div
                className={`w-16 h-16 ${
                  s.accent ? "bg-secondary shadow-secondary/20" : "bg-primary shadow-primary/20"
                } text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 shadow-lg`}
              >
                {s.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
