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
     <p>Dirección: 25 de Mayo 072 <br />Ciudad: Nelson - Santa Fe -3032
       <br />  Teléfono: 342-4869824
     </p>
    </div>
  );
};

export default InfoPanel;

