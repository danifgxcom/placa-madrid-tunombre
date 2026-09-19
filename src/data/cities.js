// Single source of truth for every supported city. CitySelector and
// DownloadButton both read from CITIES/getCity instead of keeping their own
// copies, which is what used to cause the three lists to drift out of sync.
export const CITIES = [
  {
    id: 'madrid',
    name: 'Madrid',
    slug: 'madrid',
    shield: '/images/escudo.jpg',
    placeholder: 'CALLE DE ALCALÁ',
    hasSecondaryLine: false,
    extraFields: [],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    slug: 'barcelona',
    shield: null,
    placeholder: 'CARRER DE PROVENÇA',
    hasSecondaryLine: false,
    extraFields: [],
  },
  {
    // A real photo (Carrer de les Avellanes) shows a single-language dark
    // navy plate with a white rounded border and a small pale emblem - no
    // bilingual line confirmed by any photo (that was only from a press
    // article about an unconfirmed redesign), so this doesn't model one.
    id: 'valencia',
    name: 'Valencia',
    slug: 'valencia',
    shield: '/images/valencia-shield.svg',
    placeholder: 'CARRER DE LES AVELLANES',
    hasSecondaryLine: false,
    extraFields: [],
  },
  {
    id: 'sevilla',
    name: 'Sevilla',
    slug: 'sevilla',
    shield: null,
    placeholder: 'CALLE SIERPES',
    hasSecondaryLine: false,
    extraFields: [],
  },
  {
    id: 'bilbao',
    name: 'Bilbao',
    slug: 'bilbao',
    shield: null,
    placeholder: 'ASKAO KALEA',
    hasSecondaryLine: true,
    extraFields: [
      {
        key: 'bilbaoSecondary',
        label: 'Nombre en castellano',
        placeholder: 'Calle Áscao',
        defaultValue: 'Calle Áscao',
        maxLength: 50,
      },
    ],
  },
  {
    id: 'london',
    name: 'Londres',
    slug: 'londres',
    shield: null,
    placeholder: 'BAKER STREET',
    hasSecondaryLine: false,
    extraFields: [
      {
        key: 'postcode',
        label: 'Código postal',
        placeholder: 'W1U',
        defaultValue: 'W1U',
        maxLength: 10,
      },
    ],
  },
  {
    id: 'paris',
    name: 'París',
    slug: 'paris',
    shield: null,
    placeholder: 'RUE DE RIVOLI',
    hasSecondaryLine: false,
    extraFields: [
      {
        key: 'arrondissement',
        label: 'Distrito (arrondissement)',
        placeholder: '8e Arrt',
        defaultValue: '',
        maxLength: 10,
      },
    ],
  },
  {
    id: 'rome',
    name: 'Roma',
    slug: 'roma',
    shield: null,
    placeholder: 'VIA DEL CORSO',
    hasSecondaryLine: false,
    extraFields: [],
  },
  {
    id: 'dublin',
    name: 'Dublín',
    slug: 'dublin',
    shield: null,
    placeholder: 'SRÁID UÍ CHONAILL',
    hasSecondaryLine: true,
    extraFields: [
      {
        key: 'dublinSecondary',
        label: 'Nombre en inglés',
        placeholder: "O'Connell Street",
        defaultValue: "O'Connell Street",
        maxLength: 50,
      },
    ],
  },
  {
    id: 'berlin',
    name: 'Berlín',
    slug: 'berlin',
    shield: null,
    placeholder: 'Unter den Linden',
    hasSecondaryLine: false,
    extraFields: [],
  },
  {
    id: 'stockholm',
    name: 'Estocolmo',
    slug: 'estocolmo',
    shield: null,
    placeholder: 'Drottninggatan',
    hasSecondaryLine: true,
    extraFields: [
      {
        key: 'stockholmSecondary',
        label: 'Barrio (kvarter)',
        placeholder: 'Norrmalm',
        defaultValue: 'Norrmalm',
        maxLength: 50,
      },
    ],
  },
  {
    id: 'lisbon',
    name: 'Lisboa',
    slug: 'lisboa',
    shield: null,
    placeholder: 'RUA AUGUSTA',
    hasSecondaryLine: false,
    extraFields: [],
  },
];

export const DEFAULT_CITY_ID = 'madrid';

export const getCity = (id) =>
  CITIES.find((city) => city.id === id) ||
  CITIES.find((city) => city.id === DEFAULT_CITY_ID);
