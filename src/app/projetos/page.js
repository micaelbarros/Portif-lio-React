"use client";

import { useState, useEffect, useMemo } from "react";
import {
  Code2,
  Github,
  ExternalLink,
  Star,
  GitFork,
  Search,
  RefreshCw,
  FolderGit2,
} from "lucide-react";
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
        throw new Error("Limite da API do GitHub atingido ou usuário não encontrado.");
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

  return (
    <div>
      <header className="page-header">
        <span className="badge-pill">
          <Code2 size={14} /> Portfólio & Repositórios Reais via GitHub API
        </span>
        <h1 className="page-title">
          Projetos <span className="gradient-text">Desenvolvidos</span>
        </h1>
        <p className="page-subtitle">
          Projetos em destaque e integração ao vivo com a API oficial do GitHub listando automaticamente os repositórios públicos de <strong>@{profileData.githubUsername}</strong>.
        </p>
      </header>

      {/* Featured Curated Projects */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1.2rem" }}>
          Projetos em <span className="gradient-text">Destaque</span>
        </h2>

        <div className="grid-3">
          {profileData.featuredProjects.map((proj) => (
            <article
              key={proj.id}
              className="glass-card"
              style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                  <FolderGit2 size={24} color="#6366f1" />
                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Código no GitHub"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Acessar Projeto"
                      style={{ color: "#67e8f9" }}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.16rem", fontWeight: 700, marginBottom: "0.55rem" }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                  {proj.description}
                </p>
              </div>

              <div className="tag-list">
                {proj.tech.map((t) => (
                  <span key={t} className="tag-chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Dynamic GitHub API Integration Section */}
      <section>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              Repositórios Públicos <span className="gradient-text">(GitHub REST API)</span>
            </h2>
            <p style={{ fontSize: "0.86rem", color: "var(--text-secondary)" }}>
              Consumindo em tempo real: <code>https://api.github.com/users/{profileData.githubUsername}/repos</code>
            </p>
          </div>

          <button onClick={fetchGithubRepos} className="btn btn-secondary" style={{ padding: "0.55rem 1rem", fontSize: "0.85rem" }}>
            <RefreshCw size={15} />
            Sincronizar API
          </button>
        </div>

        {/* Search & Language Filter Bar */}
        <div className="filter-bar">
          <div style={{ position: "relative", flex: "1", maxWidth: "380px" }}>
            <Search
              size={16}
              color="#94a3b8"
              style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              className="search-input"
              style={{ width: "100%", paddingLeft: "2.3rem" }}
              placeholder="Filtrar repositório por nome ou descrição..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLang(lang)}
                className="tag-chip"
                style={{
                  cursor: "pointer",
                  background: selectedLang === lang ? "var(--gradient-main)" : "rgba(99, 102, 241, 0.13)",
                  color: selectedLang === lang ? "#ffffff" : "#c7d2fe",
                  border: selectedLang === lang ? "1px solid transparent" : "1px solid rgba(99, 102, 241, 0.28)",
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="glass-card" style={{ textAlign: "center", padding: "3rem" }}>
            <p style={{ color: "#67e8f9", fontWeight: 600 }}>
              Carregando repositórios diretamente da API do GitHub...
            </p>
          </div>
        ) : error ? (
          <div className="glass-card" style={{ textAlign: "center", padding: "2rem" }}>
            <p style={{ color: "#fca5a5", marginBottom: "0.5rem" }}>{error}</p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Os projetos em destaque acima permanecem disponíveis.
            </p>
          </div>
        ) : filteredRepos.length === 0 ? (
          <div className="glass-card" style={{ textAlign: "center", padding: "2.5rem" }}>
            <p style={{ color: "var(--text-secondary)" }}>
              Nenhum repositório encontrado para o filtro selecionado.
            </p>
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
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.6rem" }}>
                    <h3 style={{ fontSize: "1.12rem", fontWeight: 700, color: "#f8fafc", wordBreak: "break-word" }}>
                      {repo.name}
                    </h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-period"
                      style={{ flexShrink: 0 }}
                    >
                      <Github size={13} />
                      Ver Código
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  <p style={{ fontSize: "0.91rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                    {repo.description || "Repositório desenvolvido com foco em boas práticas de engenharia de software e desenvolvimento web."}
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {repo.language && <span className="tag-chip">{repo.language}</span>}
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tag-chip"
                        style={{ background: "rgba(16, 185, 129, 0.14)", color: "#34d399", borderColor: "rgba(16, 185, 129, 0.3)" }}
                      >
                        Demo Live
                      </a>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", fontSize: "0.82rem", color: "var(--text-secondary)" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      <Star size={14} color="#facc15" /> {repo.stargazers_count}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                      <GitFork size={14} color="#67e8f9" /> {repo.forks_count}
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
