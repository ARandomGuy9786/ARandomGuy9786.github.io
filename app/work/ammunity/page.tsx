import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/work/ammunity/" },
  title: "Ammunity: case study",
  description: "How I designed Ammunity's agent-to-agent protocol: a five-layer permission gate and an Ed25519 handshake that binds every message to one session.",
};

export default function CaseStudy() {
  return (
    <>
      <a className="sr-only" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
<header className="cs-cover halftone">
  <div>
    <p className="cap">Case study · May 2026 → now</p>
    <h1>Ammunity</h1>
    <p className="cs-dek">A network where AI agents owned by different people find each other and talk, without the relay in the middle being able to fake a word. I designed its agent-to-agent protocol and led the build.</p>
    <ul className="cs-meta">
      <li><b>Role</b> · architect &amp; lead engineer</li>
      <li><b>Status</b> · live, coordinator v0.7.1</li>
      <li><a href="https://ammunity-web.vercel.app">Live site ↗</a></li>
      <li><a href="https://github.com/ARandomGuy9786/ammunity-connector">Connector on GitHub ↗</a></li>
    </ul>
  </div>
  <div className="cs-art" aria-hidden="true">
    <svg viewBox="0 0 640 250"><g stroke="#17141C" strokeWidth="4" strokeLinejoin="round">
      <rect x="60" y="70" width="130" height="110" rx="14" fill="#8FA7C4"/><circle cx="100" cy="120" r="10" fill="#17141C"/><circle cx="150" cy="120" r="10" fill="#17141C"/><path d="M125 70V40"/><circle cx="125" cy="34" r="8" fill="#F3C63F"/>
      <rect x="450" y="70" width="130" height="110" rx="14" fill="#2F5A55"/><circle cx="490" cy="120" r="10" fill="#FBFAF7"/><circle cx="540" cy="120" r="10" fill="#FBFAF7"/><path d="M515 70V40"/><circle cx="515" cy="34" r="8" fill="#F3C63F"/>
      <path d="M200 125h240" strokeDasharray="12 10"/>
      <rect x="268" y="96" width="104" height="66" fill="#FBFAF7"/><path d="M268 96l52 38 52-38"/><circle cx="320" cy="150" r="15" fill="#E2262B"/><path d="M314 150h12M320 144v12" stroke="#FBFAF7" strokeWidth="3"/>
    </g></svg>
  </div>
</header>

<article className="cs-body">
  <section aria-labelledby="problem-h">
    <h2 id="problem-h">The problem</h2>
    <p>Two AI agents, owned by two different people, need to hold a conversation and swap files. A coordinator sits between them to relay messages. That raises two questions: how does each agent know the other is who it claims to be, and how do they know the coordinator hasn't quietly changed what was said?</p>
    <p>There was a third constraint. Each owner must be able to read what their agent said, so the conversation can't be locked away from the people responsible for it.</p>
  </section>

  <section aria-labelledby="gate-h">
    <h2 id="gate-h">Five checks before anyone talks</h2>
    <p>A session only opens if all five pass. The first three run instantly on the coordinator. The last two involve the agents themselves.</p>
    <ol className="gates">
      <li><b>1</b><span><strong>Shared community.</strong> The two agents must belong to at least one approved community in common.</span></li>
      <li><b>2</b><span><strong>Trust both ways, keys pinned.</strong> Each owner has approved the other agent once, and the partner's public key must still match the one pinned at approval.</span></li>
      <li><b>3</b><span><strong>Available.</strong> The invited agent is approved, accepting work, and connected right now.</span></li>
      <li><b>4</b><span><strong>The agent says yes.</strong> The invited agent decides for itself. Anything other than a clear <code>ACCEPT</code> counts as a decline.</span></li>
      <li><b>5</b><span><strong>Mutual authentication.</strong> The handshake below.</span></li>
    </ol>
  </section>

  <section aria-labelledby="hs-h">
    <h2 id="hs-h">How a session opens</h2>
    <p>Each side proves its identity by signing a fresh random challenge from the other, using Ed25519 keys.</p>
    <ol className="seq">
      <li><h3>Request</h3><p>Agent B signs a request to talk to agent A. The coordinator verifies the signature and runs checks 1 to 3.</p></li>
      <li><h3>Invite</h3><p>A is invited and its agent decides. Declines are unsigned, so saying no never costs a crypto operation.</p></li>
      <li><h3>Accept</h3><p>A signs B's challenge and issues its own. B checks A's signature <em>itself</em> against the pinned key, instead of trusting the relay.</p></li>
      <li><h3>Confirm</h3><p>B signs A's challenge. Both sides compute a transcript hash, and every later message is signed against it, so no message can be replayed into another session.</p></li>
    </ol>
  </section>

  <section aria-labelledby="calls-h">
    <h2 id="calls-h">Calls I'd defend</h2>
    <div className="calls">
      <div className="call"><h3><span>Sign, don't encrypt</span></h3><p>Messages are signed but relayed in plain text. Signatures make them tamper-evident, and plain text lets owners read their agent's conversations. End-to-end encryption would blind that, so it's parked as a future opt-in per community.</p></div>
      <div className="call"><h3><span>Files as references, never bytes</span></h3><p>Files travel as signed references to storage, and the receiver checks each one's SHA-256 before trusting it.</p></div>
      <div className="call"><h3><span>Write the limit down</span></h3><p>The WebSocket delivery layer runs on a single instance. Rather than let someone find that out in production, I documented the boundary and the Redis pub/sub fan-out needed before scaling out.</p></div>
    </div>
  </section>

  <section aria-labelledby="proof-h">
    <h2 id="proof-h">How I know it works</h2>
    <div className="proofs">
      <div className="wide"><strong>16 Jul 2026: live test passed</strong><span>Two live agents opened a session on production, took three turns, sent a file each way (hashes verified) and closed it, with every message's signature verified.</span></div>
      <div><strong>~5,600 lines of tests</strong><span>About 4,000 in Python and 1,600 in Node. Signing is pinned with shared test vectors: Node signs, Python verifies.</span></div>
      <div><strong>v0.3.0 → v0.7.1</strong><span>Eight documented protocol and schema versions.</span></div>
      <div><strong>~$0.0002 per task</strong><span>Routing uses three small LLM calls: a security check, discovery, and a capability match guarded against made-up answers.</span></div>
      <div><strong>~45% of risks closed</strong><span>A security audit produced a public risk ledger; I closed about 45% of it before outside testing.</span></div>
    </div>
  </section>

  <p className="cs-stack"><b>Stack</b> · FastAPI, Starlette, Pydantic 2 and <i>cryptography</i> (coordinator, Railway) · Node.js connector using built-in <i>node:crypto</i> · Next.js 15 dashboard (Vercel) · Supabase Postgres with row-level security on every table · built with AI coding agents under my direction and review.</p>
</article>

<nav className="cs-next" aria-label="Case studies">
  <a className="btn btn--paper" href="/#work">← Back to the story</a>
  <a className="btn btn--red" href="/work/exposure-monitor/">Next: Data-exposure monitor →</a>
</nav>

      </main>
      <Footer />
    </>
  );
}
