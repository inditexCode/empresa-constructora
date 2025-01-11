import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Footer.css"; // Asegúrate de tener el archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-between">
            {/* Columna Información */}
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <h3 className="widget-title">INFORMACIÓN</h3>
              <h2>Canani Sanchez</h2>
              <p>
                Una Empresa que se destaca por su cumplimiento, calidad y costos.
                Capaz de satisfacer los requerimientos de sus clientes abarcando
                desde el estudio del proyecto, hasta la finalización de la obra.
              </p>
              <div className="info-footer">
                <div className="info-item">
                  <LocationOnIcon />
                  <p>25 de Mayo 072 - Nelson, Santa Fe</p>
                </div>
                <div className="info-item">
                  {/* Enlace para hacer llamada */}
                  <a href="tel:+543424869824" className="info-item">
                    <CallIcon />
                    <p className="sp">342-4869824</p>
                  </a>
                </div>
                <div className="info-item">
                  {/* Enlace para WhatsApp */}
                  <a href="https://wa.me/543424869824" target="_blank" rel="noopener noreferrer" className="info-item">
                    <WhatsAppIcon />
                    <p className="sp">+54 342 486 9824</p>
                  </a>
                </div>
              </div>
            </div>
            {/* Columna Vacía */}
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              {/* Contenido adicional si es necesario */}
            </div>
            {/* Columna Links */}
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">Links</h3>
              <ul className="list-arrow">
                {/* Solo los Links de React Router */}
                <li><Link to="/contacto">Contactos</Link></li>
                <li><Link to="/trabajos-realizados">Trabajos Realizados</Link></li>
                <li><Link to="/movimientos-de-suelo">Movimiento de Suelo</Link></li>
                <li><Link to="/agroservicios">AgroServicios</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Derechos Reservados */}
      <div className="footer-bottom">
        <div className="container text-center">
          <p>© 2025 Canani Sanchez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
