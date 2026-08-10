// Полоса доверия / аккредитации.
// TODO: заменить текстовые пункты на реальные логотипы партнёров,
// когда владелец пришлёт файлы (ICEF, British Council, IELTS).
const items = [
  { label: "ICEF Accredited", note: "#1478 · Trusted Agency" },
  { label: "British Council", note: "партнёр" },
  { label: "IELTS", note: "Registration Centre" },
  { label: "Cambridge", note: "YLE" },
];

export default function TrustStrip() {
  return (
    <section className="py-10 border-y border-gray-200/60 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Аккредитации и партнёры
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div className="text-lg font-extrabold text-primary tracking-tight">
                {it.label}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5">
                {it.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
