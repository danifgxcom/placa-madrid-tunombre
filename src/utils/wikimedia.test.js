import { wikimediaThumbnail } from './wikimedia';

test('converts a Commons original URL into a thumbnail URL', () => {
  const original = 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Calle_de_Cervantes_-_Street_name_plate_in_Madrid.jpg';
  expect(wikimediaThumbnail(original, 500)).toBe(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Calle_de_Cervantes_-_Street_name_plate_in_Madrid.jpg/500px-Calle_de_Cervantes_-_Street_name_plate_in_Madrid.jpg'
  );
});

test('snaps an arbitrary width up to the nearest Wikimedia-allowed standard width', () => {
  const original = 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Foo.jpg';
  expect(wikimediaThumbnail(original, 480)).toContain('/500px-Foo.jpg');
  expect(wikimediaThumbnail(original, 200)).toContain('/250px-Foo.jpg');
});

test('returns the input unchanged when it does not match the expected Commons pattern', () => {
  expect(wikimediaThumbnail('https://example.com/photo.jpg')).toBe('https://example.com/photo.jpg');
});
