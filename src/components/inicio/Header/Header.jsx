import React from "react";
import img1 from "./img/imgA.jpg";
import img2 from "./img/imgB.png";
import img3 from "./img/imgC.jpg";
import img4 from "./img/imgC.jpg";
import "./Header.css"; // Asegúrate de tener el archivo CSS para los estilos

const Header = () => {
  // Definir las imágenes
  const images = [img1, img2, img3, img4];
  
  // Función para renderizar las imágenes del carousel
  const renderCarouselItems = () => {
    return images.map((image, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={index}
        data-bs-interval="2000"
      >
        <img src={image} className="d-block w-100" alt={`carousel-item-${index + 1}`} />
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
