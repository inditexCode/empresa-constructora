import React from "react";
import "./Fila.css";

const Fila = ({ title, img, description }) => {
  return (
    <div className="icon-container">
      <img src={img} alt={title} className="icon" />
      <div className="description-box">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Fila;
