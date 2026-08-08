export type ActivityStatus = "开放中" | "即将开始" | "已满员" | "已结束";

export type Activity = {
  slug: string;
  title: string;
  type: "课程" | "野攀" | "野抱" | "国内旅攀" | "海外旅攀";
  date: string;
  dateISO: string;
  location: string;
  status: ActivityStatus;
  summary: string;
  audience: string;
  prerequisite: string;
  capacity: string;
  price: string;
  image: string;
  itinerary: string[];
  includes: string[];
  excludes: string[];
  equipment: string;
  sourceUrl: string;
  sourceLabel: string;
  verifiedAt: string;
  featured?: boolean;
};

export const courses = [
  {
    level: "01",
    name: "自然岩壁入门",
    subtitle: "顶绳与岩场基础",
    duration: "2天",
    people: "2—6人",
    price: "¥2,000 / 人",
    audience: "已度过室内攀岩新手期，希望系统走向真实岩壁的岩友。",
    outcome: "认识岩场环境，学习装备、绳结、顶绳保护、保护站拆除、路书与伙伴流程。",
    boundary: "结课不等于自动具备独立挂线、组织野攀或处理复杂紧急情况的能力。",
    image: "/media/course-team.webp",
  },
  {
    level: "02",
    name: "先锋攀登与保护",
    subtitle: "中级课程",
    duration: "2天",
    people: "2—6人",
    price: "¥2,200 / 人",
    audience: "已具备稳定顶绳保护与自然岩壁基础操作能力的攀岩者。",
    outcome: "学习先锋挂绳、冲坠、动态保护、GRIGRI使用与保护站设置。",
    boundary: "先锋能力包含坠落区判断、伙伴沟通和停止或撤退决策，不以完成难度替代系统评价。",
    image: "/media/course-wall.webp",
  },
  {
    level: "03",
    name: "先锋精进",
    subtitle: "冲坠与风险管理强化",
    duration: "1天",
    people: "2—4人",
    price: "¥1,200 / 人",
    audience: "已有先锋基础，希望提升野外先锋稳定性和风险判断的岩友。",
    outcome: "复习先锋攀爬与保护，在真实场景中强化冲坠实操与风险管理。",
    boundary: "本课程用于强化已有能力，不适合作为第一次接触先锋攀登的入口。",
    image: "/media/course-system.webp",
  },
  {
    level: "04",
    name: "多段攀登基础",
    subtitle: "高级课程",
    duration: "2天",
    people: "2—4人",
    price: "¥2,200 / 人",
    audience: "已经具备稳定先锋攀登、保护与清线能力的进阶攀岩者。",
    outcome: "学习多段策略、保护站、上方保护、下降、绳索管理与风险管理。",
    boundary: "两天课程不能覆盖所有天气、撤退与救援情境，也不等同于胜任所有多段线路。",
    image: "/media/course-anchor.webp",
  },
];

export const activities: Activity[] = [
  {
    slug: "quzhou-liangtou-cave-0822",
    title: "盛夏避暑｜衢州两头洞野攀",
    type: "野攀",
    date: "2026.08.22—08.23",
    dateISO: "2026-08-22",
    location: "浙江 · 衢州",
    status: "开放中",
    summary: "躲进天然岩壁的阴影里，把周末留给攀爬、伙伴和一阵真正的山风。",
    audience: "拥有室内攀岩经验，想尝试自然岩壁或继续积累户外经验的岩友。",
    prerequisite: "具体攀爬基础与装备要求以活动确认信息为准。",
    capacity: "小队活动",
    price: "咨询活动详情",
    image: "/media/quzhou.webp",
    itinerary: ["周六集合并完成岩场与伙伴安全说明", "按能力分组攀爬与换线", "周日继续攀爬并完成离场复盘"],
    includes: ["活动组织与现场分组", "公用装备安排", "岩场风险说明"],
    excludes: ["往返交通", "餐饮住宿", "个人装备与其他个人消费"],
    equipment: "建议自备头盔、安全带、攀岩鞋及个人常用装备；最终清单以行前通知为准。",
    sourceUrl: "https://mp.weixin.qq.com/s/spmwbfZT9iuPk7sOijXT_Q",
    sourceLabel: "公众号招募文章",
    verifiedAt: "2026-08-08",
    featured: true,
  },
  {
    slug: "xianju-climb-paddle-0829",
    title: "仙居野攀与桨板玩水",
    type: "野攀",
    date: "2026.08.29—08.30",
    dateISO: "2026-08-29",
    location: "浙江 · 仙居",
    status: "开放中",
    summary: "在岩壁上认真攀爬，也给夏天留一点下水、放松和一起吃饭的时间。",
    audience: "希望把自然岩壁与轻户外周末结合的室内攀岩者。",
    prerequisite: "桨板与攀岩环节的参与条件以行前评估为准。",
    capacity: "小队活动",
    price: "咨询活动详情",
    image: "/media/xianju.webp",
    itinerary: ["周六抵达仙居并完成野攀活动", "晚间团队交流", "周日攀爬或桨板体验，视天气调整"],
    includes: ["活动组织", "攀爬分组与现场协调"],
    excludes: ["交通、住宿与餐饮", "个人装备", "未明确列出的水上项目费用"],
    equipment: "攀岩个人装备、防晒、换洗衣物和水上活动用品，以行前清单为准。",
    sourceUrl: "https://mp.weixin.qq.com/s/D00szvHC60iO422SGTRohw",
    sourceLabel: "公众号招募文章",
    verifiedAt: "2026-08-08",
    featured: true,
  },
  {
    slug: "italy-mid-autumn-0923",
    title: "中秋意大利旅攀｜Arco到多洛米蒂",
    type: "海外旅攀",
    date: "2026.09.23—09.28",
    dateISO: "2026-09-23",
    location: "意大利 · Arco / Dolomites",
    status: "开放中",
    summary: "不赶景点清单，从Garda湖区到多洛米蒂，把六天真正留在岩壁和在地生活里。",
    audience: "希望获得小队旅攀体验、并具备一定攀爬基础的岩友。",
    prerequisite: "护照、签证、健康状况及具体攀爬能力须在出发前确认。",
    capacity: "3人成行，6人封顶",
    price: "建议价 ¥14,999 / 人",
    image: "/media/italy.webp",
    itinerary: ["Day 1 米兰集合，前往Arco", "Day 2—3 Arco与Val di Sarca攀爬", "Day 4 转场多洛米蒂", "Day 5 多洛米蒂攀爬", "Day 6 返回米兰"],
    includes: ["攀岩向导与公用装备", "野攀初级课程", "行程内转场", "岩场或自然公园相关费用"],
    excludes: ["往返国际交通", "签证及个人旅行文件", "未列明的餐饮、住宿或个人消费"],
    equipment: "个人攀岩装备、旅行证件和适合山地天气的衣物；最终清单以行前手册为准。",
    sourceUrl: "https://mp.weixin.qq.com/s/QtdsHIWZnXbGWrRkslc7dw",
    sourceLabel: "公众号最新修改版",
    verifiedAt: "2026-08-08",
    featured: true,
  },
  {
    slug: "guangxi-mid-autumn-0925",
    title: "中秋广西｜南宁—马山—柳州旅攀",
    type: "国内旅攀",
    date: "2026.09.25—09.27",
    dateISO: "2026-09-25",
    location: "广西 · 南宁 / 马山 / 柳州",
    status: "即将开始",
    summary: "三天串起广西岩壁、当地生活与小队攀爬，少赶路，多留在岩壁上。",
    audience: "希望体验广西岩场文化并进行连续攀爬的岩友。",
    prerequisite: "报名后进行攀爬经历与身体状态确认。",
    capacity: "小团",
    price: "咨询活动详情",
    image: "/media/getu.webp",
    itinerary: ["南宁集合", "马山岩场攀爬", "柳州周边岩场与返程"],
    includes: ["活动组织与岩场安排"],
    excludes: ["未确认的交通、食宿和个人费用"],
    equipment: "以活动行前通知为准。",
    sourceUrl: "https://mp.weixin.qq.com/s/j1L_27pwipCSiCau-gFVFQ",
    sourceLabel: "公众号活动文章",
    verifiedAt: "2026-08-08",
  },
  {
    slug: "mashan-shegeng-1004",
    title: "国庆马山社更｜野攀与漂流",
    type: "国内旅攀",
    date: "2026.10.04—10.08",
    dateISO: "2026-10-04",
    location: "广西 · 马山社更",
    status: "即将开始",
    summary: "国庆后半程进入马山，把喀斯特岩壁、村落生活与漂流放进同一段旅程。",
    audience: "希望获得连续多日自然岩壁和在地体验的攀岩者。",
    prerequisite: "攀爬经验和漂流参与条件须分别确认。",
    capacity: "小团",
    price: "咨询活动详情",
    image: "/media/fuzhou.webp",
    itinerary: ["集合与能力分组", "马山及社更岩场攀爬", "天气合适时安排漂流", "复盘与返程"],
    includes: ["活动组织与现场协调"],
    excludes: ["未确认的交通、食宿、漂流和个人费用"],
    equipment: "以活动行前通知为准。",
    sourceUrl: "https://mp.weixin.qq.com/s/-65FD2ET-OiP7Ixwncq_4Q",
    sourceLabel: "公众号活动文章",
    verifiedAt: "2026-08-08",
  },
  {
    slug: "spain-autumn-2026",
    title: "西班牙旅攀｜七天岩壁生活",
    type: "海外旅攀",
    date: "2026年9月及国庆档期",
    dateISO: "2026-09-01",
    location: "西班牙 · Catalunya / Aragón",
    status: "开放中",
    summary: "从Siurana、Margalef到更广阔的西班牙岩场，把旅程围绕攀爬本身组织起来。",
    audience: "希望在欧洲经典岩场进行连续攀爬的小队成员。",
    prerequisite: "需确认旅行证件、攀爬基础与档期。",
    capacity: "小团",
    price: "咨询档期与费用",
    image: "/media/spain.webp",
    itinerary: ["西班牙集合", "根据队伍水平与天气选择岩场", "连续攀爬、休息与在地体验", "返程"],
    includes: ["行程设计与攀爬组织"],
    excludes: ["国际交通、签证及未确认项目"],
    equipment: "个人攀岩及旅行装备，以行前手册为准。",
    sourceUrl: "https://mp.weixin.qq.com/s/lpn7bHfxyM9Ec1iD4_vubQ",
    sourceLabel: "公众号招募文章",
    verifiedAt: "2026-08-08",
  },
];

export const stories = [
  { slug: "from-plastic-to-rock", title: "从塑料岩点到真实岩壁", meta: "课程 · 白河", summary: "第一次走到户外，学习的不只是动作，还有风、石头、绳索和伙伴。", image: "/media/course-coach.webp" },
  { slug: "slow-climbing-spain", title: "西班牙不是景点清单", meta: "旅攀 · Spain", summary: "一天一片岩壁，少一点转场，多一点真正留在岩壁上的时间。", image: "/media/spain.webp" },
  { slug: "partners-in-the-wild", title: "认真检查，也认真一起吃饭", meta: "社群 · 福州", summary: "专业不等于紧绷。可靠的伙伴关系，常常从一次互检和一顿饭开始。", image: "/media/fuzhou.webp" },
  { slug: "read-the-system", title: "读岩，也读系统", meta: "技术 · 保护站", summary: "岩点、线路、保护站、伙伴与自己，都是自然岩壁上需要阅读的信息。", image: "/media/course-anchor.webp" },
];

export const values = [
  ["学习", "岩石是最真实的老师。每次攀爬都值得观察、提问和复盘。"],
  ["判断", "自由不是忽略风险，而是在理解之后做出负责任的选择。"],
  ["伙伴", "小团不是数字更少，而是每个人都能被看见、被回应。"],
  ["自然", "尊重岩壁、当地社区与进入这片土地的规则。"],
];

export const wechatSources = [
  ["读岩野攀 8—9月课程与活动日历", "https://mp.weixin.qq.com/s/P8V2HvL4Os8moaN3j0jjaw"],
  ["读岩野攀自然岩壁课程", "https://mp.weixin.qq.com/s/stl83Klc8GUvQKUlsL6IpA"],
  ["中秋广西南宁—马山—柳州旅攀", "https://mp.weixin.qq.com/s/j1L_27pwipCSiCau-gFVFQ"],
  ["国庆马山社更野攀与漂流", "https://mp.weixin.qq.com/s/-65FD2ET-OiP7Ixwncq_4Q"],
  ["暑期及国庆西班牙旅攀", "https://mp.weixin.qq.com/s/DnHpsa5PZV5lJ7z94Nv_0A"],
  ["衢州两头洞野攀", "https://mp.weixin.qq.com/s/spmwbfZT9iuPk7sOijXT_Q"],
  ["仙居野攀与桨板", "https://mp.weixin.qq.com/s/D00szvHC60iO422SGTRohw"],
  ["六盘水8月野攀", "https://mp.weixin.qq.com/s/OOoJaF3HSAa5r2ae9hvTmg"],
  ["紫云格凸8月行程", "https://mp.weixin.qq.com/s/8lXXMrR4W7NT1bCelI5a8A"],
  ["中秋意大利旅攀", "https://mp.weixin.qq.com/s/QtdsHIWZnXbGWrRkslc7dw"],
  ["九月及国庆西班牙旅攀", "https://mp.weixin.qq.com/s/lpn7bHfxyM9Ec1iD4_vubQ"],
] as const;

