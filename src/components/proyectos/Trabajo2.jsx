import React from "react";
import "./Trabajo2.css"; // Asegúrate de importar los estilos
import Imagenes from "./Imagenes";

// URLs de las imágenes en Cloudinary
const Trabajo2 = () => {
  // Creamos un arreglo con las URLs de las imágenes
  const imagenesTrabajo2 = [
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/alsbopt9inhf3q9zsdul", 
      title: "Desmonte", 
      description: "MANUCHO - Desmonte y limpieza de campo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/wm2qvnlpeg3qa6dunlvh", 
      title: "Desmonte", 
      description: "RINCON DE ÁVILA - Desmonte y limpieza de campo" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/qoeymcjbn2mlttn49c7d", 
      title: "Limpieza de Terreno", 
      description: "CULULÚ - Limpieza y demolición" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/qch3g53caicvfk3tt6zn", 
      title: "Feedlot", 
      description: "LLAMBÍ CAMPBELL - Excavación, limpieza, compactación y acopio de tierra" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/v2rlxa3ohx3haaiwybwo", 
      title: "Tambos", 
      description: "LLAMBÍ CAMPBELL - Limpieza de tambo y relleno con tierra nueva" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/mo5rimngbrqufyoguidd", 
      title: "Tanques de agua", 
      description: "RINCON DE ÁVILA - Excavación, limpieza y rellenos" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/xfxeyeyttr9dywmpimk0", 
      title: "Zanjeo", 
      description: "LAGUNA PAIVA - Zanjeo, para sacar el agua de una laguna" 
    },
    { 
      src: "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/trabajosrealizados/oifxz3kdjjveqjil1exu", 
      title: "Acopio de tierra", 
      description: "NELSON - Acopio de tierra y defensa" 
    },
  ];

  return (
    <>
      <div className="contenedor-trabajo_2">
        <div className="modulo_flex_2">
          <div className="modulo_titulo_2">
            <h2 className="modulo_h2">TRABAJO DE AGROSERVICIOS EN CAMPO </h2>
          </div>
          <div className="modulo_separador_2">
            <hr />
          </div>
          <div className="modulo_texto_2">
            <div className="soporte_texto_2">
              <h3>DESMONTES, LIMPIEZA DE TERRENOS Y CAMPOS, ZANJEOS, LIMPIEZA DE FEEDLOT, LIMPIEZA DE TAMBOS, ARREGLOS DE TANQUES DE AGUA, ARREGLOS DE CAMINOS, ACOPIO DE TIERRA</h3>
              <p>
                En nuestra empresa, nos especializamos en ofrecer soluciones integrales para el campo y mantenimiento de terrenos,
                adaptándonos a las necesidades específicas de cada cliente y garantizando resultados de alta calidad respaldados por años
                de experiencia en el sector.
              </p>
              <ul>
                <li><span>Plazo pactado</span></li>
                <li>Calidad garantizada</li>
                <li>Precio ajustado</li>
              </ul>
              <p>
                Realizamos limpieza y retiro de vegetación, rocas y otros obstáculos del terreno, 
                preparando el área para proyectos de construcción, siembra o cualquier otro uso.
                Desmalezado, eliminación de residuos y nivelación de terrenos para facilitar su 
                aprovechamiento en actividades agrícolas, ganaderas o industriales, asegurando un espacio limpio y funcional.
                Efectuamos excavaciones precisas para la instalación de tuberías, drenajes, cables subterráneos o cualquier otra necesidad.
                Nos encargamos de mantener los corrales en óptimas condiciones, removiendo residuos y asegurando un ambiente limpio y saludable para el ganado.
                Rehabilitamos caminos rurales, accesos y vías internas, nos encargamos de recolectar, transportar y almacenar tierra para diferentes usos, ya sea para nivelación de terrenos, rellenos o proyectos agrícolas y de construcción.
                Si buscas una empresa confiable, con experiencia y dedicada a entregar resultados impecables, ¡ <b>SOMOS TU MEJOR OPCIÓN</b> !
                Confía en nosotros para llevar a cabo tus proyectos de manejo de terrenos con la calidad y profesionalismo que mereces.
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
