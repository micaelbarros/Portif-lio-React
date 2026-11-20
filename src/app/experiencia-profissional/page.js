import { Briefcase, Calendar, MapPin } from "lucide-react";
import { profileData } from "../../data/profileData";

export const metadata = {
  title: `Experiência Profissional | ${profileData.name}`,
};

export default function ExperienciaProfissionalPage() {
  return (
    <div>
      <header className="page-header">
        <span className="badge-pill">
          <Briefcase size={14} /> Carreira & Atuação no Mercado
        </span>
        <h1 className="page-title">
          Experiência <span className="gradient-text">Profissional</span>
        </h1>
        <p className="page-subtitle">
          Histórico de atuação profissional, projetos entregues, liderança técnica e impactos gerados com tecnologias web modernas.
        </p>
      </header>

      <section className="timeline">
        {profileData.professional.map((job) => (
          <article key={job.id} className="glass-card timeline-item">
            <div className="timeline-dot" />

            <div className="timeline-header">
              <div>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#f8fafc" }}>
                  {job.role}
                </h2>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                  <span style={{ color: "#67e8f9", fontWeight: 600, fontSize: "0.96rem" }}>
                    {job.company}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <MapPin size={13} />
                    {job.type}
                  </span>
                </div>
              </div>

              <span className="timeline-period">
                <Calendar size={13} />
                {job.period}
              </span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.96rem" }}>
              {job.description}
            </p>

            <ul className="bullet-list">
              {job.achievements.map((ach, idx) => (
                <li key={idx}>{ach}</li>
              ))}
            </ul>

            <div className="tag-list">
              {job.tech.map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
