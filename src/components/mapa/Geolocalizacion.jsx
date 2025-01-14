import React, { useState } from 'react';
import { Marker, Tooltip, useMapEvents } from 'react-leaflet';
import L from 'leaflet'; // Importa Leaflet para crear íconos personalizados

const Geolocalizacion = () => {
  const [posicion, setPosicion] = useState(null);

  const map = useMapEvents({
    // Detecta el clic en el mapa para obtener la ubicación
    click() {
      map.locate(); // Llama a la función locate para obtener la geolocalización
    },
    // Cuando se encuentra la ubicación, actualiza el estado con las coordenadas
    locationfound(e) {
      setPosicion(e.latlng); // Establece la posición
      map.flyTo(e.latlng, map.getZoom()); // Centra el mapa en la nueva ubicación
    },
  });

  // Crear un ícono personalizado para la geolocalización
  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // URL alternativa
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  

  return posicion === null ? null : (
    <Marker position={posicion} icon={customIcon}>
      <Tooltip permanent direction="top">
        <b>Usted se encuentra aquí</b>
      </Tooltip>
    </Marker>
  );
};

export default Geolocalizacion;
