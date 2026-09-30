import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeMotion from "@/components/HomeMotion";
import { CV_PATH } from "@/lib/site";
import { SKILLS, CERTS } from "@/lib/content";

export default function Home() {
  return (
    <>
      <a className="sr-only" href="#work">Skip to work</a>
      <Nav home />
      <main>
<section className="hero" id="top">
  <div className="hero-scene" aria-hidden="true">
    {/* storm clouds, top left */}
    <svg className="storm" viewBox="0 0 760 300">
      <g stroke="#17141C" strokeWidth="7" fill="none">
        <circle cx="90" cy="90" r="95"/><circle cx="230" cy="60" r="85"/><circle cx="360" cy="95" r="70"/><circle cx="470" cy="55" r="60"/><circle cx="560" cy="80" r="42"/><circle cx="170" cy="170" r="60"/>
      </g>
      <g fill="var(--storm)">
        <g className="puff"><circle cx="90" cy="90" r="95"/><circle cx="170" cy="170" r="60"/></g>
        <g className="puff"><circle cx="230" cy="60" r="85"/><circle cx="360" cy="95" r="70"/></g>
        <g className="puff"><circle cx="470" cy="55" r="60"/><circle cx="560" cy="80" r="42"/></g>
      </g>
    </svg>
    {/* lightning, top right */}
    <svg className="bolt" viewBox="0 0 190 300"><path d="M112 4 36 150h52L56 296 168 118h-58L150 4z" fill="var(--bolt)" stroke="#17141C" strokeWidth="6" strokeLinejoin="round"/></svg>
    {/* skyline left */}
    <svg className="sky-l" viewBox="0 0 420 520">
      <defs><pattern id="winL" width="26" height="30" patternUnits="userSpaceOnUse"><rect x="7" y="8" width="11" height="14" fill="#8FA7C4" stroke="#17141C" strokeWidth="2"/></pattern></defs>
      <g stroke="#17141C" strokeWidth="4">
        <rect x="10" y="120" width="150" height="410" fill="var(--brick)"/><rect x="10" y="120" width="150" height="410" fill="url(#winL)"/>
        <rect x="150" y="230" width="130" height="300" fill="#C9C3D9"/><rect x="150" y="230" width="130" height="300" fill="url(#winL)" opacity=".85"/>
        <rect x="40" y="80" width="40" height="40" fill="var(--brick)"/><rect x="270" y="320" width="110" height="210" fill="var(--brick)"/><rect x="270" y="320" width="110" height="210" fill="url(#winL)"/>
      </g>
    </svg>
    {/* skyline right */}
    <svg className="sky-r" viewBox="0 0 360 520">
      <defs><pattern id="winR" width="24" height="28" patternUnits="userSpaceOnUse"><rect x="6" y="7" width="11" height="13" fill="#5E7494" stroke="#17141C" strokeWidth="2"/></pattern></defs>
      <g stroke="#17141C" strokeWidth="4">
        <rect x="120" y="150" width="230" height="380" fill="#B9CBE0"/><rect x="120" y="150" width="230" height="380" fill="url(#winR)"/>
        <rect x="20" y="300" width="120" height="230" fill="#C9C3D9"/><rect x="20" y="300" width="120" height="230" fill="url(#winR)"/>
        <rect x="200" y="110" width="60" height="40" fill="#B9CBE0"/>
      </g>
    </svg>
    {/* red smoke along the bottom */}
    <svg className="smoke-base" viewBox="0 0 1600 300" preserveAspectRatio="xMidYMax slice">
      <g stroke="#17141C" strokeWidth="7" fill="none">
        <circle cx="60" cy="230" r="120"/><circle cx="230" cy="190" r="110"/><circle cx="400" cy="240" r="95"/><circle cx="1120" cy="250" r="90"/><circle cx="1290" cy="200" r="115"/><circle cx="1470" cy="220" r="120"/><circle cx="1600" cy="250" r="90"/>
      </g>
      <g fill="var(--smoke)">
        <g className="puff"><circle cx="60" cy="230" r="120"/><circle cx="230" cy="190" r="110"/></g>
        <g className="puff"><circle cx="400" cy="240" r="95"/></g>
        <g className="puff"><circle cx="1120" cy="250" r="90"/><circle cx="1290" cy="200" r="115"/></g>
        <g className="puff"><circle cx="1470" cy="220" r="120"/><circle cx="1600" cy="250" r="90"/></g>
      </g>
      <g fill="var(--smoke-deep)" opacity=".55"><path d="M170 250a90 90 0 0 0 120-40 80 80 0 0 1-120 40z"/><path d="M1240 240a95 95 0 0 0 130-40 85 85 0 0 1-130 40z"/></g>
    </svg>
    <div className="hero-flash"></div>
  </div>

  <div className="hero-copy">
    <p className="cap"><b>A</b>I &amp; security engineer · Bangkok</p>
    <h1 className="tag">Min Htet Aung</h1>
    <p className="aka">Nicholas to most people</p>
    <p className="hero-line">I build multi-agent systems and security tooling, and I prove they work by running them.</p>
    <div className="hero-actions">
      <a className="btn btn--red" href="#work">See the work</a>
      <a className="btn btn--paper" href={CV_PATH} download>Download CV</a>
    </div>
  </div>

  <div className="smoke-wipe" aria-hidden="true">
    <svg className="wipe-top" viewBox="0 0 1600 220" preserveAspectRatio="none">
      <path d="M0 220V150c40-90 150-110 210-60 30-70 150-90 200-20 50-80 170-80 220 0 40-60 150-70 200 10 50-70 170-60 210 10 40-60 150-70 210 0 50-70 160-60 200 20 40-40 110-40 150 0V220z" fill="var(--smoke)" stroke="#17141C" strokeWidth="7" vectorEffect="non-scaling-stroke"/>
    </svg>
    <div className="wipe-body"><div className="chapter"><div><span>The story so far…</span><small>Five builds · one year</small></div></div></div>
  </div>
</section>

<svg className="smoke-edge" viewBox="0 0 1600 120" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 0h1600v60c-40 50-120 55-170 10-40 55-150 60-200 5-50 60-160 55-210 0-45 55-160 55-200-5-50 55-160 60-210 0-40 50-150 55-200 0-50 55-150 50-200-5-40 45-120 45-170 0c-20 25-35 20-40 10V0z" fill="var(--smoke)"/>
  <path d="M1600 60c-40 50-120 55-170 10-40 55-150 60-200 5-50 60-160 55-210 0-45 55-160 55-200-5-50 55-160 60-210 0-40 50-150 55-200 0-50 55-150 50-200-5-40 45-120 45-170 0c-20 25-35 20-40 10" fill="none" stroke="#17141C" strokeWidth="6" vectorEffect="non-scaling-stroke"/>
</svg>

{/* ================= STORY STRIP ================= */}
<section className="story" id="work" aria-labelledby="work-h">
  <div className="story-head">
    <p className="cap">The story so far · 2026</p>
    <h2 id="work-h">What I built this year</h2>
    <p>Each panel is a real project, in the order I built it. The two I'd most like you to read have full case studies.</p>
  </div>

  <div className="strip">
    <div className="track">

      <article className="panel">
        <div className="panel-art art-gold halftone">
          <svg viewBox="0 0 320 210" aria-hidden="true"><g stroke="#17141C" strokeWidth="4" strokeLinejoin="round"><path d="M70 90h180v100H70z" fill="#FBFAF7"/><path d="M60 60h200l-14 34H74z" fill="var(--smoke)"/><path d="M92 60v34M124 60v34M156 60v34M188 60v34M220 60v34" /><path d="M130 130h60v60h-60z" fill="#8FA7C4"/><circle cx="178" cy="160" r="3" fill="#17141C"/></g></svg>
        </div>
        <div className="panel-body">
          <p className="cap">Previously</p>
          <h3>Store owner, IT student</h3>
          <p>Founded and ran Beans Thrift, a Facebook-based thrift clothing business in Yangon, and started a BIT at Siam University in 2024.</p>
        </div>
      </article>

      <article className="panel panel--wide">
        <div className="panel-art art-sky halftone">
          <svg viewBox="0 0 640 250" aria-hidden="true"><g stroke="#17141C" strokeWidth="4" strokeLinejoin="round">
            <rect x="60" y="70" width="130" height="110" rx="14" fill="#8FA7C4"/><circle cx="100" cy="120" r="10" fill="#17141C"/><circle cx="150" cy="120" r="10" fill="#17141C"/><path d="M125 70V40"/><circle cx="125" cy="34" r="8" fill="var(--caption)"/>
            <rect x="450" y="70" width="130" height="110" rx="14" fill="var(--hood)"/><circle cx="490" cy="120" r="10" fill="#FBFAF7"/><circle cx="540" cy="120" r="10" fill="#FBFAF7"/><path d="M515 70V40"/><circle cx="515" cy="34" r="8" fill="var(--caption)"/>
            <path d="M200 125h240" strokeDasharray="12 10"/>
            <rect x="268" y="96" width="104" height="66" fill="#FBFAF7"/><path d="M268 96l52 38 52-38"/><circle cx="320" cy="150" r="15" fill="var(--smoke)"/><path d="M314 150h12M320 144v12" stroke="#FBFAF7" strokeWidth="3"/>
          </g></svg>
        </div>
        <div className="panel-body">
          <p className="cap">May 2026 → now</p>
          <h3>Ammunity</h3>
          <p>A network where AI agents find and talk to each other. I designed its agent-to-agent protocol from scratch: an Ed25519 handshake that binds every message to a shared transcript, so nothing can be replayed or forged.</p>
          <ul className="proof"><li>~5,600 lines of tests</li><li>v0.3.0 → v0.7.1</li><li>~$0.0002 per routed task</li></ul>
          <a className="more" href="/work/ammunity/">Read the case study →</a>
        </div>
      </article>

      <article className="panel">
        <div className="panel-art art-teal halftone">
          <svg viewBox="0 0 320 210" aria-hidden="true"><g stroke="#17141C" strokeWidth="4" strokeLinejoin="round"><rect x="70" y="36" width="180" height="120" rx="10" fill="#FBFAF7"/><rect x="88" y="52" width="144" height="88" fill="#1D1930"/><path d="M130 156l-12 26h84l-12-26"/><g fill="var(--caption)" stroke="none"><rect x="104" y="92" width="12" height="12"/><rect x="116" y="80" width="12" height="12"/><rect x="128" y="92" width="12" height="12"/></g><g fill="var(--smoke)" stroke="none"><rect x="172" y="104" width="12" height="12"/><rect x="184" y="92" width="12" height="12"/><rect x="196" y="104" width="12" height="12"/></g></g></svg>
        </div>
        <div className="panel-body">
          <p className="cap">Jun 2026</p>
          <h3>vapviz</h3>
          <p>Open-source tracing for AI agents. I built its agent-control protocol (pause, stop, talk to a running agent) and the pixel-art views that show many agents at once.</p>
          <ul className="proof"><li>4 releases → v1.5.0</li><li>Co-maintainer</li></ul>
          <a className="more" href="https://github.com/kochrisdev/vapviz">View on GitHub →</a>
        </div>
      </article>

      <article className="panel">
        <div className="panel-art art-steel halftone">
          <svg viewBox="0 0 320 210" aria-hidden="true"><g stroke="#17141C" strokeWidth="4" strokeLinejoin="round"><rect x="50" y="40" width="220" height="130" fill="#1D1930"/><path d="M50 40h220v22H50z" fill="#FBFAF7"/><circle cx="66" cy="51" r="4" fill="var(--smoke)"/><text x="68" y="100" fill="#FBFAF7" stroke="none" fontFamily="monospace" fontSize="18" fontWeight="700">$ git push -f</text><path d="M200 112c0-18 36-18 36 0 0 12-18 12-18 26" stroke="var(--caption)" strokeWidth="7" fill="none" strokeLinecap="round"/><circle cx="218" cy="156" r="5" fill="var(--caption)" stroke="none"/></g></svg>
        </div>
        <div className="panel-body">
          <p className="cap">Jul 2026</p>
          <h3>Reckoner</h3>
          <p>Before an AI coding agent runs something risky, it makes you predict what will happen, then shows you the answer.</p>
          <a className="more" href="https://github.com/ARandomGuy9786/Reckoner">View on GitHub →</a>
        </div>
      </article>

      <article className="panel">
        <div className="panel-art art-sky halftone">
          <svg viewBox="0 0 320 210" aria-hidden="true"><g stroke="#17141C" strokeWidth="4"><g fill="#FBFAF7"><rect x="46" y="30" width="70" height="70"/><rect x="125" y="30" width="70" height="70"/><rect x="204" y="30" width="70" height="70"/><rect x="46" y="110" width="70" height="70"/><rect x="125" y="110" width="70" height="70"/><rect x="204" y="110" width="70" height="70" fill="var(--caption)"/></g><g fill="none" strokeLinecap="round"><path d="M66 78c8 8 22 8 30 0M145 84c8-8 22-8 30 0M224 80h30M66 158h30M145 160c8 6 22 6 30 0M224 164c8-10 22-10 30 0"/></g><g fill="#17141C" stroke="none"><circle cx="70" cy="58" r="4"/><circle cx="92" cy="58" r="4"/><circle cx="149" cy="58" r="4"/><circle cx="171" cy="58" r="4"/><circle cx="228" cy="58" r="4"/><circle cx="250" cy="58" r="4"/><circle cx="70" cy="138" r="4"/><circle cx="92" cy="138" r="4"/><circle cx="149" cy="136" r="6"/><circle cx="171" cy="136" r="6"/><circle cx="228" cy="140" r="4"/><circle cx="250" cy="140" r="4"/></g></g></svg>
        </div>
        <div className="panel-body">
          <p className="cap">Jul 2026 → now</p>
          <h3>Facial-expression research</h3>
          <p>The data and evaluation pipeline for an academic paper: a 378-face dataset from two Myanmar productions and a benchmark of six models. No model ever assigns a label; people do.</p>
          <ul className="proof"><li>188,000 frames in ~7 min</li><li>6-model benchmark</li></ul>
        </div>
      </article>

      <article className="panel panel--wide">
        <div className="panel-art art-teal halftone">
          <svg viewBox="0 0 640 250" aria-hidden="true"><g stroke="#17141C" strokeWidth="4">
            <circle cx="160" cy="125" r="96" fill="#1D1930"/><circle cx="160" cy="125" r="64" fill="none" stroke="#5E7494" strokeWidth="2.5"/><circle cx="160" cy="125" r="32" fill="none" stroke="#5E7494" strokeWidth="2.5"/>
            <path className="radar-sweep" d="M160 125 160 29a96 96 0 0 1 83 48z" fill="var(--caption)" opacity=".85"/>
            <circle cx="198" cy="92" r="7" fill="var(--smoke)"/><circle cx="118" cy="160" r="5" fill="#FBFAF7"/>
            <g fill="#FBFAF7"><rect x="320" y="58" width="250" height="34"/><rect x="320" y="106" width="250" height="34"/><rect x="320" y="154" width="250" height="34"/></g>
            <rect x="320" y="58" width="34" height="34" fill="var(--smoke)"/><rect x="320" y="106" width="34" height="34" fill="var(--caption)"/><rect x="320" y="154" width="34" height="34" fill="#8FA7C4"/>
            <g stroke="#5E5868" strokeWidth="5" strokeLinecap="round"><path d="M372 75h150M372 123h110M372 171h170"/></g>
          </g></svg>
        </div>
        <div className="panel-body">
          <p className="cap">Aug 2026 → now</p>
          <h3>Data-exposure monitor</h3>
          <p>For a major bank in Myanmar. It works out which customers' details have been exposed so the bank can warn them, without sending those details anywhere. I took it over and lead it through handover.</p>
          <ul className="proof"><li>Tests: 44 → 1,600+</li><li>3 new sources</li><li>2 new detection layers</li></ul>
          <a className="more" href="/work/exposure-monitor/">Read the case study →</a>
        </div>
      </article>

      <article className="panel panel--end">
        <p className="cap">To be continued…</p>
        <h3>Next issue: your team?</h3>
        <p>I'm looking for AI-agent and security engineering work.</p>
        <a className="more" href="#contact">Get in touch →</a>
      </article>

    </div>
  </div>
</section>

{/* ================= EXPERIENCE (calm) ================= */}
<section className="section" id="experience" aria-labelledby="exp-h">
  <p className="cap">Experience</p>
  <h2 id="exp-h">Where I've worked</h2>
  <div className="ledger">
    <div className="ledger-row"><time>Jan 2026 – now</time><div><h3>AI Developer &amp; Agent Architect (Internship) · Tamarind Tech</h3><p>Bangkok · remote. Own a data-exposure monitoring engagement for a major bank in Myanmar; designed and led the build of Ammunity and built Reckoner.</p></div></div>
    <div className="ledger-row"><time>Jun – Dec 2024</time><div><h3>Founder &amp; Operator · Beans Thrift, Yangon</h3><p>Launched and managed a Facebook-based thrift clothing business: sourcing, pricing and inventory, the brand's Facebook community, customer inquiries and orders, fulfilment, and basic marketing analytics to improve sales.</p></div></div>
  </div>
</section>

{/* ================= EDUCATION (calm) ================= */}
<section className="section section--tight" id="education" aria-labelledby="edu-h">
  <p className="cap">Education</p>
  <h2 id="edu-h">Where I study</h2>
  <div className="ledger">
    <div className="ledger-row"><time>2024 – 2028</time><div><h3>Bachelor of Information Technology · Siam University, Bangkok</h3><p>Expected 2028. Coursework includes programming, data structures, computer systems and business technology solutions.</p></div></div>
  </div>
</section>

{/* ================= SKILLS (calm) ================= */}
<section className="section" id="skills" aria-labelledby="skills-h">
  <p className="cap">Toolkit</p>
  <h2 id="skills-h">What I work with</h2>
  <div className="ledger">
    {SKILLS.map(([group, items]) => (
      <div className="ledger-row" key={group}>
        <h3 className="ledger-label">{group}</h3>
        <ul className="proof">{items.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
    ))}
  </div>
</section>

{/* ================= CERTIFICATIONS (calm) ================= */}
<section className="section section--tight" id="certifications" aria-labelledby="certs-h">
  <p className="cap">Certifications</p>
  <h2 id="certs-h">Courses I've finished</h2>
  <div className="ledger">
    {CERTS.map(([group, items]) => (
      <div className="ledger-row" key={group}>
        <h3 className="ledger-label">{group}</h3>
        <ul className="cert-list">
          {items.map(([name, url]) => (
            <li key={name}>{name}{url && <> · <a href={url}>verify ↗</a></>}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>

{/* ================= CLOSE ================= */}
<section className="close halftone" id="contact" aria-labelledby="contact-h">
  <div className="close-copy">
  <p className="cap">To be continued…</p>
  <h2 id="contact-h">Hiring for AI or security work? Let's talk.</h2>
  <div className="close-links">
    <a className="btn btn--red" href="mailto:mgminhtet204@gmail.com">mgminhtet204@gmail.com</a>
    <a className="btn btn--paper" href="mailto:nick@tamarind.tech">nick@tamarind.tech</a>
    <a className="btn btn--paper" href={CV_PATH} download>Download CV</a>
  </div>
  <ul className="close-social" aria-label="Elsewhere">
    <li><a href="https://www.linkedin.com/in/min-htetaung111/">LinkedIn</a></li>
    <li><a href="https://github.com/ARandomGuy9786">GitHub</a></li>
    <li><a href="https://www.facebook.com/Minhtetaung240">Facebook</a></li>
    <li><a href="https://www.instagram.com/a_randomguy.80/">Instagram</a></li>
  </ul>
  </div>
  <figure className="portrait">
    <div className="portrait-frame"><img src="/portrait.webp" width="640" height="800" alt="Min Htet Aung in comic-print style: dark-rimmed glasses, grey blazer, light-blue shirt" loading="lazy" /></div>
    <svg className="bolt-close" viewBox="0 0 190 300" aria-hidden="true"><path d="M112 4 36 150h52L56 296 168 118h-58L150 4z" fill="var(--bolt)" stroke="#17141C" strokeWidth="6" strokeLinejoin="round"/></svg>
    <figcaption className="cap">That's me · Bangkok</figcaption>
  </figure>
</section>
      </main>
      <Footer />
      <HomeMotion />
    </>
  );
}
