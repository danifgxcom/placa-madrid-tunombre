import React from 'react';

const Preview = ({ streetName, shield }) => {
  const containerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginRight: '10px', // Agregamos un margen a la derecha
    maxWidth: 'fit-content', // Ajustamos el ancho del contenedor
  };

  const shieldStyle = {
    marginRight: '10px',
    width: '100px',
    transform: 'scale(0.8)',
  };

  const streetNameStyle = {
    fontSize: '1.2rem',
  };

  return (
    <div className="preview" style={containerStyle}>
      <img src={shield} alt="Escudo de la ciudad" style={shieldStyle} />
      <div style={streetNameStyle}>{streetName}</div>
    </div>
  );
};

export default Preview;
