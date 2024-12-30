import React from "react";
import "./Fila.css"; // Asegúrate de importar los estilos

const Fila = ({ title, img, description }) => {
  return (
    <div className="fila">
      <h3>{title}</h3>
      <div className="contenido">
        <img src={img} alt={title} className="icon" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Fila;
