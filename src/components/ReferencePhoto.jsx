import React from 'react';
import { wikimediaThumbnail } from '../utils/wikimedia';

const ReferencePhoto = ({ photo, note, label = 'Así es en la realidad' }) => {
  if (!photo) {
    return note ? <p className="mt-4 text-xs text-gray-400 italic">{note}</p> : null;
  }

  return (
    <div className="mt-4 text-center">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{label}</p>
      <a href={photo.sourcePage} target="_blank" rel="noopener noreferrer">
        <img
          src={wikimediaThumbnail(photo.url)}
          alt={photo.title}
          className="w-full max-w-[320px] min-h-[120px] mx-auto rounded-md border border-gray-200 shadow-sm bg-gray-50"
        />
      </a>
      <p className="text-[11px] text-gray-400 mt-1.5">
        Foto: {photo.author} / Wikimedia Commons ({photo.license}) —{' '}
        <a className="underline" href={photo.sourcePage} target="_blank" rel="noopener noreferrer">
          fuente
        </a>
      </p>
    </div>
  );
};

export default ReferencePhoto;
