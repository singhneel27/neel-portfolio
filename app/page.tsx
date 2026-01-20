export default function Home() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Strengths", href: "#strengths" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const skills = [
    { name: "Backend APIs (FastAPI / REST)", level: 90 },
    { name: "ETL & Data Pipelines", level: 88 },
    { name: "SQL & Query Optimization", level: 86 },
    { name: "Reliability & Observability", level: 82 },
    { name: "Docker & Deployment", level: 80 },
    { name: "AWS / Cloud", level: 75 },
    { name: "ML Systems & Retrieval", level: 78 },
  ];

  const strengths = [
    { label: "Ownership", value: 92, desc: "Drive projects end-to-end with accountability." },
    { label: "Reliability", value: 88, desc: "Logging, metrics, debuggability, fault awareness." },
    { label: "Performance", value: 84, desc: "Latency, throughput, caching, indexing mindset." },
    { label: "Communication", value: 86, desc: "Clear tradeoffs, documentation, collaboration." },
  ];

  const projects = [
    {
      title: "Clinical Referral AI Assistant",
      subtitle: "RAG backend • FastAPI • FAISS • Docker",
      bullets: [
        "Built an LLM-powered decision support backend for context-aware specialist referrals.",
        "Implemented FAISS vector indexing enabling sub-second retrieval under concurrent load.",
        "Designed modular APIs with structured logging, metrics, and error handling.",
        "Optimized container startup and data loading, reducing cold-start latency by ~31%.",
      ],
    },
    {
      title: "Healthcare Referral Analytics Platform",
      subtitle: "ETL + graph representation • 4M+ healthcare records",
      bullets: [
        "Built scalable ETL and backend services processing over 4M healthcare records.",
        "Engineered graph-based representations and optimized retrieval paths to reduce latency.",
        "Added observability tooling to improve reliability and developer visibility.",
      ],
    },
    {
      title: "Autonomous Overtaking in CARLA",
      subtitle: "Deep Reinforcement Learning • Simulation",
      bullets: [
        "Extended a lane-keeping model to support lane changes and overtaking.",
        "Designed a custom reward function improving overtaking success by ~17%.",
        "Improved lane-change accuracy from ~83% to ~89% in simulation.",
      ],
    },
  ];

  const experience = [
    {
      role: "Research Assistant",
      org: "Texas A&M University — Mays Business School",
      time: "May 2025 – Present",
      bullets: [
        "Built ETL and backend services processing 4M+ healthcare records.",
        "Optimized data access paths and graph representations for analytics workloads.",
        "Added logging, metrics, and debugging hooks to improve reliability.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Robotics Services",
      time: "Nov 2022 – Apr 2023",
      bullets: [
        "Developed backend REST APIs for a learning management system.",
        "Improved latency via caching (14%), DB indexing (20%), and faster retrieval (28%).",
        "Built automation scripts and API tests, improving release efficiency by 30%.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Ardent Computech Pvt Ltd",
      time: "Jul 2022 – Aug 2022",
      bullets: [
        "Optimized database queries improving CSAT by 15%.",
        "Designed async APIs reducing server-side errors by 8%.",
        "Worked in Agile sprints to deliver production-ready features.",
      ],
    },
  ];

  const education = [
    {
      school: "Texas A&M University",
      detail: "M.S. Computer Science — GPA 3.5",
      time: "Aug 2024 – May 2026",
    },
    {
      school: "Maulana Abul Kalam Azad University of Technology",
      detail: "B.Tech Computer Science — GPA 3.75",
      time: "Aug 2019 – Aug 2023",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(16,185,129,0.18), transparent 60%), #0b0f19",
        color: "rgba(255,255,255,0.92)",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(10px)",
          background: "rgba(11,15,25,0.65)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "12px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <strong>Neel</strong>
          <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                style={{
                  textDecoration: "none",
                  fontSize: 13,
                  padding: "8px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "96px 18px 80px" }}>
        {/* HOME */}
        <section id="home" style={{ scrollMarginTop: 96 }}>
          <h1 style={{ fontSize: 44, margin: 0 }}>Neel Vijay Pratap Singh</h1>
          <p style={{ opacity: 0.75, marginTop: 10, lineHeight: 1.6 }}>
            M.S. Computer Science @ Texas A&amp;M University (May 2026)
            <br />
            Backend-focused Software Engineer — APIs, data pipelines, reliability.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            <a href="/resume.pdf" target="_blank">Resume (PDF)</a>
            <a href="mailto:neel27@tamu.edu">Email</a>
            <a href="https://github.com/singhneel27" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/neel-vijay-singh/" target="_blank">LinkedIn</a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>About</h2>
          <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
            I build production-oriented backend systems with a focus on performance,
            reliability, and clean engineering. My work spans ETL pipelines, retrieval
            systems, and applied ML where it improves real product outcomes.
          </p>
        </section>

        {/* SKILLS */}
        <section id="skills" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>Skills</h2>
          {skills.map((s) => (
            <div key={s.name} style={{ marginBottom: 12 }}>
              <strong>{s.name}</strong>
              <div style={{ height: 8, background: "rgba(255,255,255,0.12)", borderRadius: 6 }}>
                <div
                  style={{
                    width: `${s.level}%`,
                    height: "100%",
                    background: "linear-gradient(90deg,#6366f1,#10b981)",
                    borderRadius: 6,
                  }}
                />
              </div>
            </div>
          ))}
        </section>

        {/* STRENGTHS */}
        <section id="strengths" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>Strengths</h2>
          {strengths.map((s) => (
            <p key={s.label}>
              <strong>{s.label}</strong> — {s.value}% — {s.desc}
            </p>
          ))}
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>Projects</h2>
          {projects.map((p) => (
            <div key={p.title} style={{ marginBottom: 20 }}>
              <strong>{p.title}</strong>
              <div style={{ opacity: 0.75 }}>{p.subtitle}</div>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>Experience</h2>
          {experience.map((e) => (
            <div key={e.role} style={{ marginBottom: 20 }}>
              <strong>{e.role}</strong> — {e.org} ({e.time})
              <ul>
                {e.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* EDUCATION */}
        <section id="education" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>Education</h2>
          {education.map((ed) => (
            <p key={ed.school}>
              <strong>{ed.school}</strong> — {ed.detail} ({ed.time})
            </p>
          ))}
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ marginTop: 40, scrollMarginTop: 96 }}>
          <h2>Contact</h2>
          <p>Email: neel27@tamu.edu</p>
        </section>

        <footer style={{ marginTop: 60, opacity: 0.6, fontSize: 13 }}>
          © {new Date().getFullYear()} Neel Vijay Pratap Singh • Next.js • Vercel
        </footer>
      </main>
    </div>
  );
}
