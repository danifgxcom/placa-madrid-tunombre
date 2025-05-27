import React from 'react';
import './Preview.css';

const Preview = ({ 
  streetName, 
  shield, 
  previewId, 
  selectedCity = 'madrid', 
  lineCount = 1,
  londonPostcode = 'W1U',
  londonDistrict = 'CITY OF WESTMINSTER'
}) => {
  // Return the street name as a single line, regardless of lineCount
  const getTextLines = () => {
    if (!streetName) {
      return ['NOMBRE DE LA CALLE'];
    }
    return [streetName];
  };

  const textLines = getTextLines();

  // Special case for London street sign
  if (selectedCity === 'london') {
    return (
      <div id={previewId} className={`street-sign ${selectedCity}`}>
        <div className="london-sign">
          <div className="street-name">
            <span className="name">{streetName || 'BAKER STREET'}</span>
            <span className="postcode">{londonPostcode}</span>
          </div>
          <div className="district">{londonDistrict}</div>
        </div>
      </div>
    );
  }

  // Default rendering for other cities
  return (
    <div id={previewId} className={`street-sign ${selectedCity}`}>
      <div className={`sign-content ${selectedCity}`}>
        <img src={shield} alt="Escudo de la ciudad" className="sign-shield" />
        <div className={`sign-text ${selectedCity} lines-${lineCount}`}>
          {textLines.map((line, index) => (
            <div key={index} className="text-line">{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
