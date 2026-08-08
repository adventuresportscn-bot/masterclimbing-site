import { ActivityCard, PageHero, PageShell, SectionHead } from "../components";
import { activities } from "../data";

export default function EventsPage(){return <PageShell><PageHero kicker="UPCOMING · 近期活动" title="下一段岩壁，正在发生" body="按日期、类型与状态浏览课程、周末活动和旅攀。第一版仅提供信息展示，报名方式以后续官方通知为准。" image="/media/getu.webp"/><section className="section"><SectionHead eyebrow="活动日历" title="已核验的首批活动" body="开放中、即将开始、已满员与已结束状态按当前日期维护；历史活动不会重新包装成正在招募。"/><div className="filter-row">{["全部","课程","野攀","野抱","国内旅攀","海外旅攀"].map(x=><span key={x} className="filter-chip">{x}</span>)}</div><div className="activity-grid">{activities.map(a=><ActivityCard key={a.slug} activity={a}/>)}</div><p className="disclaimer">页面最后核验日期：2026-08-08。出发前请以最新活动通知为准；天气、岩场开放状态和队伍情况可能导致调整。</p></section></PageShell>}
