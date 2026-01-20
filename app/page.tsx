export default function Home() {
  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: 16, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 40, marginBottom: 8 }}>Neel Singh</h1>

      <p style={{ fontSize: 18, marginBottom: 24 }}>
        MS in Computer Science @ Texas A&amp;M University Hello
        <br />
        AI/ML • Systems • Data Engineering
      </p>
      <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
  <a
    href="/Singh_Neel.pdf"
    target="_blank"
    style={{
      display: "inline-block",
      padding: "10px 14px",
      borderRadius: 10,
      border: "1px solid #444",
      textDecoration: "none",
      color: "white",
    }}
  >
    Resume (PDF)
  </a>

  <a
    href="mailto:neel27@tamu.edu"
    style={{
      display: "inline-block",
      padding: "10px 14px",
      borderRadius: 10,
      border: "1px solid #444",
      textDecoration: "none",
      color: "white",
    }}
  >
    Email me
  </a>
</div>
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Projects</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>
            <b>Healthcare Referral Analytics (GNN)</b> – Built heterogeneous graphs on 4M+ records,
            achieving ~0.88 AUC in link prediction.
          </li>
          <li>
            <b>Operating Systems Kernel Projects</b> – Implemented paging, scheduler, and
            non-blocking disk driver in C++.
          </li>
          <li>
            <b>Personalized AI Travel Advisor</b> – Designed LLM-powered itinerary generation with
            persistent user memory.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Links</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>
            GitHub:{" "}
            <a href="https://github.com/YOUR_GITHUB" target="_blank">
            https://github.com/singhneel27
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank">
            https://www.linkedin.com/in/neel-vijay-singh/
            </a>
          </li>
          <li>Email: <a href="mailto:neel27@tamu.edu">neel27@tamu.edu</a></li>
        </ul>
      </section>
    </main>
  );
}