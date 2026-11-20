import { Github, ExternalLink } from "lucide-react";
import { profileData } from "../data/profileData";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          Portfólio desenvolvido com React e Next.js por <strong>{profileData.name}</strong>
        </div>

        <div>
          <a
            href="https://github.com/micaelbarros/Portif-lio-React"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--accent-primary)",
            }}
          >
            <Github size={16} />
            GitHub
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
