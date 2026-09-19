// Real photos of real street signs, sourced from Wikimedia Commons (all
// CC BY / CC BY-SA / CC0, reusable with attribution). One verified photo per
// city, plus two London-borough-specific ones. Every URL below was resolved
// through the Commons API's imageinfo call (which only returns data for
// files that actually exist) before being added here.
export const CITY_REFERENCE_PHOTOS = {
  madrid: {
    // Not the illustrated ceramic tile that used to be here (that one is a
    // real Madrid sign too, but a different, historic commemorative style
    // from Barrio de las Letras - inconsistent to compare against the
    // modern blue plate this app models). This one shows the actual
    // official blue enamel plate.
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/01_Madrid_calle_del_Casino_by_Lou.jpg',
    title: 'Calle del Casino - placa azul oficial en Madrid',
    author: 'Lourdes Cardenal',
    license: 'CC BY-SA 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:01_Madrid_calle_del_Casino_by_Lou.jpg',
  },
  barcelona: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Carrer_del_Taulat_%28Barcelona%29%2C_Street_sign%2C_October_2023.JPG',
    title: 'Carrer del Taulat - placa real en Barcelona',
    author: 'Benoît Prieur',
    license: 'CC0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Carrer_del_Taulat_(Barcelona),_Street_sign,_October_2023.JPG',
  },
  valencia: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Carrer_de_les_Avellanes_de_Val%C3%A8ncia%2C_plaques.JPG',
    title: 'Carrer de les Avellanes - placas reales en Valencia',
    author: 'Joanbanjo',
    license: 'CC BY-SA 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Carrer_de_les_Avellanes_de_Val%C3%A8ncia,_plaques.JPG',
  },
  sevilla: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Plaque_Calle_Sevilla_F%C3%BAtbol_Club_-_S%C3%A9ville_%28ES61%29_-_2023-04-30_-_1.jpg',
    title: 'Placa real de una calle en Sevilla',
    author: 'Chabe01',
    license: 'CC BY-SA 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Plaque_Calle_Sevilla_F%C3%BAtbol_Club_-_S%C3%A9ville_(ES61)_-_2023-04-30_-_1.jpg',
  },
  bilbao: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Artetxe-kondearen-zumarkalea-street-sign-Bilbao.jpg',
    title: 'Placa real de Artetxe Kondearen Zumarkalea, Bilbao',
    author: 'Acediscovery',
    license: 'CC BY 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Artetxe-kondearen-zumarkalea-street-sign-Bilbao.jpg',
  },
  london: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Berwick_Street_sign_2026-01-08.jpg',
    title: 'Berwick Street - placa real en Londres',
    author: 'Matt Brown',
    license: 'CC BY 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Berwick_Street_sign_2026-01-08.jpg',
  },
  paris: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Avenue_des_Champs-%C3%89lys%C3%A9es_street_sign%2C_Paris%2C_France_-_20100619.jpg',
    title: 'Avenue des Champs-Élysées - placa real en París',
    author: 'Jebulon',
    license: 'CC BY-SA 3.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Avenue_des_Champs-%C3%89lys%C3%A9es_street_sign,_Paris,_France_-_20100619.jpg',
  },
  rome: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Piazza_della_Bocca_della_Verit%C3%A0_-_Street_sign_in_Rome.jpg',
    title: 'Piazza della Bocca della Verità - placa real en Roma',
    author: 'Mattes',
    license: 'CC BY-SA 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Piazza_della_Bocca_della_Verit%C3%A0_-_Street_sign_in_Rome.jpg',
  },
  dublin: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/College_Street_Dublin_street_sign_%282024%29.jpg',
    title: 'College Street - placa bilingüe real en Dublín',
    author: 'Darren J. Prior',
    license: 'CC BY 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:College_Street_Dublin_street_sign_(2024).jpg',
  },
  berlin: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Stra%C3%9Fenschild_Mariannenplatz%2C_Berlin-Kreuzberg.jpg',
    title: 'Mariannenplatz - placa real en Berlín',
    author: 'Christian Alexander Otto',
    license: 'CC BY 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Stra%C3%9Fenschild_Mariannenplatz,_Berlin-Kreuzberg.jpg',
  },
  stockholm: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Gatuskylt_Svartmangatan.jpg',
    title: 'Svartmangatan - placa real en Estocolmo',
    author: 'Holger.Ellgaard',
    license: 'CC BY-SA 3.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Gatuskylt_Svartmangatan.jpg',
  },
  lisbon: {
    // The previous photo (Praça do Município) was a real Lisbon sign too,
    // but a one-off illustrated commemorative panel (a painted ship scene)
    // for one specific square - not representative of an ordinary tile
    // sign, and not something this app can generate for an arbitrary
    // street name. This one is the typical style: a plain tile grid with a
    // painted floral/rope border, which is what Preview.css now models.
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/On_the_way_to_Belem_%2842483037361%29.jpg',
    title: 'Rua Cascais - azulejo real en Lisboa',
    author: 'Mike Steele',
    license: 'CC BY 2.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:On_the_way_to_Belem_(42483037361).jpg',
  },
};

export const BOROUGH_REFERENCE_PHOTOS = {
  'city-of-london': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Fleet_Street_sign%2C_London_%282014%29.JPG',
    title: 'Fleet Street - placa real, City of London',
    author: 'Another Believer',
    license: 'CC BY-SA 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Fleet_Street_sign,_London_(2014).JPG',
  },
  rbkc: {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Pembridge_Square_place_name_sign%2C_Bayswater%2C_June_2024.jpg',
    title: 'Pembridge Square - placa real, Royal Borough of Kensington and Chelsea',
    author: 'No Swan So Fine',
    license: 'CC BY-SA 4.0',
    sourcePage: 'https://commons.wikimedia.org/wiki/File:Pembridge_Square_place_name_sign,_Bayswater,_June_2024.jpg',
  },
};
