"use client";

import { useState, useEffect } from "react";

const EASTER_EGGS = [
  {
    id: "tibia",
    name: "Tibia Citizen",
    image: "/images/easter-eggs/tibia-citizen.png",
    speech: "15:30 Micael [100]: Utani Gran Hur! Bora codar!",
    speechColor: "#facc15",
    quote: "Você nunca esquece sua primeira hunt em Rookgaard.",
  },
  {
    id: "creeper",
    name: "Minecraft Creeper",
    image: "/images/easter-eggs/minecraft-creeper.jpg",
    speech: "Tsssss... BOOM! (Nenhum código foi destruído)",
    speechColor: "#4ade80",
    quote: "Cuidado ao minerar código legado sem tocha!",
  },
  {
    id: "vader",
    name: "Darth Vader",
    image: "/images/easter-eggs/darth-vader.png",
    speech: "Eu acho sua falta de commits perturbadora...",
    speechColor: "#f87171",
    quote: "Venha para o Dark Mode da Força.",
  },
  {
    id: "doom",
    name: "Doutor Destino (Dr. Doom)",
    image: "/images/easter-eggs/dr-doom.jpg",
    speech: "A arquitetura deste código é suprema como Latvéria!",
    speechColor: "#8fd1b5",
    quote: "Victor Von Doom aprova o tema verde deste portfólio.",
  },
];

export default function EasterEggs() {
  const [activeEgg, setActiveEgg] = useState(null);
  const [creeperExplosion, setCreeperExplosion] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);

  // Secret keyboard triggers: typing "tibia", "vader", "doom", "mine"
  useEffect(() => {
    let buffer = "";
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      buffer = (buffer + e.key.toLowerCase()).slice(-8);
      if (buffer.endsWith("tibia")) setActiveEgg(EASTER_EGGS[0]);
      if (buffer.endsWith("mine")) setActiveEgg(EASTER_EGGS[1]);
      if (buffer.endsWith("vader")) setActiveEgg(EASTER_EGGS[2]);
      if (buffer.endsWith("doom")) setActiveEgg(EASTER_EGGS[3]);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerEgg = (egg) => {
    setActiveEgg(egg);
    if (egg.id === "creeper") {
      setCreeperExplosion(true);
      setTimeout(() => setCreeperExplosion(false), 600);
    }
  };

  return (
    <>
      {/* Discrete Floating Corner Sprite (Tibia Citizen walking / clickable) */}
      <div
        className={`easter-corner-trigger ${creeperExplosion ? "shake-screen" : ""}`}
        title="Easter Egg secreto! Clique para abrir"
      >
        {activeEgg && (
          <div className="easter-popup-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-primary)" }}>
                Easter Egg Desbloqueado
              </span>
              <button
                onClick={() => setActiveEgg(null)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
              <img
                src={activeEgg.image}
                alt={activeEgg.name}
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: "10px",
                  objectFit: "contain",
                  background: "rgba(0,0,0,0.25)",
                  padding: "3px",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: activeEgg.speechColor,
                    marginBottom: "0.25rem",
                  }}
                >
                  {activeEgg.speech}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
                  {activeEgg.quote}
                </div>
              </div>
            </div>

            {/* Selector to switch between the 4 pop culture icons */}
            <div
              style={{
                display: "flex",
                gap: "0.45rem",
                marginTop: "0.75rem",
                paddingTop: "0.6rem",
                borderTop: "1px solid var(--border-subtle)",
                justifyContent: "space-between",
              }}
            >
              {EASTER_EGGS.map((egg) => (
                <button
                  key={egg.id}
                  onClick={() => triggerEgg(egg)}
                  title={egg.name}
                  style={{
                    background:
                      activeEgg.id === egg.id ? "rgba(76, 154, 120, 0.28)" : "rgba(255,255,255,0.04)",
                    border:
                      activeEgg.id === egg.id
                        ? "1px solid var(--accent-primary)"
                        : "1px solid var(--border-subtle)",
                    borderRadius: "8px",
                    padding: "4px",
                    cursor: "pointer",
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={egg.image}
                    alt={egg.name}
                    style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "4px" }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Corner Floating Tibia Character button */}
        <button
          onClick={() => {
            if (!activeEgg) {
              setActiveEgg(EASTER_EGGS[0]);
            } else {
              const currentIndex = EASTER_EGGS.findIndex((e) => e.id === activeEgg.id);
              const nextEgg = EASTER_EGGS[(currentIndex + 1) % EASTER_EGGS.length];
              triggerEgg(nextEgg);
            }
          }}
          className="easter-sprite-btn"
          aria-label="Ativar Easter Egg"
        >
          <img
            src={activeEgg ? activeEgg.image : "/images/easter-eggs/tibia-citizen.png"}
            alt="Easter Egg"
          />
        </button>
      </div>

      {/* Inline Trigger Button that can be placed in Footer or Sobre */}
      <div style={{ textAlign: "center", marginTop: "1.25rem" }}>
        <button
          onClick={() => setVaultOpen((prev) => !prev)}
          style={{
            background: "transparent",
            border: "none",
            color: "var(--text-muted)",
            fontSize: "0.78rem",
            cursor: "pointer",
            opacity: 0.75,
          }}
        >
          {vaultOpen ? "Esconder Easter Eggs ▲" : "👾 Ver Easter Eggs (Tibia • Minecraft • Star Wars • Dr. Doom)"}
        </button>

        {vaultOpen && (
          <div
            style={{
              maxWidth: "740px",
              margin: "0.85rem auto 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
              gap: "0.75rem",
              padding: "0 1rem",
            }}
          >
            {EASTER_EGGS.map((egg) => (
              <div
                key={egg.id}
                onClick={() => triggerEgg(egg)}
                className="glass-card"
                style={{
                  padding: "0.85rem",
                  cursor: "pointer",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <img
                  src={egg.image}
                  alt={egg.name}
                  style={{ width: 54, height: 54, objectFit: "contain", borderRadius: "8px" }}
                />
                <div style={{ fontSize: "0.82rem", fontWeight: 600 }}>{egg.name}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)" }}>
                  Clique para interagir
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
