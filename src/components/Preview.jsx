import React from 'react';
import './Preview.css';
import { getCity } from '../data/cities';
import { getBorough } from '../data/londonBoroughs';

const Preview = ({ lines, previewId, selectedCity, lineCount = 1, extraValues, boroughId }) => {
  const city = getCity(selectedCity);

  if (city.id === 'london') {
    const borough = getBorough(boroughId);
    const postcode = extraValues.postcode || city.extraFields[0].defaultValue;
    const name = lines[0] || city.placeholder;

    if (borough.layout === 'single') {
      return (
        <div id={previewId} className={`street-sign london ${borough.id}`}>
          <div className={`london-sign ${borough.id}`}>
            {borough.crest && (
              <img src={borough.crest} alt={`Escudo de ${borough.name}`} className="borough-crest" />
            )}
            <span className="name">{name}</span>
            {borough.showPostcode && <span className="postcode">{postcode}</span>}
          </div>
        </div>
      );
    }

    return (
      <div id={previewId} className={`street-sign london ${borough.id}`}>
        <div className={`london-sign ${borough.id}`}>
          {borough.bannerPosition === 'top' && <div className="district">{borough.name}</div>}
          <div className="street-name">
            <span className="name">{name}</span>
            <span className="postcode">{postcode}</span>
          </div>
          {borough.bannerPosition === 'bottom' && <div className="district">{borough.name}</div>}
        </div>
      </div>
    );
  }

  const effectiveLineCount = city.hasSecondaryLine ? 1 : lineCount;
  let textLines;
  if (city.hasSecondaryLine) {
    const secondaryField = city.extraFields[0];
    textLines = [lines[0] || city.placeholder, extraValues[secondaryField.key] || secondaryField.defaultValue];
  } else {
    textLines = lines
      .slice(0, effectiveLineCount)
      .map((line, index) => (index === 0 && !line ? city.placeholder : line))
      .filter((line, index) => index === 0 || line);
  }

  const arrondissement = city.id === 'paris' ? extraValues.arrondissement : null;

  return (
    <div id={previewId} className={`street-sign ${city.id}${arrondissement ? ' has-cartouche' : ''}`}>
      {arrondissement && <div className="arrondissement-cartouche">{arrondissement}</div>}
      <div className={`sign-content ${city.id}`}>
        {city.shield && <img src={city.shield} alt={`Escudo de ${city.name}`} className="sign-shield" />}
        <div
          className={`sign-text ${city.id} lines-${effectiveLineCount}${city.hasSecondaryLine ? ' has-secondary' : ''}`}
        >
          {textLines.map((line, index) => (
            <div key={index} className="text-line">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
