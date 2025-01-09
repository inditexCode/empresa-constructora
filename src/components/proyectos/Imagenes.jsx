import React from "react";
import "./Imagenes.css";
import { ImageList, ImageListItem } from '@mui/material';

const Imagenes = ({ imagenes }) => {
  return (
    <div className="contenedor_imaganes">
      {/* Aquí eliminamos el atributo cols y dejamos que el CSS controle las columnas */}
      <ImageList className="galeria" sx={{ width: '100%', height: 'auto' }}>
        {imagenes.map((img, index) => (
          <ImageListItem key={index} className="imagen-item">
            <img
              src={`${img.src}?w=248&fit=crop&auto=format`} // Usamos el src de la imagen
              srcSet={`${img.src}?w=248&fit=crop&auto=format&dpr=2 2x`} // srcSet para optimización
              alt={img.title} // Usamos el título como alt para la accesibilidad
              loading="lazy"
              className="imagen"
            />
            {/* Información sobre la imagen */}
            <div className="imagen-info">
              <h4 className="imagen-titulo">{img.title}</h4>
              <p className="imagen-descripcion">{img.description}</p>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Imagenes;
