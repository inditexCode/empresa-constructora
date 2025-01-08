import React from "react";
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
            </div>
            {/* Columna Vacía */}
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              {/* Contenido adicional si es necesario */}
            </div>
            {/* Columna Links */}
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">Links</h3>
              <ul className="list-arrow">
                <li><a href="/contacto">Contactos</a></li>
                <li><a href="/trabajos-realizados">Trabajos Realizados</a></li>
                <li><a href="/movimientos-de-suelo">Movimiento de Suelo</a></li>
                <li><a href="/agroservicios">AgroServicios</a></li>
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
