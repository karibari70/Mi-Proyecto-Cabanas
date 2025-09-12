
"use client";

import Link from "next/link";
import { useState } from "react";
import { Aclonica } from 'next/font/google';

const aclonica = Aclonica({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
const handleLinkClick = () => {
  setMenuOpen(false);
};

  return (
    <nav className={`${aclonica.className} navbar-container`}>
  <div className="navbar">
    <div className="logo-title">
      <img src="/Imagenes/logo2.png" alt="Logo de Cabaña Arrayanes" className="logo" />
      <h2 className="site-title">Cabaña Arrayanes</h2>
    </div>

    <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
      <li className="nav-item">
        <Link href="/" className="nav-link"onClick={handleLinkClick}>INICIO</Link>
      </li>
      <li className="nav-item">
        <Link href="/cabanas" className="nav-link"onClick={handleLinkClick}>CABAÑAS</Link>
      </li>
      <li className="nav-item">
        <Link href="/servicios" className="nav-link"onClick={handleLinkClick}>SERVICIOS</Link>
      </li>
      <li className="nav-item">
        <Link href="/promociones" className="nav-link"onClick={handleLinkClick}>PROMOCIONES</Link>
      </li>
      <li className="nav-item">
        <Link href="/contacto" className="nav-link"onClick={handleLinkClick}>CONTACTO</Link>
      </li>
    </ul>

    <div
      className={`hamburger ${menuOpen ? "active" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </div>
</nav>
  );
}
