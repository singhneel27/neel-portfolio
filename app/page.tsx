import Link from "next/link";
import { projects } from "./projects/projectData";

export default function Home() {
  const card: React.CSSProperties = {
    border: "1px solid #2a2a2a",
    borderRadius: 16,
    padding: 18,
    background: "rgba(255,255,255,0.02)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  };

  const muted: React.CSSProperties = { color: "rgba(255,255,255,0.72)" };

  const skills = [
    "Backend APIs (FastAPI)",
    "Data pipelines (ETL)",
    "SQL + indexing",
    "Caching",
    "Observability (logging/metrics)",
    "Docker",
    "AWS",
    "Linux",
    "Testing (unit/integration)",
  ];

  return (
    <main style={{ maxWidth: 1040, margin: "0 auto", padding: "56px 18px 80px" }}>
      {/* HERO */}
      <section style={{ marginBottom: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.5 }}>
              Neel Vijay Pratap Singh
            </h1>
            <p style={{ ...muted, marginTop: 10, lineHeight: 1.6 }}>
              M.S. Computer Science @ Texas A&amp;M (May 2026) • Bryan, TX
              <br />
              SWE focus: backend systems, performance, reliability, and scalable data services.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid #3a3a3a",
                color: "white",
              }}
            >
              Resume (PDF)
            </a>
            <a
              href="mailto:neel27@tamu.edu"
              style={{
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid #3a3a3a",
                color: "white",
              }}
            >
              Email
            </a>
          </div>
        </div>

        <div style={{ ...card, marginTop: 16 }}>
          <p style={{ margin: 0, ...muted, lineHeight: 1.7 }}>
            I build production-oriented backend services: fast retrieval, reliable ETL pipelines,
            query latency optimization, and strong observability. Recent work includes healthcare
            analytics over 4M+ records and an LLM-powered retrieval backend.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: 16 }}>
        {/* PROJECTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <h2 style={{ fontSize: 20, margin: "6px 0" }}>Projects</h2>
            <Link href="/projects" style={{ color: "white", fontSize: 13 }}>
              View all →
            </Link>
          </div>

          {projects.map((p) => (
            <div key={p.slug} style={card}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 750 }}>{p.title}</div>
                  <div style={{ ...muted, marginTop: 6 }}>{p.subtitle}</div>
                  <div style={{ ...muted, fontSize: 13, marginTop: 8 }}>
                    Tech: {p.tech.join(" • ")}
                  </div>
                </div>

                <Link
                  href={`/projects/${p.slug}`}
                  style={{
                    textDecoration: "none",
                    padding: "10px 14px",
                    borderRadius: 12,
                    border: "1px solid #3a3a3a",
                    color: "white",
                    height: "fit-content",
                  }}
                >
                  Details
                </Link>
              </div>

              <ul style={{ marginTop: 12, marginBottom: 0, paddingLeft: 18, ...muted, lineHeight: 1.75 }}>
                {p.bullets.slice(0, 2).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={card}>
            <div style={{ fontSize: 16, fontWeight: 750, marginBottom: 10 }}>Links</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a style={{ color: "white" }} target="_blank" href="https://github.com/singhneel27">
                GitHub
              </a>
              <a
                style={{ color: "white" }}
                target="_blank"
                href="https://www.linkedin.com/in/neel-vijay-singh/"
              >
                LinkedIn
              </a>
              <a style={{ color: "white" }} href="mailto:neel27@tamu.edu">
                neel27@tamu.edu
              </a>
            </div>
          </div>

          <div style={card}>
            <div style={{ fontSize: 16, fontWeight: 750, marginBottom: 10 }}>SWE Strengths</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 12,
                    padding: "7px 10px",
                    borderRadius: 999,
                    border: "1px solid #3a3a3a",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div style={card}>
            <div style={{ fontSize: 16, fontWeight: 750, marginBottom: 10 }}>Experience (highlights)</div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700 }}>Research Assistant — Texas A&amp;M (Mays)</div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                ETL + backend services over 4M+ records; graph representation; latency + observability improvements.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 700 }}>SDE Intern — Robotics Services</div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                REST APIs, caching/indexing improvements, AWS cost/perf optimization, automation scripts.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700 }}>SDE Intern — Ardent Computech</div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                Async APIs, DB query improvements, resiliency/security hardening, Agile delivery.
              </div>
            </div>
          </div>
        </aside>
      </section>

      <style>{`
        @media (max-width: 900px) {
          main section[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <footer style={{ marginTop: 28, ...muted, fontSize: 13 }}>
        © {new Date().getFullYear()} Neel Vijay Pratap Singh • Next.js • Vercel
      </footer>
    </main>
  );
}
