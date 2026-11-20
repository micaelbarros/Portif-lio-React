"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const ROUTE_EASTER_EGGS = {
  "/": {
    id: "tibia",
    topic: "Home",
    name: "Tibia Citizen",
    image: "/images/easter-eggs/tibia-citizen.png",
    speech: "15:30 Micael [100]: Utani Gran Hur! Bem-vindo à Home!",
    speechColor: "#facc15",
    quote: "Você nunca esquece sua primeira hunt em Rookgaard.",
  },
  "/sobre": {
    id: "doom",
    topic: "Sobre & Tecnologias",
    name: "Doutor Destino (Dr. Doom)",
    image: "/images/easter-eggs/dr-doom.jpg",
    speech: "A arquitetura e as tecnologias deste App são supremas como Latvéria!",
    speechColor: "#8fd1b5",
    quote: "Victor Von Doom aprova o domínio técnico e o tema verde.",
  },
  "/experiencia-academica": {
    id: "vader",
    topic: "Experiência Acadêmica",
    name: "Darth Vader",
    image: "/images/easter-eggs/darth-vader.png",
    speech: "A Força do conhecimento acadêmico é forte em você, jovem Padawan.",
    speechColor: "#f87171",
    quote: "UNICAP, Unopar e Rocketseat: o treinamento está completo.",
  },
  "/experiencia-profissional": {
    id: "creeper",
    topic: "Experiência Profissional",
    name: "Minecraft Creeper",
    image: "/images/easter-eggs/minecraft-creeper.jpg",
    speech: "Tsssss... Construindo processos sólidos bloco por bloco sem explodir a produção!",
    speechColor: "#4ade80",
    quote: "Craftando resultados na Unimed HGMI e no Porto Digital.",
  },
  "/projetos": {
    id: "tibia-quest",
    topic: "Projetos Desenvolvidos",
    name: "Tibia & Pop Culture Quest",
    image: "/images/easter-eggs/tibia-citizen.png",
    speech: "You have found a Secret Quest: Conecta Mesa & GitHub Repositories!",
    speechColor: "#facc15",
    quote: "Todos os 4 Easter Eggs acompanham seus projetos.",
    allCharacters: [
      "/images/easter-eggs/tibia-citizen.png",
      "/images/easter-eggs/minecraft-creeper.jpg",
      "/images/easter-eggs/darth-vader.png",
      "/images/easter-eggs/dr-doom.jpg",
    ],
  },
};

export default function EasterEggs() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shake, setShake] = useState(false);

  const currentEgg = ROUTE_EASTER_EGGS[pathname] || ROUTE_EASTER_EGGS["/"];

  // Automatically close or pulse when changing topic/route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleToggle = () => {
    const nextState = !open;
    setOpen(nextState);
    if (nextState && currentEgg.id === "creeper") {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className={`easter-corner-trigger ${shake ? "shake-screen" : ""}`}>
      {open && (
        <div className="easter-popup-card">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.55rem",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--accent-primary)",
              }}
            >
              Easter Egg • {currentEgg.topic}
            </span>
            <button
              onClick={() => setOpen(false)}
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
              src={currentEgg.image}
              alt={currentEgg.name}
              style={{
                width: 60,
                height: 60,
                borderRadius: "10px",
                objectFit: "contain",
                background: "rgba(0,0,0,0.28)",
                padding: "4px",
              }}
            />
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                {currentEgg.name}
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: currentEgg.speechColor,
                  marginBottom: "0.25rem",
                }}
              >
                {currentEgg.speech}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                {currentEgg.quote}
              </div>
            </div>
          </div>

          {currentEgg.allCharacters && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "0.4rem",
                marginTop: "0.75rem",
                paddingTop: "0.6rem",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              {currentEgg.allCharacters.map((imgUrl, idx) => (
                <img
                  key={idx}
                  src={imgUrl}
                  alt="Pop culture character"
                  style={{
                    width: 34,
                    height: 34,
                    objectFit: "contain",
                    borderRadius: "6px",
                    background: "rgba(255,255,255,0.04)",
                    padding: "2px",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Corner Floating Character specific to the current page topic */}
      <button
        onClick={handleToggle}
        className="easter-sprite-btn"
        title={`Easter Egg desta página: ${currentEgg.name} (clique para ver)`}
        aria-label={`Easter Egg ${currentEgg.name}`}
      >
        <img src={currentEgg.image} alt={currentEgg.name} />
      </button>
    </div>
  );
}
