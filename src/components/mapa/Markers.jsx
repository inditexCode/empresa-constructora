import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import icono from "./img-mapa/excavadora.png"; // Importa la imagen

console.log('Icono cargado:', icono); // Verifica si la imagen se está importando correctamente

const Markers = () => {
  const positions = [
    [-31.275630, -60.763076], // Coordenadas del marcador
  ];

  // Crea el icono personalizado
  const customIcon = new L.Icon({
    iconUrl: icono, // La URL de la imagen importada
    iconSize: [10, 10], // Tamaño del icono
    iconAnchor: [16, 32], // Punto de anclaje
    popupAnchor: [0, -32], // Punto donde el popup aparecerá
  });

  return (
    <div>
      {positions.map((position, index) => (
        <Marker key={index} position={position} icon={customIcon}>
          {/* Tooltip con HTML personalizado */}
          <Tooltip 
            permanent 
            direction="top" 
            className="custom-tooltip" 
            opacity={1} 
            sticky
          >
            <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img 
                src={icono} 
                alt="excavadora" 
                style={{ width: '35px', height: '35px' }} // Estilo del icono dentro del tooltip
              />
              <div>
                <b>
                  CANANI SANCHEZ 
                </b><br />
                <b>Movi. de suelo y AgroServicios</b><br />
                25 de mayo 072 - Nelson Santa Fe
              </div>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </div>
  );
};

export default Markers;
