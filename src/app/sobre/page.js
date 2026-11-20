import { profileData } from "../../data/profileData";
import PageEasterEggBadge from "../../components/PageEasterEggBadge";

export const metadata = {
  title: `Sobre | ${profileData.name}`,
};

export default function SobrePage() {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">
          Sobre & <span className="accent-text">Tecnologias</span>
        </h1>
        <p className="page-subtitle">
          Resumo profissional, idiomas, habilidades e as tecnologias utilizadas no desenvolvimento deste site.
        </p>
      </header>

      <section className="glass-card" style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
          Resumo Profissional
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          {profileData.bio}
        </p>
      </section>

      <section className="grid-2" style={{ marginBottom: "2.5rem" }}>
        <div className="glass-card">
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Tecnologias Conhecidas
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
            {profileData.knownTechnologies.map((item) => (
              <div key={item.name}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                  <strong>{item.name}</strong>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.84rem" }}>
                    {item.level}
                  </span>
                </div>
                <div style={{ width: "100%", height: "7px", background: "rgba(255,255,255,0.08)", borderRadius: "999px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${item.percentage}%`,
                      height: "100%",
                      background: "var(--accent-primary)",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
            Idiomas & Habilidades
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.7rem", marginBottom: "1.2rem" }}>
            {profileData.languages.map((lang) => (
              <div
                key={lang.language}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  padding: "0.6rem 0.8rem",
                }}
              >
                <div style={{ fontWeight: 600, fontSize: "0.92rem" }}>{lang.language}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>{lang.level}</div>
              </div>
            ))}
          </div>

          <div className="tag-list" style={{ marginTop: 0 }}>
            {profileData.softSkills.map((sk) => (
              <span key={sk} className="tag-chip">
                {sk}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 className="section-title">
          Tecnologias e Módulos Utilizados no Desenvolvimento do App
        </h2>

        <div className="grid-2">
          {profileData.appTechnologies.map((tech) => (
            <article key={tech.name} className="glass-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <h3 style={{ fontSize: "1.08rem", fontWeight: 700 }}>
                  {tech.name}
                </h3>
                <span className="timeline-period">{tech.version}</span>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                {tech.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PageEasterEggBadge
        characterName="Doutor Destino (Dr. Doom)"
        image="/images/easter-eggs/dr-doom.jpg"
        speech="A arquitetura React/Next.js deste App e seu tema verde são supremos como Latvéria!"
        speechColor="#8fd1b5"
      />
    </div>
  );
}
