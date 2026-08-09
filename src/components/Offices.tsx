import { site } from "@/lib/site";

const offices = [
  {
    city: site.offices.almaty.city,
    address: site.offices.almaty.address,
    desc: "Наш главный офис в южной столице, где мы проводим языковые курсы и консультации.",
    phone: site.phones.almaty,
    accent: false,
    // TODO: заменить на реальную карту/фото центра
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn0FQNEDjvIKXAg2XbEpOSJYbxEFSDnJp28zH--ZZ2RitoPJkVnd7OtfjJXVML4KFjEcVZoO7b55SFTtQSdikxQYkAd57QMBhvm1B3YUkKfXIqTcaqv_ojeCpBjv3PBIVtj3fqPlPaV3jQy9pnkUwXEh0Q43LsHXWj3rxY9elHep6Nwdd_XQ1Acq2iEfZmLhl6tpQ7E-iItb9nYxye7wK-o0999uKBk6Xb7iqK6UT6l8amDGOhVzmd",
  },
  {
    city: site.offices.astana.city,
    address: site.offices.astana.address,
    desc: "Современный учебный центр в столице с просторными классами для подготовки к экзаменам.",
    phone: site.phones.astana,
    accent: true,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWhUddYvFaMM4twXGpV1BElvTUh_7Gn-d-PQx-ju_ORbl5FGjQz-bfakurmbybk0rNPZuKCpqTLJ0kCq68vkc147dvnlZ8hs6anp0WlBnuaVDKslr5WczY93G5B8NnUSjWk-XRCwtJuu8VvhftiiuJQEevfiYmQG14zLMSGSdYEVKYIHp2yn_zM-EYswALwkloEmbnffvpIq5KCQxayvXyNG-BgHQ8JZuEX6f6FD68O3Lc9KWPhqHn",
  },
];

export default function Offices() {
  return (
    <section
      id="offices"
      className="py-24 bg-white-layered my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag-pill">Контакты</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Наши центры
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {offices.map((o) => (
            <div
              key={o.city}
              className="map-wrapper h-80 rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={`Карта — ${o.city}`} className="map-image" src={o.img} />
              <div className="map-overlay" />
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] transition-opacity duration-500 hover:opacity-0 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 hover:opacity-0 pointer-events-none">
                <div className="bg-white/90 px-6 py-4 rounded-xl shadow-lg text-center backdrop-blur-md">
                  <h3 className="text-2xl font-bold text-gray-900">{o.city}</h3>
                  <p className="text-sm text-gray-600 mt-1">{o.address}</p>
                </div>
              </div>
              <div className="map-content text-white">
                <h3 className="text-3xl font-bold mb-2">{o.city}</h3>
                <p className="text-white/90 text-sm mb-4">{o.desc}</p>
                <div className="flex items-center gap-4">
                  <a
                    className="text-white font-bold hover:text-white/80"
                    href={`tel:${o.phone.tel}`}
                  >
                    <span className="block text-xs uppercase tracking-wider text-white/70">
                      Телефон
                    </span>
                    {o.phone.display}
                  </a>
                  <a
                    className={`${
                      o.accent
                        ? "bg-secondary hover:bg-[#8e0047]"
                        : "bg-primary hover:bg-[#0e446b]"
                    } px-4 py-2 rounded-lg text-sm font-semibold transition-colors`}
                    href="#"
                  >
                    Открыть карту
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
