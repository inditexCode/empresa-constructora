
import React from "react";
import imagen4 from "./img/tanque4.jpg";
import "./ReparacionTambo.css"; // Archivo CSS específico para estilos de la tarjeta

const ReparacionTambo = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="card-container">
        <div className="card-row">
          <div className="card-content">
            <h5 className="card-title">ReparacionTambo</h5>
            <p className="card-text">
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
          <div className="card-image">
            <img src={imagen4} alt="Tanque" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReparacionTambo;
