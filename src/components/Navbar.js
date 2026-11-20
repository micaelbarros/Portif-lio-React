"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Experiência Acadêmica" },
  { href: "/experiencia-profissional", label: "Experiência Profissional" },
  { href: "/projetos", label: "Projetos" },
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
      <div className="navbar-top-row">
        <button
          type="button"
          className="menu-burger-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        <Link href="/" className="navbar-center-title">
          Portfólio
        </Link>

        <div className="navbar-right-controls">
          <button
            type="button"
            className={`theme-switch-pill ${lightMode ? "light" : ""}`}
            onClick={() => setLightMode((prev) => !prev)}
            aria-label="Alternar tema"
          >
            <span className="theme-switch-Dot" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar-links-bar">
          <nav className="nav-links">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
