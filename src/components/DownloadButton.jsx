import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import { getCity } from '../data/cities';
import { getBorough } from '../data/londonBoroughs';
import { buildFilename } from '../utils/filename';

const DownloadButton = ({ previewId, lines, selectedCity, extraValues, boroughId }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const handleDownload = () => {
    const previewElement = document.getElementById(previewId);
    if (!previewElement) {
      return;
    }

    setIsDownloading(true);
    setError(null);

    html2canvas(previewElement, {
      scale: 2, // Higher quality
      backgroundColor: null, // Transparent background
    })
      .then((canvas) => {
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        const city = getCity(selectedCity);
        const extraParts = city.id === 'london' ? [getBorough(boroughId).name] : [];
        link.href = imageUrl;
        link.download = buildFilename(city, lines.filter(Boolean).join(' '), extraValues, extraParts);
        link.click();
        setIsDownloading(false);
      })
      .catch((err) => {
        console.error('Error generating image:', err);
        setError('No se pudo generar la imagen. Inténtalo de nuevo.');
        setIsDownloading(false);
      });
  };

  return (
    <div>
      <button
        className="bg-brand text-white border-0 rounded-md px-6 py-3 text-base font-bold cursor-pointer transition-all shadow-[0_2px_4px_rgba(0,0,0,0.2)] hover:bg-brand-hover hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.2)] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {isDownloading ? 'Generando...' : 'Descargar placa'}
      </button>
      {error && <p className="text-red-600 mt-2.5 text-sm">{error}</p>}
    </div>
  );
};

export default DownloadButton;
