// src/App.jsx

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navBar/NavBar"; // Ruta correcta para el Navbar
import AppRoutes from "./routes/AppsRoutes"; // Importa las rutas desde el archivo Routes.js

const App = () => (
  <Router>
    <Navbar /> {/* Este es el Navbar, debería estar visible en todas las páginas */}
    <AppRoutes /> {/* Componente que contiene todas las rutas */}
  </Router>
);

export default App;
