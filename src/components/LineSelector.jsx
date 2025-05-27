import React from 'react';
import './LineSelector.css';

const LineSelector = ({ lineCount, onLineCountChange }) => {
  const lineOptions = [1, 2, 3];

  return (
    <div className="line-selector">
      <label htmlFor="lineSelect" className="label">
        Número de líneas:
      </label>
      <select
        id="lineSelect"
        className="select-input"
        value={lineCount}
        onChange={(e) => onLineCountChange(parseInt(e.target.value, 10))}
        aria-label="Seleccionar número de líneas"
      >
        {lineOptions.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LineSelector;