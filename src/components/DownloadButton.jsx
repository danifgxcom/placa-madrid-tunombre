import React from 'react';
import html2canvas from 'html2canvas';

const DownloadButton = ({ previewId }) => {
  const handleDownload = () => {
    console.log('probando');
    const previewElement = document.getElementById(previewId);
    console.log(previewElement);

    if (previewElement) {
      html2canvas(previewElement).then((canvas) => {
        const imageUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        link.href = imageUrl;
        link.download = 'preview.png';
        link.click();
      });
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Descargar</button>
    </div>
  );
};

export default DownloadButton;
