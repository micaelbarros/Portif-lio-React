import { GraduationCap, Calendar, Award, ShieldCheck } from "lucide-react";
import { profileData } from "../../data/profileData";

export const metadata = {
  title: `Experiência Acadêmica | ${profileData.name}`,
};

export default function ExperienciaAcademicaPage() {
  return (
    <div>
      <header className="page-header">
        <span className="badge-pill">
          <GraduationCap size={14} /> Formação Superior & Certificações
        </span>
        <h1 className="page-title">
          Experiência <span className="gradient-text">Acadêmica</span>
        </h1>
        <p className="page-subtitle">
          Graduações na UNICAP e Unopar, cursos de extensão técnica e certificações verificadas na área de Tecnologia da Informação e Administração.
        </p>
      </header>

      <section className="timeline">
        {profileData.academic.map((item) => (
          <article key={item.id} className="glass-card timeline-item">
            <div className="timeline-dot" />

            <div className="timeline-header">
              <div>
                <h2 style={{ fontSize: "1.28rem", fontWeight: 700, color: "#f8fafc" }}>
                  {item.degree}
                </h2>
                <div style={{ color: "#a5b4fc", fontWeight: 600, fontSize: "0.96rem", marginTop: "0.2rem" }}>
                  {item.institution}
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
                <span className="timeline-period">
                  <Calendar size={13} />
                  {item.period}
                </span>
                <span
                  className="tag-chip"
                  style={{
                    background:
                      item.status === "Em andamento"
                        ? "rgba(16, 185, 129, 0.15)"
                        : "rgba(99, 102, 241, 0.15)",
                    color: item.status === "Em andamento" ? "#34d399" : "#c7d2fe",
                  }}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.96rem" }}>
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

      {/* Licenças e Certificações Showcase */}
      <section style={{ marginTop: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
          <Award size={22} color="#10b981" />
          <h2 style={{ fontSize: "1.45rem", fontWeight: 700 }}>
            Licenças e <span className="gradient-text">Certificações</span>
          </h2>
        </div>

        {profileData.certifications.map((cert) => (
          <div key={cert.credentialId} className="glass-card" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "1.5rem", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#34d399", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.5rem" }}>
                <ShieldCheck size={16} /> Credencial Verificada Rocketseat & UNICAP
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "0.3rem" }}>
                {cert.title}
              </h3>
              <p style={{ color: "#a5b4fc", fontWeight: 600, marginBottom: "0.4rem" }}>
                Organização emissora: {cert.issuer} • {cert.date}
              </p>
              <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)", fontFamily: "JetBrains Mono, monospace", marginBottom: "1rem" }}>
                Código da credencial: {cert.credentialId}
              </p>
              <div className="tag-list" style={{ marginTop: 0 }}>
                {cert.skills.map((s) => (
                  <span key={s} className="tag-chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)", background: "#ffffff" }}>
              <img
                src={cert.image}
                alt={cert.title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
