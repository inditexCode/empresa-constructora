import React from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'; // Importa el ícono de Material UI
import Seccion1 from "./secciones/Seccion1";
import "./Main.css"; // Asegúrate de importar los estilos
import Seccion2 from "./secciones/Seccion2";
import Seccion3 from "./secciones/Seccion3";
import Mapa from "../../mapa/Mapa";
import Telefono from "../../telefono/Telefono";
import Seccion4 from "./secciones/Seccion4";
import MenuImg from "./secciones/seccion-galeria-img/MenuImg";

const Main = () => {
  // Función para desplazar hacia el principio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="contenedor-main">
        <Seccion1 />
        <MenuImg />
        <Seccion2 />
        <Seccion3 />
        <div className="mapa">
          <Mapa />
        </div>
        <Seccion4 />
         {/* Flecha al final de la página */}
      <div className="scroll-to-top" onClick={scrollToTop}>
        <KeyboardDoubleArrowUpIcon style={{ fontSize: 80 }} />
      </div>
      </div>

     
    </>
  );
};

export default Main;
