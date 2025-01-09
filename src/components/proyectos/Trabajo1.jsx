import React from "react";
import "./Trabajo1.css"; // Asegúrate de importar los estilos
import Imagenes from "./Imagenes";

// Importa las imágenes específicas para este componente
import img1 from "./img/1.webp";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/6.jpg";
import img6 from "./img/7.png";
import img7 from "./img/8.png";
import img8 from "./img/9.png";

const Trabajo1 = () => {
  // Creamos un arreglo con las imágenes específicas para este trabajo
  const imagenesTrabajo1 = [
    { src: img1, title: "Excavación", description: "Descripción breve sobre Excavación 1" },
    { src: img2, title: "Excavación 2", description: "Descripción breve sobre Excavación 2" },
    { src: img3, title: "Zanjeo 1", description: "Descripción breve sobre Zanjeo 1" },
    { src: img4, title: "Zanjeo 2", description: "Descripción breve sobre Zanjeo 2" },
    { src: img5, title: "Viaje de Tierra 1", description: "Descripción breve sobre Viaje de Tierra 1" },
    { src: img6, title: "Nivelación 1", description: "Descripción breve sobre Nivelación 1" },
    { src: img7, title: "Compactación 1", description: "Descripción breve sobre Compactación 1" },
    { src: img8, title: "Compactación 2", description: "Descripción breve sobre Compactación 2" },
  ];

  return (
    <>
      <div className="contenedor-trabajo1">
        <div className="modulo_flex">
          <div className="modulo_titulo">
            <h2 className="modulo_h1">TRABAJO MOVIMIENTO DE SUELO</h2>
          </div>
          <div className="modulo_separador">
            <hr />
          </div>
          <div className="modulo_texto">
            <div className="soporte_texto">
              <h3>EXCAVACIÓN, ZANJEO, VIAJES DE TIERRA, NIVELACIÓN Y COMPACTACIÓN</h3>
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
      {/* Le pasamos las imágenes al componente Imagenes */}
      <Imagenes imagenes={imagenesTrabajo1} />
    </>
  );
};

export default Trabajo1;
