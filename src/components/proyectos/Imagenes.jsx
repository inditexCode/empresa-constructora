import React from "react";
import "./Imagenes.css"; // Importamos los estilos de la galería

// Importa todas las imágenes
import img1 from "./img/1.webp";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/6.jpg";
import img6 from "./img/7.png";
import img7 from "./img/8.png";
import img8 from "./img/9.png";

const Imagenes = () => {
  // Creamos un arreglo con las rutas de las imágenes
  const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (

    <div className="contenedor_imaganes">
    <h3 className="titulo_imagenes">GALERIA DE IMAGENES</h3>
    <div className="galeria">
      {imagenes.map((img, index) => (
        <img key={index} src={img} alt={`Imagen ${index + 1}`} className="imagen" />
      ))}
    </div>
    </div>

   
  );
};

export default Imagenes;
