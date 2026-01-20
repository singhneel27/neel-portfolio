export default function Home() {
  const projects = [
    {
      title: "Clinical Referral AI Assistant",
      subtitle: "RAG • LangChain • FastAPI • FAISS • Docker",
      bullets: [
        "Built an LLM-powered clinical decision support assistant for context-aware specialist referrals.",
        "Implemented FAISS-based vector indexing for efficient retrieval over high-volume healthcare data.",
        "Designed low-latency FastAPI backend services with robust logging, metrics, and error handling.",
        "Containerized and deployed using Docker, reducing cold-start latency by 31%.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/singhneel27" },
      ],
    },
    {
      title: "Healthcare Referral Analytics Platform",
      subtitle: "Graph ML • ETL • Large-scale data (4M+ records)",
      bullets: [
        "Built and maintained scalable ETL pipelines processing 4M+ healthcare records.",
        "Engineered graph-based data representations to support high-throughput analytics workloads.",
        "Optimized data retrieval paths, reducing query latency and improving system reliability.",
        "Added observability tooling (logging, metrics, debugging hooks) to improve developer visibility.",
      ],
      links: [
        { label: "Research", href: "#" },
      ],
    },
    {
      title: "Autonomous Overtaking in CARLA",
      subtitle: "Deep Reinforcement Learning • DDQN • Simulation",
      bullets: [
        "Extended a lane-keeping autonomous driving model to support safe overtaking and lane changes.",
        "Designed a custom reward function for DDQN, improving overtaking success by 17%.",
        "Improved lane-change accuracy from 83% to 89% using real sensor data integration.",
      ],
      links: [
        { label: "Project", href: "#" },
      ],
    },
  ];

  const skills = [
    "Python",
    "Java",
    "C++",
    "REST APIs",
    "FastAPI",
    "SQL / MySQL / MongoDB",
    "ETL Pipelines",
    "Graph ML",
    "Machine Learning",
    "Deep Reinforcement Learning",
    "Distributed Systems",
    "Linux",
    "AWS",
    "Docker",
    "Kubernetes",
    "CI/CD (GitHub Actions)",
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
        maxWidth: 1040,
        margin: "0 auto",
        padding: "56px 18px 80px",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 28 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.5 }}>
              Neel Vijay Pratap Singh
            </h1>
            <p style={{ ...muted, marginTop: 10, lineHeight: 1.6, fontSize: 16 }}>
              M.S. Computer Science @ Texas A&amp;M University (May 2026)
              <br />
              Backend • Systems • Machine Learning
            </p>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
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

        <div style={{ ...cardStyle, marginTop: 18 }}>
          <p style={{ margin: 0, ...muted, lineHeight: 1.7 }}>
            Software engineer and computer science graduate student focused on
            backend systems, scalable data pipelines, and applied machine learning.
            Experienced in building production-grade services, graph-based analytics,
            and ML-driven decision support systems.
          </p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.7fr 1fr",
          gap: 16,
        }}
      >
        {/* PROJECTS */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h2 style={{ fontSize: 20 }}>Projects</h2>

          {projects.map((p) => (
            <div key={p.title} style={cardStyle}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 650 }}>{p.title}</div>
                <div style={{ ...muted, marginTop: 6, fontSize: 14 }}>
                  {p.subtitle}
                </div>
              </div>

              <ul
                style={{
                  marginTop: 14,
                  paddingLeft: 18,
                  ...muted,
                  lineHeight: 1.75,
                }}
              >
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* EXPERIENCE */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>
              Experience
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 650 }}>
                Research Assistant — Texas A&amp;M University
              </div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                Built scalable ETL pipelines and graph-based analytics over 4M+
                healthcare records.
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 650 }}>
                Software Development Intern — Robotics Services
              </div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                Backend APIs, AWS optimization, caching, indexing, automation.
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 650 }}>
                Software Development Intern — Ardent Computech
              </div>
              <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
                Async APIs, database optimization, DoS resilience, Agile delivery.
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>
              Skills
            </div>
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

          {/* EDUCATION */}
          <div style={cardStyle}>
            <div style={{ fontSize: 16, fontWeight: 650, marginBottom: 10 }}>
              Education
            </div>
            <div style={{ fontWeight: 650 }}>Texas A&amp;M University</div>
            <div style={{ ...muted, fontSize: 13, marginTop: 4 }}>
              M.S. Computer Science — GPA 3.5
            </div>
            <div style={{ ...muted, fontSize: 13, marginTop: 6 }}>
              B.Tech Computer Science — GPA 3.75
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
