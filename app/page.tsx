"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Strength = { label: string; value: number; desc: string };

function Icon({ name }: { name: string }) {
  // Small inline icons (no dependencies)
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  } as const;

  switch (name) {
    case "code":
      return (
        <svg {...common}>
          <path
            d="M9 18L3 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6L21 12L15 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <path
            d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V9C20 10.1046 19.1046 11 18 11H6C4.89543 11 4 10.1046 4 9V7Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 15C4 13.8954 4.89543 13 6 13H18C19.1046 13 20 13.8954 20 15V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V15Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M7 8H7.01M7 16H7.01"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path
            d="M7 18H17C19.2091 18 21 16.2091 21 14C21 12.1362 19.7252 10.5701 18 10.126C17.523 7.79052 15.4637 6 13 6C10.5363 6 8.47698 7.79052 8 10.126C6.27477 10.5701 5 12.1362 5 14C5 16.2091 6.79086 18 9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "db":
      return (
        <svg {...common}>
          <path
            d="M12 3C7.58172 3 4 4.34315 4 6V18C4 19.6569 7.58172 21 12 21C16.4183 21 20 19.6569 20 18V6C20 4.34315 16.4183 3 12 3Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 6C4 7.65685 7.58172 9 12 9C16.4183 9 20 7.65685 20 6"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      );
    case "tools":
      return (
        <svg {...common}>
          <path
            d="M14.7 6.3C13.4 5 11.4 4.7 9.8 5.5L12 7.7L10.7 9L8.5 6.8C7.7 8.4 8 10.4 9.3 11.7C10.5 12.9 12.3 13.3 13.9 12.6L18.2 16.9C18.6 17.3 18.6 17.9 18.2 18.3L17.3 19.2C16.9 19.6 16.3 19.6 15.9 19.2L11.6 14.9C10.9 16.5 11.3 18.3 12.5 19.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function SkillChip({
  label,
  highlight,
}: {
  label: string;
  highlight: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 10px",
        borderRadius: 999,
        border: highlight
          ? "1px solid rgba(99,102,241,0.85)"
          : "1px solid rgba(255,255,255,0.12)",
        background: highlight
          ? "linear-gradient(90deg, rgba(99,102,241,0.18), rgba(16,185,129,0.10))"
          : "rgba(255,255,255,0.03)",
        color: "rgba(255,255,255,0.92)",
        fontSize: 13,
        lineHeight: 1,
        boxShadow: highlight ? "0 0 0 3px rgba(99,102,241,0.10)" : "none",
        transition: "transform 140ms ease, box-shadow 140ms ease, border-color 140ms ease",
      }}
      className="skill-chip"
      title={label}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: 999,
          background: highlight
            ? "rgba(99,102,241,0.95)"
            : "rgba(255,255,255,0.35)",
        }}
      />
      {label}
    </span>
  );
}

export default function Home() {
  const sections = useMemo(
    () => ["home", "about", "skills", "strengths", "projects", "experience", "education", "contact"],
    []
  );

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home", id: "home" },
      { label: "About", href: "#about", id: "about" },
      { label: "Skills", href: "#skills", id: "skills" },
      { label: "Strengths", href: "#strengths", id: "strengths" },
      { label: "Projects", href: "#projects", id: "projects" },
      { label: "Experience", href: "#experience", id: "experience" },
      { label: "Education", href: "#education", id: "education" },
      { label: "Contact", href: "#contact", id: "contact" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState<string>("home");

  // Resume-based skills (from your PDF)
  const skillGroups = useMemo(
    () => [
      {
        title: "Programming & Backend",
        icon: "code",
        items: [
          "Python",
          "Java",
          "C++",
          "Go (learning)",
          "Swift (learning)",
          "REST APIs",
          "Object-Oriented Programming",
        ],
      },
      {
        title: "Systems & Infrastructure",
        icon: "server",
        items: [
          "Linux (x86)",
          "Distributed Systems",
          "Networking Concepts",
          "Monitoring & Logging",
          "Load Optimization",
          "High-Availability Systems",
        ],
      },
      {
        title: "Cloud & DevOps",
        icon: "cloud",
        items: [
          "AWS",
          "GCP",
          "Docker",
          "Kubernetes",
          "CI/CD (GitHub Actions)",
          "Infrastructure Automation",
          "Containerized Deployments",
        ],
      },
      {
        title: "Data & Backend Services",
        icon: "db",
        items: [
          "SQL",
          "MySQL",
          "Oracle",
          "SQL Server",
          "MongoDB",
          "Caching",
          "ETL Pipelines",
          "Apache Kafka",
          "BigQuery",
          "Hadoop",
          "Airflow",
        ],
      },
      {
        title: "Tools & Collaboration",
        icon: "tools",
        items: [
          "Git",
          "GitHub",
          "Jira",
          "Confluence",
          "Agile/Scrum",
          "Unit & Integration Testing",
          "TDD",
        ],
      },
    ],
    []
  );

  const coreStack = useMemo(
    () => ["Python", "SQL", "REST APIs", "Docker", "AWS", "ETL Pipelines", "Kafka", "Linux"],
    []
  );

  const [skillQuery, setSkillQuery] = useState("");
  const normalizedQuery = skillQuery.trim().toLowerCase();

  const strengths: Strength[] = useMemo(
    () => [
      { label: "Ownership", value: 92, desc: "Drive projects end-to-end with accountability." },
      { label: "Reliability", value: 88, desc: "Logging, metrics, debuggability, fault awareness." },
      { label: "Performance", value: 84, desc: "Latency, throughput, caching, indexing mindset." },
      { label: "Communication", value: 86, desc: "Clear tradeoffs, documentation, collaboration." },
    ],
    []
  );

  const [animatedStrengths, setAnimatedStrengths] = useState<number[]>(
    () => strengths.map(() => 0)
  );
  const hasAnimatedRef = useRef(false);

  const projects = useMemo(
    () => [
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
    ],
    []
  );

  const experience = useMemo(
    () => [
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
    ],
    []
  );

  const education = useMemo(
    () => [
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
    ],
    []
  );

  // Scroll spy observer
  useEffect(() => {
    const els = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  // Animate counters when Strengths becomes active
  useEffect(() => {
    if (activeSection !== "strengths") return;
    if (hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const start = performance.now();
    const durationMs = 900;
    const targets = strengths.map((s) => s.value);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setAnimatedStrengths(targets.map((v) => Math.round(v * eased)));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [activeSection, strengths]);

  const styles = {
    bg: {
      minHeight: "100vh",
      background:
        "radial-gradient(1200px 600px at 20% -10%, rgba(99,102,241,0.22), transparent 60%), radial-gradient(900px 520px at 90% 10%, rgba(16,185,129,0.16), transparent 60%), #0b0f19",
      color: "rgba(255,255,255,0.92)",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    } as React.CSSProperties,

    page: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "96px 18px 92px",
    } as React.CSSProperties,

    muted: { color: "rgba(255,255,255,0.72)" } as React.CSSProperties,

    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backdropFilter: "blur(10px)",
      background: "rgba(11,15,25,0.65)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    } as React.CSSProperties,

    navInner: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "12px 18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
    } as React.CSSProperties,

    navLinks: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap",
      justifyContent: "flex-end",
      alignItems: "center",
    } as React.CSSProperties,

    pillBase: {
      textDecoration: "none",
      fontSize: 13,
      padding: "8px 10px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.14)",
      color: "rgba(255,255,255,0.9)",
      background: "rgba(255,255,255,0.03)",
      transition: "transform 120ms ease, background 120ms ease, border-color 120ms ease",
    } as React.CSSProperties,

    pillActive: {
      borderColor: "rgba(99,102,241,0.9)",
      background: "rgba(99,102,241,0.18)",
    } as React.CSSProperties,

    section: {
      marginTop: 52,
      scrollMarginTop: 110,
    } as React.CSSProperties,

    sectionTitle: {
      fontSize: 22,
      margin: "0 0 14px",
      letterSpacing: -0.2,
    } as React.CSSProperties,

    card: {
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: 18,
      padding: 18,
      background: "rgba(255,255,255,0.03)",
      boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
    } as React.CSSProperties,

    stack: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: 16,
    } as React.CSSProperties,

    btn: {
      display: "inline-block",
      textDecoration: "none",
      padding: "10px 14px",
      borderRadius: 12,
      border: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(255,255,255,0.04)",
      color: "white",
      fontSize: 14,
    } as React.CSSProperties,
  };

  const isMatch = (s: string) => {
    if (!normalizedQuery) return false;
    return s.toLowerCase().includes(normalizedQuery);
  };

  const countMatchesInGroup = (items: string[]) => {
    if (!normalizedQuery) return 0;
    return items.filter((x) => isMatch(x)).length;
  };

  return (
    <div style={styles.bg}>
      <header style={styles.nav}>
        <div style={styles.navInner}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <strong style={{ letterSpacing: -0.2 }}>Neel</strong>
            <span
              style={{
                fontSize: 12,
                padding: "2px 8px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              SWE
            </span>
          </div>

          <nav style={styles.navLinks}>
            {navItems.map((n) => {
              const isActive = activeSection === n.id;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  style={{ ...styles.pillBase, ...(isActive ? styles.pillActive : {}) }}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main style={styles.page}>
        {/* HERO */}
        <section id="home" style={{ ...styles.section, marginTop: 0 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 16 }}>
            <div style={styles.card}>
              <h1 style={{ fontSize: 44, margin: 0, letterSpacing: -0.6 }}>
                Neel Vijay Pratap Singh
              </h1>
              <p style={{ ...styles.muted, marginTop: 10, lineHeight: 1.6 }}>
                M.S. Computer Science @ Texas A&amp;M (May 2026)
                <br />
                Backend-focused SWE: APIs, pipelines, performance, reliability.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <a href="/resume.pdf" target="_blank" style={styles.btn}>
                  Resume (PDF)
                </a>
                <a href="mailto:neel27@tamu.edu" style={styles.btn}>
                  Email
                </a>
                <a href="https://github.com/singhneel27" target="_blank" style={styles.btn}>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/neel-vijay-singh/"
                  target="_blank"
                  style={styles.btn}
                >
                  LinkedIn
                </a>
              </div>

              <p style={{ ...styles.muted, marginTop: 14, lineHeight: 1.7 }}>
                I build production-oriented systems: low-latency retrieval, scalable ETL services,
                and reliability tooling (logging/metrics/debug hooks). Open to SWE roles (2026).
              </p>
            </div>

            {/* Profile */}
            <div style={{ ...styles.card, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontWeight: 800 }}>Profile</div>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {/* If your filename differs, change src accordingly */}
                <Image
                  src="/profile.jpeg"
                  alt="Neel Singh profile photo"
                  width={700}
                  height={700}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>

              <div style={{ ...styles.muted, lineHeight: 1.7 }}>
                Bryan, TX • MSCS @ Texas A&amp;M
                <br />
                Focus: Backend • Systems • Data
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About</h2>
          <div style={styles.card}>
            <p style={{ margin: 0, ...styles.muted, lineHeight: 1.75 }}>
              I’m a software engineer and CS graduate student focused on backend systems and
              production reliability. I like building services that are fast, observable, and
              maintainable—then validating them with real metrics (latency/throughput/error rates).
              My work spans data pipelines, retrieval systems, and applied ML where it improves
              product outcomes.
            </p>
          </div>
        </section>

        {/* ✅ NEW FANCY SKILLS */}
        <section id="skills" style={styles.section}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <h2 style={styles.sectionTitle}>Skills</h2>

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 12px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <span style={{ ...styles.muted, fontSize: 13 }}>Search</span>
                <input
                  value={skillQuery}
                  onChange={(e) => setSkillQuery(e.target.value)}
                  placeholder="e.g., Docker, SQL, Kafka..."
                  style={{
                    width: 220,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "rgba(255,255,255,0.92)",
                    fontSize: 13,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Core Stack strip */}
          <div
            style={{
              marginTop: 10,
              borderRadius: 18,
              padding: 14,
              border: "1px solid rgba(255,255,255,0.10)",
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.14), rgba(16,185,129,0.08))",
              boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
              <div style={{ fontWeight: 900, letterSpacing: -0.2 }}>Core Stack</div>
              <div style={{ ...styles.muted, fontSize: 13 }}>
                
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
              {coreStack.map((s) => (
                <SkillChip key={s} label={s} highlight={isMatch(s)} />
              ))}
            </div>
          </div>

          {/* Category cards */}
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {skillGroups.map((g) => {
              const matches = countMatchesInGroup(g.items);
              const showCount = normalizedQuery.length > 0;

              return (
                <div
                  key={g.title}
                  style={{
                    borderRadius: 18,
                    padding: 18,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.03)",
                    boxShadow: "0 14px 40px rgba(0,0,0,0.25)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* subtle top glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: "-40px -60px auto -60px",
                      height: 110,
                      background:
                        "radial-gradient(closest-side, rgba(99,102,241,0.22), transparent 70%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 12,
                          border: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.03)",
                          display: "grid",
                          placeItems: "center",
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        <Icon name={g.icon} />
                      </div>

                      <div>
                        <div style={{ fontWeight: 900, letterSpacing: -0.2 }}>{g.title}</div>
                        <div style={{ ...styles.muted, fontSize: 13 }}>
                          {g.items.length} skills
                          {showCount ? ` • ${matches} match` : ""}
                        </div>
                      </div>
                    </div>

                    {/* small ring meter */}
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.12)",
                        background:
                          "conic-gradient(from 180deg, rgba(99,102,241,0.75), rgba(16,185,129,0.65), rgba(255,255,255,0.10))",
                        display: "grid",
                        placeItems: "center",
                      }}
                      title="Category coverage"
                    >
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 999,
                          background: "rgba(11,15,25,0.9)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 12,
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        {Math.min(99, 60 + g.items.length)}%
                      </div>
                    </div>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                    {g.items.map((s) => (
                      <SkillChip key={s} label={s} highlight={isMatch(s)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ ...styles.muted, marginTop: 12, fontSize: 13, lineHeight: 1.6 }}>
            Tip: type a keyword in search (ex: <b>Docker</b>, <b>SQL</b>, <b>Kafka</b>) to highlight matching skills.
          </div>
        </section>

        {/* STRENGTHS */}
        <section id="strengths" style={styles.section}>
          <h2 style={styles.sectionTitle}>Strengths</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {strengths.map((s, i) => (
              <div key={s.label} style={styles.card}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <div style={{ fontWeight: 800 }}>{s.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 900 }}>{animatedStrengths[i]}%</div>
                </div>
                <div style={{ ...styles.muted, marginTop: 10, lineHeight: 1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={styles.section}>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <div style={styles.stack}>
            {projects.map((p) => (
              <div key={p.title} style={styles.card}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{p.title}</div>
                <div style={{ ...styles.muted, marginTop: 6 }}>{p.subtitle}</div>
                <ul style={{ ...styles.muted, lineHeight: 1.75, paddingLeft: 18, marginTop: 12, marginBottom: 0 }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ height: 18 }} />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.stack}>
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
                    <li key={b} style={{ marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" style={styles.section}>
          <h2 style={styles.sectionTitle}>Education</h2>
          <div style={styles.stack}>
            {education.map((ed) => (
              <div key={ed.school} style={styles.card}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>{ed.school}</div>
                    <div style={{ ...styles.muted, marginTop: 4 }}>{ed.detail}</div>
                  </div>
                  <div style={{ ...styles.muted, fontWeight: 700 }}>{ed.time}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <div style={styles.card}>
            <div style={{ ...styles.muted, lineHeight: 1.85 }}>
              Email:{" "}
              <a href="mailto:neel27@tamu.edu" style={{ color: "white" }}>
                neel27@tamu.edu
              </a>
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/neel-vijay-singh/"
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
              >
                linkedin.com/in/neel-vijay-singh
              </a>
              <br />
              GitHub:{" "}
              <a
                href="https://github.com/singhneel27"
                target="_blank"
                style={{ color: "white" }}
                rel="noreferrer"
              >
                github.com/singhneel27
              </a>
            </div>
          </div>
        </section>

        <footer style={{ marginTop: 34, ...styles.muted, fontSize: 13 }}>
          © {new Date().getFullYear()} Neel Vijay Pratap Singh • Next.js • Vercel
        </footer>

        <style>{`
          html { scroll-behavior: smooth; }

          @media (max-width: 980px) {
            section#home > div { grid-template-columns: 1fr !important; }
            section#strengths > div { grid-template-columns: 1fr !important; }
            section#skills > div:nth-of-type(3) { grid-template-columns: 1fr !important; }
          }

          header a:hover { transform: translateY(-1px); }

          .skill-chip:hover {
            transform: translateY(-1px);
            box-shadow: 0 10px 28px rgba(0,0,0,0.30);
          }
        `}</style>
      </main>
    </div>
  );
}
