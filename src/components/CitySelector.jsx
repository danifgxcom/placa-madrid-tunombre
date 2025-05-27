import React from 'react';
import './CitySelector.css';

const CitySelector = ({ selectedCity, onCityChange }) => {
  const cities = [
    { id: 'madrid', name: 'Madrid' },
    { id: 'london', name: 'Londres' },
    { id: 'paris', name: 'París' },
    { id: 'barcelona', name: 'Barcelona' },
    { id: 'rome', name: 'Roma' },
    { id: 'dublin', name: 'Dublín' },
    { id: 'berlin', name: 'Berlín' },
    { id: 'stockholm', name: 'Estocolmo' },
    { id: 'lisbon', name: 'Lisboa' }
  ];

  return (
    <div className="city-selector">
      <label htmlFor="citySelect" className="label">
        Ciudad:
      </label>
      <select
        id="citySelect"
        className="select-input"
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        aria-label="Seleccionar ciudad"
      >
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;