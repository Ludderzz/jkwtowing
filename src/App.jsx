import Recovery from './Recovery.jsx'
const TEL='07575 291070',HREF='tel:+447575291070'
const SERVICES=[['Cars','Breakdowns, accident recovery, auction and garage transport.'],['Vans','Commercial vehicles collected and delivered on time.'],['4x4s','Heavy and off-road vehicles, safely loaded and secured.'],['Motorbikes','Strapped and cradled properly, no marks left behind.'],['Caravans','Moved from storage, site or roadside, wherever it needs to go.'],['Machinery','Plant and equipment transported on our flatbed.'],['Much more','If it needs moving, call and ask.']]
const PHOTOS=['caddy','merc-ramps','golf','van-flatbed','merc-black','van-side']
const Phone=({c=''})=><a className={'btn '+c} href={HREF}>Call {TEL}</a>
export default function App(){return(<>
<header className="nav"><a href="#top"><img src="/img/logo.jpg" alt="JKW Towing & Recovery"/></a>
<nav><a href="#services">Services</a><a href="#recovery">Process</a><a href="#work">Our work</a><a href="#reviews">Reviews</a></nav><Phone/></header>
<main id="top">
<section className="hero"><div className="hero-img" style={{backgroundImage:'url(/img/banner.jpg)'}}/>
<div className="wrap"><p className="tag">24/7 recovery service</p><h1>Getting you<br/>back on track.</h1>
<p className="lead">Professional vehicle recovery and transport. Local, national, and fully insured, at competitive prices.</p>
<div className="row"><Phone/><a className="btn ghost" href="#services">What we recover</a></div></div>
<ul className="facts"><li>Fast response</li><li>Fully insured</li><li>Local and national</li><li>Any distance</li></ul></section>
<Recovery/>
<section id="services" className="wrap sec"><h2>Whatever it is, we move it</h2>
<ul className="svc">{SERVICES.map(([a,b])=><li key={a}><h3>{a}</h3><p>{b}</p></li>)}</ul></section>
<section id="work" className="sec dark"><div className="wrap"><h2>Recent jobs</h2><div className="gal">{PHOTOS.map(n=><img key={n} src={`/img/${n}.jpg`} alt="JKW recovery in action" loading="lazy"/>)}</div></div></section>
<section id="reviews" className="wrap sec"><h2>What customers say</h2>
<div className="rev">{[1,2,3].map(i=><figure key={i}><div className="stars" aria-hidden>★★★★★</div><blockquote>Review placeholder. Paste a real customer review here.</blockquote><figcaption>Customer name, location</figcaption></figure>)}</div></section>
<section className="cta"><div className="wrap"><h2>Broken down? Need a vehicle moved?</h2><a className="big" href={HREF}>{TEL}</a>
<p>Fast response. Your vehicle is in safe hands with us.</p><div className="row c"><a className="btn ghost" href="https://www.instagram.com/jkwtowingandrecovery" target="_blank" rel="noreferrer">Instagram @jkwtowingandrecovery</a><a className="btn ghost" href="https://www.facebook.com/search/top?q=JKW%20Towing%20%26%20Recovery" target="_blank" rel="noreferrer">Facebook</a></div></div></section>
</main><footer><img src="/img/logo.jpg" alt=""/><span>© {new Date().getFullYear()} JKW Towing & Recovery</span></footer></>)}
