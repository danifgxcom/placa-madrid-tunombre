import React, { useState } from 'react';
import html2canvas from 'html2canvas';

const DownloadButton = ({ 
  previewId, 
  streetName, 
  selectedCity = 'madrid',
  londonPostcode = 'W1U',
  londonDistrict = 'CITY OF WESTMINSTER'
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    const previewElement = document.getElementById(previewId);

    if (previewElement) {
      setIsDownloading(true);

      html2canvas(previewElement, { 
        scale: 2, // Higher quality
        backgroundColor: null // Transparent background
      }).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        // Create a sanitized filename from the street name
        const sanitizedName = streetName.trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();

        // Map city IDs to display names for the filename
        const cityNames = {
          madrid: 'madrid',
          london: 'londres',
          paris: 'paris',
          barcelona: 'barcelona',
          rome: 'roma',
          dublin: 'dublin',
          berlin: 'berlin',
          stockholm: 'estocolmo',
          lisbon: 'lisboa'
        };

        const cityName = cityNames[selectedCity] || 'madrid';

        let filename;
        if (selectedCity === 'london') {
          // For London, include postcode and district in the filename
          const sanitizedPostcode = londonPostcode.trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
          const sanitizedDistrict = londonDistrict.trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
          filename = sanitizedName 
            ? `calle-${cityName}-${sanitizedName}-${sanitizedPostcode}-${sanitizedDistrict}.png` 
            : `calle-${cityName}-${sanitizedPostcode}-${sanitizedDistrict}.png`;
        } else {
          // For other cities, use the original filename format
          filename = sanitizedName ? `calle-${cityName}-${sanitizedName}.png` : `calle-${cityName}.png`;
        }

        link.href = imageUrl;
        link.download = filename;
        link.click();

        setIsDownloading(false);
      }).catch(error => {
        console.error('Error generating image:', error);
        setIsDownloading(false);
      });
    }
  };

  return (
    <div>
      <button 
        className="download-button" 
        onClick={handleDownload} 
        disabled={isDownloading}
      >
        {isDownloading ? 'Generando...' : 'Descargar placa'}
      </button>
    </div>
  );
};

export default DownloadButton;
