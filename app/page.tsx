import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "4M+", label: "Healthcare records processed" },
  { value: "31%", label: "Cold-start improvement delivered" },
  { value: "3", label: "Highlighted builds shipped" },
];

const services = [
  {
    title: "Backend Systems",
    icon: "01",
    description:
      "I build API-driven services with an emphasis on reliability, latency, and maintainable architecture.",
  },
  {
    title: "Data Platforms",
    icon: "02",
    description:
      "From ETL pipelines to analytics-friendly storage layers, I focus on throughput, traceability, and clean access patterns.",
  },
  {
    title: "AI Product Engineering",
    icon: "03",
    description:
      "I connect retrieval, model-serving, and observability so AI features feel production-ready instead of experimental.",
  },
];

const projects = [
  {
    title: "Clinical Referral AI Assistant",
    kicker: "LLM + Retrieval",
    description:
      "Built a context-aware backend with FastAPI, FAISS, and Docker for fast specialist referral recommendations.",
    metrics: ["Sub-second retrieval", "31% faster startup", "Structured logs + metrics"],
  },
  {
    title: "Healthcare Referral Analytics Platform",
    kicker: "ETL + Graph Modeling",
    description:
      "Developed scalable pipelines and backend services over 4M+ healthcare records with optimized retrieval paths.",
    metrics: ["4M+ records", "Lower query latency", "Improved reliability"],
  },
  {
    title: "Autonomous Overtaking in CARLA",
    kicker: "Deep Reinforcement Learning",
    description:
      "Extended a lane-keeping policy into overtaking behavior and improved decision quality with reward shaping.",
    metrics: ["17% better overtaking", "83% to 89% lane-change accuracy", "Simulation-driven evaluation"],
  },
];

const experience = [
  {
    role: "Research Assistant",
    company: "Texas A&M University",
    period: "May 2025 - Present",
    summary:
      "Building ETL and backend systems for healthcare analytics, with an emphasis on graph-based data representation and observability.",
  },
  {
    role: "Software Development Intern",
    company: "Robotics Services",
    period: "Nov 2022 - Apr 2023",
    summary:
      "Developed REST APIs, improved response times with caching and indexing, and automated testing workflows for faster releases.",
  },
  {
    role: "Software Development Intern",
    company: "Ardent Computech Pvt Ltd",
    period: "Jul 2022 - Aug 2022",
    summary:
      "Worked on async APIs and database optimization in an Agile environment to improve stability and customer satisfaction.",
  },
];

const skills = [
  "Python",
  "Java",
  "C++",
  "Go",
  "SQL",
  "FastAPI",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Kafka",
  "Airflow",
  "BigQuery",
  "Linux",
  "Distributed Systems",
  "REST APIs",
];

const profileFacts = [
  ["Email", "singhneel27@gmail.com"],
  ["From", "Texas, United States"],
  ["Education", "MSCS at Texas A&M"],
  ["Focus", "Backend, data, AI systems"],
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <header className="topbar">
        <div className="topbar__brand">
          <span className="topbar__name">Neel Singh</span>
          <span className="topbar__tag">Software Engineer</span>
        </div>

        <nav className="topbar__nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section">
        <div className="hero__copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1>
            Neel Singh, building backend systems and AI products with a sharp
            engineering edge.
          </h1>
          <p className="hero__lede">
            I&apos;m an MSCS student at Texas A&amp;M focused on backend
            engineering, data-intensive systems, and practical AI. I like
            turning complex workflows into clean, measurable products.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Hire Me
            </a>
            <a className="button button--ghost" href="/resume.pdf" target="_blank">
              Resume
            </a>
          </div>

          <div className="hero__stats">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <div className="portrait-card">
            <div className="portrait-card__frame">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Neel Singh"
                width={480}
                height={620}
                priority
                className="portrait-card__image"
              />
            </div>
            <div className="portrait-card__meta">
              {profileFacts.map(([label, value]) => (
                <div key={label} className="fact-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <div className="portrait-card__note">
              <span>Currently based in Texas</span>
              <strong>Open to SWE, backend, and platform roles</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-grid">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>A portfolio with more substance than buzzwords.</h2>
        </div>
        <div className="panel">
          <p>
            My work sits at the intersection of backend engineering, data
            infrastructure, and applied AI. I enjoy designing services that can
            handle real workloads, expose useful telemetry, and stay readable as
            they grow.
          </p>
          <p>
            Recent work includes healthcare analytics pipelines, retrieval-backed
            AI systems, and simulation-heavy ML projects. I care a lot about
            clear interfaces, performance, and shipping things that are easy to
            operate after launch.
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Services</p>
            <h2>What I bring to a team.</h2>
          </div>
          <p>
            Strong implementation, thoughtful systems design, and a bias toward
            measurable outcomes.
          </p>
        </div>

        <div className="card-grid card-grid--three">
          {services.map((service) => (
            <article key={service.title} className="feature-card">
              <span className="feature-card__index">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2>Selected projects.</h2>
          </div>
          <Link href="/projects" className="inline-link">
            View all projects
          </Link>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card__header">
                <span>{project.kicker}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <ul className="project-card__metrics">
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section section-grid">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Built in research and industry settings.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="timeline__item">
              <span className="timeline__period">{item.period}</span>
              <h3>
                {item.role} <span>@ {item.company}</span>
              </h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-grid">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2>Core technologies and systems interests.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-band">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something useful.</h2>
          <p>
            If you&apos;re hiring for backend, infrastructure, or AI-focused
            product work, I&apos;d love to connect.
          </p>
          <div className="contact-lines">
            <span>singhneel27@gmail.com</span>
            <span>GitHub: github.com/singhneel27</span>
          </div>
        </div>
        <div className="contact-band__actions">
          <a className="button button--primary" href="mailto:singhneel27@gmail.com">
            Email Me
          </a>
          <a
            className="button button--ghost"
            href="https://github.com/singhneel27"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
