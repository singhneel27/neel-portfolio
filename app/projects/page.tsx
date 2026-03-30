import Link from "next/link";
import { projects } from "./projectData";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero">
        <p className="eyebrow">Project Archive</p>
        <h1>Selected engineering work.</h1>
        <p className="hero__lede">
          A closer look at the backend systems, AI workflows, and data-heavy
          projects I&apos;ve spent time building.
        </p>
        <div className="hero__actions">
          <Link href="/" className="button button--ghost">
            Back Home
          </Link>
        </div>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <article key={project.slug} className="projects-card">
            <span className="projects-card__tech">{project.tech.slice(0, 3).join(" / ")}</span>
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
            <ul>
              {project.impact.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
