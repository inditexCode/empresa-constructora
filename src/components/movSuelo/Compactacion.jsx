import React from "react";
import img1 from "./img/1.jpg";
import "./Compactacion.css"; // Archivo CSS específico para estilos de la tarjeta

const Compactacion = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="compactacion-card-container">
        <div className="compactacion-card-row">
          <div className="compactacion-card-image">
            <img src={img1} alt="Tanque" />
          </div>
          <div className="compactacion-card-content">
            <h5 className="compactacion-card-title">Compactacion</h5>
            <p className="compactacion-card-text">
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

export default Compactacion;
