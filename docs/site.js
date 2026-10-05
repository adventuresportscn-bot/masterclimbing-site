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
  zh:{lang:'zh-CN',brand:'读岩野攀',subbrand:'MASTERCLIMBING',tagline:'读懂岩壁，自在去野。',slogan:'READ THE ROCK. FIND YOUR FREEDOM.',nav:[['课程','courses'],['旅攀','travel'],['野攀野抱','outdoor'],['活动','events'],['往期故事','stories'],['关于我们','about']],source:'活动日期与报名方式以公众号 MasterClimbing读岩野攀 最新通知为准。',view:'查看原文 ↗',archive:'往期 / 目的地档案',rd:'研发中',courseNotice:'结课代表完成了本阶段学习，独立组织野攀和应对复杂情况仍需要持续练习与经验积累。'},
  en:{lang:'en',brand:'MASTERCLIMBING',subbrand:'读岩野攀',tagline:'Read the Rock. Find Your Freedom.',slogan:'读懂岩壁，自在去野。',nav:[['Courses','courses'],['Climbing Trips','travel'],['Weekends','outdoor'],['Events','events'],['Field Notes','stories'],['About','about']],source:'Dates and registration details are subject to the latest notice from MasterClimbing on WeChat.',view:'View original ↗',archive:'Archive / destination file',rd:'R&D',courseNotice:'Course completion does not unconditionally guarantee independent climbing or emergency-response capability.'},
  fr:{lang:'fr',brand:'MASTERCLIMBING',subbrand:'读岩野攀',tagline:'Lire le rocher. Trouver sa liberté.',slogan:'READ THE ROCK. FIND YOUR FREEDOM.',nav:[['Cours','courses'],['Voyages','travel'],['Week-ends','outdoor'],['Événements','events'],['Carnets','stories'],['À propos','about']],source:'Les dates et inscriptions sont confirmées dans les dernières publications WeChat de MasterClimbing.',view:'Voir la publication ↗',archive:'Archive / destination',rd:'R&D',courseNotice:'La fin du cours ne garantit pas à elle seule l’autonomie en escalade ni la capacité à gérer une situation d’urgence.'}
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

const travelPage = hero(pageText.travel[0],pageText.travel[1],'italy.webp','CLIMBING TRIPS')+`<section class="section travel-intro"><div class="big">${pageText.domestic}<br>×<br>${pageText.international}</div><div><p>${pageText.travelNote}</p><p><a class="text-link" target="_blank" rel="noreferrer" href="${domesticAlbum}">${pageText.domestic} ↗</a><br><a class="text-link" target="_blank" rel="noreferrer" href="${internationalAlbum}">${pageText.international} ↗</a></p></div></section><section class="section"><div class="head"><div><div class="eyebrow">CHINA</div><h2>${pageText.domestic}</h2></div><p>${pageText.domesticBody}</p></div>${cards(placeList.slice(0,4))}</section><section class="section dark"><div class="head"><div><div class="eyebrow">WORLD</div><h2>${pageText.international}</h2></div><p>${pageText.internationalBody}</p></div>${cards(placeList.slice(4))}</section>`;
const coursePage = hero(pageText.courses[0],pageText.courses[1],'course-coach.webp','COURSE SYSTEM')+`<section class="section">${courseGrid()}<p class="muted">${locale==='zh'?'教练学员比例最大1:2。费用包含教练、公用装备、课程及野攀运动保险；交通自理。实际安排受天气、岩场与学员状态影响。':locale==='en'?'Maximum coach-to-student ratio: 1:2. Fees include coaching, shared equipment, course access and outdoor-sports insurance; transport is excluded. Delivery depends on weather, crag conditions and student readiness.':'Ratio maximal : un encadrant pour deux participants. Les frais comprennent l’encadrement, le matériel collectif, le cours et l’assurance sportive ; le transport reste à la charge des participants.'}</p></section>`;
const outdoorPage = hero(pageText.outdoor[0],pageText.outdoor[1],'fuzhou.webp','WEEKEND OUTDOORS')+`<section class="section two"><article class="info"><img src="${media('quzhou.webp')}" alt=""><h2>${locale==='zh'?'周末野攀':locale==='en'?'Weekend Sport Climbing':'Week-end en falaise'}</h2><p>${locale==='zh'?'围绕绳索攀登安排，重视互检、沟通、保护和离场复盘。':locale==='en'?'Rope climbing with partner checks, clear calls, attentive belaying and post-session reflection.':'Escalade encordée, contrôles mutuels, communication claire, assurage attentif et bilan de fin de journée.'}</p></article><article class="info"><img src="${media('japan.webp')}" alt=""><h2>${locale==='zh'?'周末野抱':locale==='en'?'Outdoor Bouldering':'Bloc en extérieur'}</h2><p>${locale==='zh'?'认真处理落地区域、保护垫、spotting和岩场礼仪，让每一次尝试更安心。':locale==='en'?'Landing zones, pads, spotting and local etiquette all matter.':'Zones de réception, crash-pads, parade et respect du site font partie de chaque essai.'}</p></article></section>`;
const eventPage = hero(pageText.events[0],pageText.events[1],'getu.webp','EVENT UPDATES')+`<section class="section"><div class="notice">${t.source}</div><h2>${t.archive}</h2>${cards(placeList)}</section>`;
const storyPage = hero(pageText.stories[0],pageText.stories[1],'spain.webp','FIELD NOTES')+`<section class="section">${cards([placeList[0],placeList[4],placeList[6]])}</section>`;
const aboutBody = locale==='zh'?'<p>“读岩野攀”源于创始人本科毕业后没有继续读 Master 的玩笑：既然没去读硕士，那就认真去读岩。</p><p>我们把专业训练、自然岩壁文化、友好的伙伴关系和城市户外生活放在一起，希望更多岩友能稳稳地走向户外。</p><p>品牌由读岩（苏州）体育文化发展有限公司运营，服务范围覆盖中国与欧洲。</p>':locale==='en'?'<p>MasterClimbing began with a playful story: after finishing a bachelor’s degree, the founder did not pursue a Master’s—so chose to “master” the rock instead.</p><p>We bring together outdoor climbing education, natural-rock culture, dependable partnerships and a contemporary urban outdoor life.</p><p>MasterClimbing is operated by 读岩（苏州）体育文化发展有限公司 and develops climbing education and journeys across China and Europe.</p>':'<p>MasterClimbing vient d’une histoire légère : après sa licence, le fondateur n’a pas poursuivi de Master et a choisi de « maîtriser » la lecture du rocher.</p><p>Nous réunissons formation en falaise, culture du rocher, confiance au sein de la cordée et mode de vie outdoor contemporain.</p><p>La marque est exploitée par 读岩（苏州）体育文化发展有限公司 et développe des formations et voyages en Chine et en Europe.</p>';
const aboutPage = hero(pageText.about[0],pageText.about[1],'course-system.webp','ABOUT MASTERCLIMBING')+`<section class="section intro"><div class="big">${t.tagline}</div><div>${aboutBody}</div></section>`;
const pages = {courses:coursePage,travel:travelPage,outdoor:outdoorPage,events:eventPage,stories:storyPage,about:aboutPage};
const relative = location.pathname.replace(root,'').replace(/^(en|fr)\//,'');
const key = relative.split('/')[0] || '';
document.getElementById('app').innerHTML = header() + (pages[key] || homePage + learning + destinations) + footer();
