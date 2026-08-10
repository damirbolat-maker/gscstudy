import { getServerDict } from "@/lib/locale";

export default async function Steps() {
  const { dict } = await getServerDict();
  const t = dict.steps;

  return (
    <section
      id="steps"
      className="py-24 md:py-28 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-pill">{t.eyebrow}</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {t.items.map((it, i) => (
            <div key={i} className="card-premium card-spotlight rounded-2xl p-8 bg-white/95 backdrop-blur">
              <div
                className={`w-16 h-16 ${
                  i === 2 ? "bg-secondary shadow-secondary/20" : "bg-primary shadow-primary/20"
                } text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 shadow-lg`}
              >
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{it[0]}</h3>
              <p className="text-gray-600">{it[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
