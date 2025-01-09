import React from "react";
import SeccionServicio from "./SeccionServicio"; // Importamos el componente reutilizable
import Carousel from "./carousel/carousel";
import Telefono from "../telefono/Telefono";
import imgArregloTanques from "./img/1.jpg";
import imgCaminos from "./img/tanque1.jpg";
import imgDesmonte from "./img/tanque2.jpg";
import imgFeedlot from "./img/tanque3.jpg";
import imgLimpiezaTerrenos from "./img/tanque4.jpg";
import imgReparacionTambo from "./img/tanque5.jpg";
import "./MenuAgroServicios.css";
import Footer from "../inicio/footer/Footer";
import TextRating from './TextRating'; // Importa el componente de calificación

const MenuAgroServicios = () => {
  return (
    <>
      <div className="contenedor-principal">
        <Telefono />
        <Carousel />
        <div className="container">
          <div className="row">
            <SeccionServicio
              titulo="ARREGLOS DE TANQUES"
              imagen={imgArregloTanques}
              contenido={
                <>
                  <p>
                    En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente.
                    Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos
                    superados para cumplir con los plazos y los requisitos establecidos.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Plazo pactado</span></li>
                    <li className="LISTA">Calidad garantizada</li>
                    <li className="LISTA">Precio ajustado</li>
                  </ul>
                  <p>
                    Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno
                    de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
                  </p>
                  <div className="estrellas">
                    <TextRating ratingValue={4.5} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <SeccionServicio
              titulo="CÁMINOS"
              imagen={imgCaminos}
              contenido={
                <>
                  <p>
                    En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente.
                    Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos
                    superados para cumplir con los plazos y los requisitos establecidos.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Plazo pactado</span></li>
                    <li className="LISTA">Calidad garantizada</li>
                    <li className="LISTA">Precio ajustado</li>
                  </ul>
                  <p>
                    Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno
                    de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
                  </p>
                  <div className="estrellas">
                    <TextRating ratingValue={4} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <SeccionServicio
              titulo="DESMONTES"
              imagen={imgDesmonte}
              contenido={
                <>
                  <p>
                    En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente.
                    Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos
                    superados para cumplir con los plazos y los requisitos establecidos.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Plazo pactado</span></li>
                    <li className="LISTA">Calidad garantizada</li>
                    <li className="LISTA">Precio ajustado</li>
                  </ul>
                  <p>
                    Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno
                    de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
                  </p>
                  <div className="estrellas">
                    <TextRating ratingValue={3} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <SeccionServicio
              titulo="FEEDLOT"
              imagen={imgFeedlot}
              contenido={
                <>
                  <p>
                    En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente.
                    Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos
                    superados para cumplir con los plazos y los requisitos establecidos.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Plazo pactado</span></li>
                    <li className="LISTA">Calidad garantizada</li>
                    <li className="LISTA">Precio ajustado</li>
                  </ul>
                  <p>
                    Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno
                    de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
                  </p>
                  <div className="estrellas">
                    <TextRating ratingValue={3} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <SeccionServicio
              titulo="LIMPIEZA DE TERRENOS"
              imagen={imgLimpiezaTerrenos}
              contenido={
                <>
                  <p>
                    En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente.
                    Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos
                    superados para cumplir con los plazos y los requisitos establecidos.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Plazo pactado</span></li>
                    <li className="LISTA">Calidad garantizada</li>
                    <li className="LISTA">Precio ajustado</li>
                  </ul>
                  <p>
                    Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno
                    de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
                  </p>
                  <div className="estrellas">
                    <TextRating ratingValue={3.5} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <SeccionServicio
              titulo="REPARACIÓN DE TAMBO"
              imagen={imgReparacionTambo}
              contenido={
                <>
                  <p>
                    En este trabajo se presentan los detalles y los resultados de una obra realizada recientemente.
                    Aquí discutiremos los aspectos importantes del proceso, los materiales utilizados y los desafíos
                    superados para cumplir con los plazos y los requisitos establecidos.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Plazo pactado</span></li>
                    <li className="LISTA">Calidad garantizada</li>
                    <li className="LISTA">Precio ajustado</li>
                  </ul>
                  <p>
                    Este proyecto es un ejemplo claro de nuestro compromiso con la calidad y la eficiencia en cada uno
                    de los trabajos realizados, entregando siempre lo prometido en el tiempo y con las características solicitadas.
                  </p>
                  <div className="estrellas">
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

export default MenuAgroServicios;
