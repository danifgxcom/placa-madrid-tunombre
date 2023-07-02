import React, { useState } from 'react';
import Preview from './components/Preview';
import DownloadButton from './components/DownloadButton';
import './App.css';

const App = () => {
  const [streetName, setStreetName] = useState('');

  const handleStreetNameChange = (event) => {
    setStreetName(event.target.value);
  };

  return (
    <div>
      <h1>Generador de placas de calles</h1>
      <label>
        Nombre de la calle:
        <input type="text" value={streetName} onChange={handleStreetNameChange} />
      </label>
      <br />
      <Preview streetName={streetName} shield="/images/escudo.jpg" />
      <DownloadButton previewId="preview" />
    </div>
  );
};

export default App;
