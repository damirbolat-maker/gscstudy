const tests = [
  {
    title: "Пробный IELTS",
    text: "Полная симуляция экзамена с проверкой всех секций.",
  },
  {
    title: "Пробный Digital SAT",
    text: "Официальный формат на платформе Bluebook.",
  },
];

export default function Tests() {
  return (
    <section
      id="tests"
      className="py-24 bg-gray-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-pill">Тестирование</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Пробные тесты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Оцените свой уровень перед реальным экзаменом.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {tests.map((t) => (
            <div
              key={t.title}
              className="card-premium p-8 bg-white/90 backdrop-blur"
            >
              <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
              <p className="text-gray-600 mb-6">{t.text}</p>
              <a
                href="#consult"
                className="btn-primary inline-block w-full text-center py-3 rounded-lg font-bold"
              >
                Записаться
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
