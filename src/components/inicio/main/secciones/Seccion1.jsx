import React from "react";
import Fila from "./Fila"; // Importa el componente Fila
import imagen from "./img/s.jpg";
import img1 from "./img/desmonte.png";
import img2 from "./img/retroexcavadora.png";
import img3 from "./img/retroexcavadora.png";
import img4 from "./img/desmonte.png";
import img5 from "./img/camion-tierra.png";
import img6 from "./img/retroexcavadora.png";
import img7 from "./img/excavadora.png";
import img8 from "./img/excavadora.png";

import "./Seccion.css"; // Asegúrate de importar los estilos

const Seccion1 = () => {
  const columnaIzquierda = [
    { title: "LIMPIEZA DE TERRENOS", img: img1, description: "La limpieza de terrenos en campos es un proceso esencial para preparar el suelo para la siembra o la construcción." },
    { title: "REPARACIÓN DE TAMBO", img: img2, description: "La reparación de tambo es una tarea crucial para mantener en buen estado las estructuras utilizadas en la actividad ganadera." },
    { title: "LIMPIEZA DE FEEDLOT", img: img3, description: "La limpieza de feedlot es fundamental para asegurar un ambiente saludable y seguro para el ganado." },
    { title: "DESMONTES", img: img4, description: "Los desmontes en campos son un proceso necesario para eliminar árboles, arbustos y vegetación no deseada que impidan el uso agrícola." },
  ];

  const columnaDerecha = [
    { title: "COMPACTACIÓN", img: img5, description: "La compactación del suelo es un proceso que consiste en aumentar la densidad del terreno mediante la aplicación de presión." },
    { title: "NIVELACIONES", img: img6, description: "Las nivelaciones en terrenos son un proceso clave para corregir las irregularidades del suelo y garantizar una superficie plana." },
    { title: "ZANJEO", img: img7, description: "El zanjeo es un proceso que consiste en excavar zanjas en el suelo para diversos fines, como drenaje, instalación de tuberías o cableado." },
    { title: "EXCAVACIONES", img: img8, description: "Las excavaciones son un proceso fundamental en la construcción y preparación de terrenos, que consiste en remover tierra para crear cimientos." },
  ];

  return (
    <div className="seccion-container">
      <div className="columna-izquierda">
        {columnaIzquierda.map((item, index) => (
          <Fila
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>

      <div className="columna-centro">
        <img src={imagen} alt="Imagen" className="imagen" />
      </div>

      <div className="columna-derecha">
        {columnaDerecha.map((item, index) => (
          <Fila
            key={index}
            title={item.title}
            img={item.img}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Seccion1;
