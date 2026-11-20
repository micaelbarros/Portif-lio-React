import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Mail,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  User,
  Terminal,
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
              <span className="status-dot" /> Disponível para Projetos & Oportunidades
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
              Ver Projetos Desenvolvidos
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
                <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{profileData.name}</h2>
                <span style={{ fontSize: "0.85rem", color: "#a5b4fc" }}>Full Stack Developer</span>
              </div>
            </div>

            <div className="meta-list">
              <div className="meta-item">
                <MapPin size={16} color="#6366f1" />
                <span>{profileData.location}</span>
              </div>
              <div className="meta-item">
                <Mail size={16} color="#06b6d4" />
                <span>{profileData.email}</span>
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
                <Terminal size={16} color="#10b981" />
                <span>Stack Principal: React, Next.js, Node.js</span>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Core Skills
            </div>
            <div className="tag-list" style={{ marginTop: 0 }}>
              {["React 18", "Next.js 14", "JavaScript", "TypeScript", "CSS3", "REST APIs", "Git"].map((t) => (
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

      {/* Quick Navigation Sections */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: "1.2rem" }}>
          Explore o <span className="gradient-text">Currículo Completo</span>
        </h2>

        <div className="grid-2">
          <Link href="/experiencia-academica" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <GraduationCap size={24} color="#6366f1" />
              <h3 style={{ fontSize: "1.18rem", fontWeight: 700 }}>Experiência Acadêmica</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem" }}>
              Formação universitária, cursos de extensão Full Stack, monitorias e conquistas acadêmicas.
            </p>
          </Link>

          <Link href="/experiencia-profissional" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <Briefcase size={24} color="#06b6d4" />
              <h3 style={{ fontSize: "1.18rem", fontWeight: 700 }}>Experiência Profissional</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.94rem" }}>
              Atuação prática no desenvolvimento de interfaces modernas, consumo de APIs e metodologias ágeis.
            </p>
          </Link>
        </div>
      </section>

      {/* Real-time API Hub */}
      <ApiDashboardWidget />
    </div>
  );
}
