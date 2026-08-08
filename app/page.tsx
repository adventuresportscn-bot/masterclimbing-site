import type { Metadata } from "next";
import Link from "next/link";
import { ActivityCard, Eyebrow, PageShell, SectionHead } from "./components";
import { activities, courses, stories, values } from "./data";

export const metadata: Metadata = {
  title: "读岩野攀｜读懂岩壁，自在去野",
  description: "从城市岩馆走向自然岩壁：专业小团课程、周末野攀野抱与国内外旅攀。",
};

export default function Home() {
  return <PageShell>
    <section className="home-hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-poster.webp" aria-hidden="true"><source src="/media/hero.mp4" type="video/mp4"/></video>
      <div className="hero-scrim"/><div className="route-line route-line-a"/><div className="route-dot route-dot-a">01</div>
      <div className="hero-copy"><Eyebrow>MASTERCLIMBING · 自然岩壁教育与旅行</Eyebrow><h1>读懂岩壁，<br/>自在去野。</h1><p>为已经开始攀岩、想从室内走向自然岩壁的你，建立技能、判断与可靠的伙伴网络。</p><div className="hero-actions"><Link href="/courses" className="button primary">查看课程</Link><Link href="/events" className="button ghost">近期活动</Link></div></div>
      <div className="hero-index"><span>READ</span><span>THE ROCK</span><span>01 / 04</span></div>
    </section>

    <section className="section intro-section"><div className="intro-big">岩石不是被征服的对象，<br/>而是最真实的老师。</div><div className="intro-small"><p>我们学习阅读岩壁，也学习阅读环境、系统、伙伴和自己。</p><p>自由不是忽略风险，而是拥有更多知识、能力和判断之后，做出负责任的选择。</p></div></section>

    <section className="section course-section"><SectionHead eyebrow="从室内到户外" title="一条循序渐进的学习路径" body="不是一次性带你去爬，而是把能力拆成可以学习、练习和复盘的阶段。" link={["/courses","完整课程体系"]}/><div className="course-path">{courses.map(c=><Link href="/courses" className="course-path-card" key={c.level}><span>{c.level}</span><div><div className="tiny">{c.subtitle}</div><h3>{c.name}</h3><p>{c.outcome}</p></div><b>↗</b></Link>)}</div></section>

    <section className="section events-section"><SectionHead eyebrow="近期活动" title="下一次，去哪里读岩？" body="课程、周末岩壁和旅攀小队，按真实能力与现场条件组织。" link={["/events","全部活动"]}/><div className="activity-grid">{activities.filter(a=>a.featured).map(a=><ActivityCard key={a.slug} activity={a}/>)}</div></section>

    <section className="section value-section"><SectionHead eyebrow="我们相信" title="专业，不必紧绷。"/><div className="value-grid">{values.map(([t,b],i)=><div className="value-card" key={t}><span>0{i+1}</span><h3>{t}</h3><p>{b}</p></div>)}</div></section>

    <section className="story-band"><div className="story-band-copy"><Eyebrow>岩壁以外</Eyebrow><h2>真正留在岩壁上的时间，和一起经历的人。</h2><p>活动不是目的地打卡。我们记录动作、失误、互检、吃饭、天气和那些让小队逐渐成为伙伴的瞬间。</p><Link className="button light" href="/stories">阅读往期故事</Link></div><div className="story-strip">{stories.slice(0,3).map(s=><article key={s.slug}><img src={s.image} alt={s.meta} loading="lazy"/><span>{s.meta}</span><h3>{s.title}</h3></article>)}</div></section>

    <section className="section founder-tease"><div><Eyebrow>为什么叫“读岩”</Eyebrow><h2>没读 Master，<br/>那就去读岩。</h2></div><div><p>本科毕业后没有继续读Master，于是创建读岩野攀，开玩笑说也算用另一种方式补上了遗憾。</p><p>玩笑背后，是认真学习、持续进阶和对专业训练的尊重。</p><Link href="/about" className="text-link">关于读岩野攀 →</Link></div></section>
  </PageShell>;
}
