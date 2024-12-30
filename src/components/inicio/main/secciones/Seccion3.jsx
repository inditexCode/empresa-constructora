import React from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import "./Seccion3.css";

const Seccion3 = () => {
  const menuItems = [
    {
      title: "CÁLIDAD Y CUMPLIMIENTO",
      content:
        "Nuestro enfoque está en garantizar procesos de alta calidad que cumplan con las normativas y las expectativas de nuestros clientes.",
    },
    {
      title: "INNOVACIÓN Y DESARROLLO",
      content:
        "Fomentamos la innovación continua, desarrollando soluciones modernas y adaptándonos a las nuevas tecnologías del mercado.",
    },
    {
      title: "SATISFACCIÓN AL CLIENTE",
      content:
        "Trabajamos para superar las expectativas de nuestros clientes, brindando un servicio confiable y personalizado.",
    },
  ];

  const iconItems = [
    { Icon: EmojiEventsIcon, title: "Premios y Reconocimientos" },
    { Icon: GroupsIcon, title: "Equipo Colaborativo" },
    { Icon: ThumbUpAltIcon, title: "Alta Calidad Aprobada" },
    { Icon: AgricultureIcon, title: "Compromiso con el Campo" },
  ];

  return (
    <div className="seccion3-container">
      {/* Columna Izquierda */}
      <div className="menu-izquierda">
        <h4>Quienes somos</h4>
        <h2>TRAYECTORIA AL SERVICIO DEL CAMPO Y DE LA CONSTRUCCIÓN</h2>
        <p>
          Una Empresa que se destaca por su cumplimiento, calidad y costos.
          Capaz de satisfacer los requerimientos de sus clientes abarcando desde
          el estudio del proyecto, hasta la finalización de la obra. La
          continuidad en el tiempo de la relación con nuestros clientes, refleja
          la calidad del servicio brindado.
        </p>

        {/* Iconos organizados en dos columnas */}
        <div className="icon-grid">
  {iconItems.map((item, index) => (
    <div className="icon-item" key={index}>
      <item.Icon style={{ fontSize: "80px", color: "gold" }} />
      <h4>{item.title}</h4>
    </div>
  ))}
</div>
      </div>

      {/* Columna Derecha */}
      <div className="menu-derecha">
        <h2>NUESTRAS POLÍTICAS</h2>
        <p>
          MARELLI CONSTRUCTORA S.A. asume el compromiso de aplicar y mejorar
          permanentemente un Sistema de Gestión Integrado para asegurar la
          entrega de productos y servicios confiables que cumplan con los
          requisitos y expectativas explícito e implícitos de sus clientes. Como
          referencia para promover la calidad y la mejora continua en todos los
          niveles de la organización se deberán considerar los siguientes
          objetivos de calidad.
        </p>

        {/* Menú desplegable con títulos y contenidos personalizados */}
        {menuItems.map((item, index) => (
          <div className="dropdown-container" key={index}>
            <button
              type="button"
              className="btn desplegable dropdown-toggle"
              data-bs-toggle="collapse"
              data-bs-target={`#dropdown-content-${index}`}
              aria-expanded="false"
              aria-controls={`dropdown-content-${index}`}
            >
              <span className="dropdown-title">{item.title}</span>
            </button>
            <div
              id={`dropdown-content-${index}`}
              className="collapse dropdown-content"
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seccion3;
