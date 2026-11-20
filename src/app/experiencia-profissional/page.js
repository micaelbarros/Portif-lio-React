import { profileData } from "../../data/profileData";

export const metadata = {
  title: `Experiência Profissional | ${profileData.name}`,
};

export default function ExperienciaProfissionalPage() {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">
          Experiência <span className="accent-text">Profissional</span>
        </h1>
        <p className="page-subtitle">
          Histórico de atuação profissional e projetos práticos desenvolvidos.
        </p>
      </header>

      <section className="timeline">
        {profileData.professional.map((job) => (
          <article key={job.id} className="glass-card">
            <div className="timeline-header">
              <div>
                <h2 style={{ fontSize: "1.22rem", fontWeight: 700 }}>
                  {job.role}
                </h2>
                <div style={{ color: "var(--accent-primary)", fontWeight: 600, fontSize: "0.95rem", marginTop: "0.15rem" }}>
                  {job.company} • <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>{job.type}</span>
                </div>
              </div>

              <span className="timeline-period">{job.period}</span>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
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
