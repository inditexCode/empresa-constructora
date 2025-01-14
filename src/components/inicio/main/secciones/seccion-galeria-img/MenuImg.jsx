import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EsqueletoImg from './EsqueletoImg';
import "./MenuImg.css"; // Asegúrate de importar los estilos

// Importaciones de imágenes para cada categoría
import img1 from './img-galeria/agroservicios/1A.jpg';
import img2 from './img-galeria/agroservicios/2A.png';
import img3 from './img-galeria/agroservicios/3A.png';
import img4 from './img-galeria/agroservicios/4A.jpg';
import img5 from './img-galeria/agroservicios/5A.png';
import imgA from './img-galeria/agroservicios/6A.jpg';
import imgB from './img-galeria/agroservicios/7A.png';
import imgC from './img-galeria/agroservicios/8A.jpg';
import imgD from './img-galeria/agroservicios/9A.jpg';

import M1 from './img-galeria/construccion/1M.jpg';
import M2 from './img-galeria/construccion/2M.jpg';
import M3 from './img-galeria/construccion/3M.jpg';
import M4 from './img-galeria/construccion/4M.jpg';
import M5 from './img-galeria/construccion/5M.jpg';
import M6 from './img-galeria/construccion/6M.jpg';
import M7 from './img-galeria/construccion/7M.jpg';
import M8 from './img-galeria/construccion/8M.jpg';
import M9 from './img-galeria/construccion/9M.jpg';

import C1 from './img-galeria/movimientoSuelo/1C.jpg';
import C2 from './img-galeria/movimientoSuelo/2C.jpg';
import C3 from './img-galeria/movimientoSuelo/3C.jpg';
import C4 from './img-galeria/movimientoSuelo/4C.jpg';
import C5 from './img-galeria/movimientoSuelo/5C.jpg';
import C6 from './img-galeria/movimientoSuelo/6C.jpg';
import C7 from './img-galeria/movimientoSuelo/7C.jpg';
import C8 from './img-galeria/movimientoSuelo/8C.jpg';
import C9 from './img-galeria/movimientoSuelo/9C.jpg';

const MenuImg = () => {
  const [value, setValue] = React.useState('agroservicios');
  const [images, setImages] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Establecer imágenes según la categoría seleccionada
  React.useEffect(() => {
    if (value === 'agroservicios') {
      setImages([img1, img2, img3, img4, img5, imgA, imgB, imgC, imgD]);
    } else if (value === 'movimientoSuelo') {
      setImages([M1, M2, M3, M4, M5, M6, M7, M8, M9]);
    } else if (value === 'AlquilerMáquinas') {
      setImages([C1, C2, C3, C4, C5, C6, C7, C8, C9]);
    }
    console.log('Imágenes:', images); // Verifica que las imágenes estén correctamente cargadas

  }, [value]);

  return (
    <>
    <div className="title-img-menu">
      <h2 className='titulo-img-menu'> NUESTROS SERVICIOS</h2>
    </div>
    <Box sx={{ width: '100%' }} className="tabs-container">
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="movimientoSuelo" label="Movimiento Suelo" className="tab-title movimientoSuelo" />
        <Tab value="agroservicios" label="Agroservicios" className="tab-title agroservicios" />
        <Tab value="AlquilerMáquinas" label="Alquiler Máquinas" className="tab-title construccion" />

      </Tabs>

      {/* Usamos el componente EsqueletoImg y le pasamos las imágenes correspondientes */}
      <EsqueletoImg images={images} />
    </Box>
    
    </>
    
  );
};

export default MenuImg;
