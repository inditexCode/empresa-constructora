import React from "react";
import Telefono from "../telefono/Telefono";
import ArregloTanques from "./ArregloTanques";
import Caminos from "./Caminos";
import Desmonte from "./Desmonte";
import Feedlot from "./Feedlot";
import LimpiezaTerrenos from "./LimpiezaTerrenos";
import ReparacionTambo from "./ReparacionTambo";
import "./MenuAgroServicios.css"; // Archivo CSS específico para estilos de la tarjeta
import Carousel from "./carousel/carousel";
import imgF from "./img/img-f.jpg"; // Asegúrate de importar la imagen correctamente

const MenuAgroServicios = () => {
  return (
    <div className="contenedor-principal">
      <Carousel />
      <Telefono />

      <div className="container">
        {/* Componente Telefono reutilizable */}
        <div className="row">
          <h1>Arreglo de Tanques</h1>
          <ArregloTanques />
          <h1>Caminos</h1>
          <Caminos />
          <h1>Desmonte</h1>
          <Desmonte />
          <h1>Feedlot</h1>
          <Feedlot />
          <h1>Limpieza de Terrenos</h1>
          <LimpiezaTerrenos />
          <h1>Reparación de Tambo</h1>
          <ReparacionTambo />
        </div>
      </div>
    </div>
  );
};

export default MenuAgroServicios;
