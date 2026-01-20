"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Strength = { label: string; value: number; desc: string };

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

  // Scroll-spy: active section
  const [activeSection, setActiveSection] = useState<string>("home");

  // Strength counters (animate once)
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

  const skills = useMemo(
    () => [
      { name: "Backend APIs (FastAPI / REST)", level: 90 },
      { name: "ETL & Data Pipelines", level: 88 },
      { name: "SQL & Query Optimization", level: 86 },
      { name: "Reliability & Observability", level: 82 },
      { name: "Docker & Deployment", level: 80 },
      { name: "AWS / Cloud", level: 75 },
      { name: "ML Systems & Retrieval", level: 78 },
    ],
    []
  );

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
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  // Animate counters when Strengths section becomes active
  useEffect(() => {
    if (activeSection !== "strengths") return;
    if (hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const start = performance.now();
    const durationMs = 900;
    const targets = strengths.map((s) => s.value);

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
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
      fontFamily:
        "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
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
      marginTop: 52, // ✅ more breathing room between sections
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
      gap: 16, // ✅ spacing between cards
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
                  style={{
                    ...styles.pillBase,
                    ...(isActive ? styles.pillActive : {}),
                  }}
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

            {/* Profile photo card */}
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
                {/* ✅ make sure your file is public/profile.jpeg */}
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

        {/* SKILLS */}
        <section id="skills" style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.card}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
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
                  <div style={{ fontSize: 28, fontWeight: 900 }}>
                    {animatedStrengths[i]}%
                  </div>
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

                <ul
                  style={{
                    ...styles.muted,
                    lineHeight: 1.75,
                    paddingLeft: 18,
                    marginTop: 12,
                    marginBottom: 0,
                  }}
                >
                  {p.bullets.map((b) => (
                    <li key={b} style={{ marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ✅ extra breathing room between Projects and Experience */}
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

                <ul
                  style={{
                    ...styles.muted,
                    lineHeight: 1.75,
                    paddingLeft: 18,
                    marginTop: 12,
                    marginBottom: 0,
                  }}
                >
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

        {/* Global small CSS helpers */}
        <style>{`
          html { scroll-behavior: smooth; }
          @media (max-width: 980px) {
            section#home > div { grid-template-columns: 1fr !important; }
            section#strengths > div { grid-template-columns: 1fr !important; }
          }
          header a:hover { transform: translateY(-1px); }
        `}</style>
      </main>
    </div>
  );
}
