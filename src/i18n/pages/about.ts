import type { Locale } from "@/i18n/config";

// Словарь страницы «О нас».
// ru — источник; kz/en — перевод (вычитать).

const dict = {
  ru: {
    hero: {
      eyebrow: "С 2011 года",
      title: "GSC Study — образование без границ с 2011 года",
      text: "Мы открываем студентам возможности по всему миру. Больше 15 лет мы — надёжный мост к качественному образованию, ведём целеустремлённых ребят в лучшие университеты мира.",
      cta: "Наша миссия",
      badge: {
        value: "15+ лет",
        label: "безупречной работы",
      },
    },
    stats: [
      { value: "15+", label: "лет на рынке" },
      { value: "15 000+", label: "студентов обучено" },
      { value: "2", label: "центра", sub: "Алматы, Астана" },
      { value: "25+", label: "стран поступления" },
    ],
    journey: {
      title: "Наш путь",
      p1: "GSC Study основан в 2011 году с простой, но важной миссией — сделать образование мирового уровня доступным для целеустремлённых студентов Казахстана. То, что начиналось как небольшой консультационный офис, выросло в ведущий образовательный центр, известный своим подходом к академической честности и результату студентов.",
      p2: "Наш рост — результат доверия тысяч семей. Мы уверены: настоящий образовательный консалтинг — это не про «заполнить заявку», а про то, чтобы формировать будущее. Мы смотрим на студента целостно: находим сильные стороны каждого и подбираем вуз, где он раскроется и академически, и лично.",
      quote: "«Образование — самое мощное оружие, которым можно изменить мир. В GSC мы даём это оружие в руки студентам.»",
      p3: "Сегодня, с современными центрами в Алматы и Астане, мы продолжаем совершенствовать методики подготовки к экзаменам и расширять сеть международных партнёров, чтобы наши студенты всегда были на шаг впереди.",
    },
    values: {
      title: "Наши ценности",
      subtitle: "Принципы, на которых строится наш подход к обучению и консалтингу.",
      items: [
        { title: "Качество", text: "Держим высокие стандарты в программах и консалтинге, чтобы результат был премиального уровня." },
        { title: "Ориентация на результат", text: "Наш успех измеряется поступлениями, баллами и прогрессом наших студентов — и ничем иным." },
        { title: "Прозрачность", text: "Честная оценка, понятный маршрут и открытая коммуникация на всех этапах поступления." },
        { title: "Возможности без границ", text: "Уверены: география не должна ограничивать потенциал. Соединяем местные таланты с университетами по всему миру." },
      ],
    },
    partners: {
      title: "Аккредитации и партнёры",
      text: "Нам доверяют ведущие международные образовательные организации.",
    },
    cta: {
      title: "Готовы начать свой путь?",
      text: "Запишитесь на персональную консультацию — обсудим ваши цели и составим маршрут к поступлению.",
      button: "Получить консультацию",
    },
  },

  kz: {
    hero: {
      eyebrow: "2011 жылдан бері",
      title: "GSC Study — 2011 жылдан бері шекарасыз білім",
      text: "Біз студенттерге әлем бойынша мүмкіндіктер ашамыз. 15 жылдан астам уақыт бойы сапалы білімге апарар сенімді көпір бола отырып, мақсатты жастарды әлемнің үздік университеттеріне жетелейміз.",
      cta: "Біздің миссиямыз",
      badge: {
        value: "15+ жыл",
        label: "мінсіз жұмыс",
      },
    },
    stats: [
      { value: "15+", label: "нарықтағы жыл" },
      { value: "15 000+", label: "студент оқыды" },
      { value: "2", label: "орталық", sub: "Алматы, Астана" },
      { value: "25+", label: "түсу елдері" },
    ],
    journey: {
      title: "Біздің жолымыз",
      p1: "GSC Study 2011 жылы қарапайым, бірақ маңызды миссиямен құрылды — әлемдік деңгейдегі білімді Қазақстанның мақсатты студенттеріне қолжетімді ету. Шағын консультациялық кеңседен басталған іс академиялық адалдыққа және студенттердің нәтижесіне деген көзқарасымен танымал жетекші білім орталығына айналды.",
      p2: "Біздің өсуіміз — мыңдаған отбасының сенімінің жемісі. Біз сенімдіміз: нағыз білім беру консалтингі «өтінім толтыру» емес, болашақты қалыптастыру. Біз студентке тұтас қараймыз: әркімнің күшті жақтарын тауып, ол академиялық та, тұлғалық та тұрғыдан ашылатын ЖОО-ны таңдаймыз.",
      quote: "«Білім — әлемді өзгерте алатын ең қуатты қару. GSC-де біз бұл қаруды студенттердің қолына береміз.»",
      p3: "Бүгінде Алматы мен Астанадағы заманауи орталықтарымызбен біз емтиханға дайындық әдістемелерін жетілдіруді және халықаралық серіктестер желісін кеңейтуді жалғастырамыз, осылайша студенттеріміз әрдайым бір қадам алда болады.",
    },
    values: {
      title: "Біздің құндылықтарымыз",
      subtitle: "Оқыту мен консалтингке деген көзқарасымыз негізделген қағидаттар.",
      items: [
        { title: "Сапа", text: "Нәтиже премиум деңгейде болуы үшін бағдарламалар мен консалтингте жоғары стандарттарды ұстанамыз." },
        { title: "Нәтижеге бағдарлану", text: "Біздің табысымыз студенттеріміздің түсуімен, балдарымен және ілгерілеуімен өлшенеді — басқа ештеңемен емес." },
        { title: "Ашықтық", text: "Түсудің барлық кезеңінде әділ баға, түсінікті бағдар және ашық қарым-қатынас." },
        { title: "Шекарасыз мүмкіндіктер", text: "Сенімдіміз: география әлеуетті шектемеуі керек. Жергілікті таланттарды әлемдегі университеттермен байланыстырамыз." },
      ],
    },
    partners: {
      title: "Аккредитациялар мен серіктестер",
      text: "Бізге жетекші халықаралық білім беру ұйымдары сенеді.",
    },
    cta: {
      title: "Өз жолыңызды бастауға дайынсыз ба?",
      text: "Жеке кеңеске жазылыңыз — мақсаттарыңызды талқылап, түсуге апарар бағдарыңызды құрастырамыз.",
      button: "Кеңес алу",
    },
  },

  en: {
    hero: {
      eyebrow: "Since 2011",
      title: "GSC Study — education without borders since 2011",
      text: "We open opportunities for students around the world. For more than 15 years we have been a reliable bridge to quality education, guiding ambitious young people to the world's best universities.",
      cta: "Our mission",
      badge: {
        value: "15+ years",
        label: "of impeccable work",
      },
    },
    stats: [
      { value: "15+", label: "years on the market" },
      { value: "15,000+", label: "students taught" },
      { value: "2", label: "centres", sub: "Almaty, Astana" },
      { value: "25+", label: "admission countries" },
    ],
    journey: {
      title: "Our journey",
      p1: "GSC Study was founded in 2011 with a simple but important mission — to make world-class education accessible to ambitious students in Kazakhstan. What began as a small consulting office has grown into a leading educational centre, known for its commitment to academic integrity and student outcomes.",
      p2: "Our growth is the result of the trust of thousands of families. We believe that real educational consulting is not about “filling out an application”, but about shaping the future. We look at the student as a whole: we find each person's strengths and choose a university where they will flourish both academically and personally.",
      quote: "“Education is the most powerful weapon which you can use to change the world. At GSC we place that weapon in our students' hands.”",
      p3: "Today, with modern centres in Almaty and Astana, we continue to refine our exam preparation methods and expand our network of international partners, so that our students are always one step ahead.",
    },
    values: {
      title: "Our values",
      subtitle: "The principles that shape our approach to teaching and consulting.",
      items: [
        { title: "Quality", text: "We uphold high standards in our programmes and consulting so that the result is of a premium level." },
        { title: "Results-driven", text: "Our success is measured by our students' admissions, scores and progress — and nothing else." },
        { title: "Transparency", text: "Honest assessment, a clear route and open communication at every stage of admission." },
        { title: "Opportunity without borders", text: "We believe geography should not limit potential. We connect local talent with universities across the world." },
      ],
    },
    partners: {
      title: "Accreditations & partners",
      text: "Leading international educational organisations trust us.",
    },
    cta: {
      title: "Ready to start your journey?",
      text: "Book a personal consultation — we'll discuss your goals and map out your route to admission.",
      button: "Get a consultation",
    },
  },
};

export type AboutDict = typeof dict.ru;
export function getAboutDict(locale: Locale): AboutDict {
  return dict[locale];
}
