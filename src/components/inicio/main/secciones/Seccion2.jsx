import React from "react";
import "./Seccion2.css"; // Asegúrate de importar los estilos
import Icon1 from "./img/reloj.png"; // Importa tus imágenes
import Icon2 from "./img/retro.png";
import Icon3 from "./img/exc.png";

const Seccion2 = () => {
  return (
    <div className="seccion2-container">
      <div className="icon-row">
        <div className="icon-item">
          <img src={Icon1} alt="Icono 1" className="icon-image" />
          <p className="icon-title">10 AÑOS JUNTOS</p>
        </div>
        <div className="icon-item">
          <img src={Icon2} alt="Icono 2" className="icon-image" />
          <p className="icon-title">AGROSERVICIOS</p>
        </div>
        <div className="icon-item">
          <img src={Icon3} alt="Icono 3" className="icon-image" />
          <p className="icon-title">MOVIMIENTO DE SUELO</p>
        </div>
      </div>
    </div>
  );
};

export default Seccion2;
