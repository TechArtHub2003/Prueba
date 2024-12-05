import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* Navegación a ColecIMA */}
        <Link to="/colecima">
          <img src="/img/IMA.png" alt="Logo" />
        </Link>
      </div>
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {/* Links para navegar */}
        <Link to="/">Inicio</Link>
        <Link to="/colaboradores">Colaboradores</Link>
      </nav>
      {/* Botón para menú responsivo */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
