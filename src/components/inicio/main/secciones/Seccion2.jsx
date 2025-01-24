import React from "react";
import "./Seccion2.css"; // Asegúrate de importar los estilos

const Seccion2 = () => {
  return (
    <div className="seccion2-container">
      <div className="icon-row">
        <div className="icon-item">
          {/* Reemplazo del ícono de reloj con la URL */}
          <img 
            src="https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/phjbgear6p1vziq4nec3" 
            alt="Icono 1" 
            className="icon-image" 
          />
          <p className="icon-title">10 AÑOS JUNTOS</p>
        </div>
        <div className="icon-item">
          {/* Reemplazo del ícono retro con la URL */}
          <img 
            src="https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/b6hirbr3fnshdtdaerj3" 
            alt="Icono 2" 
            className="icon-image" 
          />
          <p className="icon-title">AGROSERVICIOS</p>
        </div>
        <div className="icon-item">
          {/* Reemplazo del ícono exc con la URL */}
          <img 
            src="https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/oekptdnizxturej5rsuf" 
            alt="Icono 3" 
            className="icon-image" 
          />
          <p className="icon-title">MOVIMIENTO DE SUELO</p>
        </div>
      </div>
    </div>
  );
};

export default Seccion2;
