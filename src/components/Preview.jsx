import React from 'react';

const Preview = ({ streetName, shield, previewId }) => {
  const containerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginRight: '10px',
    maxWidth: 'fit-content',
    border: '3px solid white', // Borde gordo blanco
    boxShadow: '0 0 5px navy', // Borde fino azul exterior
    borderRadius: '10px',
  };

  const shieldStyle = {
    marginRight: '10px',
    width: '50px',
    transform: 'scale(0.8)',
  };

  const streetNameStyle = {
    fontSize: '2rem',
  };

  return (
    <div id={previewId} className="preview" style={containerStyle}>
      <img src={shield} alt="Escudo de la ciudad" style={shieldStyle} />
      <div style={streetNameStyle}>{streetName}</div>
    </div>
  );
};

export default Preview;
