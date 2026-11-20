import { Cpu, Layers, Sparkles, CheckCircle2, Package, Globe2, MapPin, Phone } from "lucide-react";
import { profileData } from "../../data/profileData";

export const metadata = {
  title: `Sobre & Tecnologias | ${profileData.name}`,
};

export default function SobrePage() {
  return (
    <div>
      <header className="page-header">
        <span className="badge-pill">
          <Cpu size={14} /> Resumo Profissional, Idiomas & Stack do App
        </span>
        <h1 className="page-title">
          Sobre Mim & <span className="gradient-text">Tecnologias do App</span>
        </h1>
        <p className="page-subtitle">
          Conheça meu resumo profissional, tecnologias conhecidas, idiomas e todos os módulos e bibliotecas utilizados na construção deste portfólio React/Next.js.
        </p>
      </header>

      {/* Bio Card + Contact Details */}
      <section className="glass-card" style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.85rem" }}>
          Resumo Profissional — {profileData.name}
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1.1rem" }}>
          {profileData.bio}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "0.92rem", color: "#cbd5e1" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
            <Phone size={16} color="#10b981" /> <strong>Contato:</strong> {profileData.phone}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
            <MapPin size={16} color="#6366f1" /> <strong>Endereço:</strong> {profileData.address}
          </span>
        </div>
      </section>

      {/* Known Technologies & Languages from Resume */}
      <section className="grid-2" style={{ marginBottom: "2.75rem" }}>
        <div className="glass-card">
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Sparkles size={20} color="#6366f1" />
            Tecnologias Conhecidas
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {profileData.knownTechnologies.map((item) => (
              <div key={item.name}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.92rem", marginBottom: "0.35rem" }}>
                  <strong>{item.name}</strong>
                  <span style={{ color: "#67e8f9", fontFamily: "JetBrains Mono, monospace", fontSize: "0.82rem" }}>
                    {item.level}
                  </span>
                </div>
                <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "999px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${item.percentage}%`,
                      height: "100%",
                      background: "var(--gradient-main)",
                      borderRadius: "999px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Globe2 size={20} color="#06b6d4" />
            Idiomas & Habilidades
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
            {profileData.languages.map((lang) => (
              <div
                key={lang.language}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "0.65rem 0.85rem",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{lang.language}</div>
                <div style={{ fontSize: "0.8rem", color: "#a5b4fc" }}>{lang.level}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "0.45rem", textTransform: "uppercase" }}>
            Habilidades Comportamentais
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

      {/* All Technologies & Modules Used to Build the App */}
      <section style={{ marginBottom: "2.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
          <Package size={22} color="#6366f1" />
          <h2 style={{ fontSize: "1.45rem", fontWeight: 700 }}>
            Tecnologias e Módulos Utilizados para Desenvolver este App
          </h2>
        </div>

        <div className="grid-2">
          {profileData.appTechnologies.map((tech) => (
            <article key={tech.name} className="glass-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.65rem" }}>
                <h3 style={{ fontSize: "1.12rem", fontWeight: 700, color: "#f8fafc" }}>
                  {tech.name}
                </h3>
                <span className="timeline-period">{tech.version}</span>
              </div>
              <div style={{ fontSize: "0.8rem", color: "#a5b4fc", fontWeight: 600, marginBottom: "0.6rem", textTransform: "uppercase" }}>
                {tech.category}
              </div>
              <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)" }}>
                {tech.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* React Hooks & Next.js Native Modules breakdown */}
      <section className="glass-card" style={{ marginBottom: "2.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1rem" }}>
          <Layers size={22} color="#06b6d4" />
          <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>
            Módulos Internos do React & Next.js Aplicados
          </h2>
        </div>

        <ul className="bullet-list">
          <li>
            <strong>next/link & next/navigation (usePathname):</strong> Navegação client-side instantânea (SPA) sem recarregamento de página e detecção automática da rota ativa na barra de navegação.
          </li>
          <li>
            <strong>react (useState, useEffect, useCallback, useMemo):</strong> Gerenciamento de estado reativo para consumo de APIs, controle de carregamento (loading states), busca e filtragem dinâmica de repositórios.
          </li>
          <li>
            <strong>Fetch API & Async/Await:</strong> Comunicação HTTP assíncrona com tratamento de erros (try/catch) e fallback resiliente para múltiplas APIs públicas (GitHub API, Open-Meteo API e DummyJSON Quotes API).
          </li>
          <li>
            <strong>CSS Custom Properties & Glassmorphism:</strong> Variáveis nativas (<code>--bg-card</code>, <code>--gradient-main</code>), <code>backdrop-filter: blur(14px)</code> e layouts responsivos com CSS Grid e Flexbox.
          </li>
        </ul>
      </section>

      {/* Developer Skills Matrix */}
      <section>
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
          <Sparkles size={22} color="#a855f7" />
          <h2 style={{ fontSize: "1.45rem", fontWeight: 700 }}>
            Matriz Completa de Competências
          </h2>
        </div>

        <div className="grid-2">
          {profileData.skills.map((group) => (
            <div key={group.category} className="glass-card">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.85rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={18} color="#10b981" />
                {group.category}
              </h3>
              <div className="tag-list" style={{ marginTop: 0 }}>
                {group.items.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
