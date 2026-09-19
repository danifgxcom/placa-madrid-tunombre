import React from 'react';
import { selectChevronStyle } from '../utils/selectChevron';

const LineSelector = ({ lineCount, onLineCountChange }) => {
  const lineOptions = [1, 2, 3];

  return (
    <div className="mb-5 flex-1">
      <label htmlFor="lineSelect" className="block text-lg mb-2.5 font-bold text-[#333] text-left">
        Número de líneas:
      </label>
      <select
        id="lineSelect"
        className="p-3 text-base w-full border-2 border-[#ddd] rounded-md transition-colors box-border bg-white cursor-pointer appearance-none focus:outline-none focus:border-brand focus:shadow-[0_0_5px_rgba(0,51,153,0.2)]"
        style={selectChevronStyle}
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
