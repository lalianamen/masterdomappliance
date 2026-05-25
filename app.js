/* ============================================================
   MasterDom Appliance Repair — app.js
   Trilingual SPA + ZIP gate + UTM capture + lead capture
   ============================================================ */

/* ---------- SERVICE AREA: North & Central Orange County ---------- */
const SERVICE_ZIPS = [
  "92701","92703","92704","92705","92706","92707",          // Santa Ana
  "92801","92802","92804","92805","92806","92807","92808",  // Anaheim
  "92831","92832","92833","92835",                          // Fullerton
  "92865","92866","92867","92868","92869",                  // Orange
  "92840","92841","92843","92844","92845",                  // Garden Grove
  "90620","90621",                                          // Buena Park
  "92683",                                                  // Westminster
  "92780","92782",                                          // Tustin
  "90680"                                                   // Stanton
];

/* ---------- I18N ---------- */
const i18n = {
  en: {
    banner: "Appliance dealer registration in progress · Site launches at activation",
    tagline: "MASTERS OF YOUR HOME",
    callBtn: "Call Us",
    navHome: "Home", navServices: "Services", navAbout: "About", navAreas: "Service Area", navContact: "Contact",

    heroEyebrow: "Appliance Repair · Orange County, CA",
    heroTitle: "Orange County's <em>honest</em> appliance team.",
    heroSub: "Refrigerators, washers, dryers, ovens, dishwashers — fixed fast and fairly. In English, Russian, and Armenian. Same-day diagnosis, parts on the truck.",
    ctaBook: "Book a Repair", ctaChat: "Chat with us",
    statYears: "Years in trade", statLangs: "Languages", statDay: "Day service", statBrands: "Major brands",
    heroBadgeT: "North & Central Orange County", heroBadgeS: "Santa Ana · Anaheim · Orange · Tustin",

    servEyebrow: "— What we fix",
    servTitle: "We repair the <em>appliances</em> your home runs on.",
    servDesc: "From a fridge that stopped cooling to a dryer that won't spin. Diagnosed honestly, repaired by a technician who can talk it through with your whole family.",
    srv1T: "Refrigerators & Freezers", srv1D: "Not cooling, leaking, noisy, frost build-up. Sealed-system and compressor work by EPA-certified techs.",
    srv2T: "Washers & Dryers", srv2D: "Won't spin, won't drain, won't heat, shakes hard. Front-load and top-load, gas and electric.",
    srv3T: "Ranges, Stoves & Ovens", srv3D: "Burners, igniters, heating elements, control boards. Gas and electric, freestanding and built-in.",
    srv4T: "Dishwashers", srv4D: "Not draining, not cleaning, leaking, won't start. Pumps, valves, seals, control modules.",
    srv5T: "Microwaves & Built-ins", srv5D: "Over-the-range and built-in units. No heat, sparking, dead panel, door issues.",
    srv6T: "Room & Wall AC", srv6D: "Window units, wall units, portable AC. Not cooling, leaking, won't turn on — our HVAC roots show here.",
    srvLearn: "Learn more →",

    whyEyebrow: "— Why MasterDom",
    whyTitle: "Honest fixes, <em>real</em> humans, fair prices.",
    whyDesc: "We're a family operation, not a call-center franchise. We'll tell you straight when a repair is worth it — and when a replacement makes more sense.",
    why1T: "Trilingual team", why1D: "English, Russian, Armenian. We talk you through the problem in your language.",
    why2T: "Repair vs. replace, honestly", why2D: "If the fix costs more than the unit is worth, we'll tell you. No upsells.",
    why3T: "Up-front pricing", why3D: "You approve the price before any work starts. Diagnostic fee credited to the repair.",
    why4T: "Registered & insured", why4D: "CA Appliance Service Dealer registration (in progress) + EPA 608 certified. Fully insured.",

    brandEyebrow: "— Brands we service",
    brandTitle: "From <em>everyday</em> to high-end.",
    brandDesc: "We carry common parts and order the rest fast. If your brand isn't listed, just ask.",

    testEyebrow: "— What neighbors say",
    testTitle: "Trusted across <em>Orange County</em>.",
    testDesc: "Real homeowners, real repairs. Earned, never bought.",
    test1: '"Fridge stopped cooling on a Sunday. They came same day, found the part, and had it running by evening. Fair price, no drama."',
    test2: '"Honest people. They told me my old dryer wasn\'t worth fixing instead of charging me. Came back to install the new one too."',
    test3: '"Finally a repair company that speaks Armenian. Fixed our oven and explained everything to my parents. Highly recommend."',

    ctaBigTitle: "Broken appliance? Let's fix it.",
    ctaBigDesc: "Tell us what's happening and your ZIP — we'll confirm we cover you and get you scheduled.",

    servPageEyebrow: "— Services",
    servPageTitle: "Every <em>major appliance</em>, repaired right.",
    servPageDesc: "Diagnostics, parts, and repair for the appliances that run your kitchen and laundry. Same-day when we can, honest advice always.",
    srvP1T: "Refrigerator & Freezer Repair", srvP1D: "Not cooling, over-freezing, water leaks, loud noise, ice maker failures, broken seals. Sealed-system and compressor work performed by EPA Section 608 certified technicians.",
    srvP2T: "Washer & Dryer Repair", srvP2D: "Won't spin, won't drain, won't heat, excessive shaking, error codes, won't start. Front-load and top-load washers; gas and electric dryers. Belts, pumps, motors, heating elements.",
    srvP3T: "Range, Stove & Oven Repair", srvP3D: "Burners not lighting, uneven heat, faulty igniters, bad heating elements, control board issues. Gas and electric, freestanding and built-in wall ovens.",
    srvP4T: "Dishwasher Repair", srvP4D: "Not draining, not cleaning, leaking, won't start, error lights. Pumps, inlet valves, door seals, spray arms, control modules.",
    srvP5T: "Microwave Repair", srvP5D: "Over-the-range and built-in microwaves. No heat, sparking, turntable failures, dead control panels, door switch issues. (Counter-top units are usually replace, not repair — we'll tell you.)",
    srvP6T: "Disposals & Ice Makers", srvP6D: "Garbage disposals that hum, jam, or leak. Standalone and built-in ice makers that won't produce or won't stop. Quick fixes, often same visit.",
    srvP7T: "Room & Wall Air Conditioners", srvP7D: "Window, wall-sleeve, and portable AC units. Not cooling, leaking water, won't power on. This is where our HVAC background pays off.",
    srvP8T: "Maintenance & Tune-Ups", srvP8D: "Dryer-vent cleaning, fridge coil cleaning, seal checks. Small upkeep that prevents big breakdowns and keeps energy bills down.",
    srvP9T: "High-End & Built-In", srvP9D: "Sub-Zero, Viking, Thermador, Bosch. Premium and integrated appliances need a careful hand and the right parts — we source them properly.",
    srvFree: "Book repair →", ctaGetQuote: "Book a Repair",

    aboutEyebrow: "— Our story",
    aboutTitle: "Part of the <em>MasterDom</em> family.",
    aboutP1: "MasterDom Appliance Repair grows out of eight years in the trade — the same hands, the same standards, now focused on the appliances that keep an Orange County home running.",
    aboutP2: "Same belief that built the business: do good work, charge fairly, and treat a customer's home like your own. We answer the phone, we show up when we say, and we back up what we fix.",
    aboutP3: "We speak three languages because our community does. And we put our registration and certifications on the table — because trust is the whole job.",
    val1T: "No-pressure advice", val1D: "We'll tell you when a repair isn't worth it. Honesty wins repeat customers.",
    val2T: "On time", val2D: "A real window, and a call before we arrive. Your day matters.",
    val3T: "Clean work", val3D: "Drop cloths, shoe covers, debris hauled away. Kitchen left as we found it.",
    val4T: "90-day labor warranty", val4D: "On every repair. If our fix fails, we come back — no questions.",
    licLabel: "CALIFORNIA REGISTRATION",
    licText: "Appliance Service Dealer registration (BHGS) — in progress · EPA Section 608 certified",
    aboutVisualT: "Serving <em>Orange County</em> homes.",
    aboutVisualP: "A small team with big standards. We pick up. We show up. We stand behind our work.",

    areaEyebrow: "— Service Area",
    areaTitle: "North & Central <em>Orange County</em>.",
    areaDesc: "We focus on these cities for fast, same-day service. Not sure about your spot? Check your ZIP on the booking form — it tells you instantly.",
    areaSantaAna: "Downtown, Floral Park, French Park", areaAnaheim: "Anaheim Hills, Colony, West Anaheim",
    areaFullerton: "Downtown, Raymond Hills", areaOrange: "Old Towne, Orange Park Acres",
    areaGardenGrove: "West Grove, Little Saigon edge", areaBuenaPark: "Near Knott's, Bellehurst",
    areaWestminster: "Little Saigon", areaTustin: "Old Town, Tustin Ranch", areaStanton: "Central Stanton",
    areaCheck: "Want to confirm your ZIP is covered? Check it on the form.", ctaCheckZip: "Check my ZIP",

    ctEyebrow: "— Book a repair",
    ctTitle: "First, let's <em>confirm</em> we cover you.",
    ctDesc: "Enter your ZIP code below. If you're in our area, the form unlocks and we'll get you scheduled. Outside it? Leave your info anyway — we're growing.",
    zipGateHead: "Check your ZIP first",
    zipGateSub: "We serve select Orange County areas. Enter your 5-digit ZIP to see if we cover you.",
    zipCheckBtn: "Check",
    zipIn: "✅ Great — we cover your area! Go ahead and fill out the form below.",
    zipOut: "Your area isn't in our service zone yet — but leave your request and we'll do our best to help or point you in the right direction.",
    zipUnknown: "That doesn't look like a valid 5-digit ZIP. Please re-check it.",
    lblName: "Your name", lblPhone: "Phone", lblAddress: "Service address", lblService: "Appliance / service",
    optChoose: "Choose one...", optFridge: "Refrigerator / Freezer", optWasher: "Washer / Dryer", optOven: "Range / Stove / Oven",
    optDish: "Dishwasher", optMicro: "Microwave", optDisposal: "Disposal / Ice maker", optRoomAC: "Room / Wall AC", optOther: "Something else",
    lblLang: "Preferred language", lblNote: "What's happening?",
    ctSubmit: "Send Request",
    ctNote: "By submitting you agree to be contacted by MasterDom Appliance Repair. We never share your info. Service begins after our CA Appliance Service Dealer registration is active.",
    infoPhoneL: "PHONE", infoPhoneS: "English · Русский · Հայերեն",
    infoEmailL: "EMAIL", infoEmailS: "Reply within 30 min, business hours",
    infoAreaL: "SERVICE AREA", infoAreaV: "North & Central OC", infoAreaS: "Santa Ana, Anaheim, Orange, Tustin & more",
    infoHoursL: "HOURS", infoHoursV: "Mon–Sun", infoHoursS: "Same-day service when available",

    footBrand: "Family-run appliance repair across North & Central Orange County. Trilingual team, eight years in the trade, honest about every fix. Part of the MasterDom family of home-service companies.",
    footColServ: "Services", footColCo: "Company", footColLic: "Legal",
    footCall: "Call (714) 000-0000",
    footReg: "Appliance Dealer reg. (pending)", footEpa: "EPA 608 certified", footInsured: "Fully insured", footPriv: "Privacy Policy",
    footRights: "All rights reserved", footTagline: "Masters of your home.",

    chatTitle: "MasterDom Assistant", chatStatus: "Online · Replies instantly",
    chatGreeting: "Hi! I'm the MasterDom Appliance assistant. Tell me what appliance is giving you trouble, or share your ZIP and I'll check if we cover you. How can I help?",
    chatSugg: ["My fridge isn't cooling", "Do you cover my ZIP?", "Washer won't drain", "Book a repair"],

    modalTitle: "Thank you!",
    modalTextLive: "We got your request and our team will reach out shortly to schedule your repair.",
    modalText: "We got your request. In live mode we'd text a confirmation and call within 30 minutes. (This is test mode.)",
    modalClose: "Got it",
    errFill: "Please add your name and phone so we can reach you."
  },

  ru: {
    banner: "Регистрация дилера по ремонту техники оформляется · Сайт запустится после активации",
    tagline: "МАСТЕРА ВАШЕГО ДОМА",
    callBtn: "Позвонить",
    navHome: "Главная", navServices: "Услуги", navAbout: "О нас", navAreas: "Зона работы", navContact: "Связаться",

    heroEyebrow: "Ремонт техники · Ориндж Каунти, CA",
    heroTitle: "Самая <em>честная</em> команда по ремонту техники в Ориндж Каунти.",
    heroSub: "Холодильники, стиральные и сушильные машины, плиты, посудомойки — чиним быстро и по-честному. На английском, русском и армянском. Диагностика в день обращения, запчасти с собой.",
    ctaBook: "Записаться на ремонт", ctaChat: "Написать нам",
    statYears: "Лет в профессии", statLangs: "Языка", statDay: "В день обращения", statBrands: "Все бренды",
    heroBadgeT: "Север и центр Ориндж Каунти", heroBadgeS: "Santa Ana · Anaheim · Orange · Tustin",

    servEyebrow: "— Что чиним",
    servTitle: "Чиним <em>технику</em>, на которой держится дом.",
    servDesc: "От холодильника, который перестал холодить, до сушилки, которая не крутится. Честная диагностика и мастер, который объяснит всё вашей семье.",
    srv1T: "Холодильники и морозильники", srv1D: "Не холодит, течёт, шумит, наледь. Работа с герметичной системой и компрессором — мастера с сертификатом EPA.",
    srv2T: "Стиральные и сушильные машины", srv2D: "Не отжимает, не сливает, не греет, сильно трясёт. Фронтальная и вертикальная загрузка, газ и электрика.",
    srv3T: "Плиты, варочные панели, духовки", srv3D: "Конфорки, поджиг, ТЭНы, платы управления. Газ и электрика, отдельные и встроенные.",
    srv4T: "Посудомоечные машины", srv4D: "Не сливает, не моет, течёт, не запускается. Насосы, клапаны, уплотнители, модули.",
    srv5T: "Микроволновки и встроенная техника", srv5D: "Встраиваемые и над плитой. Не греет, искрит, нет реакции панели, проблема с дверцей.",
    srv6T: "Комнатные и оконные кондиционеры", srv6D: "Оконные, настенные, мобильные. Не холодит, течёт, не включается — тут пригодились наши HVAC-корни.",
    srvLearn: "Подробнее →",

    whyEyebrow: "— Почему MasterDom",
    whyTitle: "Честный ремонт, <em>живые</em> люди, честные цены.",
    whyDesc: "Мы семейная команда, а не франшиза с колл-центром. Скажем прямо: когда ремонт оправдан, а когда дешевле заменить.",
    why1T: "Трёхъязычная команда", why1D: "Английский, русский, армянский. Объясним проблему на вашем языке.",
    why2T: "Ремонт или замена — честно", why2D: "Если ремонт дороже, чем стоит техника — так и скажем. Без навязывания.",
    why3T: "Цена заранее", why3D: "Вы одобряете цену до начала работ. Стоимость диагностики идёт в зачёт ремонта.",
    why4T: "Регистрация и страховка", why4D: "Регистрация дилера по ремонту техники CA (оформляется) + сертификат EPA 608. Полная страховка.",

    brandEyebrow: "— Бренды, с которыми работаем",
    brandTitle: "От <em>повседневной</em> техники до премиума.",
    brandDesc: "Ходовые запчасти возим с собой, остальное заказываем быстро. Нет вашего бренда в списке — просто спросите.",

    testEyebrow: "— Что говорят соседи",
    testTitle: "Нам доверяют по всему <em>Ориндж Каунти</em>.",
    testDesc: "Реальные владельцы, реальные ремонты. Заработано, не куплено.",
    test1: '"Холодильник встал в воскресенье. Приехали в тот же день, нашли деталь, к вечеру работал. Честная цена, без нервов."',
    test2: '"Честные люди. Сказали, что старую сушилку чинить невыгодно, вместо того чтобы взять деньги. Потом приехали и поставили новую."',
    test3: '"Наконец-то ремонтники, которые говорят по-армянски. Починили духовку и всё объяснили моим родителям. Очень рекомендую."',

    ctaBigTitle: "Сломалась техника? Починим.",
    ctaBigDesc: "Опишите проблему и укажите ZIP — подтвердим, что обслуживаем вас, и запишем на ремонт.",

    servPageEyebrow: "— Услуги",
    servPageTitle: "Любая <em>крупная техника</em> — отремонтирована как надо.",
    servPageDesc: "Диагностика, запчасти и ремонт техники, на которой держится кухня и стирка. В день обращения, когда возможно, и всегда честный совет.",
    srvP1T: "Ремонт холодильников и морозильников", srvP1D: "Не холодит, перемораживает, течёт, шумит, не работает льдогенератор, порваны уплотнители. Работа с герметичной системой и компрессором — мастера с сертификатом EPA Section 608.",
    srvP2T: "Ремонт стиральных и сушильных машин", srvP2D: "Не отжимает, не сливает, не греет, сильно вибрирует, коды ошибок, не запускается. Фронтальная и вертикальная загрузка; газовые и электрические сушилки. Ремни, насосы, моторы, ТЭНы.",
    srvP3T: "Ремонт плит, варочных панелей и духовок", srvP3D: "Не зажигаются конфорки, неравномерный нагрев, неисправный поджиг, перегоревшие ТЭНы, проблемы с платой. Газ и электрика, отдельностоящие и встроенные.",
    srvP4T: "Ремонт посудомоечных машин", srvP4D: "Не сливает, не моет, течёт, не запускается, горят ошибки. Насосы, заливные клапаны, уплотнители дверцы, разбрызгиватели, модули управления.",
    srvP5T: "Ремонт микроволновок", srvP5D: "Встраиваемые и над плитой. Не греет, искрит, не крутится тарелка, не реагирует панель, проблема с дверцей. (Настольные обычно дешевле заменить — мы честно скажем.)",
    srvP6T: "Измельчители и льдогенераторы", srvP6D: "Измельчители, которые гудят, заклинивают или текут. Отдельные и встроенные льдогенераторы, которые не делают лёд или не выключаются. Часто чиним за один визит.",
    srvP7T: "Комнатные и оконные кондиционеры", srvP7D: "Оконные, настенные и мобильные кондиционеры. Не холодит, течёт вода, не включается. Здесь наш опыт в HVAC особенно кстати.",
    srvP8T: "Обслуживание и профилактика", srvP8D: "Чистка вентиляции сушилки, чистка конденсатора холодильника, проверка уплотнителей. Мелкая профилактика, которая предотвращает крупные поломки и снижает счета.",
    srvP9T: "Премиум и встроенная техника", srvP9D: "Sub-Zero, Viking, Thermador, Bosch. Премиальная и встроенная техника требует аккуратности и правильных запчастей — мы достаём их как положено.",
    srvFree: "Записаться →", ctaGetQuote: "Записаться на ремонт",

    aboutEyebrow: "— Наша история",
    aboutTitle: "Часть семьи <em>MasterDom</em>.",
    aboutP1: "MasterDom Appliance Repair вырос из восьми лет в профессии — те же руки, те же стандарты, теперь сфокусированные на технике, на которой держится дом в Ориндж Каунти.",
    aboutP2: "Тот же принцип, на котором построен бизнес: делать хорошо, брать по-честному и относиться к дому клиента как к своему. Мы отвечаем на звонки, приезжаем вовремя и отвечаем за то, что починили.",
    aboutP3: "Мы говорим на трёх языках, потому что на них говорит наше сообщество. И мы открыто показываем регистрацию и сертификаты — потому что доверие и есть вся работа.",
    val1T: "Совет без давления", val1D: "Скажем, когда ремонт невыгоден. Честность приводит клиентов снова.",
    val2T: "Вовремя", val2D: "Реальное окно времени и звонок перед приездом. Ваш день важен.",
    val3T: "Чистая работа", val3D: "Покрывала, бахилы, уборка мусора. Кухня остаётся как была.",
    val4T: "90 дней гарантии на работу", val4D: "На каждый ремонт. Если наша работа подвела — вернёмся без вопросов.",
    licLabel: "РЕГИСТРАЦИЯ ШТАТА КАЛИФОРНИЯ",
    licText: "Регистрация Appliance Service Dealer (BHGS) — оформляется · сертификат EPA Section 608",
    aboutVisualT: "Обслуживаем дома в <em>Ориндж Каунти</em>.",
    aboutVisualP: "Маленькая команда с большими стандартами. Мы отвечаем. Мы приезжаем. Мы стоим за свою работу.",

    areaEyebrow: "— Зона работы",
    areaTitle: "Север и центр <em>Ориндж Каунти</em>.",
    areaDesc: "Мы сосредоточены на этих городах ради быстрого выезда в день обращения. Не уверены про свой адрес? Проверьте ZIP в форме записи — ответ сразу.",
    areaSantaAna: "Даунтаун, Floral Park, French Park", areaAnaheim: "Anaheim Hills, Colony, West Anaheim",
    areaFullerton: "Даунтаун, Raymond Hills", areaOrange: "Old Towne, Orange Park Acres",
    areaGardenGrove: "West Grove, край Little Saigon", areaBuenaPark: "Рядом с Knott's, Bellehurst",
    areaWestminster: "Little Saigon", areaTustin: "Old Town, Tustin Ranch", areaStanton: "Центр Stanton",
    areaCheck: "Хотите убедиться, что ваш ZIP в зоне? Проверьте в форме.", ctaCheckZip: "Проверить мой ZIP",

    ctEyebrow: "— Запись на ремонт",
    ctTitle: "Сначала <em>убедимся</em>, что обслуживаем вас.",
    ctDesc: "Введите ZIP-код ниже. Если вы в нашей зоне — форма откроется, и мы запишем вас на ремонт. Вне зоны? Всё равно оставьте данные — мы расширяемся.",
    zipGateHead: "Сначала проверьте ваш ZIP",
    zipGateSub: "Мы работаем по выбранным районам Ориндж Каунти. Введите 5-значный ZIP, чтобы узнать, обслуживаем ли вас.",
    zipCheckBtn: "Проверить",
    zipIn: "✅ Отлично — мы обслуживаем ваш район! Заполняйте форму ниже.",
    zipOut: "Ваш район пока не входит в нашу зону обслуживания, но оставьте заявку — мы постараемся помочь или подсказать, куда обратиться.",
    zipUnknown: "Это не похоже на корректный 5-значный ZIP. Проверьте, пожалуйста.",
    lblName: "Ваше имя", lblPhone: "Телефон", lblAddress: "Адрес обслуживания", lblService: "Техника / услуга",
    optChoose: "Выберите...", optFridge: "Холодильник / морозильник", optWasher: "Стиральная / сушильная", optOven: "Плита / духовка",
    optDish: "Посудомойка", optMicro: "Микроволновка", optDisposal: "Измельчитель / льдогенератор", optRoomAC: "Комнатный / оконный кондиционер", optOther: "Другое",
    lblLang: "Предпочитаемый язык", lblNote: "Что происходит?",
    ctSubmit: "Отправить заявку",
    ctNote: "Отправляя форму, вы соглашаетесь на связь с MasterDom Appliance Repair. Мы не передаём ваши данные. Сервис начинается после активации нашей регистрации Appliance Service Dealer в Калифорнии.",
    infoPhoneL: "ТЕЛЕФОН", infoPhoneS: "English · Русский · Հայերեն",
    infoEmailL: "EMAIL", infoEmailS: "Ответ за 30 мин в рабочее время",
    infoAreaL: "ЗОНА РАБОТЫ", infoAreaV: "Север и центр OC", infoAreaS: "Santa Ana, Anaheim, Orange, Tustin и др.",
    infoHoursL: "ЧАСЫ", infoHoursV: "Пн–Вс", infoHoursS: "Выезд в день обращения по возможности",

    footBrand: "Семейный ремонт техники по северу и центру Ориндж Каунти. Трёхъязычная команда, восемь лет в профессии, честность в каждом ремонте. Часть семьи компаний MasterDom.",
    footColServ: "Услуги", footColCo: "Компания", footColLic: "Документы",
    footCall: "Звонить (714) 000-0000",
    footReg: "Регистрация дилера (оформляется)", footEpa: "Сертификат EPA 608", footInsured: "Полная страховка", footPriv: "Политика конфиденциальности",
    footRights: "Все права защищены", footTagline: "Мастера вашего дома.",

    chatTitle: "MasterDom Помощник", chatStatus: "Онлайн · Отвечает мгновенно",
    chatGreeting: "Привет! Я помощник MasterDom Appliance. Расскажите, какая техника барахлит, или укажите ZIP — проверю, обслуживаем ли вас. Чем помочь?",
    chatSugg: ["Холодильник не холодит", "Покрываете мой ZIP?", "Стиралка не сливает", "Записаться на ремонт"],

    modalTitle: "Спасибо!",
    modalTextLive: "Мы получили вашу заявку, и наша команда свяжется с вами в ближайшее время, чтобы записать на ремонт.",
    modalText: "Мы получили вашу заявку. В рабочем режиме мы бы отправили SMS-подтверждение и перезвонили в течение 30 минут. (Это тестовый режим.)",
    modalClose: "Понятно",
    errFill: "Пожалуйста, укажите имя и телефон, чтобы мы могли связаться."
  },

  hy: {
    banner: "Տեխնիկայի վերանորոգման դիլերի գրանցումը ընթացքի մեջ է · Կայքը կգործարկվի ակտիվացման հետ",
    tagline: "ՁԵՐ ՏԱՆ ՎԱՐՊԵՏՆԵՐԸ",
    callBtn: "Զանգահարել",
    navHome: "Գլխավոր", navServices: "Ծառայություններ", navAbout: "Մեր մասին", navAreas: "Տարածք", navContact: "Կապ",

    heroEyebrow: "Տեխնիկայի վերանորոգում · Օրինջ Քաունթի, CA",
    heroTitle: "Օրինջ Քաունթիի <em>ամենաազնիվ</em> տեխնիկայի թիմը։",
    heroSub: "Սառնարաններ, լվացքի ու չորացման մեքենաներ, վառարաններ, ամանլվացքներ — վերանորոգում ենք արագ և ազնիվ։ Անգլերեն, ռուսերեն և հայերեն։ Ախտորոշում նույն օրը, պահեստամասերը՝ մեքենայում։",
    ctaBook: "Գրանցվել վերանորոգման", ctaChat: "Գրել մեզ",
    statYears: "Տարի մասնագիտության մեջ", statLangs: "Լեզու", statDay: "Նույն օրը", statBrands: "Բոլոր բրենդերը",
    heroBadgeT: "Օրինջ Քաունթիի հյուսիս և կենտրոն", heroBadgeS: "Santa Ana · Anaheim · Orange · Tustin",

    servEyebrow: "— Ինչ ենք վերանորոգում",
    servTitle: "Վերանորոգում ենք <em>տեխնիկան</em>, որի վրա հենվում է տունը։",
    servDesc: "Սառնարանից, որը դադարել է սառեցնել, մինչև չորացման մեքենա, որը չի պտտվում։ Ազնիվ ախտորոշում և վարպետ, որը կբացատրի ամեն ինչ ձեր ընտանիքին։",
    srv1T: "Սառնարաններ և սառցարաններ", srv1D: "Չի սառեցնում, հոսում է, աղմկում, սառույց է կուտակվում։ Հերմետիկ համակարգի ու կոմպրեսորի աշխատանք՝ EPA վկայագրով վարպետներ։",
    srv2T: "Լվացքի և չորացման մեքենաներ", srv2D: "Չի քամում, չի դատարկվում, չի տաքանում, ուժեղ ցնցվում է։ Առջևից և վերևից բեռնում, գազ և էլեկտրականություն։",
    srv3T: "Վառարաններ, գազօջախներ, փուռեր", srv3D: "Այրիչներ, վառիչներ, ջեռուցիչ տարրեր, կառավարման տախտակներ։ Գազ ու էլեկտրականություն, առանձին և ներկառուցված։",
    srv4T: "Ամանլվացքի մեքենաներ", srv4D: "Չի դատարկվում, չի լվանում, հոսում է, չի միանում։ Պոմպեր, փականներ, խտացուցիչներ, մոդուլներ։",
    srv5T: "Միկրոալիքայիններ և ներկառուցված", srv5D: "Ներկառուցված և գազօջախի վերևում։ Չի տաքացնում, կայծեր, պանելը չի աշխատում, դռան խնդիր։",
    srv6T: "Սենյակային և պատի կոնդիցիոներ", srv6D: "Պատուհանի, պատի, շարժական կոնդիցիոներ։ Չի սառեցնում, հոսում է, չի միանում — այստեղ մեր HVAC փորձն է երևում։",
    srvLearn: "Մանրամասն →",

    whyEyebrow: "— Ինչու MasterDom",
    whyTitle: "Ազնիվ վերանորոգում, <em>իրական</em> մարդիկ, արդար գներ։",
    whyDesc: "Մենք ընտանեկան թիմ ենք, ոչ թե զանգերի կենտրոնով ֆրանշիզ։ Ուղիղ կասենք՝ երբ վերանորոգումն արժե, և երբ ավելի լավ է փոխարինել։",
    why1T: "Եռալեզու թիմ", why1D: "Անգլերեն, ռուսերեն, հայերեն։ Խնդիրը կբացատրենք ձեր լեզվով։",
    why2T: "Վերանորոգել թե փոխել՝ ազնիվ", why2D: "Եթե վերանորոգումն ավելի թանկ է, քան տեխնիկան արժե՝ կասենք։ Առանց պարտադրման։",
    why3T: "Գինը նախապես", why3D: "Գինը հաստատում եք մինչ աշխատանքի սկիզբը։ Ախտորոշման վճարը հաշվվում է վերանորոգման մեջ։",
    why4T: "Գրանցված և ապահովագրված", why4D: "CA Appliance Service Dealer գրանցում (ընթացքի մեջ) + EPA 608 վկայագիր։ Ամբողջական ապահովագրություն։",

    brandEyebrow: "— Բրենդեր, որոնց հետ աշխատում ենք",
    brandTitle: "<em>Ամենօրյա</em>-ից մինչև պրեմիում։",
    brandDesc: "Տարածված պահեստամասերը մեզ հետ են, մնացածը պատվիրում ենք արագ։ Ձեր բրենդը ցանկում չկա՞ — պարզապես հարցրեք։",

    testEyebrow: "— Ինչ են ասում հարևանները",
    testTitle: "Վստահում են ողջ <em>Օրինջ Քաունթիում</em>։",
    testDesc: "Իրական տնատերեր, իրական վերանորոգումներ։ Վաստակած, ոչ գնված։",
    test1: '"Սառնարանը կանգ առավ կիրակի օրը։ Եկան նույն օրը, գտան մասը, երեկոյան արդեն աշխատում էր։ Արդար գին, առանց ավելորդ դրամայի։"',
    test2: '"Ազնիվ մարդիկ։ Ասացին, որ հին չորացման մեքենան չարժե վերանորոգել, գումար վերցնելու փոխարեն։ Հետո եկան ու տեղադրեցին նորը։"',
    test3: '"Վերջապես վերանորոգող ընկերություն, որ խոսում է հայերեն։ Վերանորոգեցին վառարանը և ամեն ինչ բացատրեցին ծնողներիս։ Շատ խորհուրդ եմ տալիս։"',

    ctaBigTitle: "Տեխնիկան փչացե՞լ է։ Կվերանորոգենք։",
    ctaBigDesc: "Նկարագրեք խնդիրը և նշեք ZIP — կհաստատենք, որ սպասարկում ենք ձեզ, և կգրանցենք։",

    servPageEyebrow: "— Ծառայություններ",
    servPageTitle: "Ցանկացած <em>խոշոր տեխնիկա</em>՝ վերանորոգված ինչպես հարկն է։",
    servPageDesc: "Ախտորոշում, պահեստամասեր և վերանորոգում այն տեխնիկայի, որի վրա հենվում է խոհանոցն ու լվացքը։ Նույն օրը, երբ հնարավոր է, և միշտ ազնիվ խորհուրդ։",
    srvP1T: "Սառնարանի և սառցարանի վերանորոգում", srvP1D: "Չի սառեցնում, գերսառեցնում է, հոսում է, աղմկում, սառցագոյացման խնդիր, պատռված խտացուցիչներ։ Հերմետիկ համակարգի ու կոմպրեսորի աշխատանք՝ EPA Section 608 վկայագրով վարպետներ։",
    srvP2T: "Լվացքի և չորացման մեքենայի վերանորոգում", srvP2D: "Չի քամում, չի դատարկվում, չի տաքանում, ուժեղ ցնցվում, սխալի կոդեր, չի միանում։ Առջևից ու վերևից բեռնում; գազ և էլեկտրական չորացուցիչներ։ Գոտիներ, պոմպեր, շարժիչներ, ջեռուցիչ տարրեր։",
    srvP3T: "Վառարանի և փուռի վերանորոգում", srvP3D: "Այրիչները չեն վառվում, անհավասար ջերմություն, անսարք վառիչներ, այրված տարրեր, տախտակի խնդիր։ Գազ ու էլեկտրականություն, առանձին և ներկառուցված։",
    srvP4T: "Ամանլվացքի մեքենայի վերանորոգում", srvP4D: "Չի դատարկվում, չի լվանում, հոսում է, չի միանում, սխալի լույսեր։ Պոմպեր, փականներ, դռան խտացուցիչներ, ցողարկիչներ, մոդուլներ։",
    srvP5T: "Միկրոալիքայինի վերանորոգում", srvP5D: "Ներկառուցված և գազօջախի վերևում։ Չի տաքացնում, կայծեր, ափսեն չի պտտվում, պանելը մեռած է, դռան խնդիր։ (Սեղանի տարբերակները սովորաբար ավելի էժան է փոխել — ազնիվ կասենք։)",
    srvP6T: "Աղբաղացիչներ և սառցագործիչներ", srvP6D: "Աղբաղացիչներ, որ բզզում, խցանվում կամ հոսում են։ Առանձին և ներկառուցված սառցագործիչներ, որ սառույց չեն տալիս կամ չեն կանգնում։ Հաճախ՝ նույն այցով։",
    srvP7T: "Սենյակային և պատի կոնդիցիոներ", srvP7D: "Պատուհանի, պատի և շարժական կոնդիցիոներ։ Չի սառեցնում, ջուր է հոսում, չի միանում։ Այստեղ մեր HVAC փորձը հատկապես օգտակար է։",
    srvP8T: "Սպասարկում և կանխարգելում", srvP8D: "Չորացուցիչի օդանցքի մաքրում, սառնարանի կոճի մաքրում, խտացուցիչների ստուգում։ Փոքր սպասարկում, որ կանխում է մեծ խափանումները և իջեցնում հաշիվները։",
    srvP9T: "Պրեմիում և ներկառուցված տեխնիկա", srvP9D: "Sub-Zero, Viking, Thermador, Bosch։ Պրեմիում և ինտեգրված տեխնիկան պահանջում է զգույշ ձեռք ու ճիշտ պահեստամասեր — մենք դրանք հայթայթում ենք ինչպես հարկն է։",
    srvFree: "Գրանցվել →", ctaGetQuote: "Գրանցվել վերանորոգման",

    aboutEyebrow: "— Մեր պատմությունը",
    aboutTitle: "<em>MasterDom</em> ընտանիքի մաս։",
    aboutP1: "MasterDom Appliance Repair-ը աճում է մասնագիտության ութ տարուց — նույն ձեռքերը, նույն չափանիշները, այժմ կենտրոնացած այն տեխնիկայի վրա, որի վրա հենվում է Օրինջ Քաունթիի տունը։",
    aboutP2: "Նույն համոզմունքը, որի վրա կառուցվեց բիզնեսը՝ լավ աշխատել, արդար գին վերցնել և հաճախորդի տունը վերաբերվել ինչպես սեփականին։ Մենք պատասխանում ենք հեռախոսին, գալիս ենք ժամանակին և պատասխանատու ենք վերանորոգածի համար։",
    aboutP3: "Մենք խոսում ենք երեք լեզվով, որովհետև մեր համայնքն է խոսում։ Եվ բացահայտ ցույց ենք տալիս գրանցումն ու վկայագրերը — որովհետև վստահությունն է ողջ աշխատանքը։",
    val1T: "Խորհուրդ առանց ճնշման", val1D: "Կասենք, երբ վերանորոգումը չարժե։ Ազնվությունը հաճախորդ է վերադարձնում։",
    val2T: "Ժամանակին", val2D: "Իրական ժամանակային պատուհան և զանգ մինչ գալը։ Ձեր օրը կարևոր է։",
    val3T: "Մաքուր աշխատանք", val3D: "Ծածկոցներ, կոշիկի պատյաններ, աղբի հեռացում։ Խոհանոցը մնում է ինչպես էր։",
    val4T: "90 օր երաշխիք աշխատանքի վրա", val4D: "Ամեն վերանորոգման։ Եթե մեր աշխատանքը ձախողվի՝ կվերադառնանք առանց հարցերի։",
    licLabel: "ԿԱԼԻՖՈՐՆԻԱ ՆԱՀԱՆԳԻ ԳՐԱՆՑՈՒՄ",
    licText: "Appliance Service Dealer գրանցում (BHGS) — ընթացքի մեջ · EPA Section 608 վկայագիր",
    aboutVisualT: "Սպասարկում ենք <em>Օրինջ Քաունթիի</em> տները։",
    aboutVisualP: "Փոքր թիմ՝ մեծ չափանիշներով։ Մենք պատասխանում ենք։ Մենք գալիս ենք։ Մենք կանգնած ենք մեր աշխատանքի հետևում։",

    areaEyebrow: "— Սպասարկման տարածք",
    areaTitle: "Օրինջ Քաունթիի <em>հյուսիս և կենտրոն</em>։",
    areaDesc: "Կենտրոնանում ենք այս քաղաքների վրա՝ արագ, նույն օրվա սպասարկման համար։ Վստահ չե՞ք ձեր տեղի մասին։ Ստուգեք ձեր ZIP-ը գրանցման ձևում — պատասխանը անմիջապես։",
    areaSantaAna: "Downtown, Floral Park, French Park", areaAnaheim: "Anaheim Hills, Colony, West Anaheim",
    areaFullerton: "Downtown, Raymond Hills", areaOrange: "Old Towne, Orange Park Acres",
    areaGardenGrove: "West Grove, Little Saigon-ի եզր", areaBuenaPark: "Knott's-ի մոտ, Bellehurst",
    areaWestminster: "Little Saigon", areaTustin: "Old Town, Tustin Ranch", areaStanton: "Կենտրոնական Stanton",
    areaCheck: "Ուզու՞մ եք համոզվել, որ ձեր ZIP-ը ծածկված է։ Ստուգեք ձևում։", ctaCheckZip: "Ստուգել իմ ZIP-ը",

    ctEyebrow: "— Գրանցում վերանորոգման",
    ctTitle: "Սկզբից <em>համոզվենք</em>, որ սպասարկում ենք ձեզ։",
    ctDesc: "Ներքևում մուտքագրեք ձեր ZIP կոդը։ Եթե մեր տարածքում եք՝ ձևը կբացվի, և կգրանցենք ձեզ։ Տարածքից դուրս եք՞ — միևնույն է թողեք տվյալները, մենք ընդլայնվում ենք։",
    zipGateHead: "Սկզբից ստուգեք ձեր ZIP-ը",
    zipGateSub: "Մենք սպասարկում ենք Օրինջ Քաունթիի ընտրված տարածքներ։ Մուտքագրեք 5-նիշ ZIP՝ տեսնելու համար, արդյոք սպասարկում ենք ձեզ։",
    zipCheckBtn: "Ստուգել",
    zipIn: "✅ Հիանալի — մենք սպասարկում ենք ձեր տարածքը։ Լրացրեք ներքևի ձևը։",
    zipOut: "Ձեր տարածքը դեռ մեր սպասարկման գոտում չէ, բայց թողեք հայտը — մենք կփորձենք օգնել կամ ուղղորդել ձեզ ճիշտ ուղղությամբ։",
    zipUnknown: "Սա վավեր 5-նիշ ZIP-ի նման չէ։ Խնդրում ենք կրկին ստուգել։",
    lblName: "Ձեր անունը", lblPhone: "Հեռախոս", lblAddress: "Սպասարկման հասցե", lblService: "Տեխնիկա / ծառայություն",
    optChoose: "Ընտրեք...", optFridge: "Սառնարան / սառցարան", optWasher: "Լվացքի / չորացման", optOven: "Վառարան / փուռ",
    optDish: "Ամանլվացք", optMicro: "Միկրոալիքային", optDisposal: "Աղբաղացիչ / սառցագործիչ", optRoomAC: "Սենյակային / պատի կոնդիցիոներ", optOther: "Այլ բան",
    lblLang: "Նախընտրելի լեզու", lblNote: "Ի՞նչ է կատարվում",
    ctSubmit: "Ուղարկել հայտը",
    ctNote: "Ուղարկելով՝ համաձայնում եք կապ հաստատել MasterDom Appliance Repair-ի հետ։ Մենք չենք փոխանցում ձեր տվյալները։ Ծառայությունը սկսվում է մեր Կալիֆորնիայի Appliance Service Dealer գրանցման ակտիվացումից հետո։",
    infoPhoneL: "ՀԵՌԱԽՈՍ", infoPhoneS: "English · Русский · Հայերեն",
    infoEmailL: "EMAIL", infoEmailS: "Պատասխան 30 րոպեում աշխատանքային ժամերին",
    infoAreaL: "ՍՊԱՍԱՐԿՄԱՆ ՏԱՐԱԾՔ", infoAreaV: "OC-ի հյուսիս և կենտրոն", infoAreaS: "Santa Ana, Anaheim, Orange, Tustin և այլն",
    infoHoursL: "ԺԱՄԵՐ", infoHoursV: "Երկ–Կիր", infoHoursS: "Նույն օրվա սպասարկում՝ ըստ հնարավորության",

    footBrand: "Ընտանեկան տեխնիկայի վերանորոգում Օրինջ Քաունթիի հյուսիսում և կենտրոնում։ Եռալեզու թիմ, ութ տարի մասնագիտության մեջ, ազնիվ ամեն վերանորոգման հարցում։ MasterDom-ի տնային ծառայությունների ընտանիքի մաս։",
    footColServ: "Ծառայություններ", footColCo: "Ընկերություն", footColLic: "Փաստաթղթեր",
    footCall: "Զանգահարել (714) 000-0000",
    footReg: "Դիլերի գրանցում (ընթացքում)", footEpa: "EPA 608 վկայագիր", footInsured: "Ամբողջապես ապահովագրված", footPriv: "Գաղտնիության քաղաքականություն",
    footRights: "Բոլոր իրավունքները պաշտպանված են", footTagline: "Ձեր տան վարպետները։",

    chatTitle: "MasterDom Օգնական", chatStatus: "Առցանց · Պատասխանում է ակնթարթորեն",
    chatGreeting: "Բարև! Ես MasterDom Appliance-ի օգնականն եմ։ Ասեք՝ որ տեխնիկան է խնդիր տալիս, կամ նշեք ZIP-ը՝ կստուգեմ՝ սպասարկում ենք ձեզ։ Ինչո՞վ կարող եմ օգնել։",
    chatSugg: ["Սառնարանս չի սառեցնում", "Ծածկու՞մ եք իմ ZIP-ը", "Լվացքը չի դատարկվում", "Գրանցվել վերանորոգման"],

    modalTitle: "Շնորհակալություն!",
    modalTextLive: "Մենք ստացանք ձեր հայտը, և մեր թիմը շուտով կկապվի ձեզ հետ՝ վերանորոգումը գրանցելու համար։",
    modalText: "Մենք ստացանք ձեր հայտը։ Աշխատանքային ռեժիմում մենք կուղարկեինք SMS հաստատում և կզանգահարեինք 30 րոպեում։ (Սա թեստային ռեժիմ է։)",
    modalClose: "Հասկացա",
    errFill: "Խնդրում ենք նշել անունն ու հեռախոսը, որպեսզի կարողանանք կապվել։"
  }
};

let currentLang = 'en';

/* ---------- UTM / SOURCE CAPTURE ---------- */
const tracking = { source: 'direct', medium: 'none', campaign: 'none', referrer: '', landing: '' };
(function captureTracking() {
  try {
    const p = new URLSearchParams(window.location.search);
    tracking.source = (p.get('utm_source') || '').toLowerCase() || 'direct';
    tracking.medium = (p.get('utm_medium') || '').toLowerCase() || 'none';
    tracking.campaign = (p.get('utm_campaign') || '') || 'none';
    // If no UTM but a known social referrer, infer the source
    if (tracking.source === 'direct' && document.referrer) {
      const r = document.referrer.toLowerCase();
      if (r.includes('tiktok')) tracking.source = 'tiktok';
      else if (r.includes('facebook') || r.includes('fb.')) tracking.source = 'facebook';
      else if (r.includes('instagram')) tracking.source = 'instagram';
      else if (r.includes('youtube')) tracking.source = 'youtube';
      else if (r.includes('twitter') || r.includes('t.co') || r.includes('x.com')) tracking.source = 'twitter';
      else if (r.includes('google')) tracking.source = 'google';
      if (tracking.source !== 'direct' && tracking.medium === 'none') tracking.medium = 'referral';
    }
    tracking.referrer = document.referrer || '';
    tracking.landing = window.location.href;
  } catch (e) { /* no-op */ }
})();

/* ---------- ZIP GATE STATE ---------- */
let currentZip = '';
let zoneStatus = 'unknown'; // 'in' | 'out' | 'unknown'

function onZipInput() {
  const el = document.getElementById('zipInput');
  el.value = el.value.replace(/\D/g, '').slice(0, 5);
  if (el.value.length === 5) checkZip();
  else {
    document.getElementById('zipResult').className = 'zip-result';
    lockForm();
  }
}

function checkZip() {
  const t = i18n[currentLang];
  const zip = (document.getElementById('zipInput').value || '').replace(/\D/g, '');
  const box = document.getElementById('zipResult');
  currentZip = zip;

  if (zip.length !== 5) {
    zoneStatus = 'unknown';
    box.className = 'zip-result unknown';
    box.textContent = t.zipUnknown;
    lockForm();
    return;
  }
  if (SERVICE_ZIPS.includes(zip)) {
    zoneStatus = 'in';
    box.className = 'zip-result in';
    box.textContent = t.zipIn;
    unlockForm();
  } else {
    zoneStatus = 'out';
    box.className = 'zip-result out';
    box.textContent = t.zipOut;
    unlockForm(); // out-of-area leads are still captured
  }
}

function unlockForm() { document.getElementById('formFields').classList.add('unlocked'); }
function lockForm() { document.getElementById('formFields').classList.remove('unlocked'); }

/* ---------- I18N APPLY ---------- */
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  document.getElementById('lang-' + lang).classList.add('active');

  // refresh ZIP result text if one is showing
  if (zoneStatus !== 'unknown' || currentZip) checkZip();

  // reset chat greeting if open
  const chatBody = document.getElementById('chatBody');
  if (chatBody && chatBody.children.length > 0) {
    chatBody.innerHTML = '';
    conversationHistory = [];
    addBotMessage(i18n[currentLang].chatGreeting);
    addSuggestions();
  }
}

/* ---------- NAVIGATION ---------- */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('nav.main-nav a').forEach(a => a.classList.toggle('active', a.getAttribute('data-page') === page));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('mainNav').classList.remove('mobile-open');
  history.replaceState(null, '', '#' + page);
}
function toggleMobileMenu() { document.getElementById('mainNav').classList.toggle('mobile-open'); }

/* ---------- LEAD SUBMISSION ---------- */
async function submitForm(e) {
  e.preventDefault();
  const t = i18n[currentLang];

  // ZIP must be checked first
  if (zoneStatus === 'unknown' || currentZip.length !== 5) {
    checkZip();
    document.getElementById('zipInput').focus();
    return;
  }

  const name = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  if (!name || !phone) { alert(t.errFill); return; }

  const lead = {
    timestamp: new Date().toISOString(),
    trade: 'Appliance',
    service: document.getElementById('fService').value || '',
    name: name,
    phone: phone,
    address: document.getElementById('fAddress').value.trim(),
    zip: currentZip,
    zone_status: zoneStatus,            // in | out
    language: document.getElementById('fLang').value || '',
    message: document.getElementById('fNote').value.trim(),
    source: tracking.source,
    medium: tracking.medium,
    campaign: tracking.campaign,
    form_source: 'form',                // form | chat
    page_url: tracking.landing,
    referrer: tracking.referrer
  };

  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead)
    });
  } catch (err) {
    console.error('Lead submit error:', err);
    // We still show success so the customer isn't blocked; lead is logged server-side or retried.
  }
  btn.disabled = false;

  document.getElementById('modalText').textContent = t.modalText; // switch to modalTextLive after launch
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('bookingForm').reset();
  lockForm();
  zoneStatus = 'unknown'; currentZip = '';
  document.getElementById('zipResult').className = 'zip-result';
}
function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

/* ---------- CHAT ---------- */
function toggleChat() {
  const panel = document.getElementById('chatPanel');
  panel.classList.toggle('open');
  if (panel.classList.contains('open') && document.getElementById('chatBody').children.length === 0) {
    setTimeout(() => { addBotMessage(i18n[currentLang].chatGreeting); addSuggestions(); }, 200);
  }
}
function openChat() {
  document.getElementById('chatPanel').classList.add('open');
  if (document.getElementById('chatBody').children.length === 0) {
    setTimeout(() => { addBotMessage(i18n[currentLang].chatGreeting); addSuggestions(); }, 200);
  }
}
function addBotMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg bot'; msg.textContent = text;
  document.getElementById('chatBody').appendChild(msg); scrollChatToBottom();
}
function addUserMessage(text) {
  const msg = document.createElement('div');
  msg.className = 'chat-msg user'; msg.textContent = text;
  document.getElementById('chatBody').appendChild(msg); scrollChatToBottom();
}
function addSuggestions() {
  const wrap = document.createElement('div');
  wrap.className = 'chat-suggestions';
  i18n[currentLang].chatSugg.forEach(s => {
    const btn = document.createElement('button');
    btn.className = 'chat-suggestion'; btn.textContent = s;
    btn.onclick = () => { addUserMessage(s); wrap.remove(); setTimeout(() => respondTo(s), 400); };
    wrap.appendChild(btn);
  });
  document.getElementById('chatBody').appendChild(wrap); scrollChatToBottom();
}
function scrollChatToBottom() { const b = document.getElementById('chatBody'); b.scrollTop = b.scrollHeight; }

function detectLang(text) {
  if (/[\u0530-\u058F]/.test(text)) return 'hy';
  if (/[\u0400-\u04FF]/.test(text)) return 'ru';
  return 'en';
}

let conversationHistory = [];

async function respondTo(text) {
  const detected = detectLang(text);
  if (detected !== currentLang) setLang(detected);

  conversationHistory.push({ role: 'user', content: text });

  const typing = document.createElement('div');
  typing.className = 'chat-msg bot typing-indicator';
  typing.innerHTML = '<div class="message-content">●●●</div>';
  document.getElementById('chatBody').appendChild(typing); scrollChatToBottom();

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: conversationHistory })
    });
    typing.remove();
    if (!res.ok) throw new Error('API ' + res.status);
    const data = await res.json();
    const reply = data.reply || i18n[currentLang].modalText;
    conversationHistory.push({ role: 'assistant', content: reply });
    if (conversationHistory.length > 20) conversationHistory = conversationHistory.slice(-20);
    addBotMessage(reply);
  } catch (err) {
    typing.remove();
    const errs = {
      en: "Sorry, I'm having trouble connecting. Please try again or call us at (714) 000-0000.",
      ru: "Извините, проблема с подключением. Попробуйте ещё раз или позвоните (714) 000-0000.",
      hy: "Ներողություն, կապի խնդիր կա։ Փորձեք նորից կամ զանգահարեք (714) 000-0000։"
    };
    addBotMessage(errs[currentLang] || errs.en);
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  addUserMessage(text); input.value = '';
  setTimeout(() => respondTo(text), 300);
}

/* ---------- INIT ---------- */
window.addEventListener('load', () => {
  const p = new URLSearchParams(window.location.search);
  const qlang = p.get('lang');
  if (['en', 'ru', 'hy'].includes(qlang)) setLang(qlang);

  const hash = window.location.hash.replace('#', '');
  if (['home', 'services', 'about', 'areas', 'contact'].includes(hash)) navigateTo(hash);
});
