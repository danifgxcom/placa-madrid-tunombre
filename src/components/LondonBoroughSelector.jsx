import React from 'react';
import { LONDON_BOROUGHS } from '../data/londonBoroughs';
import { selectChevronStyle } from '../utils/selectChevron';

const LondonBoroughSelector = ({ boroughId, onBoroughChange }) => {
  return (
    <div>
      <label htmlFor="boroughSelect" className="block text-lg mb-2.5 font-bold text-[#333] text-left">
        Distrito (borough):
      </label>
      <select
        id="boroughSelect"
        className="p-3 text-base w-full border-2 border-[#ddd] rounded-md transition-colors box-border bg-white cursor-pointer appearance-none focus:outline-none focus:border-brand focus:shadow-[0_0_5px_rgba(0,51,153,0.2)]"
        style={selectChevronStyle}
        value={boroughId}
        onChange={(e) => onBoroughChange(e.target.value)}
        aria-label="Seleccionar distrito de Londres"
      >
        {LONDON_BOROUGHS.map((borough) => (
          <option key={borough.id} value={borough.id}>
            {borough.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LondonBoroughSelector;
