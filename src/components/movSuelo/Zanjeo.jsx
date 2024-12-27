import React from "react";
import img5 from "./img/5.png";
import "./Zanjeo.css"; // Archivo CSS específico para estilos de la tarjeta

const Zanjeo = () => {
  return (
    <>
      {/* Tarjeta */}
      <div className="Zanjeo-card-container">
        <div className="Zanjeo-card-row">
          <div className="Zanjeo-card-image">
            <img src={img5} alt="Tanque" />
          </div>
          <div className="Zanjeo-card-content">
            <h5 className="Zanjeo-card-title">Zanjeo</h5>
            <p className="Zanjeo-card-text">
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

export default Zanjeo;
