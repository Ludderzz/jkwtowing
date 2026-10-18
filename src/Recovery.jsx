import {useEffect,useRef,useState} from 'react'
const cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)), L=(a,b,t)=>a+(b-a)*t, ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2
const STEPS=['Arrive and assess','Winch on','Strap down','On the road']
export default function Recovery(){
  const ref=useRef(),[p,setP]=useState(0)
  useEffect(()=>{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){setP(.8);return}
    const D=5500,H=1200;let raf,t0=0,on=false
    const tick=t=>{if(!t0)t0=t;const e=(t-t0)%(D+H);setP(cl(e/D));raf=requestAnimationFrame(tick)}
    const io=new IntersectionObserver(([e])=>{cancelAnimationFrame(raf);if(e.isIntersecting){t0=0;raf=requestAnimationFrame(tick)}},{threshold:.35})
    io.observe(ref.current)
    return()=>{io.disconnect();cancelAnimationFrame(raf)}
  },[])
  const load=ease(cl((p-.15)/.5)), s=load*440, left=760-s
  const lift=cl((700-left)/140)*38, ramp=ease(cl((p-.7)/.1)), drive=Math.pow(cl((p-.84)/.16),2)
  const step=p<.15?0:p<.65?1:p<.86?2:3
  return(<section id="recovery" ref={ref} className="rec" aria-label="How a JKW recovery works">
    <div className="rec-stick">
      <h2>How we get you moving</h2>
      <svg viewBox="0 0 1000 360" role="img" aria-label="Animation of a car being winched onto a recovery trailer">
        <rect y="300" width="1000" height="60" fill="#0e0e0e"/><path d="M0 330H1000" stroke="#333" strokeDasharray="40 30" strokeWidth="3"/>
        <g transform={`translate(${-drive*1100} 0)`}>
          <g transform="translate(40 200)">
            <path d="M0 70V42l50-4 40-30h140v62z" fill="#161616" stroke="#2a2a2a"/>
            <path d="M92 14h50v26H64z" fill="#2b3a44"/><path d="M150 40l50-30v14l-40 28z" fill="#F58220"/>
            <text x="150" y="60" fill="#fff" fontSize="14" fontStyle="italic" fontWeight="800" fontFamily="Barlow Condensed">JKW</text>
            <circle className="beacon" cx="170" cy="4" r="5" fill="#ffb000"/>
            {[50,190].map(x=><g key={x}><circle cx={x} cy="80" r="20" fill="#000" stroke="#555" strokeWidth="3"/><circle cx={x} cy="80" r="7" fill="#777"/></g>)}
          </g>
          <rect x="262" y="262" width="298" height="8" fill="#9aa0a6"/><rect x="272" y="246" width="20" height="16" fill="#F58220"/>
          <circle cx="440" cy="284" r="16" fill="#000" stroke="#777" strokeWidth="3"/>
          <g transform={`rotate(${L(15,-82,ramp)} 560 262)`}><rect x="560" y="262" width="150" height="6" fill="#c3c7cc"/></g>
          {p>.12&&p<.86&&<path d={`M290 254L${left+6} ${272-lift}`} stroke="#F58220" strokeWidth="3"/>}
          <g transform={`translate(${left} ${240-lift})`}>
            <path d="M0 30h18Q28 6 58 4h70q30 2 44 26h28v16H0z" fill="#d4d6d9"/><path d="M34 12h24v18H26zM64 10h56l16 20H64z" fill="#1b2630"/>
            <circle className={p<.15?'hz':''} cx="3" cy="34" r="4" fill="#F58220"/>
            {[40,160].map(x=><circle key={x} cx={x} cy="44" r="16" fill="#000" stroke="#888" strokeWidth="3"/>)}
            {p>.78&&[50,150].map(x=><path key={x} d={`M${x} 4V-4`} stroke="#F58220" strokeWidth="5"/>)}
          </g>
        </g>
      </svg>
      <ol className="steps">{STEPS.map((t,i)=><li key={t} className={i===step?'on':''}><b>{i+1}</b>{t}</li>)}</ol>
    </div></section>)
}
