import type { Locale } from "@/i18n/config";

// Статический «хром» онлайн-тестов: хаб, интро, квиз, результат, ошибка.
// ru — источник; kz/en — перевод (вычитать). DB-контент не переводим.

const dict = {
  ru: {
    hub: {
      badge: "Бесплатно",
      title: "Онлайн-тесты уровня",
      subtitle:
        "Пройдите тест за 10–15 минут и сразу узнайте результат. Мы пришлём разбор и подберём программу.",
      forKids: "Для детей",
      forAdults: "Для взрослых и подростков",
      questions: "вопросов",
      minutes: "мин",
      noLimit: "без лимита",
      start: "Пройти",
    },
    intro: {
      eyebrow: "Тест уровня",
      metaQuestions: "Вопросов",
      metaTime: "Время",
      metaCost: "Стоимость",
      minutes: "мин",
      noLimit: "без лимита",
      free: "бесплатно",
      nameLabel: "Имя",
      namePh: "Айгерим",
      phoneLabel: "Телефон",
      phonePh: "+7 700 000 00 00",
      emailLabel: "Email — необязательно",
      emailPh: "you@example.com",
      consent:
        "Согласен(а) на обработку персональных данных, чтобы получить результат и разбор.",
      startBtn: "Начать тест",
    },
    quiz: {
      question: "Вопрос",
      of: "из",
      back: "← Назад",
    },
    loading: {
      text: "Считаем результат…",
    },
    result: {
      yourResult: "Ваш результат",
      correctAnswers: "Правильных ответов:",
      of: "из",
      note: "Заявка отправлена — менеджер свяжется с вами, подберёт программу и пришлёт подробный разбор.",
      waButton: "Написать в WhatsApp",
      waIntro: "Здравствуйте! Прошёл(ла) тест «",
      waResult: "», результат: ",
      home: "На главную",
    },
    error: {
      text: "Не удалось сохранить результат.",
      retry: "Попробовать ещё раз",
    },
  },
  kz: {
    hub: {
      badge: "Тегін",
      title: "Онлайн деңгей тесттері",
      subtitle:
        "Тестті 10–15 минутта тапсырып, нәтижені бірден біліңіз. Талдау жіберіп, бағдарлама таңдаймыз.",
      forKids: "Балаларға",
      forAdults: "Ересектер мен жасөспірімдерге",
      questions: "сұрақ",
      minutes: "мин",
      noLimit: "шектеусіз",
      start: "Өту",
    },
    intro: {
      eyebrow: "Деңгей тесті",
      metaQuestions: "Сұрақтар",
      metaTime: "Уақыт",
      metaCost: "Құны",
      minutes: "мин",
      noLimit: "шектеусіз",
      free: "тегін",
      nameLabel: "Аты",
      namePh: "Айгерім",
      phoneLabel: "Телефон",
      phonePh: "+7 700 000 00 00",
      emailLabel: "Email — міндетті емес",
      emailPh: "you@example.com",
      consent:
        "Нәтиже мен талдауды алу үшін дербес деректерді өңдеуге келісемін.",
      startBtn: "Тестті бастау",
    },
    quiz: {
      question: "Сұрақ",
      of: "/",
      back: "← Артқа",
    },
    loading: {
      text: "Нәтиже есептелуде…",
    },
    result: {
      yourResult: "Сіздің нәтижеңіз",
      correctAnswers: "Дұрыс жауаптар:",
      of: "/",
      note: "Өтінім жіберілді — менеджер сізбен хабарласып, бағдарлама таңдап, толық талдау жібереді.",
      waButton: "WhatsApp-қа жазу",
      waIntro: "Сәлеметсіз бе! «",
      waResult: "» тестінен өттім, нәтиже: ",
      home: "Басты бетке",
    },
    error: {
      text: "Нәтижені сақтау мүмкін болмады.",
      retry: "Қайталап көру",
    },
  },
  en: {
    hub: {
      badge: "Free",
      title: "Online level tests",
      subtitle:
        "Take the test in 10–15 minutes and see your result right away. We'll send a breakdown and pick a programme.",
      forKids: "For kids",
      forAdults: "For adults and teenagers",
      questions: "questions",
      minutes: "min",
      noLimit: "no time limit",
      start: "Take the test",
    },
    intro: {
      eyebrow: "Level test",
      metaQuestions: "Questions",
      metaTime: "Time",
      metaCost: "Cost",
      minutes: "min",
      noLimit: "no time limit",
      free: "free",
      nameLabel: "Name",
      namePh: "Aigerim",
      phoneLabel: "Phone",
      phonePh: "+7 700 000 00 00",
      emailLabel: "Email — optional",
      emailPh: "you@example.com",
      consent:
        "I agree to the processing of personal data in order to receive my result and a breakdown.",
      startBtn: "Start the test",
    },
    quiz: {
      question: "Question",
      of: "of",
      back: "← Back",
    },
    loading: {
      text: "Calculating your result…",
    },
    result: {
      yourResult: "Your result",
      correctAnswers: "Correct answers:",
      of: "of",
      note: "Your request has been sent — our manager will contact you, pick a programme and send a detailed breakdown.",
      waButton: "Message on WhatsApp",
      waIntro: "Hello! I took the “",
      waResult: "” test, result: ",
      home: "Back to home",
    },
    error: {
      text: "Could not save your result.",
      retry: "Try again",
    },
  },
};

export type TestsDict = typeof dict.ru;

export function getTestsDict(locale: Locale): TestsDict {
  return dict[locale];
}
