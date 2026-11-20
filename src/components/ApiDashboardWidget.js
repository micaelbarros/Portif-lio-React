"use client";

import { useState, useEffect, useCallback } from "react";
import { RefreshCw } from "lucide-react";
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
      // Fallback
    } finally {
      setLoadingQuote(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomQuote();

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
    <section style={{ marginTop: "3rem" }}>
      <h2 className="section-title">Integrações com APIs</h2>

      <div className="grid-3">
        {/* GitHub API */}
        <div className="glass-card">
          <div style={{ fontWeight: 600, marginBottom: "0.85rem", color: "var(--accent-primary)" }}>
            GitHub API
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.85rem" }}>
            <img
              src={githubProfile?.avatar_url || `https://avatars.githubusercontent.com/${profileData.githubUsername}`}
              alt="GitHub Avatar"
              style={{ width: 46, height: 46, borderRadius: "50%" }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                {githubProfile?.name || "Micael Barros"}
              </div>
              <a
                href={`https://github.com/${profileData.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}
              >
                @{githubProfile?.login || profileData.githubUsername}
              </a>
            </div>
          </div>

          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
            Repositórios públicos: <strong>{githubProfile?.public_repos ?? "—"}</strong> • Seguidores:{" "}
            <strong>{githubProfile?.followers ?? "—"}</strong>
          </div>
        </div>

        {/* Weather API */}
        <div className="glass-card">
          <div style={{ fontWeight: 600, marginBottom: "0.85rem", color: "var(--accent-primary)" }}>
            Clima em Recife (Open-Meteo API)
          </div>

          <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.35rem" }}>
            {weather ? `${weather.temp}°C` : "28°C"}
          </div>

          <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
            Umidade: {weather ? `${weather.humidity}%` : "74%"} • Vento:{" "}
            {weather ? `${weather.wind} km/h` : "14 km/h"}
          </div>
        </div>

        {/* Quotes API */}
        <div className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
              <span style={{ fontWeight: 600, color: "var(--accent-primary)" }}>Frases (DummyJSON API)</span>
              <button
                onClick={fetchRandomQuote}
                disabled={loadingQuote}
                style={{
                  background: "transparent",
                  border: "1px solid var(--border-subtle)",
                  color: "var(--text-secondary)",
                  borderRadius: "6px",
                  padding: "0.25rem 0.55rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "0.75rem",
                }}
              >
                <RefreshCw size={12} />
                {loadingQuote ? "..." : "Trocar"}
              </button>
            </div>

            <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "var(--text-primary)", marginBottom: "0.4rem" }}>
              &ldquo;{quote.quote}&rdquo;
            </p>
            <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>
              — {quote.author}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
