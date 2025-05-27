import React, { useState, useEffect } from 'react';
import Preview from './components/Preview';
import DownloadButton from './components/DownloadButton';
import CitySelector from './components/CitySelector';
import LineSelector from './components/LineSelector';
import './App.css';

const App = () => {
  const [streetName, setStreetName] = useState('');
  const [selectedCity, setSelectedCity] = useState('madrid');
  const [lineCount, setLineCount] = useState(1);
  const [cityShield, setCityShield] = useState('/images/escudo.jpg');
  const [londonPostcode, setLondonPostcode] = useState('W1U');
  const [londonDistrict, setLondonDistrict] = useState('CITY OF WESTMINSTER');

  // Update shield image based on selected city
  useEffect(() => {
    // You can add different shield images for each city
    const shields = {
      madrid: '/images/escudo.jpg',
      london: '/images/london_emblem.svg',
      paris: '/images/huella.png',
      barcelona: '/images/huella.png',
      rome: '/images/huella.png',
      dublin: '/images/huella.png',
      berlin: '/images/huella.png',
      stockholm: '/images/huella.png',
      lisbon: '/images/huella.png'
    };

    setCityShield(shields[selectedCity]);
  }, [selectedCity]);

  const handleStreetNameChange = (event) => {
    setStreetName(event.target.value);
  };

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleLineCountChange = (count) => {
    setLineCount(count);
  };

  const handleLondonPostcodeChange = (event) => {
    setLondonPostcode(event.target.value);
  };

  const handleLondonDistrictChange = (event) => {
    setLondonDistrict(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Generador de placas de calles</h1>
      <div className="form-container">
        <div className="selectors-container">
          <CitySelector 
            selectedCity={selectedCity} 
            onCityChange={handleCityChange} 
          />

          <LineSelector 
            lineCount={lineCount} 
            onLineCountChange={handleLineCountChange} 
          />
        </div>

        <label htmlFor="streetNameInput" className="label">
          Nombre de la calle:
        </label>
        <input 
          id="streetNameInput"
          className="input" 
          type="text" 
          value={streetName} 
          onChange={handleStreetNameChange}
          placeholder="Introduce el nombre de la calle"
          aria-label="Nombre de la calle"
          maxLength="50"
        />

        {selectedCity === 'london' && (
          <div className="london-options">
            <div className="london-option">
              <label htmlFor="londonPostcodeInput" className="label">
                Código postal:
              </label>
              <input 
                id="londonPostcodeInput"
                className="input" 
                type="text" 
                value={londonPostcode} 
                onChange={handleLondonPostcodeChange}
                placeholder="W1U"
                aria-label="Código postal de Londres"
                maxLength="10"
              />
            </div>
            <div className="london-option">
              <label htmlFor="londonDistrictInput" className="label">
                Distrito:
              </label>
              <input 
                id="londonDistrictInput"
                className="input" 
                type="text" 
                value={londonDistrict} 
                onChange={handleLondonDistrictChange}
                placeholder="CITY OF WESTMINSTER"
                aria-label="Distrito de Londres"
                maxLength="50"
              />
            </div>
          </div>
        )}
      </div>

      <div className="preview-container">
        <Preview 
          streetName={streetName} 
          shield={cityShield} 
          previewId="preview"
          selectedCity={selectedCity}
          lineCount={lineCount}
          londonPostcode={londonPostcode}
          londonDistrict={londonDistrict}
        />
      </div>

      <div className="download-container">
        <DownloadButton 
          previewId="preview" 
          streetName={streetName}
          selectedCity={selectedCity}
          londonPostcode={londonPostcode}
          londonDistrict={londonDistrict}
        />
      </div>
    </div>
  );
};

export default App;
