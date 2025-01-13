import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'; // Importa Leaflet para los iconos
import './Markers.css'; 

const Markers = () => {
  // Array de posiciones para los marcadores
  const positions = [
    [-31.275451, -60.763108], // Coordenadas del marcador
  ];

  // Crear un icono predeterminado
  const defaultIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // URL de icono predeterminado
    iconSize: [25, 41], // Tamaño del icono
    iconAnchor: [12, 41], // Punto del icono que está anclado en las coordenadas
    popupAnchor: [0, -41], // Donde se muestra el popup en relación con el icono
  });

  return (
    <div>
      {/* Mapea cada posición para crear un marcador en el mapa */}
      {positions.map((position, index) => (
        <Marker key={index} position={position} icon={defaultIcon}>
          <Tooltip permanent direction="top">
            Canani Movimiento Suelo
          </Tooltip>
        </Marker>
      ))}
    </div>
  );
};

export default Markers;
