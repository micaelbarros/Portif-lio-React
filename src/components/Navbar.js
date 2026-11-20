"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, GraduationCap, Briefcase, Code2, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/sobre", label: "Sobre", icon: User },
  { href: "/experiencia-academica", label: "Exp. Acadêmica", icon: GraduationCap },
  { href: "/experiencia-profissional", label: "Exp. Profissional", icon: Briefcase },
  { href: "/projetos", label: "Projetos", icon: Code2 },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(true);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [lightMode]);

  return (
    <header className="navbar-header">
      {/* Top Bar matching reference: Left burger icon | Center "Portfólio" | Right purple toggle */}
      <div className="navbar-top-row">
        <button
          type="button"
          className="menu-burger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Alternar menu de navegação"
          title="Abrir/Fechar Menu de Páginas"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <Link href="/" className="navbar-center-title">
          Portfólio
        </Link>

        <div className="navbar-right-controls">
          <button
            type="button"
            className={`theme-switch-pill ${lightMode ? "light" : ""}`}
            onClick={() => setLightMode((prev) => !prev)}
            aria-label="Alternar tema claro/escuro"
            title="Alternar tema"
          >
            <span className="theme-switch-Dot" />
          </button>
        </div>
      </div>

      {/* Collapsible Navigation Bar with the 5 mandatory pages */}
      {menuOpen && (
        <div className="navbar-links-bar">
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
                  <Icon size={15} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
