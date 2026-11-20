import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { profileData } from "../../data/profileData";

export const metadata = {
  title: `Experiência Acadêmica | ${profileData.name}`,
};

export default function ExperienciaAcademicaPage() {
  return (
    <div>
      <header className="page-header">
        <span className="badge-pill">
          <GraduationCap size={14} /> Formação & Educação Continuada
        </span>
        <h1 className="page-title">
          Experiência <span className="gradient-text">Acadêmica</span>
        </h1>
        <p className="page-subtitle">
          Minha jornada acadêmica, formação superior em tecnologia, especializações práticas e atividades de pesquisa e monitoria.
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
                    background: item.status === "Em andamento" ? "rgba(16, 185, 129, 0.15)" : "rgba(99, 102, 241, 0.15)",
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

      {/* Academic Pillars */}
      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.25rem" }}>
          Pilares de Estudo & <span className="gradient-text">Pesquisa</span>
        </h2>

        <div className="grid-2">
          <div className="glass-card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.6rem" }}>
              <BookOpen size={20} color="#6366f1" />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Engenharia de Software & Web</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Aprofundamento em padrões de projeto, arquitetura limpa, estruturas de dados, algoritmos e desenvolvimento de Single Page Applications (SPA) e Server-Side Rendering (SSR).
            </p>
          </div>

          <div className="glass-card">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.6rem" }}>
              <Award size={20} color="#06b6d4" />
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Projetos Integradores & Comunidade</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Participação em hackathons, monitoria acadêmica de lógica de programação e criação de soluções tecnológicas voltadas para impacto real.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
