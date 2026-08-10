import { getServerDict } from "@/lib/locale";

export default async function Tests() {
  const { dict } = await getServerDict();
  const t = dict.testsBlock;
  const cards = [t.ielts, t.sat];

  return (
    <section
      id="tests"
      className="py-24 bg-gray-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-pill">{t.eyebrow}</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.text}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((c) => (
            <div key={c.title} className="card-premium p-8 bg-white/90 backdrop-blur">
              <h3 className="text-2xl font-bold mb-4">{c.title}</h3>
              <p className="text-gray-600 mb-6">{c.text}</p>
              <a
                href="#consult"
                className="btn-primary inline-block w-full text-center py-3 rounded-lg font-bold"
              >
                {dict.leadForm.submit}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
