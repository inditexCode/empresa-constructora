import React from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "../components/inicio/Inicio";
import MenuAgroServicios from "../components/agroServicios/MenuAgroServicios"; // Importar MenuAgroServicios
import Caminos from "../components/agroServicios/Caminos";
import Desmonte from "../components/agroServicios/Desmonte";
import Feedlot from "../components/agroServicios/Feedlot";
import LimpiezaTerreno from "../components/agroServicios/LimpiezaTerrenos";
import ReparacionTambo from "../components/agroServicios/ReparacionTambo";
import Contacto from "../components/Contacto/Contactos";
import Compactacion from "../components/movSuelo/Compactacion";
import Demoliciones from "../components/movSuelo/Demoliciones";
import Nivelaciones from "../components/movSuelo/Nivelaciones";
import VentaEscombro from "../components/movSuelo/VentaEscombro";
import VentaTierra from "../components/movSuelo/VentaTierra";
import Zanjeo from "../components/movSuelo/Zanjeo";
import TrabajosRealizados from "../components/proyectos/TrabajosRealizados";
import HistoriaEmpresa from "../components/sobreNosotros/HistoriaEmpresa";
import MenuMovSuelo from "../components/movSuelo/MenuMovSuelo"; // Importar MenuMovSuelo

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/agroservicios" element={<MenuAgroServicios />} />
      <Route path="/caminos" element={<Caminos />} />
      <Route path="/desmonte" element={<Desmonte />} />
      <Route path="/feedlot" element={<Feedlot />} />
      <Route path="/limpieza-terreno" element={<LimpiezaTerreno />} />
      <Route path="/reparacion-tambo" element={<ReparacionTambo />} />
      <Route path="/compactacion" element={<Compactacion />} />
      <Route path="/demoliciones" element={<Demoliciones />} />
      <Route path="/nivelaciones" element={<Nivelaciones />} />
      <Route path="/venta-escombro" element={<VentaEscombro />} />
      <Route path="/venta-tierra" element={<VentaTierra />} />
      <Route path="/zanjeo" element={<Zanjeo />} />
      <Route path="/trabajos-realizados" element={<TrabajosRealizados />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/historia-empresa" element={<HistoriaEmpresa />} />
      <Route path="/movimientos-de-suelo" element={<MenuMovSuelo />} /> {/* Ruta para MenuMovSuelo */}
    </Routes>
  );
};

export default AppRoutes;
