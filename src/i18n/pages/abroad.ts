import type { Locale } from "@/i18n/config";

// Словарь страницы «Образование за рубежом».
// ru — источник; kz/en — перевод. ru НЕ as const (см. dictionaries.ts).

const dict = {
  ru: {
    hero: {
      breadcrumbHome: "Главная",
      breadcrumbCurrent: "Образование за рубежом",
      title1: "Поступление в вузы",
      title2: "25+ стран",
      text: "Подбираем университет под аттестат, баллы и бюджет, готовим документы и ведём до письма о зачислении. Не «отправим заявку», а доведём до результата.",
      ctaPrimary: "Подобрать программу",
      ctaSecondary: "Страны и требования",
      stats: [
        ["25+", "Стран поступления"],
        ["3", "Уровня: Foundation, Bachelor, Pre-Master"],
        ["12", "Месяцев — типичный цикл подачи"],
        ["0 ₸", "Первичная консультация"],
      ],
      card: {
        title: "Ваш путь к зачислению",
        subtitle: "Мы берём на себя всю бюрократию",
        steps: [
          ["Подбор вуза и стратегии", "Оценка шансов, выбор направления"],
          ["Сбор документов", "Переводы, мотивационное письмо"],
          ["Зачисление и виза", "Подача заявки, получение оффера"],
        ],
      },
    },
    countries: {
      eyebrow: "Направления",
      title: "Пять основных стран",
      text: "С этими системами работаем чаще всего и знаем их дедлайны наизусть. Остальные страны — по запросу.",
      items: [
        {
          name: "Британия",
          rows: [
            ["Уровни", "Foundation, Bachelor"],
            ["Язык", "IELTS 6.0–7.0"],
            ["Подача", "UCAS"],
            ["Дедлайн", "январь"],
          ],
        },
        {
          name: "Германия",
          rows: [
            ["Уровни", "Foundation, Bachelor"],
            ["Язык", "IELTS / немецкий B2"],
            ["Госвузы", "без платы за обучение"],
            ["Дедлайн", "июль и январь"],
          ],
        },
        {
          name: "Канада",
          rows: [
            ["Уровни", "Foundation, Bachelor"],
            ["Язык", "IELTS 6.0–6.5"],
            ["После учёбы", "work permit"],
            ["Дедлайн", "январь–март"],
          ],
        },
        {
          name: "ОАЭ",
          rows: [
            ["Уровни", "Foundation, Bachelor"],
            ["Язык", "IELTS 5.5–6.5"],
            ["Кампусы", "филиалы вузов UK и US"],
            ["Дедлайн", "несколько наборов в год"],
          ],
        },
        {
          name: "США",
          rows: [
            ["Уровни", "Bachelor, Pre-Master"],
            ["Экзамены", "Digital SAT + IELTS"],
            ["Подача", "Common App"],
            ["Дедлайн", "ноябрь и январь"],
          ],
        },
      ],
    },
    who: {
      eyebrow: "Кому подходит",
      title: "Узнаёте себя?",
      text: "Мы работаем не только с выпускниками. Чем раньше начать, тем больше вариантов остаётся открытыми.",
      cta: "Получить план действий",
      items: [
        {
          title: "Выпускникам 11 класса",
          text: "До подачи остаётся один сезон. Нужно быстро определить реалистичный список вузов, добрать языковой балл и не пропустить дедлайны.",
        },
        {
          title: "Ученикам 9–10 классов",
          text: "Есть два-три года в запасе — самая выигрышная позиция. Можно спокойно поднять язык, собрать портфолио и целиться в конкурсные программы.",
        },
        {
          title: "Тем, кому важно финансирование",
          text: "Учёба за рубежом не обязательно означает полную оплату. Разбираем, где есть гранты и стипендии и что нужно, чтобы на них претендовать.",
        },
        {
          title: "Тем, кто уже получил отказ",
          text: "Разбираем, что именно не сработало — балл, письмо или выбор программы — и готовим подачу на следующий набор.",
        },
      ],
    },
    levels: {
      eyebrow: "Уровни",
      title: "С чего начинать именно вам",
      text: "Зависит от аттестата и языкового уровня. Казахстанская школа не всегда даёт прямой вход на бакалавриат — и это нормально.",
      foundation: {
        badge: "1 год · переход на Bachelor",
        text: "Подготовительный год при университете для тех, чей аттестат не проходит напрямую. Заканчивается переводом на первый курс того же вуза.",
      },
      bachelor: {
        badge: "3–4 года",
        text: "Основная программа после школы. Нужны аттестат, языковой сертификат, мотивационное письмо, иногда SAT.",
      },
      premaster: {
        badge: "6–12 месяцев",
        text: "Мост между бакалавриатом и магистратурой за рубежом, если академического профиля не хватает для прямого поступления.",
      },
    },
    whatWeDo: {
      eyebrow: "Сопровождение",
      title: "Что мы берём на себя",
      text: "Всё, кроме экзаменов и визового собеседования — их вы проходите сами, но подготовим к обоим.",
      items: [
        { title: "Подбор университета", text: "Список из нескольких вузов: с запасом, по профилю и надёжный вариант. Смотрим на аттестат, баллы, бюджет и шансы, а не на позицию в рейтинге." },
        { title: "Мотивационное письмо", text: "Помогаем собрать текст, который отвечает на вопрос приёмной комиссии, а не пересказывает биографию. Разбираем черновики построчно." },
        { title: "Документы и переводы", text: "Аттестат, транскрипт, рекомендации, справки. Проверяем комплект под требования каждого вуза — они различаются сильнее, чем кажется." },
        { title: "Подача заявок", text: "UCAS для Британии, Common App для США, порталы вузов для остальных стран. Следим за дедлайнами, чтобы заявка не ушла в последнюю ночь." },
        { title: "Общение с вузом", text: "Отвечаем на запросы приёмной комиссии, отслеживаем статус и напоминаем о подтверждении места, когда придёт оффер." },
        { title: "Подготовка к визе", text: "Собираем пакет документов, разбираем типичные вопросы собеседования и порядок подачи в конкретной стране." },
      ],
    },
    money: {
      eyebrow: "Финансирование",
      title: "Сколько это стоит на самом деле",
      text: "Самый частый стоп-фактор — уверенность, что учёба за рубежом доступна единицам. Разбираем бюджет честно, до подачи документов.",
      budget: {
        badge: "Из чего складывается бюджет",
        title: "Обучение — не единственная статья",
        text: "Считать нужно всё сразу, иначе к третьему курсу деньги заканчиваются. На консультации собираем полную смету по конкретной стране.",
        rows: [
          ["Обучение", "от 0 ₸ в госвузах Германии"],
          ["Проживание", "основная статья расходов"],
          ["Виза и страховка", "разовые платежи"],
          ["Депозит на счёте", "требуют почти везде"],
          ["Подработка", "разрешена не во всех странах"],
        ],
      },
      grants: {
        badge: "Гранты и стипендии",
        title: "Как снизить стоимость",
        text: "Полное покрытие получают немногие, а частичное — вполне реально. Но заявку на стипендию готовят параллельно с поступлением, а не после.",
        rows: [
          ["Стипендии вузов", "за академические результаты"],
          ["Госпрограммы", "у каждой страны свои"],
          ["Что решает", "баллы, эссе, портфолио"],
          ["Когда подавать", "вместе с заявкой в вуз"],
        ],
        special: ["Германия", "обучение бесплатно и без гранта"],
        cta: "Обсудить бюджет",
      },
    },
    timeline: {
      eyebrow: "Сроки",
      title: "Год до поступления",
      text: "Типичный цикл для осеннего набора. Главная ошибка — начинать за три месяца до дедлайна, когда язык уже не успеть подтянуть.",
      items: [
        { when: "За 12 месяцев", title: "Определяем страну и уровень", text: "Разбираем аттестат, бюджет и цель. На этом этапе становится понятно, нужен ли Foundation и какой языковой балл придётся набрать." },
        { when: "За 10 месяцев", title: "Готовимся к экзаменам", text: "IELTS, при необходимости Digital SAT. Закладываем запас на пересдачу — с первого раза нужный балл получают не все." },
        { when: "За 6 месяцев", title: "Собираем документы", text: "Транскрипт, рекомендации, мотивационное письмо. Письмо переписывается несколько раз, поэтому начинаем заранее." },
        { when: "За 4 месяца", title: "Подаём заявки", text: "UCAS, Common App или порталы вузов. Подаём в несколько университетов сразу, чтобы не зависеть от одного ответа." },
        { when: "За 2 месяца", title: "Оффер и виза", text: "Подтверждаем место, вносим депозит, собираем визовый пакет и готовимся к собеседованию." },
        { when: "Август–сентябрь", title: "Отъезд", text: "Жильё, страховка, билеты и первые недели на месте. На связи остаёмся и после зачисления." },
      ],
    },
    faq: {
      eyebrow: "Вопросы",
      title: "О поступлении за рубеж",
      items: [
        { q: "Хватит ли казахстанского аттестата?", a: "Для части стран — да, для Британии и ряда программ Канады обычно требуется Foundation, потому что там школа длится дольше. Это не отказ, а дополнительный год при университете, после которого вы переходите на первый курс." },
        { q: "Можно ли учиться бесплатно?", a: "В государственных вузах Германии нет платы за обучение — остаются только сбор за семестр и расходы на жизнь. В остальных странах бывают стипендии и гранты, но они конкурсные и требуют высоких баллов." },
        { q: "Когда начинать подготовку?", a: "За год до предполагаемого старта учёбы. Большую часть этого времени занимает язык: подтянуть уровень с B1 до нужного балла за пару месяцев не получается, а без сертификата заявку не примут." },
        { q: "В сколько вузов подавать?", a: "Обычно в четыре-пять: один-два амбициозных, два по профилю и один надёжный. UCAS ограничивает пятью программами за сезон, у остальных стран лимитов, как правило, нет." },
        { q: "Что если придёт отказ?", a: "Поэтому и подаём в несколько вузов. Если отказали везде, разбираем причину — чаще это балл или слабое мотивационное письмо — и готовим подачу на следующий набор или на Foundation." },
      ],
    },
    consult: {
      eyebrow: "Первый шаг",
      title1: "Разберём ваши шансы",
      titleHighlight: "бесплатно",
      text: "Посмотрим аттестат и баллы, назовём реалистичный список стран и вузов и скажем, чего не хватает.",
      info: [
        { label: "Формат", value: "Zoom или встреча в центре" },
        { label: "Длительность", value: "около 45 минут" },
      ],
      costLabel: "Стоимость",
      costValue: "бесплатно",
      successTitle: "Заявка отправлена!",
      successText: "Менеджер свяжется с вами в ближайшее время.",
      formTitle: "Подобрать программу",
      formText: "Менеджер свяжется с вами в ближайшее время.",
      form: {
        nameLabel: "Имя",
        namePh: "Айгерим",
        phoneLabel: "Телефон",
        phonePh: "+7 700 000 00 00",
        countryLabel: "Страна",
        countries: ["Великобритания", "Германия", "Канада", "ОАЭ", "США", "Ещё не решил(а)"],
        levelLabel: "Уровень",
        levels: ["Foundation", "Bachelor", "Pre-Master", "Пока не знаю"],
        yearLabel: "Год поступления",
        years: ["2026", "2027", "Ещё не решил(а)"],
        consent: "Согласен(а) на обработку персональных данных в соответствии с законом РК.",
        submit: "Отправить заявку",
        sending: "Отправляем…",
        error: "Что-то пошло не так. Попробуйте ещё раз или напишите в WhatsApp.",
      },
    },
  },

  kz: {
    hero: {
      breadcrumbHome: "Басты бет",
      breadcrumbCurrent: "Шетелдегі білім",
      title1: "Жоғары оқу орнына түсу",
      title2: "25+ елде",
      text: "Университетті аттестат, балл және бюджетке қарай таңдаймыз, құжаттарды дайындап, қабылдау хатына дейін алып барамыз. «Өтінім жібереміз» деп қана қоймай, нәтижеге жеткіземіз.",
      ctaPrimary: "Бағдарлама таңдау",
      ctaSecondary: "Елдер мен талаптар",
      stats: [
        ["25+", "Түсу елдері"],
        ["3", "Деңгей: Foundation, Bachelor, Pre-Master"],
        ["12", "Ай — тұтас өтінім циклі"],
        ["0 ₸", "Алғашқы кеңес"],
      ],
      card: {
        title: "Қабылдануға апарар жолыңыз",
        subtitle: "Барлық бюрократияны өзімізге аламыз",
        steps: [
          ["ЖОО мен стратегияны таңдау", "Мүмкіндікті бағалау, бағыт таңдау"],
          ["Құжаттарды жинау", "Аудармалар, мотивациялық хат"],
          ["Қабылдану және виза", "Өтінім беру, оффер алу"],
        ],
      },
    },
    countries: {
      eyebrow: "Бағыттар",
      title: "Бес негізгі ел",
      text: "Осы жүйелермен жиі жұмыс істейміз және олардың дедлайндарын жатқа білеміз. Қалған елдер — сұраныс бойынша.",
      items: [
        {
          name: "Ұлыбритания",
          rows: [
            ["Деңгейлер", "Foundation, Bachelor"],
            ["Тіл", "IELTS 6.0–7.0"],
            ["Өтінім", "UCAS"],
            ["Дедлайн", "қаңтар"],
          ],
        },
        {
          name: "Германия",
          rows: [
            ["Деңгейлер", "Foundation, Bachelor"],
            ["Тіл", "IELTS / неміс B2"],
            ["Мемлекеттік ЖОО", "оқу ақысыз"],
            ["Дедлайн", "шілде және қаңтар"],
          ],
        },
        {
          name: "Канада",
          rows: [
            ["Деңгейлер", "Foundation, Bachelor"],
            ["Тіл", "IELTS 6.0–6.5"],
            ["Оқудан кейін", "work permit"],
            ["Дедлайн", "қаңтар–наурыз"],
          ],
        },
        {
          name: "БАӘ",
          rows: [
            ["Деңгейлер", "Foundation, Bachelor"],
            ["Тіл", "IELTS 5.5–6.5"],
            ["Кампустар", "UK және US ЖОО филиалдары"],
            ["Дедлайн", "жылына бірнеше жинақ"],
          ],
        },
        {
          name: "АҚШ",
          rows: [
            ["Деңгейлер", "Bachelor, Pre-Master"],
            ["Емтихандар", "Digital SAT + IELTS"],
            ["Өтінім", "Common App"],
            ["Дедлайн", "қараша және қаңтар"],
          ],
        },
      ],
    },
    who: {
      eyebrow: "Кімге қолайлы",
      title: "Өзіңізді танисыз ба?",
      text: "Біз тек түлектермен ғана жұмыс істемейміз. Неғұрлым ерте бастасаңыз, соғұрлым көп мүмкіндік ашық қалады.",
      cta: "Іс-қимыл жоспарын алу",
      items: [
        {
          title: "11-сынып түлектеріне",
          text: "Өтінімге бір маусым қалды. Реалистік ЖОО тізімін жылдам анықтап, тіл балын жинап, дедлайндарды өткізіп алмау керек.",
        },
        {
          title: "9–10-сынып оқушыларына",
          text: "Қорда екі-үш жыл бар — ең тиімді жағдай. Тілді асықпай көтеріп, портфолио жинап, конкурстық бағдарламаларға көздеуге болады.",
        },
        {
          title: "Қаржыландыру маңызды болғандарға",
          text: "Шетелде оқу міндетті түрде толық төлемді білдірмейді. Қай жерде грант пен стипендия бар және оларға үміткер болу үшін не қажет екенін талдаймыз.",
        },
        {
          title: "Бұрын бас тартылғандарға",
          text: "Не дәл жұмыс істемегенін — балл, хат немесе бағдарлама таңдауын — талдап, келесі жинаққа өтінім дайындаймыз.",
        },
      ],
    },
    levels: {
      eyebrow: "Деңгейлер",
      title: "Дәл сізге неден бастау керек",
      text: "Аттестат пен тіл деңгейіне байланысты. Қазақстандық мектеп әрдайым бакалавриатқа тікелей кіруге мүмкіндік бермейді — және бұл қалыпты жағдай.",
      foundation: {
        badge: "1 жыл · Bachelor-ға өту",
        text: "Аттестаты тікелей өтпейтіндер үшін университет жанындағы дайындық жылы. Сол ЖОО-ның бірінші курсына өтумен аяқталады.",
      },
      bachelor: {
        badge: "3–4 жыл",
        text: "Мектептен кейінгі негізгі бағдарлама. Аттестат, тіл сертификаты, мотивациялық хат, кейде SAT қажет.",
      },
      premaster: {
        badge: "6–12 ай",
        text: "Академиялық бейін тікелей түсуге жеткіліксіз болса, шетелдегі бакалавриат пен магистратура арасындағы көпір.",
      },
    },
    whatWeDo: {
      eyebrow: "Қолдау",
      title: "Нені өзімізге аламыз",
      text: "Емтихандар мен визалық сұхбаттан басқасын — оларды өзіңіз тапсырасыз, бірақ екеуіне де дайындаймыз.",
      items: [
        { title: "Университет таңдау", text: "Бірнеше ЖОО тізімі: қормен, бейін бойынша және сенімді нұсқа. Рейтингтегі орынға емес, аттестат, балл, бюджет пен мүмкіндікке қараймыз." },
        { title: "Мотивациялық хат", text: "Қабылдау комиссиясының сұрағына жауап беретін, өмірбаянды қайталамайтын мәтін құрастыруға көмектесеміз. Жоба нұсқаларын жол-жолымен талдаймыз." },
        { title: "Құжаттар мен аудармалар", text: "Аттестат, транскрипт, ұсыныстар, анықтамалар. Жинақты әр ЖОО талабына сай тексереміз — олар көрінгеннен әлдеқайда өзгеше." },
        { title: "Өтінім беру", text: "Ұлыбритания үшін UCAS, АҚШ үшін Common App, қалған елдер үшін ЖОО порталдары. Өтінім соңғы түні кетпеуі үшін дедлайндарды бақылаймыз." },
        { title: "ЖОО-мен байланыс", text: "Қабылдау комиссиясының сұрауларына жауап береміз, мәртебені бақылаймыз және оффер келгенде орынды растауды еске саламыз." },
        { title: "Визаға дайындық", text: "Құжаттар топтамасын жинап, сұхбаттың типтік сұрақтары мен нақты елдегі өтінім тәртібін талдаймыз." },
      ],
    },
    money: {
      eyebrow: "Қаржыландыру",
      title: "Бұл шын мәнінде қанша тұрады",
      text: "Ең жиі кедергі — шетелде оқу санаулы адамға ғана қолжетімді деген сенім. Бюджетті құжат бермес бұрын адал талдаймыз.",
      budget: {
        badge: "Бюджет неден құралады",
        title: "Оқу ақысы — жалғыз бап емес",
        text: "Бәрін бірден санау керек, әйтпесе үшінші курсқа қаражат таусылады. Кеңесте нақты ел бойынша толық смета жинаймыз.",
        rows: [
          ["Оқу ақысы", "Германия мемлекеттік ЖОО-ларында 0 ₸-ден"],
          ["Тұру", "негізгі шығын бабы"],
          ["Виза мен сақтандыру", "бір реттік төлемдер"],
          ["Шоттағы депозит", "барлық жерде дерлік талап етіледі"],
          ["Қосымша жұмыс", "барлық елде рұқсат етілмеген"],
        ],
      },
      grants: {
        badge: "Гранттар мен стипендиялар",
        title: "Құнын қалай төмендетуге болады",
        text: "Толық жабуды санаулылар алады, ал ішінара жабу — әбден мүмкін. Бірақ стипендияға өтінімді түсуден кейін емес, қатар дайындайды.",
        rows: [
          ["ЖОО стипендиялары", "академиялық нәтиже үшін"],
          ["Мемлекеттік бағдарламалар", "әр елде өзінікі"],
          ["Не шешеді", "балл, эссе, портфолио"],
          ["Қашан беру керек", "ЖОО өтінімімен бірге"],
        ],
        special: ["Германия", "оқу грантсыз да тегін"],
        cta: "Бюджетті талқылау",
      },
    },
    timeline: {
      eyebrow: "Мерзімдер",
      title: "Түсуге дейінгі бір жыл",
      text: "Күзгі жинаққа арналған әдеттегі цикл. Басты қате — тілді енді көтеруге үлгермейтін дедлайнға үш ай қалғанда бастау.",
      items: [
        { when: "12 ай бұрын", title: "Ел мен деңгейді анықтаймыз", text: "Аттестат, бюджет пен мақсатты талдаймыз. Осы кезеңде Foundation қажет пе және қандай тіл балын жинау керектігі белгілі болады." },
        { when: "10 ай бұрын", title: "Емтихандарға дайындаламыз", text: "IELTS, қажет болса Digital SAT. Қайта тапсыруға қор қалдырамыз — қажетті балды бірінші реттен бәрі ала бермейді." },
        { when: "6 ай бұрын", title: "Құжаттарды жинаймыз", text: "Транскрипт, ұсыныстар, мотивациялық хат. Хат бірнеше рет қайта жазылады, сондықтан алдын ала бастаймыз." },
        { when: "4 ай бұрын", title: "Өтінім береміз", text: "UCAS, Common App немесе ЖОО порталдары. Бір жауапқа тәуелді болмау үшін бірден бірнеше университетке береміз." },
        { when: "2 ай бұрын", title: "Оффер және виза", text: "Орынды растаймыз, депозит енгіземіз, виза топтамасын жинап, сұхбатқа дайындаламыз." },
        { when: "Тамыз–қыркүйек", title: "Аттану", text: "Тұрғын үй, сақтандыру, билеттер және алғашқы апталар. Қабылданғаннан кейін де байланыста боламыз." },
      ],
    },
    faq: {
      eyebrow: "Сұрақтар",
      title: "Шетелге түсу туралы",
      items: [
        { q: "Қазақстандық аттестат жеткілікті ме?", a: "Кейбір елдер үшін — иә, ал Ұлыбритания мен Канаданың бірқатар бағдарламасы үшін әдетте Foundation қажет, өйткені онда мектеп ұзағырақ оқылады. Бұл бас тарту емес, университет жанындағы қосымша жыл, одан кейін бірінші курсқа өтесіз." },
        { q: "Тегін оқуға бола ма?", a: "Германияның мемлекеттік ЖОО-ларында оқу ақысы жоқ — тек семестрлік жарна мен өмір сүру шығыны қалады. Басқа елдерде стипендия мен грант болады, бірақ олар конкурстық және жоғары балл талап етеді." },
        { q: "Дайындықты қашан бастау керек?", a: "Оқудың болжамды басталуынан бір жыл бұрын. Бұл уақыттың көбін тіл алады: деңгейді B1-ден қажетті балға бірер айда көтеру мүмкін емес, ал сертификатсыз өтінім қабылданбайды." },
        { q: "Неше ЖОО-ға өтінім беру керек?", a: "Әдетте төрт-бесеу: бір-екі амбициялы, екеуі бейін бойынша және біреуі сенімді. UCAS маусымына бес бағдарламамен шектейді, қалған елдерде әдетте шектеу жоқ." },
        { q: "Бас тарту келсе ше?", a: "Сондықтан да бірнеше ЖОО-ға береміз. Барлық жерден бас тартса, себебін талдаймыз — көбіне бұл балл немесе әлсіз мотивациялық хат — және келесі жинаққа не Foundation-ға өтінім дайындаймыз." },
      ],
    },
    consult: {
      eyebrow: "Алғашқы қадам",
      title1: "Мүмкіндіктеріңізді бағалаймыз —",
      titleHighlight: "тегін",
      text: "Аттестат пен балдарды қараймыз, елдер мен ЖОО-лардың реалистік тізімін ұсынамыз және не жетіспейтінін айтамыз.",
      info: [
        { label: "Формат", value: "Zoom немесе орталықтағы кездесу" },
        { label: "Ұзақтығы", value: "шамамен 45 минут" },
      ],
      costLabel: "Құны",
      costValue: "тегін",
      successTitle: "Өтінім жіберілді!",
      successText: "Менеджер жақын арада хабарласады.",
      formTitle: "Бағдарлама таңдау",
      formText: "Менеджер жақын арада хабарласады.",
      form: {
        nameLabel: "Аты",
        namePh: "Айгерім",
        phoneLabel: "Телефон",
        phonePh: "+7 700 000 00 00",
        countryLabel: "Ел",
        countries: ["Ұлыбритания", "Германия", "Канада", "БАӘ", "АҚШ", "Әлі шешкен жоқпын"],
        levelLabel: "Деңгей",
        levels: ["Foundation", "Bachelor", "Pre-Master", "Әзірге білмеймін"],
        yearLabel: "Түсу жылы",
        years: ["2026", "2027", "Әлі шешкен жоқпын"],
        consent: "ҚР заңнамасына сәйкес дербес деректерді өңдеуге келісемін.",
        submit: "Өтінім жіберу",
        sending: "Жіберілуде…",
        error: "Бірдеңе дұрыс болмады. Қайталап көріңіз немесе WhatsApp-қа жазыңыз.",
      },
    },
  },

  en: {
    hero: {
      breadcrumbHome: "Home",
      breadcrumbCurrent: "Study Abroad",
      title1: "Admission to universities in",
      title2: "25+ countries",
      text: "We match a university to your school record, scores and budget, prepare your documents and see you through to the offer letter. Not just “we'll send the application” — we take it to the result.",
      ctaPrimary: "Find a programme",
      ctaSecondary: "Countries and requirements",
      stats: [
        ["25+", "Admission countries"],
        ["3", "Levels: Foundation, Bachelor, Pre-Master"],
        ["12", "Months — a typical application cycle"],
        ["0 ₸", "Initial consultation"],
      ],
      card: {
        title: "Your path to enrolment",
        subtitle: "We take on all the paperwork",
        steps: [
          ["University and strategy selection", "Assessing your chances, choosing a direction"],
          ["Gathering documents", "Translations, motivation letter"],
          ["Enrolment and visa", "Submitting the application, receiving the offer"],
        ],
      },
    },
    countries: {
      eyebrow: "Directions",
      title: "Five key countries",
      text: "We work with these systems most often and know their deadlines by heart. Other countries — on request.",
      items: [
        {
          name: "United Kingdom",
          rows: [
            ["Levels", "Foundation, Bachelor"],
            ["Language", "IELTS 6.0–7.0"],
            ["Application", "UCAS"],
            ["Deadline", "January"],
          ],
        },
        {
          name: "Germany",
          rows: [
            ["Levels", "Foundation, Bachelor"],
            ["Language", "IELTS / German B2"],
            ["State universities", "no tuition fees"],
            ["Deadline", "July and January"],
          ],
        },
        {
          name: "Canada",
          rows: [
            ["Levels", "Foundation, Bachelor"],
            ["Language", "IELTS 6.0–6.5"],
            ["After studies", "work permit"],
            ["Deadline", "January–March"],
          ],
        },
        {
          name: "UAE",
          rows: [
            ["Levels", "Foundation, Bachelor"],
            ["Language", "IELTS 5.5–6.5"],
            ["Campuses", "UK and US university branches"],
            ["Deadline", "several intakes a year"],
          ],
        },
        {
          name: "USA",
          rows: [
            ["Levels", "Bachelor, Pre-Master"],
            ["Exams", "Digital SAT + IELTS"],
            ["Application", "Common App"],
            ["Deadline", "November and January"],
          ],
        },
      ],
    },
    who: {
      eyebrow: "Who it's for",
      title: "Recognise yourself?",
      text: "We don't only work with graduates. The earlier you start, the more options stay open.",
      cta: "Get an action plan",
      items: [
        {
          title: "For 11th-grade graduates",
          text: "One season remains before applications. You need to quickly define a realistic list of universities, top up your language score and not miss the deadlines.",
        },
        {
          title: "For students in grades 9–10",
          text: "You have two or three years in reserve — the strongest position. You can calmly build your language, assemble a portfolio and aim for competitive programmes.",
        },
        {
          title: "For those who care about funding",
          text: "Studying abroad doesn't necessarily mean paying in full. We look at where grants and scholarships exist and what it takes to qualify for them.",
        },
        {
          title: "For those who've already had a rejection",
          text: "We work out exactly what didn't work — the score, the letter or the choice of programme — and prepare an application for the next intake.",
        },
      ],
    },
    levels: {
      eyebrow: "Levels",
      title: "Where you should start",
      text: "It depends on your school record and language level. A Kazakh school doesn't always give direct entry to a bachelor's — and that's normal.",
      foundation: {
        badge: "1 year · progression to Bachelor",
        text: "A preparatory year at the university for those whose school record doesn't qualify directly. It ends with progression to the first year of the same university.",
      },
      bachelor: {
        badge: "3–4 years",
        text: "The main programme after school. You need a school record, a language certificate, a motivation letter and sometimes SAT.",
      },
      premaster: {
        badge: "6–12 months",
        text: "A bridge between a bachelor's and a master's abroad when your academic profile isn't enough for direct admission.",
      },
    },
    whatWeDo: {
      eyebrow: "Support",
      title: "What we take on",
      text: "Everything except the exams and the visa interview — you take those yourself, but we prepare you for both.",
      items: [
        { title: "University selection", text: "A list of several universities: an ambitious pick, ones that match your profile and a safe option. We look at your record, scores, budget and chances, not at ranking position." },
        { title: "Motivation letter", text: "We help craft a text that answers the admissions committee's question rather than retelling your biography. We go through drafts line by line." },
        { title: "Documents and translations", text: "School record, transcript, references, certificates. We check the set against each university's requirements — they differ more than you'd think." },
        { title: "Submitting applications", text: "UCAS for the UK, Common App for the USA, university portals for other countries. We keep an eye on deadlines so the application doesn't go out on the last night." },
        { title: "Communication with the university", text: "We respond to the admissions committee's requests, track the status and remind you to confirm your place when the offer arrives." },
        { title: "Visa preparation", text: "We assemble the document package and go through typical interview questions and the application procedure for the specific country." },
      ],
    },
    money: {
      eyebrow: "Funding",
      title: "What it really costs",
      text: "The most common stopper is the belief that studying abroad is only for a select few. We break down the budget honestly, before you apply.",
      budget: {
        badge: "What the budget is made of",
        title: "Tuition isn't the only line item",
        text: "You need to count everything at once, otherwise the money runs out by the third year. In the consultation we put together a full estimate for the specific country.",
        rows: [
          ["Tuition", "from 0 ₸ at Germany's state universities"],
          ["Accommodation", "the main expense"],
          ["Visa and insurance", "one-off payments"],
          ["Deposit in your account", "required almost everywhere"],
          ["Part-time work", "not allowed in every country"],
        ],
      },
      grants: {
        badge: "Grants and scholarships",
        title: "How to lower the cost",
        text: "Full coverage goes to a few, but partial coverage is quite realistic. A scholarship application is prepared alongside admission, not after it.",
        rows: [
          ["University scholarships", "for academic results"],
          ["Government programmes", "each country has its own"],
          ["What matters", "scores, essay, portfolio"],
          ["When to apply", "together with the university application"],
        ],
        special: ["Germany", "tuition is free even without a grant"],
        cta: "Discuss the budget",
      },
    },
    timeline: {
      eyebrow: "Timeline",
      title: "The year before admission",
      text: "A typical cycle for the autumn intake. The main mistake is starting three months before the deadline, when there's no time left to build your language.",
      items: [
        { when: "12 months out", title: "We define the country and level", text: "We look at your school record, budget and goal. At this stage it becomes clear whether you need Foundation and what language score you'll have to reach." },
        { when: "10 months out", title: "We prepare for the exams", text: "IELTS, and Digital SAT if needed. We leave a margin for a retake — not everyone gets the required score on the first try." },
        { when: "6 months out", title: "We gather the documents", text: "Transcript, references, motivation letter. The letter gets rewritten several times, so we start early." },
        { when: "4 months out", title: "We submit applications", text: "UCAS, Common App or university portals. We apply to several universities at once so as not to depend on a single answer." },
        { when: "2 months out", title: "Offer and visa", text: "We confirm the place, pay the deposit, assemble the visa package and prepare for the interview." },
        { when: "August–September", title: "Departure", text: "Housing, insurance, tickets and the first weeks on the ground. We stay in touch even after enrolment." },
      ],
    },
    faq: {
      eyebrow: "Questions",
      title: "About studying abroad",
      items: [
        { q: "Is a Kazakh school record enough?", a: "For some countries — yes; for the UK and a number of Canadian programmes Foundation is usually required, because school there lasts longer. It's not a rejection but an extra year at the university, after which you move on to the first year." },
        { q: "Can you study for free?", a: "State universities in Germany charge no tuition — only a semester fee and living costs remain. Other countries have scholarships and grants, but they are competitive and require high scores." },
        { q: "When should you start preparing?", a: "A year before your intended start of studies. Most of that time goes on language: you can't lift your level from B1 to the required score in a couple of months, and without a certificate the application won't be accepted." },
        { q: "How many universities should you apply to?", a: "Usually four or five: one or two ambitious, two matching your profile and one safe. UCAS limits you to five programmes per season; other countries generally have no limits." },
        { q: "What if you get a rejection?", a: "That's exactly why we apply to several universities. If you're rejected everywhere, we analyse the reason — usually the score or a weak motivation letter — and prepare an application for the next intake or for Foundation." },
      ],
    },
    consult: {
      eyebrow: "First step",
      title1: "We'll assess your chances",
      titleHighlight: "for free",
      text: "We'll look at your school record and scores, name a realistic list of countries and universities and tell you what's missing.",
      info: [
        { label: "Format", value: "Zoom or a meeting at the centre" },
        { label: "Duration", value: "about 45 minutes" },
      ],
      costLabel: "Cost",
      costValue: "free",
      successTitle: "Request sent!",
      successText: "Our manager will contact you shortly.",
      formTitle: "Find a programme",
      formText: "Our manager will contact you shortly.",
      form: {
        nameLabel: "Name",
        namePh: "Aigerim",
        phoneLabel: "Phone",
        phonePh: "+7 700 000 00 00",
        countryLabel: "Country",
        countries: ["United Kingdom", "Germany", "Canada", "UAE", "USA", "Not decided yet"],
        levelLabel: "Level",
        levels: ["Foundation", "Bachelor", "Pre-Master", "Not sure yet"],
        yearLabel: "Year of admission",
        years: ["2026", "2027", "Not decided yet"],
        consent: "I agree to the processing of personal data in accordance with the laws of Kazakhstan.",
        submit: "Send request",
        sending: "Sending…",
        error: "Something went wrong. Please try again or message us on WhatsApp.",
      },
    },
  },
};

export type AbroadDict = typeof dict.ru;

export function getAbroadDict(locale: Locale): AbroadDict {
  return dict[locale];
}
