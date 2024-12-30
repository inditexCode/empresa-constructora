import React from "react";
import img5 from "./img/5.png";
import "./VentaTierra.css"; // Archivo CSS específico para estilos de la tarjeta

const VentaTierra = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="VentaTierra-card-container">
        <div className="VentaTierra-card-row">
          <div className="VentaTierra-card-image">
            <img src={img5} alt="Tanque" />
          </div>
          <div className="VentaTierra-card-content">
            <h5 className="VentaTierra-card-title">VentaTierra</h5>
            <p className="VentaTierra-card-text">
              "El mantenimiento y la reparación de tanques son fundamentales
              para garantizar su funcionamiento óptimo y prolongar su vida
              útil. Nuestro equipo se especializa en la inspección y
              restauración de tanques para almacenamiento de agua, combustible
              y otros líquidos. Ofrecemos servicios como la limpieza interna,
              la reparación de fugas, el recubrimiento anticorrosivo y la mejora
              estructural, utilizando materiales de alta calidad y técnicas
              innovadoras. Nos aseguramos de cumplir con los estándares de
              seguridad y eficiencia para brindarte soluciones duraderas y
              confiables. Confía en nosotros para mantener tus tanques en
              perfectas condiciones."
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VentaTierra;
