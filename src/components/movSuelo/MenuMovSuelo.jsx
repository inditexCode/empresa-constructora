import React from 'react';
import ServiciosMovSuelo from './ServiciosMovSuelo'; // Importamos el componente reutilizable
import imgCompactacion from './img/1.jpg'; // Ruta de imagen
import imgDemoliciones from './img/2.png'; // Ruta de imagen
import imgNivelaciones from './img/3.png'; // Ruta de imagen
import imgVentaEscombro from './img/4.jpg'; // Ruta de imagen
import imgVentaTierra from './img/5.png'; // Ruta de imagen
import imgZanjeo from './img/5.png'; // Ruta de imagen
import imagen from './img/maqui.jpg'; // Ruta de imagen

import "./MenuMovSuelo.css"; // Estilos generales para el menú
import Footer from "../inicio/footer/Footer";
import TextRating from '../agroServicios/TextRating'; // Importa el componente de calificación


const MenuMovSuelo = () => {
  return (
    <>
      <div className="menu-mov-suelo-container">
        <img className='imagen-contacto-mov-suelo' src={ imagen  } alt="Fondo imagen" />

        <div className="menu-mov-suelo-content">
          <div className="menu-mov-suelo-row">
            <ServiciosMovSuelo
              titulo="COMPACTACIÓN"
              imagen={imgCompactacion}
              contenido={
                <>
                  <p>Detalles y servicios de compactación para diferentes tipos de terrenos, con maquinaria especializada.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Plazo pactado</span></li>
                    <li className="menu-mov-suelo-list">Calidad garantizada</li>
                    <li className="menu-mov-suelo-list">Precio ajustado</li>
                  </ul>
                  <p>Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={4.5} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="DEMOLICIONES"
              imagen={imgDemoliciones}
              contenido={
                <>
                  <p>Realizamos demolición controlada de estructuras, garantizando seguridad y cumplimiento de plazos.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Plazo pactado</span></li>
                    <li className="menu-mov-suelo-list">Calidad garantizada</li>
                    <li className="menu-mov-suelo-list">Precio ajustado</li>
                  </ul>
                  <p>Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={4} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="NIVELACIONES"
              imagen={imgNivelaciones}
              contenido={
                <>
                  <p>Servicio de nivelación de terrenos para la preparación de obras de construcción o agricultura.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Plazo pactado</span></li>
                    <li className="menu-mov-suelo-list">Calidad garantizada</li>
                    <li className="menu-mov-suelo-list">Precio ajustado</li>
                  </ul>
                  <p>Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={3} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="VENTA DE ESCOMBROS"
              imagen={imgVentaEscombro}
              contenido={
                <>
                  <p>Venta de escombros para su reutilización en diferentes proyectos de construcción y obra pública.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Plazo pactado</span></li>
                    <li className="menu-mov-suelo-list">Calidad garantizada</li>
                    <li className="menu-mov-suelo-list">Precio ajustado</li>
                  </ul>
                  <p>Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={3.5} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="VENTA DE TIERRA"
              imagen={imgVentaTierra}
              contenido={
                <>
                  <p>Venta de tierra de alta calidad para construcción, jardinería o proyectos agrícolas.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Plazo pactado</span></li>
                    <li className="menu-mov-suelo-list">Calidad garantizada</li>
                    <li className="menu-mov-suelo-list">Precio ajustado</li>
                  </ul>
                  <p>Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={4} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="ZANJEO"
              imagen={imgZanjeo}
              contenido={
                <>
                  <p>Realizamos zanjeo para obras de infraestructura, drenaje y otros proyectos especializados.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Plazo pactado</span></li>
                    <li className="menu-mov-suelo-list">Calidad garantizada</li>
                    <li className="menu-mov-suelo-list">Precio ajustado</li>
                  </ul>
                  <p>Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={4.5} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuMovSuelo;
