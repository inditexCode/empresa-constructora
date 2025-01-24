import React from 'react';
import ServiciosMovSuelo from './ServiciosMovSuelo'; // Importamos el componente reutilizable
import imgCompactacion from './img/compactacion.jpg'; // Ruta de imagen
import imgDemoliciones from './img/demolicion.jpg'; // Ruta de imagen
import imgNivelaciones from './img/nivelacion.jpg'; // Ruta de imagen
import imgVentaEscombro from './img/zanjeo.jpg'; // Ruta de imagen
import imgVentaTierra from './img/tierra.jpg'; // Ruta de imagen
import imgZanjeo from './img/escombros.png'; // Ruta de imagen
import imagen from './img/maqui.jpg'; // Ruta de imagen
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'; // Importa el ícono de flecha hacia arriba

import "./MenuMovSuelo.css"; // Estilos generales para el menú
import Footer from "../inicio/footer/Footer";
import TextRating from '../agroServicios/TextRating'; // Importa el componente de calificación


const MenuMovSuelo = () => {
    // Función para desplazarse hacia el principio de la página
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return (
    <>
      <div className="menu-mov-suelo-container">
   {/* Imagen con el título sobrepuesta */}
   <div className="imagen-titulo-container-mov">
          <div className="titulo-overlay">
            <h4>MOVIMIENTO DE SUELO</h4>
          </div>
        </div>
        <div className="menu-mov-suelo-content">
          <div className="menu-mov-suelo-row">
            <ServiciosMovSuelo
              titulo="COMPACTACIÓN"
              imagen={imgCompactacion}
              contenido={
                <>
                  <p>La compactación de suelo es un paso esencial en la preparación de terrenos para la construcción, 
                    ya que garantiza una base sólida, estable y uniforme para soportar edificaciones, 
                    rutas, suelos o cualquier tipo de infraestructura.  
                    mejorando su capacidad de carga y reduciendo riesgos como asentamientos diferenciales o fallas estructurales.
                    </p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Conoce el tipo de suelo</span></li>
                    <li className="menu-mov-suelo-list">Compactación por capas</li>
                    <li className="menu-mov-suelo-list">Pruebas de calidad</li>
                  </ul>
                  <p>El éxito de la compactación depende de factores clave como el tipo de suelo, la humedad óptima,
                   trabajar en capas delgadas y realizar pruebas de calidad garantiza que el terreno cumpla con los estándares requeridos para cada proyecto.
                  </p>
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
                  <p>
                  La demolición controlada es un paso fundamental en la renovación de espacios o la preparación de terrenos
                   para nuevas construcciones. Este proceso garantiza la remoción segura, eficiente y precisa de estructuras existentes,
                    minimizando riesgos para el entorno y optimizando el tiempo de ejecución del proyecto.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Seguridad primero</span></li>
                    <li className="menu-mov-suelo-list">Equipos especializados</li>
                    <li className="menu-mov-suelo-list">Gestión de residuos</li>
                  </ul>
                  <p>El éxito de una demolición depende de una planificación detallada, el uso de maquinaria adecuada 
                  y disponer correctamente de los escombros asegura que el proceso sea eficiente y sostenible,
                  una amplia experiencia nos avala.
                  </p>
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
                  <p>La nivelación de suelo es un paso esencial en la preparación de terrenos para la construcción de suelos,
                     galpones o cualquier tipo de edificación requerida. Este proceso asegura que el terreno esté perfectamente nivelado, 
                     facilitando la distribución de cargas y la construcción de cimientos
                  </p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Análisis del terreno</span></li>
                    <li className="menu-mov-suelo-list">Control de niveles</li>
                    <li className="menu-mov-suelo-list">Trabajo de calidad garantizado</li>
                  </ul>
                  <p>El éxito de la nivelación depende de factores clave como un análisis previo del terreno,
                     la compactación por capas del suelo y el uso de los materiales necesarios para garantizar resultados exitosos,
                      controlando siempre los niveles.
                  </p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={3} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="ZANJEO"
              imagen={imgVentaEscombro}
              contenido={
                <>
                  <p>La excavación de zanjas es un proceso clave en la preparación de terrenos para proyectos de infraestructura, 
                    drenaje y control de agua. Este trabajo, realizado con retroexcavadoras o excavadoras, 
                    permite crear canales precisos para transportar agua entre lagunas, zanjas y  
                    prevenir inundaciones en campos y facilitar instalaciones subterráneas como tuberías o sistemas de riego.
                    o simplemente limpiezas de zanjas.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Drenaje eficiente</span></li>
                    <li className="menu-mov-suelo-list">Limpieza de zanjas</li>
                    <li className="menu-mov-suelo-list">Colocación de tubos o alcantarillas</li>
                  </ul>
                  <p>El éxito del zanjeo depende de factores clave como 
                   el uso de maquinaria adecuada, la planificación de la pendiente y profundidad necesarias. 
                   Realizar un trabajo preciso y garantizar un drenaje eficiente permite prevenir inundaciones,
                   limpieza de zanjas, o colocaciones de tubos para el paso nuevo, 
                    y optimizar el uso de los recursos hídricos en cada proyecto.</p>
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
                  <p>Ofrecemos tierra negra y colorada de alta calidad, ideal para relleno, fabricación de ladrillos,
                     nivelación de terrenos o acondicionamiento de cultivos. La tierra se entrega por camiones de 8 m³,
                      garantizando un suministro eficiente y adaptado a las necesidades de cada proyecto.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Venta de tierra negra o colorada</span></li>
                    <li className="menu-mov-suelo-list">Relleno de terrenos</li>
                    <li className="menu-mov-suelo-list">Fabricación de ladrillos</li>
                  </ul>
                  <p>El éxito en la utilización de tierra depende de elegir el tipo adecuado para cada propósito,
                     ya sea mejorar la fertilidad del suelo, brindar estabilidad para construcciones o garantizar
                      un acabado uniforme en rellenos. Nuestra tierra negra y colorada cumple con los estándares
                       necesarios para garantizar calidad y resultados óptimos en cualquier aplicación.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={4} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />

            <ServiciosMovSuelo
              titulo="VENTA DE ESCOMBROS"
              imagen={imgZanjeo}
              contenido={
                <>
                  <p>La venta de escombros es una solución eficiente y económica para proyectos de construcción, para cimientos de casas por ej,
                      relleno de terrenos, preparación de áreas como playas de estacionamiento. Ofrecemos escombros molidos para construcción
                      o semi enteros para rellenos, adaptándonos a los requerimientos específicos de cada cliente. 
                      Los escombros se entregan en camiones de 8 m³, garantizando puntualidad y calidad en cada entrega.</p>
                  <ul>
                    <li className="menu-mov-suelo-list"><span>Escombros molidos para construcción</span></li>
                    <li className="menu-mov-suelo-list">Relleno de terrenos</li>
                    <li className="menu-mov-suelo-list">Preparación de playas de estacionamiento</li>
                  </ul>
                  <p>La utilización de escombros radica en seleccionar el tipo adecuado según la aplicación,
                     ya sea para crear bases sólidas en construcciones, nivelar terrenos o estabilizar superficies.
                      Nuestros escombros cumplen con los estándares necesarios para ofrecer resultados óptimos, 
                      eficiencia y versatilidad en cualquier proyecto.</p>
                  <div className="menu-mov-suelo-estrellas">
                    <TextRating ratingValue={4.5} /> {/* Calificación personalizada */}
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
         {/* Flecha de desplazamiento al principio de la página */}
         <div className="scroll-to-top" onClick={scrollToTop}>
        <KeyboardDoubleArrowUpIcon style={{ fontSize: 80}} />
      </div>
      <Footer />
      
    </>
  );
};

export default MenuMovSuelo;
