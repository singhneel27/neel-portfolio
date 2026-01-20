import Link from "next/link";
import { projects } from "./projectData";

export default function ProjectsPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "56px 18px 80px" }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Projects</h1>
      <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.6, marginTop: 10 }}>
        Backend-heavy work with measurable impact: low-latency APIs, scalable pipelines, and
        reliability tooling.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14, marginTop: 22 }}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            style={{
              textDecoration: "none",
              color: "white",
              border: "1px solid #2a2a2a",
              borderRadius: 16,
              padding: 18,
              background: "rgba(255,255,255,0.02)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 700 }}>{p.title}</div>
            <div style={{ color: "rgba(255,255,255,0.72)", marginTop: 6 }}>{p.subtitle}</div>
            <div style={{ marginTop: 10, color: "rgba(255,255,255,0.72)", fontSize: 13 }}>
              Tech: {p.tech.join(" • ")}
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 22 }}>
        <Link href="/" style={{ color: "white" }}>
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
