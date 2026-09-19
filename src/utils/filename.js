// Same sanitization behavior as before extraction (including that it strips
// accented characters, e.g. "Alcalá" -> "Alcal") — unchanged on purpose.
export function sanitizeForFilename(str) {
  return (str || '').trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').toLowerCase();
}

export function buildFilename(city, streetName, extraValues, extraParts = []) {
  const parts = [sanitizeForFilename(streetName)];

  for (const field of city.extraFields) {
    parts.push(sanitizeForFilename(extraValues[field.key] ?? field.defaultValue));
  }

  for (const part of extraParts) {
    parts.push(sanitizeForFilename(part));
  }

  const suffix = parts.filter(Boolean).join('-');
  return suffix ? `calle-${city.slug}-${suffix}.png` : `calle-${city.slug}.png`;
}
