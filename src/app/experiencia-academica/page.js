import { profileData } from "../../data/profileData";
import PageEasterEggBadge from "../../components/PageEasterEggBadge";

export const metadata = {
  title: `Experiência Acadêmica | ${profileData.name}`,
};

export default function ExperienciaAcademicaPage() {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">
          Experiência <span className="accent-text">Acadêmica</span>
        </h1>
        <p className="page-subtitle">
          Formação superior na UNICAP e Unopar, cursos e certificações na área de Tecnologia e Administração.
        </p>
      </header>

      <section className="timeline">
        {profileData.academic.map((item) => (
          <article key={item.id} className="glass-card">
            <div className="timeline-header">
              <div>
                <h2 style={{ fontSize: "1.22rem", fontWeight: 700 }}>
                  {item.degree}
                </h2>
                <div style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.95rem", marginTop: "0.15rem" }}>
                  {item.institution}
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                <span className="timeline-period">{item.period}</span>
                <span className="tag-chip">{item.status}</span>
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              {item.description}
            </p>

            <ul className="bullet-list">
              {item.highlights.map((hl, idx) => (
                <li key={idx}>{hl}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section style={{ marginTop: "2.75rem" }}>
        <h2 className="section-title">Certificações</h2>

        {profileData.certifications.map((cert) => (
          <div
            key={cert.credentialId}
            className="glass-card"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "center" }}
          >
            <div>
              <h3 style={{ fontSize: "1.22rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                {cert.title}
              </h3>
              <p style={{ color: "var(--accent-primary)", fontWeight: 600, marginBottom: "0.4rem" }}>
                {cert.issuer} • {cert.date}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                Credencial: {cert.credentialId}
              </p>
              <div className="tag-list" style={{ marginTop: 0 }}>
                {cert.skills.map((s) => (
                  <span key={s} className="tag-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: "10px", overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
              <img
                src={cert.image}
                alt={cert.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        ))}
      </section>

      <PageEasterEggBadge
        characterName="Darth Vader"
        image="/images/easter-eggs/darth-vader.png"
        speech="A Força do conhecimento acadêmico na UNICAP e Unopar é forte em você!"
        speechColor="#f87171"
      />
    </div>
  );
}
