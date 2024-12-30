import React from "react";
import img4 from "./img/4.jpg";
import "./VentaEscombro.css"; // Archivo CSS específico para estilos de la tarjeta

const VentaEscombro = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="VentaEscombro-card-container">
        <div className="VentaEscombro-card-row">
          <div className="VentaEscombro-card-image">
            <img src={img4} alt="Tanque" />
          </div>
          <div className="VentaEscombro-card-content">
            <h5 className="VentaEscombro-card-title">VentaEscombro</h5>
            <p className="VentaEscombro-card-text">
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

export default VentaEscombro;
