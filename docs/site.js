const onGithub = location.hostname.endsWith('github.io');
const root = onGithub ? '/masterclimbing-site/' : '/';
const isEN = location.pathname.includes('/en/');
const home = isEN ? `${root}en/` : root;
const path = slug => `${home}${slug}/`;
const media = name => `${root}media/${name}`;

const zh = {
  lang:'zh-CN', switchLabel:'EN', switchHref:`${root}en/`, brand:'读岩野攀', tagline:'读懂岩壁，自在去野。', slogan:'READ THE ROCK. FIND YOUR FREEDOM.',
  nav:[['课程','courses'],['旅攀','travel'],['野攀野抱','outdoor'],['活动','events'],['往期故事','stories'],['关于我们','about']],
  source:'活动日期与报名方式以公众号 MasterClimbing读岩野攀 最新通知为准。', view:'查看往期来源 ↗',
  courses:[
    ['01','自然岩壁入门','顶绳与岩场基础','2天','2–6人','¥2,000 / 人','认识岩场环境，学习装备、绳结、顶绳保护、保护站拆除、路书、礼仪和伙伴流程。','course-team.webp'],
    ['02','先锋攀登与保护','先锋基础','2天','2–6人','¥2,200 / 人','学习先锋挂绳、冲坠、动态保护、GRIGRI使用与保护站设置；两人同行9折。','course-wall.webp'],
    ['03','先锋精进','冲坠与风险管理','1天','2–4人','¥1,200 / 人','在真实岩壁中强化冲坠实操、动态保护、决策与野外先锋风险管理。','course-system.webp'],
    ['04','多段攀登基础','高级课程','2天','2–4人','¥2,200 / 人','学习多段策略、保护站、上方保护、下降、绳索管理与风险管理；两人同行9折。','course-anchor.webp'],
    ['05','结组进阶系统','研发中 · 暂不销售','建议3天','建议2–4人','价格待定','覆盖多人结组、夜间模块、大岩壁导向与有限SRT内容；须完成试课与技术审核后开放。','course-coach.webp']
  ],
  places:[
    ['意大利旅攀','海外旅攀','往期','Arco / Dolomites','从加尔达湖区到多洛米蒂，把时间留给岩壁与在地生活。','italy.webp','https://mp.weixin.qq.com/s/QtdsHIWZnXbGWrRkslc7dw'],
    ['西班牙旅攀','海外旅攀','往期','Spain','围绕攀爬本身组织的小队岩壁生活。','spain.webp','https://mp.weixin.qq.com/s/lpn7bHfxyM9Ec1iD4_vubQ'],
    ['广西喀斯特旅攀','国内旅攀','往期','马山 / 柳州','串起喀斯特岩壁、当地生活与小队攀爬。','getu.webp','https://mp.weixin.qq.com/s/j1L_27pwipCSiCau-gFVFQ'],
    ['马略卡深水抱石','海外目的地','目的地档案','Mallorca','海岸石灰岩、地中海与深水抱石，组成另一种阅读岩壁的方式。','mallorca.webp','#'],
    ['衢州两头洞','周末野攀','往期','浙江 · 衢州','把周末留给攀爬、伙伴和山风。','quzhou.webp','https://mp.weixin.qq.com/s/spmwbfZT9iuPk7sOijXT_Q'],
    ['福州野攀野抱','社群活动','往期','福建 · 福州','绳索、抱石与伙伴关系共同发生的周末。','fuzhou.webp','#']
  ]
};

const en = {
  lang:'en', switchLabel:'中文', switchHref:root, brand:'MASTERCLIMBING', tagline:'Read the Rock. Find Your Freedom.', slogan:'读懂岩壁，自在去野。',
  nav:[['Courses','courses'],['Climbing Trips','travel'],['Weekends','outdoor'],['Events','events'],['Field Notes','stories'],['About','about']],
  source:'Dates and registration details are subject to the latest notice from MasterClimbing on WeChat.', view:'View original story ↗',
  courses:[
    ['01','Outdoor Top-Rope Foundations','Natural rock essentials','2 days','2–6 people','CNY 2,000 / person','Learn crag awareness, equipment, knots, top-rope belaying, anchor cleaning, guidebooks, etiquette and partner routines.','course-team.webp'],
    ['02','Sport Leading & Belaying','Lead foundations','2 days','2–6 people','CNY 2,200 / person','Build lead-clipping, falling, dynamic belaying, GRIGRI and anchor-management skills. 10% off for pairs.','course-wall.webp'],
    ['03','Lead Progression','Falls & risk management','1 day','2–4 people','CNY 1,200 / person','Practise real-rock falls, dynamic catches, decision-making and outdoor lead risk management.','course-system.webp'],
    ['04','Multipitch Foundations','Advanced course','2 days','2–4 people','CNY 2,200 / person','Learn multipitch strategy, belay stations, bringing up a second, rappelling, rope and risk management. 10% off for pairs.','course-anchor.webp'],
    ['05','Advanced Rope-Team Systems','In development · not for sale','Proposed 3 days','Proposed 2–4','Price TBC','A future module covering multi-person rope teams, night operations, big-wall orientation and limited SRT, pending trials and technical approval.','course-coach.webp']
  ],
  places:[
    ['Italy Climbing Trip','International trip','Archive','Arco / Dolomites','From Lake Garda to the Dolomites: more time on rock and in local life.','italy.webp','https://mp.weixin.qq.com/s/QtdsHIWZnXbGWrRkslc7dw'],
    ['Spain Climbing Trip','International trip','Archive','Spain','A small-team climbing journey built around time on the wall.','spain.webp','https://mp.weixin.qq.com/s/lpn7bHfxyM9Ec1iD4_vubQ'],
    ['Guangxi Karst Trip','China trip','Archive','Mashan / Liuzhou','Karst limestone, local life and focused climbing with a small team.','getu.webp','https://mp.weixin.qq.com/s/j1L_27pwipCSiCau-gFVFQ'],
    ['Mallorca Deep Water Soloing','International destination','Destination file','Mallorca','Coastal limestone, the Mediterranean and deep water soloing offer another way to read the rock.','mallorca.webp','#'],
    ['Quzhou Liangtou Cave','Weekend climbing','Archive','Zhejiang · Quzhou','A weekend for climbing, partners and mountain air.','quzhou.webp','https://mp.weixin.qq.com/s/spmwbfZT9iuPk7sOijXT_Q'],
    ['Fuzhou Climbing & Bouldering','Community weekend','Archive','Fujian · Fuzhou','Ropes, boulders and dependable partnerships in one weekend.','fuzhou.webp','#']
  ]
};

const t = isEN ? en : zh;
document.documentElement.lang = t.lang;
const header = () => `<header class="header"><a class="logo" href="${home}">${t.brand}<small>${isEN?'读岩野攀':'MASTERCLIMBING'}</small></a><nav class="nav">${t.nav.map(x=>`<a href="${path(x[1])}">${x[0]}</a>`).join('')}</nav><a class="lang" href="${t.switchHref}">${t.switchLabel}</a></header>`;
const footer = () => `<footer><div><b>${t.brand}</b><p>${t.tagline}</p></div><nav class="footer-nav">${t.nav.map(x=>`<a href="${path(x[1])}">${x[0]}</a>`).join('')}</nav><div class="muted">${t.slogan}<br>${t.source}</div></footer>`;
const hero = (title,body,img,k='MASTERCLIMBING') => `<section class="hero pagehero"><img src="${media(img)}" alt=""><div class="scrim"></div><div class="hero-copy"><div class="eyebrow">${k}</div><h1>${title}</h1><p>${body}</p></div></section>`;
const cards = (list=t.places) => `<div class="grid">${list.map(a=>`<article class="card"><img src="${media(a[5])}" loading="lazy" alt="${a[3]}"><div class="copy"><div class="meta"><span>${a[1]}</span><span>${a[2]}</span></div><h3>${a[0]}</h3><p>${a[4]}</p><b>${a[3]}</b>${a[6]==='#'?'':`<br><a class="button" target="_blank" rel="noreferrer" href="${a[6]}">${t.view}</a>`}</div></article>`).join('')}</div>`;
const courseGrid = () => `<div class="two course-grid">${t.courses.map((c,i)=>`<article class="info"><div class="image-wrap"><img src="${media(c[7])}" loading="lazy" alt="${c[1]}">${i===4?`<span class="badge">${isEN?'R&D':'研发中'}</span>`:''}</div><div class="eyebrow">${c[0]} · ${c[2]}</div><h2>${c[1]}</h2><div class="facts"><span class="fact">${c[3]}</span><span class="fact">${c[4]}</span><span class="fact">${c[5]}</span></div><p>${c[6]}</p><div class="notice">${isEN?'Course completion is not an unconditional guarantee of independent climbing or emergency-response capability.':'结课不等于自动具备独立组织野攀或处理复杂紧急情况的能力。'}</div></article>`).join('')}</div>`;

const homePage = isEN
? `<section class="hero"><video autoplay muted loop playsinline poster="${media('hero-poster.webp')}"><source src="${media('hero.mp4')}" type="video/mp4"></video><div class="scrim"></div><div class="hero-copy"><div class="eyebrow">OUTDOOR CLIMBING EDUCATION & TRAVEL</div><h1>Read the Rock.<br>Find Your Freedom.</h1><p>For climbers ready to move from the gym to natural rock—building skill, judgement and dependable partnerships.</p><a class="button primary" href="${path('courses')}">Explore courses</a><a class="button" href="${path('events')}">Current updates</a></div></section><section class="section intro"><div class="big">Rock is not something to conquer.<br>It is our most honest teacher.</div><div><p>We learn to read the wall, the environment, the system, our partners and ourselves.</p><p>Freedom is not the absence of risk. It is the ability to make responsible choices with understanding.</p></div></section>`
: `<section class="hero"><video autoplay muted loop playsinline poster="${media('hero-poster.webp')}"><source src="${media('hero.mp4')}" type="video/mp4"></video><div class="scrim"></div><div class="hero-copy"><div class="eyebrow">自然岩壁教育与旅行</div><h1>读懂岩壁，<br>自在去野。</h1><p>为已经开始攀岩、想从室内走向自然岩壁的你，建立技能、判断与可靠的伙伴网络。</p><a class="button primary" href="${path('courses')}">查看课程</a><a class="button" href="${path('events')}">活动动态</a></div></section><section class="section intro"><div class="big">岩石不是被征服的对象，<br>而是最真实的老师。</div><div><p>学习阅读岩壁，也学习阅读环境、系统、伙伴和自己。</p><p>自由不是忽略风险，而是在理解之后做出负责任的选择。</p></div></section>`;

const learning = `<section class="section"><div class="head"><div><div class="eyebrow">${isEN?'FROM GYM TO CRAG':'从室内到户外'}</div><h2>${isEN?'A progressive learning pathway':'循序渐进的学习路径'}</h2></div><p>${isEN?'Skills are developed through learning, deliberate practice, assessment and reflection.':'把能力拆成可以学习、练习、考核和复盘的阶段。'}</p></div><div class="path">${t.courses.map(c=>`<a href="${path('courses')}"><span>${c[0]}</span><div><small>${c[2]}</small><h3>${c[1]}</h3><p>${c[6]}</p></div><b>→</b></a>`).join('')}</div></section>`;
const destinations = `<section class="section dark"><div class="head"><div><div class="eyebrow">${isEN?'DESTINATION FILES':'目的地档案'}</div><h2>${isEN?'Where will you read the rock next?':'下一次，去哪里读岩？'}</h2></div><p>${t.source}</p></div>${cards(t.places.slice(0,4))}</section>`;

const pages = isEN ? {
  courses:hero('From top rope to independent judgement','Five stages connect technical systems, decision-making, communication and real-rock practice.','course-coach.webp','COURSE SYSTEM')+`<section class="section">${courseGrid()}<p class="muted">Maximum coach-to-student ratio: 1:2. Listed fees include coaching, shared equipment, course access and outdoor-sports insurance; transport is excluded. Delivery depends on weather, crag conditions and student readiness.</p></section>`,
  travel:hero('Travel less. Climb more.','Small-group climbing journeys in China and abroad, built around rock, local life and appropriate capability.','italy.webp','CLIMBING TRIPS')+`<section class="section">${cards(t.places.slice(0,4))}</section>`,
  outdoor:hero('Climb together. Become dependable partners.','Weekend sport climbing and bouldering are where skills, partnerships and crag culture grow.','fuzhou.webp','WEEKEND OUTDOORS')+`<section class="section two"><article class="info"><img src="${media('quzhou.webp')}" alt="Weekend sport climbing"><h2>Weekend Sport Climbing</h2><p>Rope climbing with partner checks, clear calls, attentive belaying and post-session reflection.</p></article><article class="info"><img src="${media('japan.webp')}" alt="Outdoor bouldering"><h2>Outdoor Bouldering</h2><p>Short problems do not mean low risk. Landing zones, pads, spotting and local etiquette matter.</p></article></section>`,
  events:hero('The next crag starts with a clear plan','As of 3 October 2026, previously published August–September events have moved to the archive. New dates will be posted through official channels.','getu.webp','EVENT UPDATES')+`<section class="section"><div class="notice">No event is currently presented here as open for registration. ${t.source}</div><h2>Past trips and destination files</h2>${cards()}</section>`,
  stories:hero('Routes end. Stories keep moving.','Field notes about growth, partnerships and crag culture—not recycled recruitment copy.','spain.webp','FIELD NOTES')+`<section class="section">${cards([t.places[0],t.places[1],t.places[4]])}</section>`,
  about:hero('No Master’s degree—so we mastered reading rock','The name began as a joke. The work behind it is serious.','course-system.webp','ABOUT MASTERCLIMBING')+`<section class="section intro"><div class="big">Read the Rock.<br>Find Your Freedom.</div><div><p>MasterClimbing began with a playful story: after finishing a bachelor’s degree, the founder did not pursue a Master’s—so chose to “master” the rock instead.</p><p>Behind the light-hearted name is a disciplined approach to outdoor climbing education, natural-rock culture, friendly partnerships and a youthful urban outdoor lifestyle.</p><p>MasterClimbing is operated by 读岩（苏州）体育文化发展有限公司 and develops climbing education and journeys across China and Europe.</p></div></section>`
} : {
  courses:hero('从顶绳，到独立阅读一条线路','五段路径把技术系统、风险判断、伙伴沟通和真实岩壁实践连在一起。','course-coach.webp','COURSE SYSTEM')+`<section class="section">${courseGrid()}<p class="muted">教练学员比例最大1:2。费用包含教练、公用装备、课程及野攀运动保险；交通自理。实际安排受天气、岩场与学员状态影响。</p></section>`,
  travel:hero('少赶路，多留在岩壁上','国内与海外的小团旅攀，把路线、在地生活与匹配的攀爬能力放进同一段旅程。','italy.webp','TRAVEL CLIMB')+`<section class="section">${cards(t.places.slice(0,4))}</section>`,
  outdoor:hero('从一起爬，变成可靠的伙伴','周末野攀与野抱，是技术练习，也是伙伴关系与岩场文化的发生地。','fuzhou.webp','WEEKEND OUTDOORS')+`<section class="section two"><article class="info"><img src="${media('quzhou.webp')}" alt="周末野攀"><h2>周末野攀</h2><p>以绳索攀登为主，强调互检、沟通、保护与离场复盘。</p></article><article class="info"><img src="${media('japan.webp')}" alt="周末野抱"><h2>周末野抱</h2><p>线路短不代表风险低；认真处理落地区域、保护垫、spotting和岩场礼仪。</p></article></section>`,
  events:hero('下一次出发，先有清晰的信息','截至2026年10月3日，原8—9月活动均已转入往期；新档期以官方最新发布为准。','getu.webp','EVENT UPDATES')+`<section class="section"><div class="notice">当前官网没有标记为“开放报名”的活动。${t.source}</div><h2>往期活动与目的地档案</h2>${cards()}</section>`,
  stories:hero('路线会结束，故事不会','留下学员成长、伙伴关系和岩场文化，而不是复制过期招募文案。','spain.webp','FIELD NOTES')+`<section class="section">${cards([t.places[0],t.places[1],t.places[4]])}</section>`,
  about:hero('没读 Master，那就去读岩','一个带点玩笑的名字，一件认真做很久的事。','course-system.webp','ABOUT MASTERCLIMBING')+`<section class="section intro"><div class="big">读懂岩壁，<br>自在去野。</div><div><p>“读岩野攀”源于创始人本科毕业后没有继续读 Master 的玩笑：既然没有读硕士，就认真去读岩。</p><p>名字轻松，方法严肃。专业训练、自然岩壁文化、友好伙伴关系与年轻城市生活方式，共同构成我们的品牌。</p><p>品牌由读岩（苏州）体育文化发展有限公司运营，服务范围覆盖中国与欧洲。</p></div></section>`
};

const relative = location.pathname.replace(root,'').replace(/^en\//,'');
const key = relative.split('/')[0] || '';
document.getElementById('app').innerHTML = header() + (pages[key] || homePage + learning + destinations) + footer();
