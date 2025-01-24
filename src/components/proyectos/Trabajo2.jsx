import React from "react";
import "./Trabajo2.css"; // Asegúrate de importar los estilos
import Imagenes from "./Imagenes";

// Importa las imágenes específicas para este componente
import imgA from "./img-campo/campo1.jpg";
import imgB from "./img-campo/campo2.jpg";
import imgC from "./img-campo/campo3.jpg";
import imgD from "./img-campo/campo4.jpg";
import imgE from "./img-campo/campo5.JPEG";
import imgF from "./img-campo/campo6.jpg";
import imgH from "./img-campo/campo7.jpg";
import imgI from "./img-campo/campo8.jpg";

const Trabajo2 = () => {
  // Creamos un arreglo con las imágenes específicas para este trabajo
  const imagenesTrabajo2 = [
    { src: imgA, title: "Desmonte", description: "MANUCHO - Desmonte y limpieza de campo" },
    { src: imgB, title: "Desmonte", description: "RINCON DE ÁVILA - Desmonte y limpieza de campo" },
    { src: imgC, title: "Limpieza de Terreno ", description: "CULULÚ - Limpieza y demolición" },
    { src: imgD, title: "Feedlot", description: "LLAMBÍ CAMPBELL - Excavación, limpieza, compactación y acopio de tierra" },
    { src: imgE, title: "Tambos", description: "LLAMBÍ CAMPBELL - Limpieza de tambo y relleno con tierra nueva" },
    { src: imgF, title: "Tanques de agua", description: "RINCON DE ÁVILA - Excavación, limpieza y rellenos" },
    { src: imgH, title: "Zanjeo", description: "LAGUNA PAIVA - Zanjeo, para sacar el agua de una laguna" },
    { src: imgI, title: "Acopio de tierra", description: "NELSON - Acopio de tierra y defensa " },
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
