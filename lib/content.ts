/** Skills and certifications, taken from the CV (Job Application/build_general_cv.py, rebuilt 2026-09-26). */

export const SKILLS: [string, string[]][] = [
  ["AI & agents", ["Claude Code", "Anthropic & OpenAI APIs", "CrewAI", "agent-to-agent protocol design", "LLM-as-judge evaluation", "prompt engineering", "n8n"]],
  ["Security & privacy", ["Ed25519 signing", "HMAC-SHA256 keyed hashing", "k-anonymity lookups", "challenge-response authentication", "evidence integrity (atomic writes, hash checks)", "threat modelling"]],
  ["Backend & data", ["Python", "TypeScript", "FastAPI", "Flask / htmx", "Node.js", "SQLite", "PostgreSQL", "Supabase (RLS)", "WebSocket / SSE"]],
  ["Computer vision & ML", ["OpenCV", "ONNX (YuNet, SFace)", "HSEmotion", "PyTorch benchmarking", "Cohen's κ", "bootstrap CIs", "McNemar tests"]],
  ["Frontend", ["Next.js / React", "ReactFlow", "Zustand", "Tailwind", "GSAP"]],
  ["Infrastructure & practice", ["Docker", "AWS", "GCP", "Railway", "Vercel", "Linux", "mutation testing", "multi-agent AI workflows with approval gates"]],
];

export const CERTS: [string, [string, string | null][]][] = [
  ["Anthropic", [
    ["Claude Code in Action (2026)", "https://verify.skilljar.com/c/uggkavthuywn"],
    ["Claude 101 (2026)", "https://verify.skilljar.com/c/rqzg2pxeqr95"],
    ["Claude certification (Apr 2026)", "https://verify.skilljar.com/c/bwoa764d9tud"],
    ["Claude certification (Apr 2026)", "https://verify.skilljar.com/c/ctf9qggvk37b"],
    ["Claude certification (2026)", "https://verify.skilljar.com/c/454qysdpj6km"],
  ]],
  ["Python & data", [
    ["Python for Everybody Specialization, University of Michigan (2025)", "https://coursera.org/verify/specialization/QPNONTMU39L7"],
    ["Introduction to Data Analytics, Meta (2025)", "https://coursera.org/verify/C8NO0DGWLN6D"],
    ["Data Analysis with Spreadsheets and SQL, Meta (2025)", "https://coursera.org/verify/6RKZ9HFTAD5Z"],
  ]],
  ["Networking", [["Cisco Network Technician Career Badge", null]]],
  ["Marketing", [
    ["Google Digital Marketing & E-commerce Professional Certificate (2024)", "https://coursera.org/verify/professional-cert/DO2I90254P85"],
    ["Meta Social Media Marketing Professional Certificate (2025)", "https://coursera.org/verify/professional-cert/1TIFC538A36Y"],
    ["Meta-Certified Digital Marketing Associate", null],
  ]],
];
