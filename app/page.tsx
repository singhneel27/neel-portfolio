export default function Home() {
  const projects = [
    {
      title: "Healthcare Referral Analytics (GNN)",
      subtitle: "Heterogeneous graphs • Link prediction • 4M+ records",
      bullets: [
        "Built heterogeneous graph pipelines and models for physician–specialist referral links.",
        "Achieved ~0.88 AUC in link prediction experiments.",
        "Focused on scalable feature engineering + reproducible evaluation.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/singhneel27" }, // replace with repo link if public
      ],
    },
    {
      title: "Operating Systems Kernel Projects",
      subtitle: "Paging • Scheduler • Non-blocking disk driver",
      bullets: [
        "Implemented core OS components (paging, scheduling) and performance-focused subsystems.",
        "Worked with low-level debugging and systems interfaces (C/C++).",
        "Built for correctness, isolation, and predictable performance.",
      ],
      links: [
        { label: "Write-up", href: "#" }, // replace if you have a write-up link
      ],
    },
    {
      title: "Personalized AI Travel Advisor",
      subtitle: "User memory • LLM orchestration • Itinerary generation",
      bullets: [
        "Designed a preference + memory workflow to generate personalized itineraries.",
        "Supports retrieval of prior preferences and user-confirmed memory updates.",
        "Built as a modular web app with clear API boundaries.",
      ],
      links: [
        { label: "Demo", href: "#" }, // replace if you have a demo link
      ],
    },
  ];

  const skills = [
    "Python",
    "C/C++",
    "SQL",
    "PyTorch",
    "StatsModels",
    "FastAPI",
    "React/Next.js",
    "Git",
    "Linux",
    "Machine Learning",
    "Graph ML",
    "Systems Programming",
  ];

  const cardStyle: React.CSSProperties = {
    border: "1px solid #2a2a2a",
    borderRadius: 16,
    padding: 18,
    background: "rgba(255,255,255,0.02)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  };

  const muted: React.CSSProperties = { color: "rgba(255,255,255,0.72)" };

  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: "56px 18px 80px",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: 280 }}>
            <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.5 }}>Neel Singh</h1>
            <p style={{ ...muted, marginTop: 10, marginBottom: 0, lineHeight: 1.6, fontSize: 16 }}>
              MS in Computer Science @ Texas A&amp;M University (May 2026)
              <br />
              AI/ML • Systems • Data Engineering
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
                background: "rgba(255,255,255,0.03)",
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
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Email
            </a>
          </div>
        </div>

        {/* mini about card */}
        <div style={{ ...cardStyle, marginTop: 18 }}>
          <p style={{ margin: 0, ...muted, lineHeight: 1.7 }}>
            I build systems and ML solutions with an emphasis on reproducibility, scale, and clean
            engineering. Recently: graph ML for healthcare referrals, OS kernel modules, and LLM
            apps with memory.
          </p>
        </div>
      </section>

      {/* GRID: Projects + Sidebar */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 16,
        }}
      >
        {/* PROJECTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h2 style={{ margin: "6px 0 4px", fontSize: 20, letterSpacing: -0.2 }}>Projects</h2>

          {projects.map((p) => (
            <div key={p.title} style={cardStyle}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 650 }}>{p.title}</div>
                  <div style={{ ...muted, marginTop: 6, fontSize: 14 }}>{p.subtitle}</div>
                </div>

                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        fontSize: 13,
                        padding: "7px 10px",
                        borderRadius: 10,
                        border: "1px solid #3a3a3a",
                        color: "white",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>

              <ul style={{ marginTop: 14, marginBottom: 0, paddingLeft: 18, ...muted, lineHeight: 1.75 }}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* LINKS */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>Links</div>
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

          {/* SKILLS */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 12,
                    padding: "7px 10px",
                    borderRadius: 999,
                    border: "1px solid #3a3a3a",
                    background: "rgba(255,255,255,0.02)",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>Experience</div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 650 }}>Research Assistant — Texas A&amp;M (Mays)</div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                Healthcare analytics • Graph ML • Large-scale data
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 650 }}>TA / Grader — Texas A&amp;M</div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                Feedback-driven grading • Analytics coursework support
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>Education</div>
            <div style={{ fontWeight: 650 }}>Texas A&amp;M University</div>
            <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
              M.S. Computer Science — Expected May 2026
            </div>
          </div>
        </aside>
      </section>

      {/* MOBILE RESPONSIVENESS NOTE */}
      <style>{`
        @media (max-width: 900px) {
          main section[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <footer style={{ marginTop: 28, ...muted, fontSize: 13 }}>
        © {new Date().getFullYear()} Neel Singh • Built with Next.js • Hosted on Vercel
      </footer>
    </main>
  );
}
