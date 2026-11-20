import { Github, Code, ExternalLink } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <Code size={18} color="#6366f1" />
          <span>
            Desenvolvido com <strong>React 18</strong> & <strong>Next.js 14</strong> por{" "}
            <strong style={{ color: "#f8fafc" }}>{profileData.name}</strong>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <a
            href="https://github.com/micaelbarros/Portif-lio-React"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "#a5b4fc" }}
          >
            <Github size={16} />
            Repositório Oficial
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
