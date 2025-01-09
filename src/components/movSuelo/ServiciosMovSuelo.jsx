import React from 'react';
import './ServiciosMovSuelo.css'; // Asegúrate de tener los estilos correspondientes

const ServiciosMovSuelo = ({ titulo, imagen, contenido }) => {
  return (
    <div className="servicio-individual">
      <div className="modulo-flex-arreglo-servicio">
        <div className="modulo-titulo-arreglo-servicio">
          <img src={imagen} alt={titulo} className="imagen-titulo-arreglo-servicio" />
        </div>
        <div className="modulo-separador-arreglo-servicio">
          <hr />
        </div>
        <div className="modulo-texto-arreglo-servicio">
          <div className="soporte-texto-arreglo-servicio">
            <h3 className="titulo-servicio">{titulo}</h3>
            {contenido}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiciosMovSuelo;
