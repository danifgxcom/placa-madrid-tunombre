// Real, sourced London borough nameplate styles. Only boroughs with a
// documented, visually distinct design are modeled here — everything else
// uses the City of Westminster style, which is also the generic/default one.
//
// city-of-westminster, city-of-london and rbkc are confirmed against real
// Wikimedia Commons photos. lewisham and bromley are sourced from the 2003
// London TravelWatch "Where am I? Street name signs in London" survey
// (text-only, no verified photo) — simple corporate-colour recolors of the
// standard LCC nameplate, no crest, no distinct layout.
export const LONDON_BOROUGHS = [
  {
    id: 'city-of-westminster',
    name: 'CITY OF WESTMINSTER',
    layout: 'banded',
    bannerPosition: 'bottom',
    showPostcode: true,
    crest: null,
  },
  {
    id: 'rbkc',
    name: 'ROYAL BOROUGH OF KENSINGTON AND CHELSEA',
    layout: 'banded',
    bannerPosition: 'top',
    showPostcode: true,
    crest: null,
  },
  {
    id: 'city-of-london',
    name: 'CITY OF LONDON',
    layout: 'single',
    showPostcode: true,
    crest: '/images/city-of-london-crest.svg',
  },
  {
    id: 'lewisham',
    name: 'LONDON BOROUGH OF LEWISHAM',
    layout: 'single',
    showPostcode: true,
    crest: null,
  },
  {
    id: 'bromley',
    name: 'LONDON BOROUGH OF BROMLEY',
    layout: 'single',
    showPostcode: false,
    crest: null,
  },
];

export const DEFAULT_BOROUGH_ID = 'city-of-westminster';

export const getBorough = (id) =>
  LONDON_BOROUGHS.find((borough) => borough.id === id) ||
  LONDON_BOROUGHS.find((borough) => borough.id === DEFAULT_BOROUGH_ID);
