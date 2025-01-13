import React from "react";
import "./Seccion.css"; // Este archivo contiene los estilos CSS
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Seccion1 = () => {
  const filas = [
    {
      title: "MOVIMIENTO DE SUELO Y OBRAS",
      columns: [
        { subtitle: "Excavaciones" },
        { subtitle: "Demoliciones" },
        { subtitle: "Suelo y relleno" },
        { subtitle: "Compactación" },
        { subtitle: "Nivelaciones" },
        { subtitle: "Zanjeo" },
      ],
    },
    {
      title: "AGROSERVICIOS - AGROVIAL",
      columns: [
        { subtitle: "Caminos" },
        { subtitle: "Desmontes" },
        { subtitle: "Arreglos de tanques de agua tambo, y más" },
        { subtitle: "Feedlot" },
        { subtitle: "Limpieza de terrenos" },
        { subtitle: "Excavaciones" },
      ],
    },
    {
      title: "ALQUILERES DE MÁQUINAS Y MÁS",
      columns: [
        { subtitle: "Excavadora" },
        { subtitle: "Retroexcavadora" },
        { subtitle: "Camiones Volcadores" },
        { subtitle: "Tractores" },
        { subtitle: "Venta de Tierra" },
        { subtitle: "Venta de escombros" },
      ],
    },
  ];

  return (
    <div className="seccion1_flex">
      <div className="seccion1_titulo">
        <header>
          <h2>¿QUÉ HACEMOS?</h2>
        </header>
      </div>

      <div className="seccion1_separador">
        <hr />
      </div>

      <div className="seccion1_texto">
        <div className="seccion1_soporte_texto">
          {filas.map((fila, index) => (
            <div key={index} className="seccion1_fila">
              {/* Usar Accordion para desplegar las columnas de subtítulos */}
              <Accordion className="seccion1_accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                >
                  <h3>{fila.title}</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="seccion1_fila-columnas">
                    {fila.columns.map((col, colIndex) => (
                      <div key={colIndex} className="seccion1_columna">
                        <p>{col.subtitle}</p>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seccion1;
