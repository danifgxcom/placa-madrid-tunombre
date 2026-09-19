import React, { useState } from 'react';
import Preview from './components/Preview';
import DownloadButton from './components/DownloadButton';
import CitySelector from './components/CitySelector';
import LineSelector from './components/LineSelector';
import LondonBoroughSelector from './components/LondonBoroughSelector';
import ReferencePhoto from './components/ReferencePhoto';
import { CITIES, getCity, DEFAULT_CITY_ID } from './data/cities';
import { DEFAULT_BOROUGH_ID } from './data/londonBoroughs';
import { CITY_REFERENCE_PHOTOS, BOROUGH_REFERENCE_PHOTOS } from './data/referencePhotos';

const initialExtraValues = Object.fromEntries(
  CITIES.flatMap((city) => city.extraFields).map((field) => [field.key, field.defaultValue])
);

const inputClassName =
  'p-3 text-base w-full border-2 border-[#ddd] rounded-md transition-colors box-border focus:outline-none focus:border-brand focus:shadow-[0_0_5px_rgba(0,51,153,0.2)] placeholder:text-[#aaa]';

const App = () => {
  const [lines, setLines] = useState(['']);
  const [selectedCity, setSelectedCity] = useState(DEFAULT_CITY_ID);
  const [lineCount, setLineCount] = useState(1);
  const [boroughId, setBoroughId] = useState(DEFAULT_BOROUGH_ID);
  const [extraValues, setExtraValues] = useState(initialExtraValues);

  const city = getCity(selectedCity);
  const usesLineSelector = !city.hasSecondaryLine && city.id !== 'london';
  const effectiveLineCount = usesLineSelector ? lineCount : 1;

  const handleLineCountChange = (count) => {
    setLineCount(count);
    setLines((prev) => {
      const next = prev.slice(0, count);
      while (next.length < count) next.push('');
      return next;
    });
  };

  const handleLineChange = (index) => (event) => {
    setLines((prev) => {
      const next = [...prev];
      next[index] = event.target.value;
      return next;
    });
  };

  const handleExtraFieldChange = (key) => (event) => {
    setExtraValues((prev) => ({ ...prev, [key]: event.target.value }));
  };

  // Only fall back to the generic London photo for the default Westminster
  // style, since that photo genuinely shows a Westminster-style plate - for
  // Lewisham/Bromley (no verified photo of their own) showing it would be as
  // misleading as the Madrid/Barcelona mismatches this was built to avoid.
  const referencePhoto =
    city.id === 'london'
      ? BOROUGH_REFERENCE_PHOTOS[boroughId] || (boroughId === 'city-of-westminster' ? CITY_REFERENCE_PHOTOS.london : null)
      : CITY_REFERENCE_PHOTOS[city.id];
  const referenceNote =
    city.id === 'london' && !referencePhoto ? 'No hemos encontrado todavía una foto verificada de este distrito.' : null;

  return (
    <div className="max-w-[600px] mx-auto my-5 p-4 sm:p-[30px] text-center bg-white rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
      <h1 className="text-brand mb-6 sm:mb-[30px] text-xl sm:text-[28px]">Generador de placas de calles</h1>
      <div className="mb-6 sm:mb-[30px]">
        <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-5 mt-5">
          <CitySelector selectedCity={selectedCity} onCityChange={setSelectedCity} />
          {usesLineSelector && <LineSelector lineCount={lineCount} onLineCountChange={handleLineCountChange} />}
          {city.id === 'london' && <LondonBoroughSelector boroughId={boroughId} onBoroughChange={setBoroughId} />}
        </div>

        {Array.from({ length: effectiveLineCount }).map((_, index) => (
          <div key={index}>
            <label
              htmlFor={`lineInput-${index}`}
              className="block text-lg mb-2.5 font-bold text-[#333] text-left"
            >
              {index === 0 ? 'Nombre de la calle:' : `Línea ${index + 1}:`}
            </label>
            <input
              id={`lineInput-${index}`}
              className={inputClassName}
              type="text"
              value={lines[index] ?? ''}
              onChange={handleLineChange(index)}
              placeholder={index === 0 ? city.placeholder : `Línea ${index + 1}`}
              aria-label={index === 0 ? 'Nombre de la calle' : `Línea ${index + 1}`}
              maxLength="50"
            />
          </div>
        ))}

        {city.extraFields.length > 0 && (
          <div className="mt-5 p-[15px] bg-gray-50 rounded-md border border-gray-200 space-y-[15px]">
            {city.extraFields.map((field) => (
              <div key={field.key}>
                <label htmlFor={`field-${field.key}`} className="block text-lg mb-2.5 font-bold text-[#333] text-left">
                  {field.label}:
                </label>
                <input
                  id={`field-${field.key}`}
                  className={inputClassName}
                  type="text"
                  value={extraValues[field.key] ?? ''}
                  onChange={handleExtraFieldChange(field.key)}
                  placeholder={field.placeholder}
                  aria-label={field.label}
                  maxLength={field.maxLength}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="my-6 sm:my-[30px] mx-auto flex justify-center overflow-x-auto max-w-full">
        <Preview
          lines={lines}
          previewId="preview"
          selectedCity={selectedCity}
          lineCount={lineCount}
          extraValues={extraValues}
          boroughId={boroughId}
        />
      </div>

      <ReferencePhoto photo={referencePhoto} note={referenceNote} />

      <div className="text-center mt-[30px]">
        <DownloadButton
          previewId="preview"
          lines={lines}
          selectedCity={selectedCity}
          extraValues={extraValues}
          boroughId={boroughId}
        />
      </div>
    </div>
  );
};

export default App;
