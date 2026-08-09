export const site = {
  name: "GSC Study",
  foundedYear: 2011,

  // Единый номер колл-центра для звонков
  phone: { display: "+7 700 127 77 88", tel: "+77001277788" },
  // WhatsApp
  whatsapp: {
    display: "+7 771 808 08 28",
    number: "77718080828",
    link: "https://wa.me/77718080828",
  },
  email: "info@gscenter.kz",
  instagram: "https://instagram.com/gscstudy",

  workingHours: "Пн–Пт 9:00–18:00 · Сб 10:00–15:00",

  // 4 офиса: 3 в Астане + 1 в Алматы
  offices: [
    { city: "Астана", address: "ул. Сарайшык, 34" },
    { city: "Астана", address: "ул. Сыганак, 15" },
    { city: "Астана", address: "ул. Улы Дала, 41/6" },
    { city: "Алматы", address: "ул. Сейфуллина, 574/1" },
  ],

  nav: [
    { label: "Языковая школа", href: "/school" },
    { label: "Экзамены", href: "/exams" },
    { label: "За рубеж", href: "/abroad" },
    { label: "Лагеря", href: "/camps" },
    { label: "Центры", href: "/#offices" },
  ],
} as const;
