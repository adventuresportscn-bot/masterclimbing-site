import { PageHero, PageShell, SectionHead } from "../components";
import { stories } from "../data";

export default function StoriesPage(){return <PageShell><PageHero kicker="FIELD NOTES · 往期故事" title="路线会结束，故事不会" body="从课程、活动复盘与旅攀记录里，留下学员成长、伙伴关系和岩场文化，而不是复制一排过期招募文案。" image="/media/spain.webp"/><section className="section"><SectionHead eyebrow="首批故事索引" title="真实现场，持续整理" body="按目的地、活动类型和年份建立故事档案；首版先展示已完成地点匹配的内容。"/><div className="story-grid">{stories.map(s=><article className="story-card" key={s.slug}><img src={s.image} alt={s.meta} loading="lazy"/><div className="eyebrow">{s.meta}</div><h2>{s.title}</h2><p>{s.summary}</p></article>)}</div></section></PageShell>}
