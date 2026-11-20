"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, Briefcase, Code2, Github } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/sobre", label: "Sobre & Tech", icon: User },
  { href: "/experiencia-academica", label: "Exp. Acadêmica", icon: GraduationCap },
  { href: "/experiencia-profissional", label: "Exp. Profissional", icon: Briefcase },
  { href: "/projetos", label: "Projetos", icon: Code2 },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        <Link href="/" className="brand-logo">
          <div className="brand-icon">&lt;/&gt;</div>
          <div className="brand-text">
            Micael<span>.Dev</span>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Navegação Principal">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <a
            href="https://github.com/micaelbarros/Portif-lio-React"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
