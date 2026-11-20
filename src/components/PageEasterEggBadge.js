"use client";

import { useState } from "react";

export default function PageEasterEggBadge({ characterName, image, speech, speechColor = "#8fd1b5" }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "flex-end" }}>
      <div
        onClick={() => setRevealed((prev) => !prev)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.5rem 0.85rem",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.03)",
          border: "1px dashed rgba(76, 154, 120, 0.35)",
          cursor: "pointer",
          transition: "all 0.2s ease",
          maxWidth: "520px",
        }}
        title="Clique para revelar o Easter Egg desta página!"
      >
        <img
          src={image}
          alt={characterName}
          style={{
            width: 38,
            height: 38,
            objectFit: "contain",
            borderRadius: "6px",
            flexShrink: 0,
          }}
        />
        {revealed ? (
          <div>
            <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {characterName}
            </div>
            <div style={{ fontSize: "0.78rem", fontFamily: "monospace", color: speechColor }}>
              {speech}
            </div>
          </div>
        ) : (
          <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)" }}>
            Easter Egg de {characterName} (clique para interagir)
          </span>
        )}
      </div>
    </div>
  );
}
