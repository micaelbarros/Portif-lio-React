import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  User,
  Terminal,
  Globe2,
  Award,
} from "lucide-react";
import { profileData } from "../data/profileData";
import ApiDashboardWidget from "../components/ApiDashboardWidget";

export default function HomePage() {
  return (
    <div>
      {/* Hero Grid */}
      <section className="hero-grid">
        <div className="glass-card hero-main">
          <div>
            <span className="badge-pill">
              <span className="status-dot" /> UNICAP (Sistemas p/ Internet) • Unopar (ADS) • Porto Digital
            </span>
          </div>

          <h1 className="hero-title">
            Olá, eu sou <span className="gradient-text">{profileData.name}</span>
          </h1>

          <div className="hero-role">&gt; {profileData.role}</div>

          <p className="hero-bio">{profileData.bio}</p>

          <div className="btn-group">
            <Link href="/projetos" className="btn btn-primary">
              <Code2 size={18} />
              Ver Conecta Mesa & Projetos
              <ArrowRight size={17} />
            </Link>
            <Link href="/sobre" className="btn btn-secondary">
              <User size={18} />
              Sobre & Tecnologias do App
            </Link>
          </div>
        </div>

        {/* Side Profile Summary */}
        <aside className="glass-card profile-card">
          <div>
            <div className="avatar-header" style={{ marginBottom: "1.25rem" }}>
              <div className="avatar-circle">
                <img
                  src={`https://avatars.githubusercontent.com/${profileData.githubUsername}`}
                  alt={profileData.name}
                />
              </div>
              <div>
                <h2 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{profileData.name}</h2>
                <span style={{ fontSize: "0.84rem", color: "#a5b4fc" }}>
                  Estudante de TI • Desenvolvedor
                </span>
              </div>
            </div>

            <div className="meta-list">
              <div className="meta-item">
                <Phone size={16} color="#10b981" />
                <span>{profileData.phone}</span>
              </div>
              <div className="meta-item">
                <MapPin size={16} color="#6366f1" />
                <span>{profileData.address}</span>
              </div>
              <div className="meta-item">
                <Github size={16} color="#a855f7" />
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#67e8f9" }}
                >
                  github.com/{profileData.githubUsername}
                </a>
              </div>
              <div className="meta-item">
                <Terminal size={16} color="#06b6d4" />
                <span>Java (Avançado), Spring Boot, HTML5, CSS, JS, React</span>
              </div>
              <div className="meta-item">
                <Globe2 size={16} color="#f59e0b" />
                <span>PT (Nativo) • EN (Interm.) • ES (Básico) • FR (Inicial)</span>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                marginBottom: "0.4rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Tecnologias Conhecidas & Habilidades
            </div>
            <div className="tag-list" style={{ marginTop: 0 }}>
              {[
                "Java (Avançado)",
                "Spring Boot",
                "HTML5 + CSS3 + JS",
                "React & Next.js",
                "Resolução de Problemas",
                "Trabalho em Equipe",
              ].map((t) => (
                <span key={t} className="tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Metrics / Stats */}
      <section className="stats-grid">
        {profileData.stats.map((st) => (
          <div key={st.label} className="glass-card stat-card">
            <div className="stat-value">{st.value}</div>
            <div className="stat-label">{st.label}</div>
          </div>
        ))}
      </section>

      {/* Conecta Mesa Banner Highlight on Home */}
      <section className="glass-card" style={{ marginBottom: "2.5rem", border: "1px solid rgba(16, 185, 129, 0.35)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem", alignItems: "center" }}>
          <img
            src={profileData.conectaMesaSpotlight.logoImage}
            alt="Logo Conecta Mesa"
            style={{ width: 96, height: 96, borderRadius: "18px", objectFit: "cover", border: "2px solid rgba(16, 185, 129, 0.5)" }}
          />
          <div>
            <span className="api-badge" style={{ marginBottom: "0.45rem" }}>
              <Award size={13} /> Destaque Residência Tecnológica Porto Digital & Beyond Co.
            </span>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, marginBottom: "0.35rem" }}>
              {profileData.conectaMesaSpotlight.title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem", marginBottom: "0.8rem" }}>
              <strong>&ldquo;{profileData.conectaMesaSpotlight.slogan}&rdquo;</strong> — Transformando desperdício em dignidade alimentar ao conectar comerciantes locais, famílias em situação de vulnerabilidade e ONGs.
            </p>
            <Link href="/projetos" style={{ color: "#34d399", fontWeight: 600, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              Ver fotos da apresentação e detalhes do projeto <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation Sections */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: "1.2rem" }}>
          Explore o <span className="gradient-text">Currículo Completo</span>
        </h2>

        <div className="grid-2">
          <Link href="/experiencia-academica" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <GraduationCap size={24} color="#6366f1" />
              <h3 style={{ fontSize: "1.18rem", fontWeight: 700 }}>Experiência Acadêmica & Certificações</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem" }}>
              Tecnólogo em Sistemas para Internet (UNICAP), Bacharelado em ADS (Unopar), Ciclo RiseUp Rocketseat e Técnicas Administrativas.
            </p>
          </Link>

          <Link href="/experiencia-profissional" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <Briefcase size={24} color="#06b6d4" />
              <h3 style={{ fontSize: "1.18rem", fontWeight: 700 }}>Experiência Profissional</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem" }}>
              Atuação como Auxiliar Administrativo na Unimed HGMI (2025 - 2026) e desenvolvimento do projeto Conecta Mesa no Porto Digital.
            </p>
          </Link>
        </div>
      </section>

      {/* Real-time API Hub */}
      <ApiDashboardWidget />
    </div>
  );
}
