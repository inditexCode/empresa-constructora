import React from "react";
import { Link } from "react-router-dom";  // Importamos el componente Link
import img1 from "./img/camiontierra.webp";
import img2 from "./img/vacas.jpg";
import img3 from "./img/maqui.jpg";
import img4 from "./img/maqui2.jpg";
import "./Header.css"; // Asegúrate de tener el archivo CSS para los estilos

const Header = () => {
  // Definir las imágenes, títulos y rutas de cada imagen
  const images = [
    { 
      src: img1, 
      title: "Más de 10 años brindando servicios de excelente calidad", 
      buttonText: "Ver más", 
      link: "/agroservicios"  // Ruta para el primer botón
    },
    { 
      src: img2, 
      title: "Conoce todos nuestros servicios", 
      buttonText: "Descubre más", 
      link: "/movimientos-de-suelo"  // Ruta para el segundo botón
    },
    { 
      src: img3, 
      title: "Contactanos y sacate las dudas", 
      buttonText: "Nuestro trabajos", 
      link: "/trabajos-realizados"  // Ruta para el tercer botón
    },
    { 
      src: img4, 
      title: "Alquileres de Máquinas, venta de tierra y escombros", 
      buttonText: "Contactanos", 
      link: "/contacto"  // Ruta para el tercer botón
    }
  ];

  // Función para renderizar las imágenes del carousel
  const renderCarouselItems = () => {
    return images.map((image, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={index}
        data-bs-interval="5000"
      >
        <img src={image.src} className="d-block w-100" alt={`carousel-item-${index + 1}`} />
        <div className="carousel-caption d-none d-md-block">
          <h5>{image.title}</h5>
          {/* Usamos Link para la navegación */}
          <Link to={image.link} className="btn">
            {image.buttonText}
          </Link>
        </div>
      </div>
    ));
  };

  return (
    <div className="carousel-container">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {renderCarouselItems()}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
