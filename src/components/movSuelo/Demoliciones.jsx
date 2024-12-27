import React from "react";
import img2 from "./img/2.png";
import "./Demoliciones.css"; // Archivo CSS específico para estilos de la tarjeta

const Demoliciones = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="demoliciones-card-container">
        <div className="demoliciones-card-row">
          <div className="demoliciones-card-content">
            <h5 className="demoliciones-card-title">Demoliciones</h5>
            <p className="demoliciones-card-text">
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
          <div className="demoliciones-card-image">
            <img src={img2} alt="Tanque" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Demoliciones;
