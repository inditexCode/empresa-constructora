import React from "react";
import "./Seccion4.css";
import img from "./img/img-retro.jpg"; // Importa tus imágenes

const Seccion4 = () => {
  return (
    <div className="contenedor-seccion4">

      <div className="flex-container">
        <div className="section-title">
          <h2>¿Quiénes Somos?</h2>
        </div>
        <div className="section-separator">
          <hr />
        </div>
        <div className="section-text">
          <div className="text-content">
            <p>
              Somos una empresa dedicada a proporcionar soluciones innovadoras y
              personalizadas para nuestros clientes. Nuestro equipo está formado
              por profesionales apasionados que trabajan juntos para crear
              productos de alta calidad.
            </p>
            <ul>
              <li><span>Plazo pactado</span></li>
              <li>Calidad requerida</li>
              <li>Precio estipulado</li>
            </ul>
            <p>
              Brindando a nuestros clientes asesoramiento técnico para resolver las exigencias a la medida de sus necesidades llegando siempre 
              al objetivo final: entregar la obra cumpliendo tiempos y pautas establecidas.  
            </p>
            <p>
              Este estilo nos permite desde hace más de 15 años enorgullecernos de un crecimiento sostenido reflejado en numerosos clientes que 
              nos siguen eligiendo como un verdadero socio estratégico.   
            </p>
            <p>
              Nuestra empresa basa su generación de confianza en la calidad de sus maquinarias y en la eficiencia de sus servicios.
            </p>
          </div>
        </div>
        <div className="section-photo">
          <img src={ img } alt="Imagen descriptiva"  className="responsive-img"/>
        </div>
      </div>

    </div>
  );
};

export default Seccion4;
