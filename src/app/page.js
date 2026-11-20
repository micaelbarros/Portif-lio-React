import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Code2,
  User,
  Award,
} from "lucide-react";
import { profileData } from "../data/profileData";
import ApiDashboardWidget from "../components/ApiDashboardWidget";

export default function HomePage() {
  return (
    <div>
      {/* Clean Hero Section in Crimson Red Shades */}
      <section className="clean-hero-section">
        <div className="clean-hero-left">
          <h1 className="clean-hero-greeting">Olá, eu sou o</h1>
          <h2 className="clean-hero-name">Micael :)</h2>
          <p className="clean-hero-role">
            Desenvolvedor Full Stack | Java | Spring Boot | React.js | Next.js
          </p>

          <div className="clean-hero-buttons">
            <Link href="/projetos" className="pill-btn-primary">
              Ver Projetos
            </Link>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn-outline"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="clean-hero-right">
          <div className="hero-avatar-ring">
            <img
              src={`https://avatars.githubusercontent.com/${profileData.githubUsername}`}
              alt={profileData.name}
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto 4rem" }}>
        <h2 style={{ fontSize: "1.85rem", fontWeight: 700, marginBottom: "1rem" }}>
          Sobre mim
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          {profileData.bio}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap" }}>
          {[
            "Java (Avançado)",
            "Spring Boot",
            "HTML5 & CSS3",
            "JavaScript",
            "React.js",
            "Next.js 14",
            "Git & GitHub",
          ].map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Conecta Mesa Banner Highlight on Home */}
      <section
        className="glass-card"
        style={{ marginBottom: "3rem", border: "1px solid rgba(225, 29, 72, 0.45)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <img
            src={profileData.conectaMesaSpotlight.logoImage}
            alt="Logo Conecta Mesa"
            style={{
              width: 92,
              height: 92,
              borderRadius: "18px",
              objectFit: "cover",
              border: "2px solid #e11d48",
            }}
          />
          <div>
            <span className="api-badge" style={{ marginBottom: "0.45rem" }}>
              <Award size={13} /> Destaque Residência Tecnológica Porto Digital & Beyond Co.
            </span>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.35rem" }}>
              {profileData.conectaMesaSpotlight.title}
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.94rem",
                marginBottom: "0.75rem",
              }}
            >
              <strong>&ldquo;{profileData.conectaMesaSpotlight.slogan}&rdquo;</strong> —
              Transformando desperdício em dignidade alimentar ao conectar comerciantes locais,
              famílias em situação de vulnerabilidade e ONGs.
            </p>
            <Link
              href="/projetos"
              style={{
                color: "#fb7185",
                fontWeight: 600,
                fontSize: "0.9rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              Ver fotos da apresentação e projetos desenvolvidos <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Navigation to the 5 Required Curriculum Pages */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1.25rem", textAlign: "center" }}>
          Navegue pelo <span className="gradient-text">Currículo & Portfólio</span>
        </h2>

        <div className="grid-2">
          <Link href="/sobre" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <User size={24} color="#e11d48" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Sobre & Tecnologias do App</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Todas as tecnologias, bibliotecas, hooks e módulos utilizados para desenvolver este aplicativo React/Next.js, além dos meus 4 idiomas.
            </p>
          </Link>

          <Link href="/experiencia-academica" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <GraduationCap size={24} color="#f43f5e" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Experiência Acadêmica</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Sistemas para Internet (UNICAP), Análise e Desenvolvimento de Sistemas (Unopar), Ciclo RiseUp Rocketseat e Técnicas Administrativas.
            </p>
          </Link>

          <Link href="/experiencia-profissional" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <Briefcase size={24} color="#e11d48" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Experiência Profissional</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Atuação como Auxiliar Administrativo na Unimed HGMI e Residente Tecnológico no Porto Digital / Beyond Co.
            </p>
          </Link>

          <Link href="/projetos" className="glass-card" style={{ display: "block" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.6rem" }}>
              <Code2 size={24} color="#f43f5e" />
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700 }}>Projetos Desenvolvidos</h3>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>
              Conecta Mesa e integração ao vivo com a API do GitHub listando meus repositórios públicos.
            </p>
          </Link>
        </div>
      </section>

      {/* Real-time API Hub */}
      <ApiDashboardWidget />
    </div>
  );
}
