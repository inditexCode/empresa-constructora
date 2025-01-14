import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Telefono from "../components/telefono/Telefono";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Cerrar el menú cuando se haga clic fuera de él o en un enlace
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false); // Función para cerrar el menú

  return (
    <>
      <div className="cabeza">
        <h2>
          <Link to="/" className="company-link">CANANI SÁNCHEZ</Link>
        </h2>
        <Telefono />
      </div>

      <nav className="navbar navbar-expand-lg" ref={navbarRef}>
        <div className="contenedor">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarToggleExternalContent"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarToggleExternalContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>
                <h3 className="title_nav">INICIO</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/agroservicios" className="nav-link" onClick={closeMenu}>
                <h3 className="title_nav">AGROSERVICIOS</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/movimientos-de-suelo" className="nav-link" onClick={closeMenu}>
                <h3 className="title_nav">MOVIMIENTO DE SUELO</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trabajos-realizados" className="nav-link" onClick={closeMenu}>
                <h3 className="title_nav">TRABAJOS REALIZADOS</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link" onClick={closeMenu}>
                <h3 className="title_nav">CONTACTOS</h3>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
