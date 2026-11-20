"use client";

import { useState, useEffect, useMemo } from "react";
import { Github, ExternalLink, Star, GitFork, RefreshCw } from "lucide-react";
import { profileData } from "../../data/profileData";

export default function ProjetosPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("Todos");

  const fetchGithubRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/users/${profileData.githubUsername}/repos?sort=updated&per_page=30`
      );
      if (!response.ok) {
        throw new Error("Não foi possível carregar os repositórios no momento.");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        setRepos(data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const languages = useMemo(() => {
    const set = new Set(["Todos"]);
    repos.forEach((r) => {
      if (r.language) set.add(r.language);
    });
    return Array.from(set);
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(search.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(search.toLowerCase()));
      const matchesLang = selectedLang === "Todos" || repo.language === selectedLang;
      return matchesSearch && matchesLang;
    });
  }, [repos, search, selectedLang]);

  const spot = profileData.conectaMesaSpotlight;

  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">
          Projetos <span className="accent-text">Desenvolvidos</span>
        </h1>
        <p className="page-subtitle">
          Projeto Conecta Mesa apresentado no Porto Digital junto com a Beyond Co. e repositórios públicos do GitHub.
        </p>
      </header>

      {/* Conecta Mesa Section */}
      <section className="glass-card" style={{ marginBottom: "2.75rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <img
            src={spot.logoImage}
            alt="Conecta Mesa Logo"
            style={{ width: 60, height: 60, borderRadius: "12px", objectFit: "cover" }}
          />
          <div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 700 }}>
              {spot.title}
            </h2>
            <div style={{ color: "var(--accent-primary)", fontSize: "0.92rem", fontWeight: 500 }}>
              {spot.slogan}
            </div>
          </div>
        </div>

        <div className="grid-2" style={{ alignItems: "center" }}>
          <div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1rem" }}>
              {spot.description}
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1rem" }}>
              <strong>Acompanhamento:</strong> {spot.mentors}
            </p>

            <div style={{ marginBottom: "1rem" }}>
              <div style={{ fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem" }}>
                Equipe:
              </div>
              <div className="tag-list" style={{ marginTop: 0 }}>
                {spot.team.map((member) => (
                  <span key={member} className="tag-chip">
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-subtle)" }}>
            <img
              src={spot.teamImage}
              alt="Equipe Conecta Mesa na Beyond Co. / Porto Digital"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* Dynamic GitHub API Integration Section */}
      <section>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            Repositórios no GitHub
          </h2>

          <button
            onClick={fetchGithubRepos}
            className="pill-btn-outline"
            style={{ padding: "0.45rem 1rem", fontSize: "0.82rem", gap: "0.4rem" }}
          >
            <RefreshCw size={14} />
            Atualizar
          </button>
        </div>

        <div className="filter-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar repositório..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className="tag-chip"
                style={{
                  cursor: "pointer",
                  background: selectedLang === lang ? "var(--accent-primary)" : "rgba(76, 154, 120, 0.14)",
                  color: selectedLang === lang ? "#ffffff" : "#8fd1b5",
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="glass-card" style={{ textAlign: "center", padding: "2.5rem" }}>
            <p style={{ color: "var(--text-secondary)" }}>Carregando repositórios do GitHub...</p>
          </div>
        ) : error ? (
          <div className="glass-card" style={{ textAlign: "center", padding: "2rem" }}>
            <p style={{ color: "var(--text-secondary)" }}>{error}</p>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="glass-card" style={{ textAlign: "center", padding: "2rem" }}>
            <p style={{ color: "var(--text-secondary)" }}>Nenhum repositório encontrado.</p>
          </div>
        ) : (
          <div className="grid-2">
            {filteredRepos.map((repo) => (
              <article
                key={repo.id}
                className="glass-card"
                style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
              >
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <h3 style={{ fontSize: "1.08rem", fontWeight: 700 }}>
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-period"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}
                    >
                      <Github size={13} />
                      GitHub
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                    {repo.description || "Repositório no GitHub."}
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-subtle)", paddingTop: "0.75rem" }}>
                  <div>{repo.language && <span className="tag-chip">{repo.language}</span>}</div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      <Star size={14} /> {repo.stargazers_count}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      <GitFork size={14} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
