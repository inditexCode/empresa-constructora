import React from "react";
import cardImage from "./img/1.jpg";
import "./LimpiezaTerrenos.css"; // Archivo CSS específico para estilos de la tarjeta

const LimpiezaTerrenos = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="card-container">
        <div className="card-row">
          <div className="card-image">
            <img src={cardImage} alt="Tanque" />
          </div>
          <div className="card-content">
            <h5 className="card-title">Limpieza de terrenos</h5>
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
        </div>
      </div>
    </>
  );
};

export default LimpiezaTerrenos;
