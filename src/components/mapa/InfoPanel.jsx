import React from 'react';
import './InfoPanel.css';  // Estilos para el panel

const InfoPanel = () => {
  return (
    <div className="info-panel">
      <div className="contenedor_Cartel">
        <h4>CANANI SANCHEZ</h4>
        {/* Reemplazo de la imagen local por la URL */}
        <img 
          src="https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/oekptdnizxturej5rsuf" 
          alt="icono" 
          className='icono_cartel' 
        />
      </div>
      <p>
        25 de Mayo 072, Nelson - Santa Fe 3032 - Tel: 342-4869824 - Movimiento de suelo y Agroservicios
      </p>
    </div>
  );
};

export default InfoPanel;
