import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import EsqueletoImg from './EsqueletoImg';
import "./MenuImg.css"; // Asegúrate de importar los estilos

const MenuImg = () => {
  const [value, setValue] = React.useState('agroservicios');
  const [images, setImages] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // URLs de las imágenes para cada categoría
  const agroserviciosImages = [
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/lnn2wstvcua9knwbdo9p",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/q9rpk320yrxmn2lwwggs",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/iqg5xegrhkwqadrtnq4p",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/kdwkij86mzfr2wh2kbuv",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/ceekv5gvnqh3uuiwiqvz",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/ehxcurnjee3cezih8bxk",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/wktrxwnjryuekneuwpk2",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/jutyva0ptrk32lhtag82",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/agros/cfbvlmaffe2faiud6o0s",
  ];

  const movimientoSueloImages = [
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/wehpyalx7o3srjh2loml",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/c5cfoksiq32vtqjai4bi",

    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/fvonpkzsgdnljalpjboi",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/pe1js66xks8g6xuazypl",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/sk1cuzyekcokcm6hhp9r",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/qew5dxptgys77v9rpxd6",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/qcqxqvytywrf8vku8b4p",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/llsbphtohxsr6zs4zrld",

    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/movsuelo/ajii3esgohlbatr0hhvr",
  ];

  const construccionImages = [
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/ppqfigpzhviju1qczdau",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/j2909mde61owc7ct3ts4",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/s6e3srfeeyqhnlnbkany",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/ghj10rerb9b6zd4qokpr",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/sfususvh5rsg4dqdxf8c",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/xbu8qvisnumospngsysq",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/otbjra0fiv8pqcntyy6z",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/loq7kp9qocmtby3puaea",
    "https://res.cloudinary.com/du3gxdenp/image/upload/f_auto,q_auto/v1/canani/construccion/xq3bg8vyk6m6odhebloz",
  ];

  // Establecer imágenes según la categoría seleccionada
  React.useEffect(() => {
    if (value === 'agroservicios') {
      setImages(agroserviciosImages);
    } else if (value === 'movimientoSuelo') {
      setImages(movimientoSueloImages);
    } else if (value === 'AlquilerMáquinas') {
      setImages(construccionImages);
    }
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
          <Tab value="AlquilerMáquinas" label="Trabajos" className="tab-title construccion" />
        </Tabs>

        {/* Usamos el componente EsqueletoImg y le pasamos las imágenes correspondientes */}
        <EsqueletoImg images={images} />
      </Box>
    </>
  );
};

export default MenuImg;