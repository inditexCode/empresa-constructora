import Compactacion from "./Compactacion"
import Demoliciones from "./Demoliciones";
import "./MenuMovSuelo.css"; // Archivo CSS específico para estilos de la tarjeta
import Nivelaciones from "./Nivelaciones";
import VentaEscombro from "./VentaEscombro";
import VentaTierra from "./VentaTierra";
import Zanjeo from "./Zanjeo";
import Carousel from "../agroServicios/carousel/carousel";
import Telefono from "../telefono/Telefono";

const MenuMovSuelo = () => {

    return (
        <>
        <div className="contenedo-p">
        <Telefono/>
        <Carousel />
        <div className="container">
        <h1>COMPACTACIÓN</h1>
            <Compactacion />
            <h1>DEMOLICIONES</h1>
            <Demoliciones/>
            <h1>NIVELACIONES</h1>
            <Nivelaciones/>
            <h1>VENTA DE ESCOMBROS</h1>
            <VentaEscombro/>
            <h1>VENTA DE TIERRA</h1>
            <VentaTierra/>
            <h1>ZANJEO</h1>
            <Zanjeo/>
        </div>
        </div>
        </>
    )
}
export default MenuMovSuelo