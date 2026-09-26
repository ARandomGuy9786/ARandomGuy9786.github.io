import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/work/exposure-monitor/" },
  title: "Data-exposure monitor: case study",
  description: "A defensive tool for a major bank in Myanmar: finding which customers' details are exposed, without spreading those details any further.",
};

export default function CaseStudy() {
  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
<header className="cs-cover halftone">
  <div>
    <p className="cap">Case study · Aug 2026 → now</p>
    <h1>Data-exposure monitor</h1>
    <p className="cs-dek">A defensive tool for a major bank in Myanmar. It works out which customers' details have been exposed, so the bank can warn them, without sending those details anywhere. I took it over from its original developer and I'm leading it through handover.</p>
    <ul className="cs-meta">
      <li><b>Role</b> · project owner &amp; lead engineer</li>
      <li><b>Status</b> · in client handover</li>
      <li><b>Code</b> · private, client property</li>
    </ul>
  </div>
  <div className="cs-art" aria-hidden="true">
    <svg viewBox="0 0 640 250"><g stroke="#17141C" strokeWidth="4">
      <circle cx="160" cy="125" r="96" fill="#1D1930"/><circle cx="160" cy="125" r="64" fill="none" stroke="#5E7494" strokeWidth="2.5"/><circle cx="160" cy="125" r="32" fill="none" stroke="#5E7494" strokeWidth="2.5"/>
      <path className="radar-sweep" d="M160 125 160 29a96 96 0 0 1 83 48z" fill="#F3C63F" opacity=".85"/>
      <circle cx="198" cy="92" r="7" fill="#E2262B"/><circle cx="118" cy="160" r="5" fill="#FBFAF7"/>
      <g fill="#FBFAF7"><rect x="320" y="58" width="250" height="34"/><rect x="320" y="106" width="250" height="34"/><rect x="320" y="154" width="250" height="34"/></g>
      <rect x="320" y="58" width="34" height="34" fill="#E2262B"/><rect x="320" y="106" width="34" height="34" fill="#F3C63F"/><rect x="320" y="154" width="34" height="34" fill="#8FA7C4"/>
      <g stroke="#5E5868" strokeWidth="5" strokeLinecap="round"><path d="M372 75h150M372 123h110M372 171h170"/></g>
    </g></svg>
  </div>
</header>

<article className="cs-body">
  <section aria-labelledby="problem-h">
    <h2 id="problem-h">The problem</h2>
    <p>A bank wants to know two things. Have any of our customers' details been exposed? And if so, which customers, so they can be told and have their credentials reset?</p>
    <p>The second question is the hard one. Answering it must not spread customer data any further, so finding out who is affected can't mean sending customer details to anyone else.</p>
  </section>

  <section aria-labelledby="privacy-h">
    <h2 id="privacy-h">Matching without sharing</h2>
    <p>Customer identifiers are stored only as keyed hashes. When new material comes in, the tool hashes what it finds with the same secret key and compares hash to hash, entirely on its own machine. Nothing about a customer is sent anywhere to do that.</p>
    <p>The one check that uses an outside service sends only the first six characters of a hash (a technique called k-anonymity), so the service can't tell which customer was checked.</p>
  </section>

  <section aria-labelledby="pipe-h">
    <h2 id="pipe-h">What happens to every document</h2>
    <p>Every source feeds the same seven-step pipeline, in this order.</p>
    <ol className="seq">
      <li><h3>Collect</h3><p>Collectors pull from notification APIs and public sources, each one isolated so a failing source can't stop the rest.</p></li>
      <li><h3>Normalise</h3><p>One shared normaliser turns names, phone numbers and IDs into a single form, so the same person always matches the same way.</p></li>
      <li><h3>Match</h3><p>Layered detectors run from an exact customer match down to a keyword mention, including two I added for sensitive financial records.</p></li>
      <li><h3>Score</h3><p>Each finding gets a severity that can only ever rise. Stronger evidence never gets downgraded by weaker evidence.</p></li>
      <li><h3>Deduplicate</h3><p>Telling "the same thing again" apart from "something new", so the bank isn't alerted twice about one finding.</p></li>
      <li><h3>Preserve</h3><p>Evidence is written atomically, with locked-down permissions and a hash check, so it can be trusted later.</p></li>
      <li><h3>Alert</h3><p>New findings are raised for review, and if an alert fails to send, it retries.</p></li>
    </ol>
  </section>

  <section aria-labelledby="calls-h">
    <h2 id="calls-h">Calls I'd defend</h2>
    <div className="calls">
      <div className="call"><h3><span>Never narrow the net</span></h3><p>If a finding can't be proven to concern the bank, it isn't thrown away. It's kept and labelled "origin unconfirmed". Missing a real exposure costs far more than reviewing a false one.</p></div>
      <div className="call"><h3><span>Same subject vs new information</span></h3><p>The inherited duplicate check fingerprinted whole documents. Sources that return live statistics change on every poll, so it would have raised an alert every hour, forever. I split "what is this about" from "what's new in it".</p></div>
      <div className="call"><h3><span>A console that can't break anything</span></h3><p>Analysts review findings in a web console that opens the database read-only. The only thing it writes is the reviewer's own confirm-or-dismiss decision, stored with a snapshot of what they judged.</p></div>
      <div className="call"><h3><span>Verified, not claimed</span></h3><p>A source counts as working only after it has been run here against real responses. That rule caught a retired API endpoint and a source that had quietly shut down.</p></div>
    </div>
  </section>

  <section aria-labelledby="proof-h">
    <h2 id="proof-h">How I know it works</h2>
    <div className="proofs">
      <div className="wide"><strong>44 → 1,600+ engine tests</strong><span>Plus 650+ tests for the review console, all passing. Mutation testing is the acceptance bar: tests have to catch deliberate breaks, not just pass.</span></div>
      <div><strong>3 new sources</strong><span>Including RSS, Atom and Bluesky feeds, each added with its own tests.</span></div>
      <div><strong>2 new detection layers</strong><span>For sensitive financial records the original version missed.</span></div>
      <div><strong>Live-verified APIs</strong><span>Two third-party integrations rewritten and proven against each vendor's own test accounts.</span></div>
      <div><strong>Hardened for handover</strong><span>Run locking, alert retry, and versioned database migrations (2 → 15 tables).</span></div>
    </div>
  </section>

  <p className="cs-stack"><b>Stack</b> · Python 3 · SQLite with versioned migrations · Flask, Jinja2 and htmx console · HMAC-SHA256 and SHA-1 k-anonymity · built with AI coding agents under my direction, checked by independent test agents. The code is the client's and stays private; details here are generalised to protect them.</p>
</article>

<nav className="cs-next" aria-label="Case studies">
  <a className="btn btn--paper" href="/#work">← Back to the story</a>
  <a className="btn btn--red" href="/work/ammunity/">Next: Ammunity →</a>
</nav>

      </main>
      <Footer />
    </>
  );
}
