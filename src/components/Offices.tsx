import { site } from "@/lib/site";
import { getServerDict } from "@/lib/locale";

export default async function Offices() {
  const { dict } = await getServerDict();
  const t = dict.offices;
  return (
    <section
      id="offices"
      className="py-24 md:py-28 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-pill">{t.eyebrow}</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.text}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.offices.map((o, i) => (
            <div
              key={i}
              className="card-premium card-spotlight p-8 bg-white/95 backdrop-blur flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{o.city}</h3>
              <p className="text-gray-600 flex-1">{o.address}</p>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${site.phone.tel}`}
                  className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary"
                >
                  {site.phone.display}
                </a>
                <a
                  href={site.whatsapp.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-whatsapp-green hover:underline"
                >
                  {t.writeWhatsApp}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
