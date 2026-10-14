import {ExperimentCard} from '../components/ExperimentCard';
import {experiments} from '../experiments/registry';

function Orbit() {
  return <svg viewBox="0 0 360 280" aria-hidden="true"><ellipse cx="180" cy="140" rx="150" ry="61" transform="rotate(-30 180 140)" fill="none" stroke="currentColor" strokeWidth="1.4"/><ellipse cx="180" cy="140" rx="150" ry="61" transform="rotate(30 180 140)" fill="none" stroke="currentColor" strokeWidth="1.4"/><circle cx="180" cy="140" r="61" fill="#d4e979" stroke="currentColor" strokeWidth="1.4"/><path d="M119 140h122M180 79c-42 36-42 86 0 122M180 79c42 36 42 86 0 122" fill="none" stroke="currentColor"/><circle cx="56" cy="88" r="10" fill="#ec825b"/><circle cx="285" cy="208" r="7" fill="#385746"/></svg>;
}

export function Home() {
  return <main>
    <section className="hero"><div><p className="eyebrow"><span className="status-dot"/> AN INTERACTIVE PORTFOLIO</p><h1>Big ideas.<br/>Small <em>experiments.</em></h1><p className="hero-copy">Exploring finance, economics, probability,<br className="desktop"/> and the systems that quietly shape our world.</p><a className="primary" href="#experiments">Explore the projects <span>↘</span></a><p className="hero-note">Ideas you can play with. Questions you can explore.</p></div><div className="hero-art"><Orbit/><span className="art-note">a small change can change everything</span></div></section>
    <section id="experiments"><div className="section-title"><h2>Projects & investigations</h2><span>03 INTERACTIVE / 01 SEARCH TOOL / 01 ESSAY</span></div><p className="foundation-note">A growing portfolio across Finance, Economics and DS/Maths. Explore five working projects.</p><div className="portfolio-groups">{[{name:"Finance",slugs:["filing-lens","stock-playground"]},{name:"Economics",slugs:["food-subsidies"]},{name:"DS / Maths",slugs:["prediction-lab","texas-holdem"]}].map(group=><section key={group.name} className="portfolio-group"><h3>{group.name}</h3><div className="grid">{experiments.filter(e=>group.slugs.includes(e.slug)).map(experiment=><ExperimentCard key={experiment.slug} experiment={experiment}/>)}</div></section>)}</div></section>
    <section id="about" className="about"><p className="eyebrow">THE IDEA BEHIND AUREON</p><h2>Understanding begins<br/>with “what if?”</h2><p>The aim is to build little worlds with real mathematical rules. Make a prediction, change something, and discover the consequences. Start with intuition; reach deeper models through play.</p><span>Finance, economics & data science</span></section>
  </main>;
}






