import React from "react";
import "./Trabajo1.css"; // Asegúrate de importar los estilos
import Imagenes from "./imagenes";

const Trabajo1 = () => {
  return (
    <>
    <div className="contenedor-trabajo1">
      <div className="modulo_flex">
        <div className="modulo_titulo">
          <h2>Este es un trabajo hecho</h2>
        </div>
        <div className="modulo_separador">
          <hr />
        </div>
        <div className="modulo_texto">
          <div className="soporte_texto">
            <h3>Veremos si es este</h3>
            <p>
              En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente. 
              Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos 
              superados para cumplir con los plazos y los requisitos establecidos.
            </p>
            <ul>
              <li><span>Plazo pactado</span></li>
              <li>Calidad garantizada</li>
              <li>Precio ajustado</li>
            </ul>
            <p>
              Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno 
              de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Imagenes/>
    
    </>
    
  );
};

export default Trabajo1;
