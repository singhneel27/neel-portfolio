import Link from "next/link";

export default function Home() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Strengths", href: "#strengths" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const skills = [
    { name: "Backend APIs (FastAPI/REST)", level: 90 },
    { name: "Data Pipelines (ETL)", level: 88 },
    { name: "SQL + Query Optimization", level: 86 },
    { name: "Reliability + Observability", level: 82 },
    { name: "Docker + Deployment", level: 80 },
    { name: "AWS / Cloud", level: 75 },
    { name: "ML Systems / Retrieval", level: 78 },
  ];

  const strengths = [
    { label: "Ownership", value: 92, desc: "Drive projects end-to-end; ship, measure, iterate." },
    { label: "Reliability", value: 88, desc: "Logging/metrics, debugging hooks, failure-aware design." },
    { label: "Performance", value: 84, desc: "Latency/throughput mindset: caching, indexing, fast retrieval." },
    { label: "Communication", value: 86, desc: "Clear write-ups, tradeoffs, and collaborative execution." },
  ];

  const projects = [
    {
      title: "Clinical Referral AI Assistant",
      subtitle: "RAG backend • FastAPI • FAISS • Docker",
      bullets: [
        "Built an LLM-powered decision support assistant for context-aware specialist referrals.",
        "Implemented FAISS vector index for efficient retrieval enabling sub-second responses under concurrent load.",
        "Designed modular internal APIs; added error handling + structured logging + metrics.",
        "Containerized and optimized startup/data loading to reduce cold-start latency by 31%.",
      ],
    },
    {
      title: "Healthcare Referral Analytics Platform",
      subtitle: "ETL + graph representation • 4M+ healthcare records",
      bullets: [
        "Built and maintained scalable ETL and backend services processing 4M+ healthcare records.",
        "Engineered graph-based representation layer and optimized retrieval paths to reduce query latency.",
        "Added observability tooling (logging, metrics, debugging hooks) to improve reliability and visibility.",
      ],
    },
    {
      title: "Autonomous Overtaking in CARLA",
      subtitle: "Deep RL (DDQN) • Simulator experimentation",
      bullets: [
        "Enhanced a lane-keeping model to perform lane changes + overtaking in dynamic traffic.",
        "Designed custom reward function improving overtaking success by 17%.",
        "Improved lane-change accuracy from 83% to 89% with sensor integration.",
      ],
    },
  ];

  const experience = [
    {
      role: "Research Assistant",
      org: "Texas A&M University — Mays Business School",
      time: "May 2025 – Present",
      bullets: [
        "Built and maintained scalable ETL + backend services processing 4M+ healthcare records.",
        "Engineered a graph-based representation layer and optimized retrieval paths to reduce query latency.",
        "Added observability tooling (logging, metrics, debugging hooks) to improve reliability and visibility.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Robotics Services",
      time: "Nov 2022 – Apr 2023",
      bullets: [
        "Developed backend REST APIs for a learning management system; optimized codebase and leveraged AWS.",
        "Improved performance via caching (14% latency reduction), DB indexing (20% throughput improvement), and faster document retrieval (28%).",
        "Built automation scripts (BeautifulSoup/Selenium) + API test cases; improved release efficiency by 30%.",
      ],
    },
    {
      role: "Software Development Intern",
      org: "Ardent Computech Pvt Ltd",
      time: "Jul 2022 – Aug 2022",
      bullets: [
        "Reengineered database queries improving CSAT by 15% and data transfer efficiency by 20%.",
        "Designed asynchronous APIs reducing server-side errors by 8% and strengthening resilience against DoS patterns.",
        "Collaborated in Agile sprints (planning, standups, reviews) to deliver production-ready features.",
      ],
    },
  ];

  const education = [
    {
      school: "Texas A&M University",
      detail: "M.S. Computer Science — GPA 3.5",
      time: "Aug 2024 – May 2026",
      extra:
        "Coursework: AI, ML, Deep RL, Software Engineering, Algorithms, Security, Operating Systems, Cybersecurity Risk.",
    },
    {
      school: "Maulana Abul Kalam Azad University of Technology",
      detail: "B.Tech Computer Science Engineering — GPA 3.75",
      time: "Aug 2019 – Aug 2023",
      extra: "Coursework: DBMS, OOP, Data Structures & Algorithms.",
    },
  ];

  const styles = {
    page: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "84px 18px 90px",
      fontFamily:
        "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      color: "rgba(255,255,255,0.92)",
    } as React.CSSProperties,
    bg: {
      minHeight: "100vh",
      background:
        "radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,0.28), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(16,185,129,0.18), transparent 60%), #0b0f19",
    } as React.CSSProperties,
    muted: { color: "rgba(255,255,255,0.72)" } as React.CSSProperties,
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backdropFilter: "blur(10px)",
      background: "rgba(11,15,25,0.6)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    } as React.CSSProperties,
    navInner: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "12px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
    } as React.CSSProperties,
    navLinks: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "flex-end",
    } as React.CSSProperties,
    pill: {
      display: "inline-block",
      padding: "8px 10px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.03)",
      color: "rgba(255,255,255,0.9)",
      textDecoration: "none",
      fontSize: 13,
    } as React.CSSProperties,
    section: {
      marginTop: 28,
      scrollMarginTop: 90,
    } as React.CSSProperties,
    card: {
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: 18,
      padding: 18,
      background: "rgba(255,255,255,0.03)",
      boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
    } as React.CSSProperties,
    grid2: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 16,
      alignItems: "stretch",
    } as React.CSSProperties,
    grid3: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16,
      alignItems: "stretch",
    } as React.CSSProperties,
    h1: { fontSize: 44, margin: 0, letterSpacing: -0.6 } as React.CSSProperties,
    h2: { fontSize: 22, margin: "0 0 12px", letterSpacing: -0.2 } as React.CSSProperties,
    kbd: {
      fontSize: 12,
      padding: "2px 8px",
      borderRadius: 8,
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.03)",
      color: "rgba(255,255,255,0.85)",
    } as React.CSSProperties,
    button: {
      display: "inline-block",
      padding: "10px 14px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.04)",
      color: "white",
      textDecoration: "none",
      fontSize: 14,
    } as React.CSSProperties,
  };

  return (
    <div style={styles.bg}>
      {/* NAVBAR */}
      <header style={styles.nav}>
        <div style={styles.navInner}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontWeight: 800, letterSpacing: -0.2 }}>Neel</span>
            <span style={styles.kbd}>SWE</span>
          </div>

          <nav style={styles.navLinks}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} style={styles.pill}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main style={styles.page}>
        {/* HOME / HERO */}
        <section id="home" style={styles.section}>
          <div style={styles.grid2}>
            <div style={styles.card}>
              <h1 style={styles.h1}>Neel Vijay Pratap Singh</h1>
              <p style={{ ...styles.muted, marginTop: 10, lineHeight: 1.6 }}>
                M.S. Computer Science @ Texas A&amp;M University (May 2026) • Bryan, TX
                <br />
                Backend-focused SWE: APIs, pipelines, performance, reliability.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <a href="/resume.pdf" target="_blank" style={styles.button}>
                  Download Resume (PDF)
                </a>
                <a
                  href="https://www.linkedin.com/in/neel-vijay-singh/"
                  target="_blank"
                  style={styles.button}
                >
                  LinkedIn
                </a>
                <a href="mailto:neel27@tamu.edu" style={styles.button}>
                  Email
                </a>
                <a href="https://github.com/singhneel27" target="_blank" style={styles.button}>
                  GitHub
                </a>
              </div>

              <div style={{ marginTop: 14, ...styles.muted, lineHeight: 1.7 }}>
                I build production-oriented systems: low-latency retrieval, scalable ETL services,
                and reliability tooling (logging/metrics/debug hooks). Recent work includes
                healthcare analytics over <b>4M+ records</b> and an LLM-powered retrieval backend.{" "}
                <span style={styles.kbd}>Open to SWE roles (2026)</span>
              </div>
            </div>

            <div style={{ ...styles.card, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>Quick Snapshot</div>
              <div style={{ ...styles.muted, lineHeight: 1.7 }}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  <li>ETL + backend services processing 4M+ healthcare records</li>
                  <li>Performance: caching, indexing, fast retrieval paths</li>
                  <li>Reliability: logging, metrics, debugging hooks</li>
                  <li>DevOps: Docker, AWS, CI/CD (GitHub Actions)</li>
                </ul>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", paddingTop: 12 }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>Primary stack</div>
                <div style={{ ...styles.muted, lineHeight: 1.8 }}>
                  Python • FastAPI • SQL • Docker • AWS • Linux
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={styles.section}>
          <h2 style={styles.h2}>About</h2>
          <div style={styles.card}>
            <p style={{ margin: 0, ...styles.muted, lineHeight: 1.75 }}>
              I’m a software engineer and CS graduate student focused on backend systems and
              production reliability. I enjoy building services that are fast, observable, and
              maintainable—then validating them with real metrics (latency/throughput/error rates).
              My work spans data pipelines, retrieval systems, and applied ML where it improves
              product outcomes. :contentReference[oaicite:1]{index=1}
            </p>
          </div>

          <div style={{ ...styles.grid3, marginTop: 16 }}>
            <div style={styles.card}>
              <div style={{ fontWeight: 800 }}>What I optimize</div>
              <div style={{ ...styles.muted, marginTop: 8, lineHeight: 1.7 }}>
                Latency • throughput • cost • debuggability
              </div>
            </div>
            <div style={styles.card}>
              <div style={{ fontWeight: 800 }}>How I work</div>
              <div style={{ ...styles.muted, marginTop: 8, lineHeight: 1.7 }}>
                Measure → iterate → automate → document
              </div>
            </div>
            <div style={styles.card}>
              <div style={{ fontWeight: 800 }}>What I ship</div>
              <div style={{ ...styles.muted, marginTop: 8, lineHeight: 1.7 }}>
                APIs • pipelines • internal tools • reliability improvements
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" style={styles.section}>
          <h2 style={styles.h2}>Skills</h2>
          <div style={styles.card}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
              {skills.map((s) => (
                <div key={s.name}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                    <div style={{ fontWeight: 700 }}>{s.name}</div>
                    <div style={styles.muted}>{s.level}%</div>
                  </div>
                  <div
                    style={{
                      height: 10,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      overflow: "hidden",
                      marginTop: 8,
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${s.level}%`,
                        background:
                          "linear-gradient(90deg, rgba(99,102,241,0.85), rgba(16,185,129,0.75))",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, ...styles.muted, lineHeight: 1.7 }}>
              Tools & platforms: AWS, Docker, Kubernetes, GitHub Actions, Linux, SQL/MySQL/MongoDB.
              Also familiar with monitoring/logging practices and test-driven workflows. :contentReference[oaicite:2]{index=2}
            </div>
          </div>
        </section>

        {/* STRENGTHS */}
        <section id="strengths" style={styles.section}>
          <h2 style={styles.h2}>Strengths</h2>
          <div style={styles.grid3}>
            {strengths.map((x) => (
              <div key={x.label} style={styles.card}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div style={{ fontWeight: 800 }}>{x.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 900 }}>{x.value}%</div>
                </div>
                <div style={{ ...styles.muted, marginTop: 8, lineHeight: 1.7 }}>{x.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={styles.section}>
          <h2 style={styles.h2}>Projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {projects.map((p) => (
              <div key={p.title} style={styles.card}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{p.title}</div>
                <div style={{ ...styles.muted, marginTop: 6 }}>{p.subtitle}</div>
                <ul style={{ ...styles.muted, lineHeight: 1.75, paddingLeft: 18, marginTop: 12, marginBottom: 0 }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={styles.section}>
          <h2 style={styles.h2}>Experience</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {experience.map((e) => (
              <div key={`${e.role}-${e.org}`} style={styles.card}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>{e.role}</div>
                    <div style={{ ...styles.muted, marginTop: 4 }}>{e.org}</div>
                  </div>
                  <div style={{ ...styles.muted, fontWeight: 700 }}>{e.time}</div>
                </div>
                <ul style={{ ...styles.muted, lineHeight: 1.75, paddingLeft: 18, marginTop: 12, marginBottom: 0 }}>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ ...styles.muted, marginTop: 12 }}>
            (Details summarized from resume.) :contentReference[oaicite:3]{index=3}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" style={styles.section}>
          <h2 style={styles.h2}>Education</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {education.map((ed) => (
              <div key={ed.school} style={styles.card}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>{ed.school}</div>
                    <div style={{ ...styles.muted, marginTop: 4 }}>{ed.detail}</div>
                  </div>
                  <div style={{ ...styles.muted, fontWeight: 700 }}>{ed.time}</div>
                </div>
                <div style={{ ...styles.muted, marginTop: 10, lineHeight: 1.7 }}>{ed.extra}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.h2}>Contact</h2>
          <div style={styles.card}>
            <div style={{ ...styles.muted, lineHeight: 1.8 }}>
              Email: <a href="mailto:neel27@tamu.edu" style={{ color: "white" }}>neel27@tamu.edu</a>
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/neel-vijay-singh/"
                target="_blank"
                style={{ color: "white" }}
              >
                linkedin.com/in/neel-vijay-singh
              </a>
              <br />
              GitHub:{" "}
              <a href="https://github.com/singhneel27" target="_blank" style={{ color: "white" }}>
                github.com/singhneel27
              </a>
            </div>

            <div style={{ marginTop: 12, ...styles.muted }}>
              Tip: Add this URL to your LinkedIn “Website” field and job applications.
            </div>
          </div>
        </section>

        <footer style={{ marginTop: 26, ...styles.muted, fontSize: 13 }}>
          © {new Date().getFullYear()} Neel Vijay Pratap Singh • Built with Next.js • Hosted on Vercel
        </footer>

        {/* Mobile responsiveness */}
        <style>{`
          html { scroll-behavior: smooth; }
          @media (max-width: 980px) {
            main section div[style*="grid-template-columns: 1.2fr 0.8fr"] {
              grid-template-columns: 1fr !important;
            }
            main section div[style*="grid-template-columns: 1fr 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
    </div>
  );
}
