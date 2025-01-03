// Componente Inicio

import Seccion1 from "./secciones/Seccion1";
import "./Main.css"; // Asegúrate de importar los estilos
import Seccion2 from "./secciones/Seccion2";
import Seccion3 from "./secciones/Seccion3";
import Mapa from "../../mapa/Mapa";
import Telefono from "../../telefono/Telefono";


const Main = () => {
    return (
      <>
      <div className="contenedor-main">
        <div className="title">
        <h4>SOMOS ESPECIALISTAS</h4>
        <h2>NUESTROS SERVICIOS</h2>
        <p className="main-p">ESTOS SON ALGUNOS DE LOS SERVICIOS QUE BRINDAMOS DE MOVIMIENTO DE SUELO Y AGROSERVICIOS</p>
        </div>
        <Seccion1/>
        <Seccion2 />
        <Seccion3/>
        <div className="mapa">
          <h2 className="title-mapa">PÓDES ENCONTRARNOS</h2>
        <Mapa/>
        </div>
      </div>
      </>

    );
  };
  
  export default Main;
  