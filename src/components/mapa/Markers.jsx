import React from 'react';
import { Marker, Tooltip } from 'react-leaflet'; // Importa los componentes Marker y Tooltip de react-leaflet

const Markers = () => {
  // Array de posiciones para los marcadores en el mapa
  const positions = [
    [-31.274428, -60.762890], // Coordenadas del marcador
  ];

  return (
    <div>
      {/* Mapea cada posición para crear un marcador en el mapa */}
      {positions.map((position, index) => (
        <Marker key={index} position={position}>   
        </Marker>
      ))}

    </div>
  );
};

export default Markers;
