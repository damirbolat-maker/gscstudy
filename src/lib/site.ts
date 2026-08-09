export const site = {
  name: "GSC Study",
  phones: {
    almaty: { display: "+7 700 127 77 88", tel: "+77001277788" },
    astana: { display: "+7 700 127 77 99", tel: "+77001277799" },
  },
  whatsapp: "https://wa.me/77718080828",
  email: "info@gscstudy.kz",
  offices: {
    almaty: { city: "Алматы", address: "ул. Абая, 150" },
    astana: { city: "Астана", address: "пр. Мангилик Ел, 53" },
  },
  nav: [
    { label: "Языковая школа", href: "/school" },
    { label: "Экзамены", href: "/exams" },
    { label: "За рубеж", href: "/abroad" },
    { label: "Лагеря", href: "/camps" },
    { label: "Центры", href: "/#offices" },
  ],
} as const;
