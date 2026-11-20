"use client";

import { useState, useEffect, useCallback } from "react";
import { Sparkles, CloudSun, RefreshCw, Github, Users, BookOpen, MapPin } from "lucide-react";
import { profileData } from "../data/profileData";

export default function ApiDashboardWidget() {
  const [quote, setQuote] = useState({
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  });
  const [loadingQuote, setLoadingQuote] = useState(false);

  const [weather, setWeather] = useState(null);
  const [githubProfile, setGithubProfile] = useState(null);

  const fetchRandomQuote = useCallback(async () => {
    setLoadingQuote(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      if (res.ok) {
        const data = await res.json();
        setQuote({ quote: data.quote, author: data.author });
      }
    } catch {
      // Fallback quote if offline
    } finally {
      setLoadingQuote(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomQuote();

    // Open-Meteo API (Recife, PE coordinates: -8.05, -34.88)
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-8.05&longitude=-34.88&current=temperature_2m,wind_speed_10m,relative_humidity_2m"
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && data.current) {
          setWeather({
            temp: data.current.temperature_2m,
            wind: data.current.wind_speed_10m,
            humidity: data.current.relative_humidity_2m,
          });
        }
      })
      .catch(() => {});

    // GitHub User API
    fetch(`https://api.github.com/users/${profileData.githubUsername}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && data.login) {
          setGithubProfile(data);
        }
      })
      .catch(() => {});
  }, [fetchRandomQuote]);

  return (
    <section style={{ marginTop: "2.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.2rem", flexWrap: "wrap", gap: "0.5rem" }}>
        <h2 style={{ fontSize: "1.45rem", fontWeight: 700 }}>
          Hub de Integrações com <span className="gradient-text">APIs em Tempo Real</span>
        </h2>
        <span className="api-badge">
          <span className="status-dot" /> 3 Public REST APIs Conectadas
        </span>
      </div>

      <div className="grid-3">
        {/* Card 1: GitHub REST API */}
        <div className="glass-card api-widget">
          <div className="api-header">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700 }}>
              <Github size={19} color="#a5b4fc" />
              <span>GitHub REST API</span>
            </div>
            <span className="api-badge">LIVE</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1rem" }}>
            <img
              src={githubProfile?.avatar_url || `https://avatars.githubusercontent.com/${profileData.githubUsername}`}
              alt="GitHub Avatar"
              style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid #6366f1" }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: "1rem" }}>
                {githubProfile?.name || profileData.name}
              </div>
              <a
                href={`https://github.com/${profileData.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.82rem", color: "#67e8f9", fontFamily: "JetBrains Mono, monospace" }}
              >
                @{githubProfile?.login || profileData.githubUsername}
              </a>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", background: "rgba(0,0,0,0.25)", padding: "0.75rem", borderRadius: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
              <BookOpen size={15} color="#67e8f9" />
              <span>
                <strong>{githubProfile?.public_repos ?? "10+"}</strong> Repos
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem" }}>
              <Users size={15} color="#a855f7" />
              <span>
                <strong>{githubProfile?.followers ?? "15+"}</strong> Seguidores
              </span>
            </div>
          </div>
          <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
            Endpoint: <code>api.github.com/users/{profileData.githubUsername}</code>
          </p>
        </div>

        {/* Card 2: Open-Meteo Weather API */}
        <div className="glass-card api-widget">
          <div className="api-header">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700 }}>
              <CloudSun size={19} color="#67e8f9" />
              <span>Open-Meteo API</span>
            </div>
            <span className="api-badge">LIVE</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
            <MapPin size={15} color="#6366f1" />
            <span>Recife, Pernambuco - Brasil</span>
          </div>

          <div style={{ display: "flex", alignItems: "baseline", gap: "0.8rem", marginBottom: "0.85rem" }}>
            <span style={{ fontSize: "2.3rem", fontWeight: 800, color: "#f8fafc" }}>
              {weather ? `${weather.temp}°C` : "28.4°C"}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#34d399" }}>
              Umidade: {weather ? `${weather.humidity}%` : "74%"}
            </span>
          </div>

          <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>
            Vento atual: <strong>{weather ? `${weather.wind} km/h` : "14.2 km/h"}</strong>
          </div>
          <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
            Endpoint: <code>api.open-meteo.com/v1/forecast</code>
          </p>
        </div>

        {/* Card 3: DummyJSON Quotes API */}
        <div className="glass-card api-widget" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div className="api-header">
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700 }}>
                <Sparkles size={19} color="#c084fc" />
                <span>Inspiração Dev API</span>
              </div>
              <button
                onClick={fetchRandomQuote}
                disabled={loadingQuote}
                title="Buscar nova citação da API"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#f8fafc",
                  borderRadius: "8px",
                  padding: "0.3rem 0.55rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                }}
              >
                <RefreshCw size={13} />
                {loadingQuote ? "..." : "Nova"}
              </button>
            </div>

            <blockquote style={{ fontStyle: "italic", fontSize: "0.92rem", color: "#e2e8f0", marginBottom: "0.6rem" }}>
              &ldquo;{quote.quote}&rdquo;
            </blockquote>
            <div style={{ fontSize: "0.82rem", color: "#a5b4fc", fontWeight: 600 }}>
              — {quote.author}
            </div>
          </div>

          <p style={{ fontSize: "0.76rem", color: "var(--text-muted)", marginTop: "0.75rem" }}>
            Endpoint: <code>dummyjson.com/quotes/random</code>
          </p>
        </div>
      </div>
    </section>
  );
}
