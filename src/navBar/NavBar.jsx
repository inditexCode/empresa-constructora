import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import HomeIcon from "@mui/icons-material/Home";
import DoneIcon from "@mui/icons-material/Done";
import PhoneIcon from "@mui/icons-material/Phone";
import ExcavatorIcon from "../components/movSuelo/iconExcavadora/excavador.png";
import "./NavBar.css";

const Navbar = () => {
  const [anchorElAgro, setAnchorElAgro] = useState(null);
  const [anchorElSuelo, setAnchorElSuelo] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa
  const navbarRef = useRef(null); // Referencia para la barra de navegación

  // Manejadores para mostrar/ocultar los menús desplegables
  const handleMouseEnterAgro = (event) => setAnchorElAgro(event.currentTarget);
  const handleMouseLeaveAgro = () => setAnchorElAgro(null);
  const handleMouseEnterSuelo = (event) => setAnchorElSuelo(event.currentTarget);
  const handleMouseLeaveSuelo = () => setAnchorElSuelo(null);

  // Alternar el estado del menú hamburguesa
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Cerrar el menú al hacer clic fuera de la barra de navegación
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false); // Cerrar el menú si se hace clic fuera de la barra de navegación
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
          <Link to="/" className="company-link">
            Canani Sánchez
          </Link>
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

      <div
        className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        id="navbarToggleExternalContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link d-flex align-items-center">
              <HomeIcon className="me-2" />
              Inicio
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={handleMouseEnterAgro}
            onMouseLeave={handleMouseLeaveAgro}
          >
            <div className="nav-link d-flex align-items-center">
              <AgricultureIcon className="me-2" />
              AgroServicios
            </div>
            <Menu
              anchorEl={anchorElAgro}
              open={Boolean(anchorElAgro)}
              onClose={handleMouseLeaveAgro}
            >
              <MenuItem onClick={handleMouseLeaveAgro}>
                <Link to="/arreglo-tanques">Arreglo de Tanques</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveAgro}>
                <Link to="/caminos">Caminos</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveAgro}>
                <Link to="/desmonte">Desmonte</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveAgro}>
                <Link to="/feedlot">Feedlot</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveAgro}>
                <Link to="/limpieza-terreno">Limpieza de Terrenos</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveAgro}>
                <Link to="/reparacion-tambo">Reparación de Tambo</Link>
              </MenuItem>
            </Menu>
          </li>

          <li
            className="nav-item"
            onMouseEnter={handleMouseEnterSuelo}
            onMouseLeave={handleMouseLeaveSuelo}
          >
            <div className="nav-link d-flex align-items-center">
              <img src={ExcavatorIcon} alt="Excavadora" className="me-2" />
              Movimientos de Suelo
            </div>
            <Menu
              anchorEl={anchorElSuelo}
              open={Boolean(anchorElSuelo)}
              onClose={handleMouseLeaveSuelo}
            >
              <MenuItem onClick={handleMouseLeaveSuelo}>
                <Link to="/compactacion">Compactación</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveSuelo}>
                <Link to="/demoliciones">Demoliciones</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveSuelo}>
                <Link to="/nivelaciones">Nivelaciones</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveSuelo}>
                <Link to="/venta-escombro">Venta de Escombro</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveSuelo}>
                <Link to="/venta-tierra">Venta de Tierra</Link>
              </MenuItem>
              <MenuItem onClick={handleMouseLeaveSuelo}>
                <Link to="/zanjeo">Zanjeo</Link>
              </MenuItem>
            </Menu>
          </li>

          <li className="nav-item">
            <Link to="/trabajos-realizados" className="nav-link d-flex align-items-center">
              <DoneIcon className="me-2" />
              Trabajos Realizados
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contacto" className="nav-link d-flex align-items-center">
              <PhoneIcon className="me-2" />
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
