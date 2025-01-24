import React from "react";
import SeccionServicio from "./SeccionServicio"; // Importamos el componente reutilizable
import imgArregloTanques from "./img/arregloTanque2.jpg";
import imgCaminos from "./img/caminos.jpg";
import imgDesmonte from "./img/desmonte.jpg";
import imgFeedlot from "./img/feedlot.jpg";
import imgLimpiezaTerrenos from "./img/limpTerreno.png";
import imgReparacionTambo from "./img/reaparacionTambo.jpg";
import imagen from "./img/Vacas.jpg";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'; // Importa el ícono de flecha hacia arriba
import "./MenuAgroServicios.css";
import Footer from "../inicio/footer/Footer";
import TextRating from './TextRating'; // Importa el componente de calificación

const MenuAgroServicios = () => {
   // Función para desplazarse hacia el principio de la página
   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
        <div className="contenedor-principal">
        {/* Contenedor de la imagen de fondo y el título */}
        <div className="imagen-titulo-container">
          <div className="titulo-overlay">
            <h4>AGROSERVICIOS</h4>
          </div>
        </div>
          <div className="container">
          <div className="row">
            <SeccionServicio
              titulo="ARREGLOS DE TANQUES"
              imagen={imgArregloTanques}
              contenido={
                <>
                  <p>
                  El mantenimiento y arreglo de tanques de agua o bebederos de animales es un paso esencial para garantizar el suministro
                   adecuado de agua limpia y accesible para el ganado. Este trabajo incluye la limpieza y rehabilitación del área, 
                   asegurando que los animales puedan llegar al tanque con el suelo firme y compactado.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Limpieza y preparación del terreno</span></li>
                    <li className="LISTA">Excavación y secado del tanque</li>
                    <li className="LISTA">Relleno y compactación por capas</li>
                  </ul>
                  <p>
                  El proceso comienza con la eliminación de barro acumulado alrededor y dentro del tanque. 
                  Si es necesario, se excava hasta alcanzar una capa de tierra seca que permita una base estable. 
                  Se deja expuesta al sol por un día, lo que contribuye a eliminar la humedad
                   y prepara el terreno para las siguientes etapas.
                   Posteriormente, se procede al relleno utilizando tierra de calidad, transportada en camiones
                   este material se coloca en capas que son compactadas progresivamente, 
                   garantizando la estabilidad y el nivel adecuado del tanque. 
                  </p>
                  <p>
                  Este método asegura que el animal llegue de  forma eficiente al tanque, 
                   Este tipo de proyecto es un ejemplo del compromiso con la calidad y el detalle en cada tarea,
                    entregando resultados que cumplen la funcionalidad
                     y el bienestar de los animales en cualquier campo o instalación ganadera.
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
                  El trabajo en caminos rurales es fundamental para garantizar el tránsito seguro y eficiente de vehículos, 
                  incluso en condiciones climáticas adversas. Ya sea restaurando un camino en desuso o creando uno completamente nuevo,
                   se asegura que el terreno sea estable, transitable y con un diseño que facilite el drenaje adecuado.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Limpieza y despeje del camino</span></li>
                    <li className="LISTA">Nivelación y compactación del terreno</li>
                    <li className="LISTA">Zanjeo para drenaje eficiente</li>
                  </ul>
                  <p>
                  El proceso comienza con la limpieza del camino antiguo o el trazado de uno nuevo, eliminando vegetación, 
                  escombros y obstáculos que puedan interferir con el tránsito. Una vez despejado, se realiza la nivelación del terreno,
                   creando un desnivel estratégico que permita el correcto escurrimiento del agua en épocas de lluvia, evitando acumulaciones
                    que puedan deteriorar el camino o hacerlo intransitable.
                  Además, se lleva a cabo un zanjeo en los laterales del camino para canalizar el agua y prevenir inundaciones. 
                  Este trabajo se combina con la compactación del suelo y, en caso necesario, el relleno con materiales adecuados
                   para garantizar la resistencia y durabilidad del camino.
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
                  El desmonte de terrenos es un paso fundamental para transformar áreas cubiertas por monte en espacios limpios
                   y libres de obstáculos, listos para cualquier tipo de proyecto. Este proceso implica la remoción completa de árboles,
                    raíces y vegetación, dejando el terreno preparado para su aprovechamiento futuro.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Corte de árboles y leña</span></li>
                    <li className="LISTA">Extracción de raíces</li>
                    <li className="LISTA">Transporte de material</li>
                  </ul>
                  <p>
                
                  El trabajo comienza con el corte de árboles en leña, Posteriormente, se emplea maquinaria como retroexcavadoras
                   para extraer las raíces desde la base, asegurando que no quede vegetación residual que pueda interferir en el terreno.
                   Si es necesario, la leña y otros restos se transportan en camiones para dejar el espacio completamente despejado. 
                   Este proceso no solo garantiza la limpieza total del terreno, sino que también facilita su preparación para actividades
                    como construcción, cultivo o cualquier otro uso que el cliente necesite.
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
                  El mantenimiento y limpieza de un feedlot es un proceso esencial para garantizar la salud y el bienestar de los animales,
                   asegurando condiciones óptimas en las áreas donde transitan, comen y beben agua.
                    Este trabajo implica la remoción completa de barro y desechos fecales acumulados, 
                    utilizando maquinaria adecuada para restablecer un suelo seco, firme y nivelado.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Extracción de barro y desechos</span></li>
                    <li className="LISTA">Secado y preparación del terreno</li>
                    <li className="LISTA">Colocación y compactación de nuevas capas</li>
                  </ul>
                  <p>
                  El proceso comienza retirando el barro y los residuos con retroexcavadoras, 
                  excavando hasta alcanzar el suelo firme.Una vez despejada la superficie, se deja secar al sol,
                   permitiendo que la humedad remanente se evapore por completo.
                   Posteriormente, se traen camiones cargados con tierra nueva, que se coloca en capas y se compacta cuidadosamente. 
                   Este método asegura un nivel adecuado y una superficie sólida, evitando acumulaciones de agua o barro en el futuro.
                  </p>
                  <p>
                  Este trabajo es fundamental para evitar lesiones en los animales, como resbalones o heridas,
                   al garantizar que siempre caminen y descansen en zonas secas y firmes. Además, 
                   un feedlot limpio y bien nivelado mejora las condiciones sanitarias y contribuye al rendimiento y bienestar del ganado. 
                  Con este servicio, brindamos soluciones integrales y de alta calidad para el mantenimiento de feedlots, 
                  asegurando que los animales cuenten con un ambiente seguro, limpio y adecuado para su desarrollo.
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
                  La limpieza de terrenos es un servicio esencial para preparar espacios, ya sean campos, 
                  terrenos baldíos o áreas con acumulaciones de materiales no deseados, para futuros usos. 
                  Este trabajo abarca desde la remoción de montañas de tierra, árboles caídos, barro y escombros, 
                  hasta dejar el lugar completamente despejado y en perfectas condiciones para cualquier tipo de proyecto.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Despeje de materiales</span></li>
                    <li className="LISTA">Corte y remoción de árboles caídos</li>
                    <li className="LISTA">Transporte y disposición de desechos</li>
                  </ul>
                  <p>
                  El proceso comienza a retirar todos los obstáculos presentes, incluyendo montañas de tierra,
                   árboles caídos, raíces, escombros y barro. Todo el material extraído es cargado en camiones y transportado a áreas específicas
                    para su disposición.Una vez despejado, el terreno se nivela y acondiciona según las necesidades del cliente, 
                    garantizando que esté limpio y en óptimas condiciones para cualquier uso posterior, ya sea agrícola, industrial o residencial.
                    Este servicio es ideal para proyectos que requieren un inicio desde cero,
                     asegurando un terreno libre de obstáculos, seguro y funcional para su próximo desarrollo.
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
                  El mantenimiento y limpieza de un tambo es un proceso crucial para garantizar la salud, 
                  el bienestar y la productividad de las vacas lecheras. Este trabajo busca crear un entorno limpio,
                   seco y seguro en las áreas donde los animales transitan, se alimentan y se ordeñan, 
                   contribuyendo directamente a su comodidad y al rendimiento lechero.
                  </p>
                  <ul>
                    <li className="LISTA"><span>Extracción de barro y residuos orgánicos</span></li>
                    <li className="LISTA">Secado y preparación del terreno</li>
                    <li className="LISTA">Nivelación y compactación de nuevas capas</li>
                  </ul>
                  <p>
                Se comienza con la remoción total de barro, estiércol y otros desechos acumulados,
                   utilizando maquinaria como retroexcavadoras para alcanzar un suelo firme y uniforme.
                   se deja secar al sol para eliminar la humedad restante, lo que evita futuras acumulaciones de agua y barro.
                   A continuación, se traen camiones cargados con tierra de calidad, que se coloca en capas y se compacta cuidadosamente 
                   para restablecer el nivel adecuado del suelo. Este procedimiento no solo asegura un terreno firme y estable, 
                   sino que también previene la formación de charcos y zonas resbaladizas que puedan provocar lesiones en los animales.
                  Un tambo limpio y bien mantenido no solo reduce el riesgo de enfermedades y problemas podales en las vacas,
                 sino que también mejora las condiciones sanitarias generales, optimizando 
                 la calidad de la leche producida. Este servicio es una solución integral diseñada para asegurar
                  el bienestar de los animales y maximizar la eficiencia de los tambos.
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
        {/* Flecha de desplazamiento al principio de la página */}
        <div className="scroll-to-top" onClick={scrollToTop}>
        <KeyboardDoubleArrowUpIcon style={{ fontSize: 80}} />
      </div>
      <Footer />
    </>
  );
};

export default MenuAgroServicios;
