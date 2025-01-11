// Telefono.js
import React from "react";
import "./Telefono.css"; // Archivo CSS específico para estilos de la tarjeta
import whatsappIcon from "./img/Whatsapp.png"; // Importa la imagen del icono de WhatsApp

const Telefono = () => {
  return (
    <div className="telefono-container">
      {/* Sección con enlace para llamar por teléfono */}
      <h3 className="telefono-heading">
        Teléfono: {" "}
        <i className="bi bi-telephone-forward-fill"></i> {/* Icono de teléfono */}
        <a href="tel:+5493424869824" className="contact-link">
          3424869824
        </a>
      </h3>

      {/* Sección con enlace para enviar WhatsApp */}
      <h3 className="telefono-whatsapp">
         {" "}
        <a
          href="https://wa.me/+5493424869824"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp Icon"
            className="whatsapp-icon"
          />
        </a>
      </h3>
    </div>
  );
};

export default Telefono;
