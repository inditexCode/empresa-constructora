// src/routes/Routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";

// Importar los componentes de la aplicación
import Inicio from "../components/inicio/Inicio";
import Caminos from "../components/agroServicios/Caminos";
import Desmonte from "../components/agroServicios/Desmonte";
import Feedlot from "../components/agroServicios/Feedlot";
import LimpiezaTerreno from "../components/agroServicios/LimpiezaTerrenos";
import ReparacionTambo from "../components/agroServicios/ReparacionTambo";
import Contacto from "../components/contacto/Contacto";
import Compactacion from "../components/movSuelo/Compactacion";
import Demoliciones from "../components/movSuelo/Demoliciones";
import Nivelaciones from "../components/movSuelo/Nivelaciones";
import VentaEscombro from "../components/movSuelo/VentaEscombro";
import VentaTierra from "../components/movSuelo/VentaTierra";
import Zanjeo from "../components/movSuelo/Zanjeo";
import TrabajosRealizados from "../components/proyectos/TrabajosRealizados";
import HistoriaEmpresa from "../components/sobreNosotros/HistoriaEmpresa";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Rutas principales de la aplicación */}
      <Route path="/" element={<Inicio />} />

      {/* Rutas para los agroServicios */}
      <Route path="/caminos" element={<Caminos />} />
      <Route path="/desmonte" element={<Desmonte />} />
      <Route path="/feedlot" element={<Feedlot />} />
      <Route path="/limpieza-terreno" element={<LimpiezaTerreno />} />
      <Route path="/reparacion-tambo" element={<ReparacionTambo />} />

      {/* Rutas para Movimientos de Suelo */}
      <Route path="/compactacion" element={<Compactacion />} />
      <Route path="/demoliciones" element={<Demoliciones />} />
      <Route path="/nivelaciones" element={<Nivelaciones />} />
      <Route path="/venta-escombro" element={<VentaEscombro />} />
      <Route path="/venta-tierra" element={<VentaTierra />} />
      <Route path="/zanjeo" element={<Zanjeo />} />

      {/* Rutas para Proyectos */}
      <Route path="/trabajos-realizados" element={<TrabajosRealizados />} />

      {/* Ruta para el componente de contacto */}
      <Route path="/contacto" element={<Contacto />} />

      {/* Ruta sobre nosotros */}
      <Route path="/historia-empresa" element={<HistoriaEmpresa />} />
    </Routes>
  );
};

export default AppRoutes;
