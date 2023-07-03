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
    <div className="app-container">
      <h1>Generador de placas de calles</h1>
      <div className="form-container">
        <label className="label">
          Nombre de la calle:
          <input className="input" type="text" value={streetName} onChange={handleStreetNameChange} />
        </label>
      </div>
      <div className="preview-container">
        <Preview streetName={streetName} shield="/images/escudo.jpg" previewId="preview"/>
      </div>
      <div className="download-container">
        <DownloadButton previewId="preview" />
      </div>
    </div>
  );
};

export default App;
