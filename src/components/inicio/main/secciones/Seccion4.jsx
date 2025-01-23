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
          <hr className="sep-seccion4" />
        </div>
        <div className="section-text">
          <div className="text-content">
            <p>
              Somos una empresa dedicada a proporcionar soluciones innovadoras y
              personalizadas para el sector agrícola, movimiento de suelos
               y para nuestros clientes. Somos profesionales apasionados
               y comprometidos, trabajamos en conjunto para garantizar servicios de alta 
               calidad, adaptados a las necesidades específicas de cada cliente.
            Nos enfocamos en cumplir con los siguientes pilares fundamentales:
            </p>
            <ul>
              <li><span>Plazo pactado</span></li>
              <li>Calidad requerida</li>
              <li>Precio estipulado</li>
            </ul>
            <p>
            Brindamos asesoramiento técnico integral para satisfacer las exigencias
           del sector, asegurando que cada proyecto se entregue conforme a los tiempos
           y pautas establecidos. Nuestra misión es ser un socio estratégico confiable,
           ayudando a nuestros clientes a alcanzar sus objetivos con soluciones eficientes y efectivas.
            </p>
            <p>
              Este estilo nos permite, desde hace más de 10 años, enorgullecernos
              de un crecimiento sostenido reflejado en numerosos clientes que nos
              siguen eligiendo como un verdadero socio estratégico.
            </p>
            <p>
              Nuestra empresa basa su generación de confianza en la calidad de sus
              maquinarias y en la eficiencia de sus servicios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seccion4;
