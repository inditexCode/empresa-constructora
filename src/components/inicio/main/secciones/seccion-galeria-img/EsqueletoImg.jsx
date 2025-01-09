const EsqueletoImg = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`imagen-${index}`}
          onError={() => console.log(`Error al cargar imagen: ${image}`)}  // Detectar error en la carga
        />
      ))}
    </div>
  );
};


export default EsqueletoImg;
