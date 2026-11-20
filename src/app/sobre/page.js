import { Cpu, Layers, Globe, Sparkles, CheckCircle2, Package } from "lucide-react";
import { profileData } from "../../data/profileData";

export const metadata = {
  title: `Sobre & Tecnologias | ${profileData.name}`,
};

export default function SobrePage() {
  return (
    <div>
      <header className="page-header">
        <span className="badge-pill">
          <Cpu size={14} /> Arquitetura & Stack Técnica
        </span>
        <h1 className="page-title">
          Sobre Mim & <span className="gradient-text">Tecnologias do App</span>
        </h1>
        <p className="page-subtitle">
          Conheça minha trajetória como desenvolvedor e todos os módulos, bibliotecas, APIs e recursos de CSS utilizados na engenharia deste portfólio.
        </p>
      </header>

      {/* Bio Card */}
      <section className="glass-card" style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.35rem", fontWeight: 700, marginBottom: "0.85rem" }}>
          Perfil do Desenvolvedor
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Olá! Sou <strong style={{ color: "#fff" }}>{profileData.name}</strong>, desenvolvedor focado na construção de aplicações web modernas utilizando o ecossistema JavaScript/TypeScript, React e Next.js. Busco sempre unir código limpo, arquitetura modular e interfaces de alto impacto visual.
        </p>
        <p style={{ color: "var(--text-secondary)" }}>
          Este projeto foi desenvolvido com foco em <strong style={{ color: "#67e8f9" }}>Componentização</strong>, <strong style={{ color: "#a5b4fc" }}>Design System próprio em CSS3</strong> e <strong style={{ color: "#34d399" }}>Integrações Assíncronas com APIs REST Públicas</strong>.
        </p>
      </section>

      {/* All Technologies & Modules Used to Build the App */}
      <section style={{ marginBottom: "2.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
          <Package size={22} color="#6366f1" />
          <h2 style={{ fontSize: "1.45rem", fontWeight: 700 }}>
            Tecnologias e Módulos Utilizados neste Aplicativo
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
            Matriz de Competências Técnicas
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
