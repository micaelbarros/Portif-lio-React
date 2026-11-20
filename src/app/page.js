import Link from "next/link";
import { profileData } from "../data/profileData";
import ApiDashboardWidget from "../components/ApiDashboardWidget";
import PageEasterEggBadge from "../components/PageEasterEggBadge";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="clean-hero-section">
        <div className="clean-hero-left">
          <h1 className="clean-hero-greeting">Olá, eu sou o</h1>
          <h2
            className="clean-hero-name"
            title='Easter Egg: digite "tibia", "mine", "vader" ou "doom" no teclado!'
          >
            Micael :)
          </h2>
          <p className="clean-hero-role">
            Estudante de TI | Java | Spring Boot | React.js | Next.js
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
              GitHub
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

      {/* About Section */}
      <section style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 4rem" }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.85rem" }}>
          Sobre mim
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.4rem" }}>
          {profileData.bio}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
          {[
            "Java",
            "Spring Boot",
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Next.js",
          ].map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Conecta Mesa Highlight */}
      <section className="glass-card" style={{ marginBottom: "3rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1.4rem",
            alignItems: "center",
          }}
        >
          <img
            src={profileData.conectaMesaSpotlight.logoImage}
            alt="Logo Conecta Mesa"
            style={{
              width: 84,
              height: 84,
              borderRadius: "14px",
              objectFit: "cover",
            }}
          />
          <div>
            <h2 style={{ fontSize: "1.22rem", fontWeight: 700, marginBottom: "0.3rem" }}>
              {profileData.conectaMesaSpotlight.title}
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.93rem", marginBottom: "0.6rem" }}>
              {profileData.conectaMesaSpotlight.slogan} Transformando desperdício em dignidade alimentar ao conectar comerciantes locais, famílias em situação de vulnerabilidade e ONGs.
            </p>
            <Link
              href="/projetos"
              style={{
                color: "var(--accent-primary)",
                fontWeight: 600,
                fontSize: "0.88rem",
              }}
            >
              Ver detalhes do projeto →
            </Link>
          </div>
        </div>
      </section>

      {/* API Integrations */}
      <ApiDashboardWidget />

      <PageEasterEggBadge
        characterName="Tibia Citizen"
        image="/images/easter-eggs/tibia-citizen.png"
        speech="15:30 Micael [100]: Utani Gran Hur! Bem-vindo à minha Home!"
        speechColor="#facc15"
      />
    </div>
  );
}
