import Link from "next/link";
import { getServerDict } from "@/lib/locale";
import { withLocale } from "@/i18n/config";

const hrefs = ["/school", "/exams", "/abroad", "/camps"];

export default async function Directions() {
  const { locale, dict: t } = await getServerDict();

  return (
    <section
      id="directions"
      className="py-32 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <span className="tag-pill">{t.directions.eyebrow}</span>
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {t.directions.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {t.directions.text}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {t.directions.cards.map((d, i) => (
            <div
              key={i}
              className="card-premium card-spotlight card-ring p-10 flex flex-col h-full group hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl rounded-2xl bg-white/95 backdrop-blur"
            >
              <div className="text-5xl font-black text-gray-200 group-hover:text-white/20 mb-6 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-bold mb-4">{d.title}</h3>
              <p className="text-gray-600 group-hover:text-white/80 mb-8 flex-grow text-base leading-relaxed">
                {d.text}
              </p>
              <Link
                href={withLocale(locale, hrefs[i])}
                className="inline-flex items-center text-base font-bold text-primary group-hover:text-white mt-auto"
              >
                {d.cta}
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
