import { sanitizeForFilename, buildFilename } from './filename';

test('sanitizeForFilename lowercases and dashes spaces', () => {
  expect(sanitizeForFilename('Calle Mayor')).toBe('calle-mayor');
});

test('sanitizeForFilename strips accented characters (existing behavior)', () => {
  expect(sanitizeForFilename('Calle de Alcalá')).toBe('calle-de-alcal');
});

test('buildFilename with no extra fields', () => {
  const city = { slug: 'madrid', extraFields: [] };
  expect(buildFilename(city, 'Calle Mayor', {})).toBe('calle-madrid-calle-mayor.png');
});

test('buildFilename falls back to bare slug when street name is empty', () => {
  const city = { slug: 'madrid', extraFields: [] };
  expect(buildFilename(city, '', {})).toBe('calle-madrid.png');
});

test('buildFilename appends extra fields (London-shaped city)', () => {
  const city = {
    slug: 'londres',
    extraFields: [{ key: 'postcode', defaultValue: 'W1U' }],
  };
  const extraValues = { postcode: 'W1U' };
  expect(buildFilename(city, 'Baker Street', extraValues)).toBe('calle-londres-baker-street-w1u.png');
});

test('buildFilename appends extraParts after extraFields (e.g. a London borough name)', () => {
  const city = {
    slug: 'londres',
    extraFields: [{ key: 'postcode', defaultValue: 'W1U' }],
  };
  const extraValues = { postcode: 'W1U' };
  expect(buildFilename(city, 'Baker Street', extraValues, ['City of Westminster'])).toBe(
    'calle-londres-baker-street-w1u-city-of-westminster.png'
  );
});
