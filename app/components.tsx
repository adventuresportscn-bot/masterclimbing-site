import Link from "next/link";
import type { ReactNode } from "react";
import type { Activity } from "./data";

const nav = [
  ["/courses", "课程"], ["/travel", "旅攀"], ["/outdoor", "野攀野抱"],
  ["/events", "近期活动"], ["/stories", "往期故事"], ["/about", "关于我们"],
];

export function Header() {
  return <header className="site-header">
    <Link href="/" className="brand-mark" aria-label="读岩野攀首页">
      <span className="brand-cn">读岩野攀</span><span className="brand-en">MASTERCLIMBING</span>
    </Link>
    <nav className="desktop-nav" aria-label="主导航">{nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav>
    <details className="mobile-nav"><summary aria-label="打开导航">菜单</summary><nav>{nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav></details>
  </header>;
}

export function Footer() {
  return <footer className="site-footer">
    <div><div className="footer-logo">读岩野攀</div><p>读懂岩壁，自在去野。</p></div>
    <div className="footer-links">{nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div>
    <div className="footer-note"><p>Read the Rock. Find Your Freedom.</p><p>课程与活动信息发布前均需再次核验。</p></div>
  </footer>;
}

export function PageShell({children, tone="light"}:{children:ReactNode;tone?:"light"|"dark"}) {
  return <div className={`site ${tone}`}><Header/><main>{children}</main><Footer/></div>;
}

export function Eyebrow({children}:{children:ReactNode}) { return <div className="eyebrow"><span>＋</span>{children}</div>; }

export function SectionHead({eyebrow,title,body,link}:{eyebrow:string;title:string;body?:string;link?:[string,string]}) {
  return <div className="section-head"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div><div>{body&&<p>{body}</p>}{link&&<Link className="text-link" href={link[0]}>{link[1]} →</Link>}</div></div>;
}

export function ActivityCard({activity}:{activity:Activity}) {
  return <article className="activity-card">
    <Link href={`/events/${activity.slug}`} className="activity-image"><img src={activity.image} alt={`${activity.location}攀岩活动`} loading="lazy"/><span className={`status status-${activity.status}`}>{activity.status}</span></Link>
    <div className="activity-copy"><div className="activity-meta"><span>{activity.type}</span><span>{activity.date}</span></div><h3><Link href={`/events/${activity.slug}`}>{activity.title}</Link></h3><p>{activity.summary}</p><div className="activity-place">{activity.location}</div></div>
  </article>;
}

export function PageHero({kicker,title,body,image}:{kicker:string;title:string;body:string;image?:string}) {
  return <section className={`page-hero ${image?"has-image":""}`}>
    {image&&<img src={image} alt="" className="page-hero-image"/>}<div className="page-hero-overlay"/>
    <div className="page-hero-copy"><Eyebrow>{kicker}</Eyebrow><h1>{title}</h1><p>{body}</p></div>
  </section>;
}

