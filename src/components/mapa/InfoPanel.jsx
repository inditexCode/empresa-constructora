import React from 'react';
import './InfoPanel.css';  // Estilos para el panel
import icono from "../inicio/main/secciones/img/excavadora.png";

const InfoPanel = () => {
  return (
    <div className="info-panel">
        <div className="contenedor_Cartel">
        <h4>CANANI SANCHEZ</h4>
        <img src={ icono } alt="icono" className='icono_cartel' />
        </div>
     <p>25 de Mayo 072, Nelson - Santa Fe 3032 - Tel: 342-4869824
      - Movimiento de suelo y Agroservicios
     </p>
    </div>
  );
};

export default InfoPanel;

