const onGithub = location.hostname.endsWith('github.io');
const root = onGithub ? '/masterclimbing-site/' : '/';
const locale = location.pathname.includes('/fr/') ? 'fr' : location.pathname.includes('/en/') ? 'en' : 'zh';
const prefix = locale === 'zh' ? root : `${root}${locale}/`;
const path = slug => `${prefix}${slug}/`;
const media = name => `${root}media/${name}`;
const domesticAlbum = 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjE5MDg3Mw==&action=getalbum&album_id=4115563855307030530#wechat_redirect';
const internationalAlbum = 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjE5MDg3Mw==&action=getalbum&album_id=4515388979537608710#wechat_redirect';
const links = {
  liupanshui:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247484089&idx=1&sn=8f89aa0db2f777f5ccc4f02fee9c3ca0',
  lugu:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247485386&idx=1&sn=67ed97263d21a177ad329fd09f2a71d1',
  getu:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247485494&idx=1&sn=abc452de5f742117f81929bbc0e6533e',
  guangxi:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247485494&idx=2&sn=a2514fe055d002491085e7bac1eedd6a',
  mediterranean:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247484945&idx=2&sn=ae2680aad47bb60b352f552949a66ffc',
  spain:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247485039&idx=3&sn=004b4426c6b4368da9585b1baf553523',
  japan:'https://mp.weixin.qq.com/s?__biz=Mzk0NjE5MDg3Mw==&mid=2247485355&idx=2&sn=d93a8d975518dec2cd2c3d8b0565f765',
  mallorca:domesticAlbum
};

const sharedCourses = {
  zh:[
    ['01','自然岩壁入门','顶绳与岩场基础','2天','2–6人','¥2,000 / 人','认识岩场环境，学习装备、绳结、顶绳保护、保护站拆除、路书、礼仪和伙伴流程。','course-team.webp'],
    ['02','先锋攀登与保护','先锋基础','2天','2–6人','¥2,200 / 人','练习先锋挂绳、冲坠、动态保护、GRIGRI使用与保护站设置；两人同行9折。','course-wall.webp'],
    ['03','先锋精进','冲坠与风险管理','1天','2–4人','¥1,200 / 人','在真实岩壁上练习冲坠、动态保护与临场决策，提升野外先锋风险管理能力。','course-system.webp'],
    ['04','多段攀登基础','高级课程','2天','2–4人','¥2,200 / 人','学习多段策略、保护站、上方保护、下降、绳索管理与风险管理；两人同行9折。','course-anchor.webp'],
    ['05','结组进阶系统','研发中 · 暂不销售','建议3天','建议2–4人','价格待定','计划涵盖多人结组、夜间模块、大岩壁导向与有限SRT内容，完成试课和技术审核后再开放。','course-coach.webp']
  ],
  en:[
    ['01','Outdoor Top-Rope Foundations','Natural rock essentials','2 days','2–6 people','CNY 2,000 / person','Learn crag awareness, equipment, knots, top-rope belaying, anchor cleaning, guidebooks, etiquette and partner routines.','course-team.webp'],
    ['02','Sport Leading & Belaying','Lead foundations','2 days','2–6 people','CNY 2,200 / person','Build lead-clipping, falling, dynamic belaying, GRIGRI and anchor-management skills. 10% off for pairs.','course-wall.webp'],
    ['03','Lead Progression','Falls & risk management','1 day','2–4 people','CNY 1,200 / person','Practise real-rock falls, dynamic catches, decision-making and outdoor lead risk management.','course-system.webp'],
    ['04','Multipitch Foundations','Advanced course','2 days','2–4 people','CNY 2,200 / person','Learn multipitch strategy, belay stations, bringing up a second, rappelling, rope and risk management. 10% off for pairs.','course-anchor.webp'],
    ['05','Advanced Rope-Team Systems','In development · not for sale','Proposed 3 days','Proposed 2–4','Price TBC','A future module covering multi-person rope teams, night operations, big-wall orientation and limited SRT, pending trials and technical approval.','course-coach.webp']
  ],
  fr:[
    ['01','Initiation falaise en moulinette','Fondamentaux du rocher','2 jours','2–6 personnes','2 000 CNY / personne','Découvrir le site, le matériel, les nœuds, l’assurage en moulinette, le démontage de relais, les topos et les routines de cordée.','course-team.webp'],
    ['02','Escalade en tête et assurage','Fondamentaux de la tête','2 jours','2–6 personnes','2 200 CNY / personne','Travailler le mousquetonnage, la chute, l’assurage dynamique, le GRIGRI et les relais. Remise de 10 % pour deux inscriptions.','course-wall.webp'],
    ['03','Progression en tête','Chute et gestion du risque','1 jour','2–4 personnes','1 200 CNY / personne','S’exercer aux chutes sur rocher, à l’assurage dynamique et à la prise de décision en falaise.','course-system.webp'],
    ['04','Initiation aux grandes voies','Cours avancé','2 jours','2–4 personnes','2 200 CNY / personne','Aborder la stratégie, les relais, l’assurage du second, le rappel, la gestion de corde et des risques. Remise de 10 % pour deux.','course-anchor.webp'],
    ['05','Systèmes de cordée avancés','En développement · non commercialisé','3 jours envisagés','2–4 envisagés','Tarif à définir','Module en préparation : cordées de plusieurs personnes, progression nocturne, approche big wall et notions limitées de SRT.','course-coach.webp']
  ]
};

const trips = {
  zh:[
    ['紫云格凸穿洞旅攀','国内旅攀','喀斯特洞穴','贵州 · 紫云','巨型穿洞、喀斯特岩壁和村落生活集中在同一片山谷，适合想体验独特地貌与连续攀爬节奏的岩友。','getu.webp',links.getu],
    ['泸沽湖高原岩场','国内旅攀','高原湖泊','云南 · 泸沽湖','在高原湖景中攀爬，行程把岩壁体验、风景与当地生活放在一起。','yunnan.webp',links.lugu],
    ['中国凉都六盘水','国内旅攀','夏季避暑','贵州 · 六盘水','月照攀岩小镇的夏季气候更适合长时间户外活动，也是自然岩壁入门与进阶的友好目的地。','liupanshui.webp',links.liupanshui],
    ['广西三城五岩场','国内旅攀','多岩场线路','南宁 / 马山 / 柳州','一次行程串联不同岩场与线路风格，适合希望增加攀爬量、比较不同岩质的岩友。','getu.webp',links.guangxi],
    ['春节西班牙旅攀','国际旅攀','冬季岩场','Spain','稳定的冬季攀爬窗口、成熟的岩场文化和丰富线路，让西班牙成为长期旅攀的核心目的地。','spain.webp',links.spain],
    ['马略卡海陆户外营','国际旅攀','深水抱石','Mallorca','石灰岩海岸、深水抱石与地中海户外生活，适合想拓展攀爬体验的人。','mallorca.webp',links.mallorca],
    ['日本御岳野抱','国际旅攀','花岗岩抱石','东京 / 御岳','御岳的天然抱石与B-Pump岩馆组合，既能接触日本岩场礼仪，也能体验城市攀岩文化。','japan.webp',links.japan],
    ['地中海结组主题','国际旅攀','结组与冬攀','Mediterranean','围绕结组能力和冬季攀爬条件设计，更关注线路策略、绳队协作与连续多日的体能分配。','italy.webp',links.mediterranean]
  ],
  en:[
    ['Getu Through-Cave Climbing','China trip','Karst cave','Ziyun · Guizhou','A dramatic through-cave, limestone walls and village life in one valley—ideal for climbers seeking distinctive terrain and consecutive days on rock.','getu.webp',links.getu],
    ['Lugu Lake High-Altitude Crag','China trip','Highland lake','Yunnan · Lugu Lake','Natural climbing beside a high-altitude lake, combining rock, landscape and local life.','yunnan.webp',links.lugu],
    ['Liupanshui Summer Climbing','China trip','Cool-season escape','Guizhou · Liupanshui','The summer climate around Yuezhao Climbing Town makes longer outdoor sessions accessible to developing climbers.','liupanshui.webp',links.liupanshui],
    ['Three Cities, Five Crags','China trip','Multi-crag circuit','Nanning / Mashan / Liuzhou','A circuit of contrasting crags and rock styles for climbers who want mileage and variety.','getu.webp',links.guangxi],
    ['Spain Winter Pilgrimage','International trip','Winter climbing','Spain','Reliable winter conditions, a mature climbing culture and huge route variety make Spain a core long-stay destination.','spain.webp',links.spain],
    ['Mallorca Sea & Rock Camp','International trip','Deep water soloing','Mallorca','Coastal limestone, deep water soloing and Mediterranean outdoor life broaden the idea of a climbing trip.','mallorca.webp',links.mallorca],
    ['Mitake Bouldering, Japan','International trip','Granite bouldering','Tokyo / Mitake','Natural granite at Mitake paired with B-Pump—an introduction to both Japanese crag etiquette and urban climbing culture.','japan.webp',links.japan],
    ['Mediterranean Rope-Team Trip','International trip','Rope-team systems','Mediterranean','A winter programme focused on route strategy, team systems and pacing across several climbing days.','italy.webp',links.mediterranean]
  ],
  fr:[
    ['La grotte traversante de Getu','Voyage en Chine','Grotte karstique','Ziyun · Guizhou','Une immense grotte traversante, des falaises calcaires et la vie du village réunies dans une même vallée.','getu.webp',links.getu],
    ['Falaise d’altitude au lac Lugu','Voyage en Chine','Lac d’altitude','Yunnan · Lac Lugu','Grimper au bord d’un lac d’altitude en associant rocher, paysage et découverte de la vie locale.','yunnan.webp',links.lugu],
    ['Été à Liupanshui','Voyage en Chine','Fraîcheur estivale','Guizhou · Liupanshui','Le climat estival de Yuezhao permet de longues journées dehors et convient aux grimpeurs en progression.','liupanshui.webp',links.liupanshui],
    ['Trois villes, cinq falaises','Voyage en Chine','Circuit multi-sites','Nanning / Mashan / Liuzhou','Un circuit entre plusieurs falaises et styles de rocher, pensé pour accumuler des longueurs et varier les sensations.','getu.webp',links.guangxi],
    ['Pèlerinage hivernal en Espagne','Voyage international','Escalade hivernale','Espagne','Un climat hivernal favorable, une forte culture de l’escalade et une grande variété de voies.','spain.webp',links.spain],
    ['Camp mer et rocher à Majorque','Voyage international','Psicobloc','Majorque','Calcaire côtier, psicobloc et vie méditerranéenne pour explorer une autre facette du voyage d’escalade.','mallorca.webp',links.mallorca],
    ['Bloc à Mitake, Japon','Voyage international','Bloc sur granite','Tokyo / Mitake','Le granite naturel de Mitake associé à B-Pump, entre éthique locale et culture urbaine de l’escalade.','japan.webp',links.japan],
    ['Cordée en Méditerranée','Voyage international','Systèmes de cordée','Méditerranée','Un séjour hivernal axé sur la stratégie, la coordination de la cordée et la gestion de l’effort sur plusieurs jours.','italy.webp',links.mediterranean]
  ]
};

const copy = {
  zh:{lang:'zh-CN',brand:'读岩野攀',subbrand:'MASTERCLIMBING',tagline:'读懂岩壁，自在去野。',slogan:'READ THE ROCK. FIND YOUR FREEDOM.',nav:[['课程','courses'],['旅攀','travel'],['来华攀岩','climb-china'],['野攀野抱','outdoor'],['活动','events'],['往期故事','stories'],['关于我们','about']],source:'活动日期与报名方式以公众号 MasterClimbing读岩野攀 最新通知为准。',view:'查看原文 ↗',archive:'往期 / 目的地档案',rd:'研发中',courseNotice:'结课代表完成了本阶段学习，独立组织野攀和应对复杂情况仍需要持续练习与经验积累。'},
  en:{lang:'en',brand:'MASTERCLIMBING',subbrand:'读岩野攀',tagline:'Read the Rock. Find Your Freedom.',slogan:'读懂岩壁，自在去野。',nav:[['Courses','courses'],['Trips','travel'],['Climb China','climb-china'],['Weekends','outdoor'],['Events','events'],['Field Notes','stories'],['About','about']],source:'Dates and registration details are subject to the latest notice from MasterClimbing on WeChat.',view:'View original ↗',archive:'Archive / destination file',rd:'R&D',courseNotice:'Course completion does not unconditionally guarantee independent climbing or emergency-response capability.'},
  fr:{lang:'fr',brand:'MASTERCLIMBING',subbrand:'读岩野攀',tagline:'Lire le rocher. Trouver sa liberté.',slogan:'READ THE ROCK. FIND YOUR FREEDOM.',nav:[['Cours','courses'],['Voyages','travel'],['Grimper en Chine','climb-china'],['Week-ends','outdoor'],['Événements','events'],['Carnets','stories'],['À propos','about']],source:'Les dates et inscriptions sont confirmées dans les dernières publications WeChat de MasterClimbing.',view:'Voir la publication ↗',archive:'Archive / destination',rd:'R&D',courseNotice:'La fin du cours ne garantit pas à elle seule l’autonomie en escalade ni la capacité à gérer une situation d’urgence.'}
};

const t = copy[locale];
const courses = sharedCourses[locale];
const placeList = trips[locale];
const contactText = {
  zh:{title:'联系我们',intro:'想参加课程、旅攀或定制活动，欢迎直接联系。',email:'邮箱',phone:'电话',wechat:'微信',official:'微信公众号',info:'信息'},
  en:{title:'Contact',intro:'Planning a course or climbing trip? Send us your dates, level and destination ideas.',email:'Email',phone:'Phone',wechat:'WeChat',official:'WeChat Official Account',info:'Info'},
  fr:{title:'Contact',intro:'Vous préparez un cours ou un voyage ? Envoyez-nous vos dates, votre niveau et vos envies.',email:'E-mail',phone:'Téléphone',wechat:'WeChat',official:'Compte officiel WeChat',info:'Informations'}
}[locale];
document.documentElement.lang = t.lang;
const localPath = lang => `${lang === 'zh' ? root : `${root}${lang}/`}${key ? `${key}/` : ''}`;
const header = () => `<header class="header"><a class="logo" href="${prefix}">${t.brand}<small>${t.subbrand}</small></a><nav class="nav">${t.nav.map(x=>`<a href="${path(x[1])}">${x[0]}</a>`).join('')}</nav><nav class="languages" aria-label="Language"><a class="${locale==='zh'?'active':''}" href="${localPath('zh')}">中</a><a class="${locale==='en'?'active':''}" href="${localPath('en')}">EN</a><a class="${locale==='fr'?'active':''}" href="${localPath('fr')}">FR</a></nav></header>`;
const footer = () => `<footer><div class="footer-brand"><b>${t.brand}</b><p>${t.tagline}</p><span>${contactText.intro}</span></div><div class="footer-column"><b>${contactText.title}</b><a href="mailto:masterclimbing.cn@gmail.com"><small>${contactText.email}</small>masterclimbing.cn@gmail.com</a><a href="tel:+8618888609281"><small>${contactText.phone}</small>+86 188 8860 9281</a><span><small>${contactText.wechat}</small>DYC-Shadow</span><span><small>${contactText.official}</small>读岩野攀MasterClimbing</span></div><div class="footer-column"><b>${contactText.info}</b><nav class="footer-nav">${t.nav.map(x=>`<a href="${path(x[1])}">${x[0]}</a>`).join('')}</nav></div><div class="footer-legal muted">${t.slogan}<br>${t.source}<br>© ${new Date().getFullYear()} MasterClimbing</div></footer>`;
const hero = (title,body,img,k='MASTERCLIMBING') => `<section class="hero pagehero"><img src="${media(img)}" alt=""><div class="scrim"></div><div class="hero-copy"><div class="eyebrow">${k}</div><h1>${title}</h1><p>${body}</p></div></section>`;
const cards = list => `<div class="grid">${list.map(a=>`<article class="card"><img src="${media(a[5])}" loading="lazy" alt="${a[3]}"><div class="copy"><div class="meta"><span>${a[1]}</span><span>${a[2]}</span></div><h3>${a[0]}</h3><p>${a[4]}</p><b>${a[3]}</b><br><a class="button" target="_blank" rel="noreferrer" href="${a[6]}">${t.view}</a></div></article>`).join('')}</div>`;
const courseGrid = () => `<div class="two course-grid">${courses.map((c,i)=>`<article class="info"><div class="image-wrap"><img src="${media(c[7])}" loading="lazy" alt="${c[1]}">${i===4?`<span class="badge">${t.rd}</span>`:''}</div><div class="eyebrow">${c[0]} · ${c[2]}</div><h2>${c[1]}</h2><div class="facts"><span class="fact">${c[3]}</span><span class="fact">${c[4]}</span><span class="fact">${c[5]}</span></div><p>${c[6]}</p><div class="notice">${t.courseNotice}</div></article>`).join('')}</div>`;

const homeCopy = {
  zh:['自然岩壁教育与旅行','读懂岩壁，<br>自在去野。','从岩馆走向自然岩壁，学习技术，也练习判断、沟通和照顾伙伴。','查看课程','活动动态','岩壁会把动作、判断和情绪都照得很清楚。','我们练习阅读线路，也观察天气、装备、伙伴和自己的状态。','理解风险、承担选择，才有真正的自由。','从室内到户外','循序渐进的学习路径','课程按阶段安排学习、练习、考核和复盘。','目的地档案','下一次，去哪里读岩？'],
  en:['OUTDOOR CLIMBING EDUCATION & TRAVEL','Read the Rock.<br>Find Your Freedom.','For climbers ready to move from the gym to natural rock—building skill, judgement and dependable partnerships.','Explore courses','Current updates','Rock is our most honest teacher.','We learn to read the wall, the weather, our systems, our partners and ourselves.','Freedom grows from informed and responsible choices.','FROM GYM TO CRAG','A progressive learning pathway','Skills develop through learning, deliberate practice, assessment and reflection.','DESTINATION FILES','Where will you read the rock next?'],
  fr:['FORMATION ET VOYAGES D’ESCALADE','Lire le rocher.<br>Trouver sa liberté.','Pour passer de la salle au rocher naturel en développant technique, jugement et confiance au sein de la cordée.','Découvrir les cours','Actualités','Le rocher est un professeur direct et sincère.','Nous apprenons à lire la paroi, la météo, les systèmes, nos partenaires et notre propre état.','La liberté grandit avec des choix éclairés et responsables.','DE LA SALLE À LA FALAISE','Un parcours progressif','Apprendre, pratiquer, être évalué et prendre du recul à chaque étape.','DESTINATIONS','Où lirez-vous le rocher demain ?']
}[locale];
const homePage = `<section class="hero"><video autoplay muted loop playsinline poster="${media('hero-poster.webp')}"><source src="${media('hero.mp4')}" type="video/mp4"></video><div class="scrim"></div><div class="hero-copy"><div class="eyebrow">${homeCopy[0]}</div><h1>${homeCopy[1]}</h1><p>${homeCopy[2]}</p><a class="button primary" href="${path('courses')}">${homeCopy[3]}</a><a class="button" href="${path('events')}">${homeCopy[4]}</a></div></section><section class="section intro"><div class="big">${homeCopy[5]}</div><div><p>${homeCopy[6]}</p><p>${homeCopy[7]}</p></div></section>`;
const learning = `<section class="section"><div class="head"><div><div class="eyebrow">${homeCopy[8]}</div><h2>${homeCopy[9]}</h2></div><p>${homeCopy[10]}</p></div><div class="path">${courses.map(c=>`<a href="${path('courses')}"><span>${c[0]}</span><div><small>${c[2]}</small><h3>${c[1]}</h3><p>${c[6]}</p></div><b>→</b></a>`).join('')}</div></section>`;
const destinations = `<section class="section dark"><div class="head"><div><div class="eyebrow">${homeCopy[11]}</div><h2>${homeCopy[12]}</h2></div><p>${t.source}</p></div>${cards(placeList.slice(0,4))}</section>`;

const pageText = {
  zh:{courses:['从顶绳开始，逐步建立野外能力','五个阶段覆盖技术系统、风险判断、伙伴沟通和真实岩壁实践。'],travel:['去不同的岩场，爬得更深入','我们从岩质、季节、线路密度和文化体验出发设计小团旅攀。每个目的地都有自己的学习重点。'],domestic:'国内旅攀',domesticBody:'从高原湖泊到喀斯特穿洞，在不同岩质和气候里积累经验。',international:'国际旅攀',internationalBody:'进入成熟的攀岩目的地，体验当地岩场文化、线路风格和旅行节奏。',travelNote:'以下内容来自公众号国内旅攀与国际旅攀合集，展示代表性往期活动。具体日期、价格和报名状态请查看最新发布。',outdoor:['一起爬，也一起成为可靠的伙伴','周末野攀与野抱让技术练习、伙伴协作和岩场文化自然发生。'],events:['下一次出发，先把信息看清楚','截至2026年10月4日，官网暂未展示开放报名活动；新档期以官方发布为准。'],stories:['路线结束后，故事还在继续','记录学员成长、伙伴关系和岩场文化，也为下一次出发留下经验。'],about:['没读 Master，那就去读岩','名字来自一句玩笑，课程和活动却一直认真对待。']},
  en:{courses:['From top rope to independent judgement','Five stages connect technical systems, decision-making, communication and real-rock practice.'],travel:['Go farther. Climb deeper.','Small-group trips designed around rock type, season, route density and local climbing culture. Every destination has a different learning focus.'],domestic:'Climbing trips in China',domesticBody:'Build experience across highland lakes, karst caves, summer crags and multi-site circuits.',international:'International climbing trips',internationalBody:'Spend time in established destinations and encounter their routes, ethics and rhythms.',travelNote:'These representative past trips come from our WeChat China and international trip collections. Check the latest post for current dates, pricing and availability.',outdoor:['Climb together. Become dependable partners.','Weekend sport climbing and bouldering are where skills, partnerships and crag culture grow.'],events:['The next crag starts with clear information','As of 4 October 2026, no event is shown here as open for registration. New dates will be posted through official channels.'],stories:['Routes end. Stories keep moving.','Field notes on progress, partnerships and crag culture, with lessons for the next trip.'],about:['No Master’s degree—so we mastered reading rock','The name began as a joke. The work behind it is serious.']},
  fr:{courses:['De la moulinette au jugement autonome','Cinq étapes relient technique, décision, communication et pratique sur rocher.'],travel:['Aller plus loin. Grimper plus profondément.','Des voyages en petit groupe conçus selon le rocher, la saison, la densité des voies et la culture locale. Chaque destination apporte un apprentissage différent.'],domestic:'Voyages d’escalade en Chine',domesticBody:'Développer son expérience entre lacs d’altitude, grottes karstiques, falaises estivales et circuits multi-sites.',international:'Voyages internationaux',internationalBody:'Découvrir des destinations établies, leurs voies, leur éthique et leur rythme de vie.',travelNote:'Ces séjours passés, sélectionnés dans nos collections WeChat Chine et international, illustrent la diversité des destinations. Consultez les dernières publications pour les dates, tarifs et disponibilités.',outdoor:['Grimper ensemble, devenir des partenaires fiables','Les week-ends en falaise et en bloc font progresser la technique, la confiance et la culture du site.'],events:['Un prochain départ commence par des informations claires','Au 4 octobre 2026, aucun événement n’est affiché comme ouvert aux inscriptions. Les nouvelles dates seront publiées sur nos canaux officiels.'],stories:['Les voies se terminent, les histoires continuent','Des carnets sur la progression, la cordée et la culture des falaises.'],about:['Pas de Master universitaire : alors lisons le rocher','Le nom est né d’une plaisanterie ; le travail, lui, est mené avec sérieux.']}
}[locale];

const climbChina = {
  zh:{
    hero:['和熟悉当地岩场的人，一起攀中国','为海外岩友提供英文、法文沟通的自然岩壁课程、岩场支持与小团定制方案。'],
    introTitle:'中国很大，适合你的岩场取决于季节、能力和旅行节奏。',
    intro:['我们先了解你的经验、目标和可用时间，再匹配岩场、线路与活动形式。','从第一次接触中国岩场，到希望完成连续多日运动攀、抱石或结组训练，都可以从一次行前沟通开始。'],
    values:[['当地经验','了解岩场进入方式、季节、线路和社区习惯。'],['小团沟通','提前核对能力与期待，控制团队规模和行程强度。'],['攀爬优先','减少无效赶路，把时间留给岩壁、恢复和当地生活。']],
    destinationTitle:'从什么样的中国开始？',destinationBody:'以下是四类有代表性的目的地。最终选择还需结合天气、岩场开放情况和团队能力。',
    destinations:[
      ['紫云格凸','巨型穿洞与喀斯特岩壁','春 / 秋','运动攀、独特地貌','getu.webp'],
      ['广西马山与柳州','岩场密集、线路风格丰富','秋 / 冬 / 春','增加攀爬量、连续多日','guangxi.jpg'],
      ['六盘水月照','夏季凉爽的攀岩小镇','夏','入门、进阶与避暑','liupanshui.webp'],
      ['云南泸沽湖','高原湖泊与旅行感','视天气而定','攀爬与自然旅行','yunnan.webp']
    ],
    serviceTitle:'你可以怎样和我们一起攀？',
    services:[['岩场单日支持','适合已有独立攀爬能力、需要当地线路建议与岩场协助的岩友。'],['私人自然岩壁课程','根据你的经验安排顶绳、先锋、保护或多段基础训练。'],['多日攀岩行程','围绕一个目的地安排连续攀爬、恢复和当地体验。'],['俱乐部与团队定制','为海外岩馆、俱乐部和朋友小组设计专属方案。']],
    stepsTitle:'从咨询到上岩壁',steps:[['01','告诉我们','日期、人数、常爬难度、先锋与保护经验。'],['02','能力沟通','通过问卷或视频通话确认目标和能力边界。'],['03','方案建议','推荐目的地、天数、服务内容与费用。'],['04','行前准备','确认装备、保险、交通衔接、天气和应急信息。'],['05','当地见面','完成现场沟通、装备检查和活动简报后出发。']],
    fitTitle:'适合谁',fit:['已经在岩馆稳定攀爬，准备接触自然岩壁','来中国旅行，希望安排一至数天攀岩','寻找英文或法文沟通的私人课程','海外岩馆、俱乐部或朋友小组'],
    includeTitle:'可以提供',include:['自然岩壁课程与攀爬技术支持','岩场和线路建议','公用技术装备，具体以方案为准','行前能力沟通和装备清单','天气与岩场条件下的备选建议'],
    excludeTitle:'需要单独确认',exclude:['国际与中国境内机票','签证及个人旅行证件','未写入方案的住宿、餐饮和交通','个人攀岩装备','因天气或个人原因产生的额外费用'],
    boundary:'涉及住宿、交通等组合旅游服务时，将根据项目情况与具备相应资质的合作方共同安排。最终服务内容、保险和取消规则以书面方案及合同为准。',
    safetyTitle:'安全从信息透明开始',safety:['活动前核对健康、经验和技术能力','根据天气、岩场与团队状态调整计划','坚持伙伴互检、清晰沟通和装备检查','明确课程目标、退出条件和应急联系方式','只展示经过核验的人员资质与保险信息'],
    faqTitle:'常见问题',faq:[
      ['完全没有户外经验可以参加吗？','可以从自然岩壁入门课程开始。我们会先了解你的岩馆经验，再判断适合的课程与岩场。'],
      ['课程可以用英文或法文进行吗？','可以提出英文或法文需求，最终语言安排会在确认订单前写清楚。'],
      ['需要自己带装备吗？','建议携带合脚的攀岩鞋和个人装备。绳索、快挂等公用装备是否提供，会在具体方案中列明。'],
      ['你们能安排酒店和交通吗？','可以提供衔接建议；需要组合预订或完整入境旅游接待时，将根据实际情况与具备相应资质的合作方安排。'],
      ['天气不好怎么办？','自然岩壁活动受天气影响。我们会准备可行的调整建议，改期、替代活动和退款方式以具体合同为准。'],
      ['如何开始咨询？','发邮件告诉我们日期、人数、攀岩水平和感兴趣的地区，我们会先回复最适合补充的信息。']
    ],
    ctaTitle:'告诉我们，你想在中国爬什么。',ctaBody:'发送日期、人数、攀岩水平和目的地偏好，我们会据此给出第一版建议。',cta:'开始规划',emailSubject:'Climb China 来华攀岩咨询'
  },
  en:{
    hero:['Climb China with Local Knowledge','Outdoor climbing courses, local crag support and tailored small-group experiences for international climbers—available in English and French.'],
    introTitle:'China is vast. The right crag depends on your season, ability and travel rhythm.',
    intro:['We begin with your experience, goals and available time, then match the destination, routes and level of support.','Whether this is your first Chinese crag or a focused multi-day sport, bouldering or rope-team trip, it starts with a clear conversation.'],
    values:[['Local knowledge','Practical insight into access, seasons, routes and local crag culture.'],['Small groups','Ability and expectations are discussed before group size and intensity are set.'],['Climbing first','Less unnecessary transit; more time for rock, recovery and local life.']],
    destinationTitle:'Where should your China climbing journey begin?',destinationBody:'Four distinctive starting points. Final recommendations depend on weather, access and group capability.',
    destinations:[
      ['Getu, Ziyun','A giant through-cave and karst limestone','Spring / Autumn','Sport climbing · singular terrain','getu.webp'],
      ['Mashan & Liuzhou, Guangxi','Dense crag network and varied styles','Autumn / Winter / Spring','Mileage · multi-day climbing','guangxi.jpg'],
      ['Yuezhao, Liupanshui','A cooler summer climbing town','Summer','Foundations · progression','liupanshui.webp'],
      ['Lugu Lake, Yunnan','Highland lake and a strong sense of journey','Weather dependent','Climbing · nature travel','yunnan.webp']
    ],
    serviceTitle:'How can we climb together?',
    services:[['Local Crag Day','For independent climbers seeking route suggestions and practical support at a local crag.'],['Private Outdoor Course','Top-rope, leading, belaying or multipitch foundations tailored to your experience.'],['Multi-day Climbing Experience','Consecutive climbing days, recovery and local context around one destination.'],['Club & Group Programme','Tailored programmes for overseas gyms, clubs and private groups.']],
    stepsTitle:'From enquiry to the crag',steps:[['01','Tell us','Your dates, group size, regular grade, leading and belaying experience.'],['02','Ability check','A short form or video call clarifies goals and boundaries.'],['03','Proposal','We recommend a destination, duration, service scope and price.'],['04','Preparation','Confirm equipment, insurance, transfers, weather and emergency information.'],['05','Meet locally','Complete the briefing, partner communication and equipment check before climbing.']],
    fitTitle:'A good fit for',fit:['Gym climbers ready for natural rock','Travellers adding one or several climbing days to China','Climbers seeking private coaching in English or French','Overseas climbing gyms, clubs and groups of friends'],
    includeTitle:'We can provide',include:['Outdoor climbing instruction and technical support','Crag and route recommendations','Shared technical equipment as specified','Pre-trip ability discussion and packing list','Weather- and access-aware alternatives'],
    excludeTitle:'Confirm separately',exclude:['International and domestic flights','Visa and personal travel documents','Accommodation, meals or transport not written into the proposal','Personal climbing equipment','Additional costs caused by weather or personal changes'],
    boundary:'Where accommodation, transport or other bundled travel services are involved, arrangements may be made with appropriately licensed partners. The written proposal and contract define the final scope, insurance and cancellation terms.',
    safetyTitle:'Safety begins with clear information',safety:['Health, experience and technical ability checked before the activity','Plans adjusted to weather, crag conditions and group readiness','Partner checks, clear calls and equipment checks throughout','Course goals, stop conditions and emergency contacts agreed in advance','Only verified qualifications and insurance information are published'],
    faqTitle:'Frequently asked questions',faq:[
      ['Can I join with no outdoor experience?','Yes. Start with Outdoor Top-Rope Foundations. We will first review your gym experience and recommend a suitable course and crag.'],
      ['Are sessions available in English or French?','You can request either language. The confirmed working language will be stated before booking.'],
      ['Do I need to bring climbing gear?','Bring well-fitting climbing shoes and your preferred personal equipment. Shared ropes, quickdraws and other equipment will be listed in your proposal.'],
      ['Can you arrange hotels and transport?','We can advise on connections. When a booking requires bundled inbound travel services, arrangements may involve an appropriately licensed partner.'],
      ['What happens in bad weather?','Outdoor climbing is weather dependent. We prepare practical alternatives; rescheduling, substitutions and refunds follow the confirmed contract.'],
      ['How do I enquire?','Email your dates, group size, climbing level and preferred area. We will reply with the few details needed to shape a first proposal.']
    ],
    ctaTitle:'Tell us what you want to climb in China.',ctaBody:'Send your dates, group size, climbing level and destination ideas. We will turn them into a first recommendation.',cta:'Plan my climbing trip',emailSubject:'Climb China enquiry'
  },
  fr:{
    hero:['Grimper en Chine avec une vraie connaissance locale','Cours en falaise, accompagnement local et séjours en petit groupe pour les grimpeurs internationaux, en français ou en anglais.'],
    introTitle:'La Chine est immense. Le bon site dépend de la saison, de votre niveau et de votre rythme de voyage.',
    intro:['Nous commençons par votre expérience, vos objectifs et le temps disponible, puis nous proposons une destination et un niveau d’accompagnement adaptés.','Première falaise chinoise, plusieurs jours de couenne, bloc ou travail de cordée : tout commence par un échange clair.'],
    values:[['Connaissance locale','Accès, saisons, voies et usages des communautés locales.'],['Petits groupes','Niveau et attentes vérifiés avant de définir la taille et l’intensité.'],['Priorité à l’escalade','Moins de transferts inutiles, plus de temps sur le rocher et pour récupérer.']],
    destinationTitle:'Par où commencer en Chine ?',destinationBody:'Quatre destinations représentatives. La proposition finale dépend de la météo, des accès et du niveau du groupe.',
    destinations:[
      ['Getu, Ziyun','Une grotte traversante géante et du calcaire karstique','Printemps / Automne','Couenne · terrain exceptionnel','getu.webp'],
      ['Mashan et Liuzhou, Guangxi','De nombreuses falaises et des styles variés','Automne / Hiver / Printemps','Volume · plusieurs jours','guangxi.jpg'],
      ['Yuezhao, Liupanshui','Une destination plus fraîche en été','Été','Initiation · progression','liupanshui.webp'],
      ['Lac Lugu, Yunnan','Lac d’altitude et véritable sensation de voyage','Selon la météo','Escalade · nature','yunnan.webp']
    ],
    serviceTitle:'Comment grimper avec nous ?',
    services:[['Journée falaise locale','Pour les grimpeurs autonomes qui souhaitent des conseils de voies et un soutien pratique.'],['Cours privé en extérieur','Moulinette, tête, assurage ou grandes voies selon votre expérience.'],['Séjour de plusieurs jours','Plusieurs journées de grimpe, récupération et découverte d’une même région.'],['Programme club ou groupe','Une proposition dédiée aux salles, clubs et groupes d’amis étrangers.']],
    stepsTitle:'Du premier message au rocher',steps:[['01','Présentez votre projet','Dates, taille du groupe, niveau habituel, expérience en tête et à l’assurage.'],['02','Évaluation','Un court formulaire ou un appel vidéo précise objectifs et limites.'],['03','Proposition','Destination, durée, contenu du service et tarif.'],['04','Préparation','Matériel, assurance, transferts, météo et contacts d’urgence.'],['05','Rendez-vous local','Briefing, communication de cordée et contrôle du matériel avant de grimper.']],
    fitTitle:'Pour qui ?',fit:['Grimpeurs de salle prêts à découvrir le rocher','Voyageurs souhaitant ajouter un ou plusieurs jours d’escalade','Personnes cherchant un cours privé en français ou en anglais','Salles, clubs et groupes d’amis étrangers'],
    includeTitle:'Nous pouvons fournir',include:['Enseignement en falaise et soutien technique','Conseils sur les sites et les voies','Matériel technique collectif précisé dans l’offre','Échange préalable sur le niveau et liste de matériel','Solutions alternatives selon la météo et les accès'],
    excludeTitle:'À confirmer séparément',exclude:['Vols internationaux et intérieurs','Visa et documents personnels','Hébergement, repas ou transport absents de la proposition','Équipement personnel','Frais supplémentaires dus à la météo ou à un changement personnel'],
    boundary:'Lorsque le projet comprend des prestations touristiques groupées comme l’hébergement ou le transport, l’organisation peut faire intervenir des partenaires disposant des autorisations nécessaires. La proposition écrite et le contrat définissent le contenu final, l’assurance et les conditions d’annulation.',
    safetyTitle:'La sécurité commence par des informations claires',safety:['Santé, expérience et compétences vérifiées avant l’activité','Programme adapté à la météo, au site et à l’état du groupe','Contrôles croisés, communication claire et vérification du matériel','Objectifs, conditions d’arrêt et contacts d’urgence fixés en amont','Seules les qualifications et assurances vérifiées sont publiées'],
    faqTitle:'Questions fréquentes',faq:[
      ['Puis-je participer sans expérience en falaise ?','Oui. Commencez par le cours d’initiation en moulinette. Nous examinerons d’abord votre expérience en salle.'],
      ['Les activités existent-elles en français ou en anglais ?','Vous pouvez demander l’une des deux langues. La langue de travail sera confirmée avant la réservation.'],
      ['Dois-je apporter mon matériel ?','Apportez des chaussons adaptés et votre matériel personnel préféré. Cordes, dégaines et matériel collectif seront précisés dans la proposition.'],
      ['Pouvez-vous réserver hôtel et transport ?','Nous pouvons conseiller les correspondances. Pour des prestations touristiques groupées, un partenaire disposant des autorisations adaptées peut intervenir.'],
      ['Que se passe-t-il en cas de mauvais temps ?','L’escalade dépend de la météo. Nous préparons des alternatives ; report, remplacement et remboursement suivent le contrat confirmé.'],
      ['Comment demander une proposition ?','Envoyez vos dates, la taille du groupe, votre niveau et la région souhaitée. Nous vous indiquerons les informations complémentaires nécessaires.']
    ],
    ctaTitle:'Dites-nous ce que vous voulez grimper en Chine.',ctaBody:'Envoyez vos dates, la taille du groupe, votre niveau et vos idées de destination.',cta:'Préparer mon séjour',emailSubject:'Projet escalade en Chine'
  }
}[locale];

const travelPage = hero(pageText.travel[0],pageText.travel[1],'italy.webp','CLIMBING TRIPS')+`<section class="section travel-intro"><div class="big">${pageText.domestic}<br>×<br>${pageText.international}</div><div><p>${pageText.travelNote}</p><p><a class="text-link" target="_blank" rel="noreferrer" href="${domesticAlbum}">${pageText.domestic} ↗</a><br><a class="text-link" target="_blank" rel="noreferrer" href="${internationalAlbum}">${pageText.international} ↗</a></p></div></section><section class="section"><div class="head"><div><div class="eyebrow">CHINA</div><h2>${pageText.domestic}</h2></div><p>${pageText.domesticBody}</p></div>${cards(placeList.slice(0,4))}</section><section class="section dark"><div class="head"><div><div class="eyebrow">WORLD</div><h2>${pageText.international}</h2></div><p>${pageText.internationalBody}</p></div>${cards(placeList.slice(4))}</section>`;
const coursePage = hero(pageText.courses[0],pageText.courses[1],'course-coach.webp','COURSE SYSTEM')+`<section class="section">${courseGrid()}<p class="muted">${locale==='zh'?'教练学员比例最大1:2。费用包含教练、公用装备、课程及野攀运动保险；交通自理。实际安排受天气、岩场与学员状态影响。':locale==='en'?'Maximum coach-to-student ratio: 1:2. Fees include coaching, shared equipment, course access and outdoor-sports insurance; transport is excluded. Delivery depends on weather, crag conditions and student readiness.':'Ratio maximal : un encadrant pour deux participants. Les frais comprennent l’encadrement, le matériel collectif, le cours et l’assurance sportive ; le transport reste à la charge des participants.'}</p></section>`;
const outdoorPage = hero(pageText.outdoor[0],pageText.outdoor[1],'fuzhou.webp','WEEKEND OUTDOORS')+`<section class="section two"><article class="info"><img src="${media('quzhou.webp')}" alt=""><h2>${locale==='zh'?'周末野攀':locale==='en'?'Weekend Sport Climbing':'Week-end en falaise'}</h2><p>${locale==='zh'?'围绕绳索攀登安排，重视互检、沟通、保护和离场复盘。':locale==='en'?'Rope climbing with partner checks, clear calls, attentive belaying and post-session reflection.':'Escalade encordée, contrôles mutuels, communication claire, assurage attentif et bilan de fin de journée.'}</p></article><article class="info"><img src="${media('japan.webp')}" alt=""><h2>${locale==='zh'?'周末野抱':locale==='en'?'Outdoor Bouldering':'Bloc en extérieur'}</h2><p>${locale==='zh'?'认真处理落地区域、保护垫、spotting和岩场礼仪，让每一次尝试更安心。':locale==='en'?'Landing zones, pads, spotting and local etiquette all matter.':'Zones de réception, crash-pads, parade et respect du site font partie de chaque essai.'}</p></article></section>`;
const eventPage = hero(pageText.events[0],pageText.events[1],'getu.webp','EVENT UPDATES')+`<section class="section"><div class="notice">${t.source}</div><h2>${t.archive}</h2>${cards(placeList)}</section>`;
const storyPage = hero(pageText.stories[0],pageText.stories[1],'spain.webp','FIELD NOTES')+`<section class="section">${cards([placeList[0],placeList[4],placeList[6]])}</section>`;
const aboutBody = locale==='zh'?'<p>“读岩野攀”源于创始人本科毕业后没有继续读 Master 的玩笑：既然没去读硕士，那就认真去读岩。</p><p>我们把专业训练、自然岩壁文化、友好的伙伴关系和城市户外生活放在一起，希望更多岩友能稳稳地走向户外。</p><p>品牌由读岩（苏州）体育文化发展有限公司运营，服务范围覆盖中国与欧洲。</p>':locale==='en'?'<p>MasterClimbing began with a playful story: after finishing a bachelor’s degree, the founder did not pursue a Master’s—so chose to “master” the rock instead.</p><p>We bring together outdoor climbing education, natural-rock culture, dependable partnerships and a contemporary urban outdoor life.</p><p>MasterClimbing is operated by 读岩（苏州）体育文化发展有限公司 and develops climbing education and journeys across China and Europe.</p>':'<p>MasterClimbing vient d’une histoire légère : après sa licence, le fondateur n’a pas poursuivi de Master et a choisi de « maîtriser » la lecture du rocher.</p><p>Nous réunissons formation en falaise, culture du rocher, confiance au sein de la cordée et mode de vie outdoor contemporain.</p><p>La marque est exploitée par 读岩（苏州）体育文化发展有限公司 et développe des formations et voyages en Chine et en Europe.</p>';
const aboutPage = hero(pageText.about[0],pageText.about[1],'course-system.webp','ABOUT MASTERCLIMBING')+`<section class="section intro"><div class="big">${t.tagline}</div><div>${aboutBody}</div></section>`;
const list = items => `<ul class="clean-list">${items.map(x=>`<li>${x}</li>`).join('')}</ul>`;
const enquiryBody = locale==='zh'?'你好，我想咨询来华攀岩。\n\n预计日期：\n人数：\n常爬难度：\n先锋/保护经验：\n感兴趣的地区：':locale==='en'?'Hello, I am interested in climbing in China.\n\nDates:\nGroup size:\nRegular grade and grading system:\nLeading/belaying experience:\nPreferred destination:':'Bonjour, je souhaite organiser un séjour d’escalade en Chine.\n\nDates :\nTaille du groupe :\nNiveau habituel et cotation :\nExpérience en tête/assurage :\nDestination souhaitée :';
const enquiryLink = `mailto:masterclimbing.cn@gmail.com?subject=${encodeURIComponent(climbChina.emailSubject)}&body=${encodeURIComponent(enquiryBody)}`;
const climbChinaPage = hero(climbChina.hero[0],climbChina.hero[1],'getu.webp','CLIMB CHINA')+
`<section class="section china-intro"><div class="big">${climbChina.introTitle}</div><div>${climbChina.intro.map(x=>`<p>${x}</p>`).join('')}<a class="button primary" href="${enquiryLink}">${climbChina.cta}</a></div></section>
<section class="section compact-section"><div class="service-grid value-grid">${climbChina.values.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></section>
<section class="section"><div class="head"><div><div class="eyebrow">DESTINATIONS</div><h2>${climbChina.destinationTitle}</h2></div><p>${climbChina.destinationBody}</p></div><div class="destination-grid">${climbChina.destinations.map(x=>`<article class="destination-card"><img src="${media(x[4])}" loading="lazy" alt="${x[0]}"><div><div class="meta"><span>${x[2]}</span><span>${x[3]}</span></div><h3>${x[0]}</h3><p>${x[1]}</p></div></article>`).join('')}</div></section>
<section class="section dark"><div class="head"><div><div class="eyebrow">SERVICES</div><h2>${climbChina.serviceTitle}</h2></div></div><div class="service-grid">${climbChina.services.map((x,i)=>`<article><span>0${i+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></section>
<section class="section"><div class="head"><div><div class="eyebrow">HOW IT WORKS</div><h2>${climbChina.stepsTitle}</h2></div></div><div class="process">${climbChina.steps.map(x=>`<article><span>${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('')}</div></section>
<section class="section split-panel"><article><div class="eyebrow">WHO IT IS FOR</div><h2>${climbChina.fitTitle}</h2>${list(climbChina.fit)}</article><article><div class="eyebrow">INCLUDED</div><h2>${climbChina.includeTitle}</h2>${list(climbChina.include)}</article><article><div class="eyebrow">NOT INCLUDED</div><h2>${climbChina.excludeTitle}</h2>${list(climbChina.exclude)}</article></section>
<section class="section boundary"><div class="big">${climbChina.safetyTitle}</div><div>${list(climbChina.safety)}<p class="notice">${climbChina.boundary}</p></div></section>
<section class="section faq"><div class="head"><div><div class="eyebrow">FAQ</div><h2>${climbChina.faqTitle}</h2></div></div>${climbChina.faq.map(x=>`<details><summary>${x[0]}<span>＋</span></summary><p>${x[1]}</p></details>`).join('')}</section>
<section class="section contact-cta"><div><div class="eyebrow">START A CONVERSATION</div><h2>${climbChina.ctaTitle}</h2><p>${climbChina.ctaBody}</p></div><div class="cta-actions"><a class="button primary" href="${enquiryLink}">${climbChina.cta}</a><a class="button" href="tel:+8618888609281">+86 188 8860 9281</a><span>WeChat · DYC-Shadow</span></div></section>`;
const pages = {courses:coursePage,travel:travelPage,'climb-china':climbChinaPage,outdoor:outdoorPage,events:eventPage,stories:storyPage,about:aboutPage};
const relative = location.pathname.replace(root,'').replace(/^(en|fr)\//,'');
const key = relative.split('/')[0] || '';
document.getElementById('app').innerHTML = header() + (pages[key] || homePage + learning + destinations) + footer();
