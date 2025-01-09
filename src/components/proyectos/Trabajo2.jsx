import React from "react";
import "./Trabajo2.css"; // Asegúrate de importar los estilos
import Imagenes from "./Imagenes";

// Importa las imágenes específicas para este componente
import imgA from "./img-campo/campo1.jpg";
import imgB from "./img-campo/campo2.jpg";
import imgC from "./img-campo/campo3.jpeg";
import imgD from "./img-campo/campo4.jpeg";
import imgE from "./img-campo/campo5.jpg";
import imgF from "./img-campo/campo6.webp";
import imgH from "./img-campo/campo7.webp";
import imgI from "./img-campo/campo5.jpg";

const Trabajo2 = () => {
  // Creamos un arreglo con las imágenes específicas para este trabajo
  const imagenesTrabajo2 = [
    { src: imgA, title: "Desmonte 1", description: "Descripción breve sobre Desmonte 1" },
    { src: imgB, title: "Desmonte 2", description: "Descripción breve sobre Desmonte 2" },
    { src: imgC, title: "Limpieza de Terreno 1", description: "Descripción breve sobre Limpieza de Terreno 1" },
    { src: imgD, title: "Limpieza de Terreno 2", description: "Descripción breve sobre Limpieza de Terreno 2" },
    { src: imgE, title: "Campo 1", description: "Descripción breve sobre Campo 1" },
    { src: imgF, title: "Campo 2", description: "Descripción breve sobre Campo 2" },
    { src: imgH, title: "Campo 3", description: "Descripción breve sobre Campo 3" },
    { src: imgI, title: "Campo 4", description: "Descripción breve sobre Campo 4" },
  ];

  return (
    <>
      <div className="contenedor-trabajo_2">
        <div className="modulo_flex_2">
          <div className="modulo_titulo_2">
            <h2 className="modulo_h2">TRABAJO DE AGROSERVICIOS EN CAMPO <br /> <b>LLAMBI CAMPBELL</b></h2>
          </div>
          <div className="modulo_separador_2">
            <hr />
          </div>
          <div className="modulo_texto_2">
            <div className="soporte_texto_2">
              <h3>DESMONTE, LIMPIEZA DE TERRENOS Y CAMPO</h3>
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
      <Imagenes imagenes={imagenesTrabajo2} />
    </>
  );
};

export default Trabajo2;
