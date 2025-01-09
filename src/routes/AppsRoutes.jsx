import React from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "../components/inicio/Inicio";
import MenuAgroServicios from "../components/agroServicios/MenuAgroServicios"; // Importar MenuAgroServicios
import Contacto from "../components/Contacto/Contactos";
// Eliminar rutas individuales para los servicios de Movimientos de Suelo
//import Compactacion from "../components/movSuelo/Compactacion";
//import Demoliciones from "../components/movSuelo/Demoliciones";
//import Nivelaciones from "../components/movSuelo/Nivelaciones";
//import VentaEscombro from "../components/movSuelo/VentaEscombro";
//import VentaTierra from "../components/movSuelo/VentaTierra";
//import Zanjeo from "../components/movSuelo/Zanjeo";
import TrabajosRealizados from "../components/proyectos/TrabajosRealizados";
// Importar el componente que organiza todos los servicios de Movimientos de Suelo
import MenuMovSuelo from "../components/movSuelo/MenuMovSuelo"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/agroservicios" element={<MenuAgroServicios />} />
      <Route path="/trabajos-realizados" element={<TrabajosRealizados />} />
      <Route path="/contacto" element={<Contacto />} />
      
      {/* Rutas simplificadas que ahora llevan al componente general MenuMovSuelo */}
      <Route path="/movimientos-de-suelo" element={<MenuMovSuelo />} /> {/* Ruta para MenuMovSuelo */}
    </Routes>
  );
};

export default AppRoutes;
