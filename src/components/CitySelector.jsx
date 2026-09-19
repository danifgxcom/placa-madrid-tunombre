import React from 'react';
import { CITIES } from '../data/cities';
import { selectChevronStyle } from '../utils/selectChevron';

const CitySelector = ({ selectedCity, onCityChange }) => {
  return (
    <div className="mb-5 flex-1">
      <label htmlFor="citySelect" className="block text-lg mb-2.5 font-bold text-[#333] text-left">
        Ciudad:
      </label>
      <select
        id="citySelect"
        className="p-3 text-base w-full border-2 border-[#ddd] rounded-md transition-colors box-border bg-white cursor-pointer appearance-none focus:outline-none focus:border-brand focus:shadow-[0_0_5px_rgba(0,51,153,0.2)]"
        style={selectChevronStyle}
        value={selectedCity}
        onChange={(e) => onCityChange(e.target.value)}
        aria-label="Seleccionar ciudad"
      >
        {CITIES.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
