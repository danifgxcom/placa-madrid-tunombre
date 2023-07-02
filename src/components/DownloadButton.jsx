import React from 'react';

const DownloadButton = ({ previewId }) => {
  const handleDownload = () => {
    const previewElement = document.getElementById(previewId);

    if (previewElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      // Establecer el tamaño del lienzo
      canvas.width = previewElement.offsetWidth;
      canvas.height = previewElement.offsetHeight;

      // Dibujar el contenido del elemento de vista previa en el lienzo
      context.drawImage(previewElement, 0, 0);

      // Generar un blob de la imagen
      canvas.toBlob((blob) => {
        // Crear un enlace para descargar el archivo
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'preview.png';

        // Simular el clic en el enlace de descarga
        link.click();

        // Liberar el objeto URL
        URL.revokeObjectURL(link.href);
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
