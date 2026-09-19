import { LONDON_BOROUGHS, getBorough } from './londonBoroughs';

test('every borough has the required fields', () => {
  LONDON_BOROUGHS.forEach((borough) => {
    expect(borough.id).toBeTruthy();
    expect(borough.name).toBeTruthy();
    expect(['banded', 'single']).toContain(borough.layout);
    expect(typeof borough.showPostcode).toBe('boolean');
  });
});

test('borough ids are unique', () => {
  const ids = LONDON_BOROUGHS.map((borough) => borough.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test('getBorough returns the matching borough', () => {
  expect(getBorough('city-of-london').id).toBe('city-of-london');
});

test('getBorough falls back to City of Westminster for an unknown id', () => {
  expect(getBorough('nonexistent-borough').id).toBe('city-of-westminster');
});
