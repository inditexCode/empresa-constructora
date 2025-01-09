// SeccionServicio.js
import React from 'react';
import './SeccionServicio.css'; // Asegúrate de tener los estilos correspondientes

const SeccionServicio = ({ titulo, imagen, contenido }) => {
  return (
    <div className="seccion-servicio">
      <div className="modulo-flex-arreglo">
        <div className="modulo-titulo-arreglo">
          <img src={imagen} alt={titulo} className="imagen-titulo-arreglo" />
        </div>
        <div className="modulo-separador-arreglo">
          <hr />
        </div>
        <div className="modulo-texto-arreglo">
          <div className="soporte-texto-arreglo">
            <h3 className='titulo_agroservicios'>{titulo}</h3>
            {contenido}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeccionServicio;
