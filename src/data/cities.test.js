import { CITIES, getCity } from './cities';

test('every city has the required fields', () => {
  CITIES.forEach((city) => {
    expect(city.id).toBeTruthy();
    expect(city.name).toBeTruthy();
    expect(city.slug).toBeTruthy();
    expect(city.shield === null || typeof city.shield === 'string').toBe(true);
    expect(Array.isArray(city.extraFields)).toBe(true);
  });
});

test('city ids are unique', () => {
  const ids = CITIES.map((city) => city.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test('extraField keys are unique across all cities (App.js keeps one flat extraValues object)', () => {
  const keys = CITIES.flatMap((city) => city.extraFields.map((field) => field.key));
  expect(new Set(keys).size).toBe(keys.length);
});

test('getCity returns the matching city', () => {
  expect(getCity('berlin').id).toBe('berlin');
});

test('getCity falls back to Madrid for an unknown id', () => {
  expect(getCity('nonexistent-city').id).toBe('madrid');
});
