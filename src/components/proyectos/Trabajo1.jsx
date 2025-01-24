import React from "react";
import "./Trabajo1.css"; // Asegúrate de importar los estilos
import Imagenes from "./Imagenes";

// URLs de las imágenes en Cloudinary
const Trabajo1 = () => {
  // Creamos un arreglo con las URLs de las imágenes
  const imagenesTrabajo1 = [
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/ktyyatiupwoddb4expeq", 
      title: "Excavación", 
      description: "LLAMBÍ CAMPBELL - Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/jiijozkthvgxv98ls1pj", 
      title: "Colocación tubos", 
      description: "LAGUNA PAIVA - Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/naxjfxtozh1biarafare", 
      title: "Compactación suelo", 
      description: "LAGUNA PAIVA - Cancha de TENIS Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/mt0qqhakxgbpexer5c9u", 
      title: "Albañileria", 
      description: "IRIONDO - Comedero para animales Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/goxh0cdfap4cfn2b1kzc", 
      title: "Excavación", 
      description: "NELSON - Venta de tierra Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/nylzvv885khjhu3lexgh", 
      title: "Venta de tierra", 
      description: "LLAMBÍ CAMPBELL - Viajes de tierra Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/cz40iizihrfupannwi41", 
      title: "Zanjeo", 
      description: "LAGUNA PAIVA - Zanjeo y Limpieza Movimiento suelo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/agrocampo/ef45wj2kv6rbywnjtxoi", 
      title: "Nivelación", 
      description: "LAGUNA PAIVA - Cancha de TENIS Movimiento suelo" 
    },
  ];

  return (
    <>
      <div className="contenedor-trabajo1">
        <div className="modulo_flex">
          <div className="modulo_titulo">
            <h2 className="modulo_h1">TRABAJOS MOVIMIENTO DE SUELO</h2>
          </div>
          <div className="modulo_separador">
            <hr />
          </div>
          <div className="modulo_texto">
            <div className="soporte_texto">
              <h3>EXCAVACIÓN, ZANJEO, VIAJES DE TIERRA, NIVELACIÓN, COMPACTACIÓN, COLOCACIÓN DE TUBOS, ALBAÑILERIA</h3>
              <p>
              En nuestra empresa, nos especializamos en ofrecer servicios integrales de movimiento de suelos, 
              adaptándonos a las necesidades de cada cliente y garantizando resultados de alta calidad 
              con años de experiencia en el sector.
              </p>
              <ul>
                <li><span>Plazo pactado</span></li>
                <li>Calidad garantizada</li>
                <li>Precio ajustado</li>
              </ul>
              <p>
              Este compromiso constante con la eficiencia, la puntualidad y la excelencia nos ha posicionado como un referente en el sector.
               Cada obra que realizamos es una muestra de nuestro esfuerzo por superar las expectativas y cumplir con los más altos estándares.
              Si estás buscando una empresa confiable, con experiencia y dedicada a entregar resultados impecables, 
              ¡ <b>SOMOS TU MEJOR OPCIÓN</b> ! Confía en nosotros para llevar a cabo tus proyectos de movimiento de suelos con la calidad que mereces.
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
