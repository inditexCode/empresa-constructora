import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DoneIcon from "@mui/icons-material/Done";
import PhoneIcon from "@mui/icons-material/Phone";
import TractorIcon from "../components/inicio/main/secciones/img/tractor-campo.png";
import ExcavatorIcon from "../components/movSuelo/iconExcavadora/exc.png";
import "./NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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

  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container-fluid">
        <h2>
          <Link to="/" className="company-link">CANANI SÁNCHEZ</Link>
        </h2>
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
            <Link to="/" className="nav-link d-flex align-items-center">
              <HomeIcon className="me-2" />
              <h3 className="title_nav">INICIO</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agroservicios" className="nav-link d-flex align-items-center">
              <img src={TractorIcon} alt="Agroservicios" className="me-2" />
              <h3 className="title_nav">AGROSERVICIOS</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/movimientos-de-suelo" className="nav-link d-flex align-items-center">
              <img src={ExcavatorIcon} alt="Excavadora" className="me-2" />
              <h3 className="title_nav">MOVIMIENTO DE SUELO</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/trabajos-realizados" className="nav-link d-flex align-items-center">
              <DoneIcon className="me-2" />
              <h3 className="title_nav">TRABAJOS REALIZADOS</h3>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-link d-flex align-items-center">
              <PhoneIcon className="me-2" />
              <h3 className="title_nav">CONTACTOS</h3>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
