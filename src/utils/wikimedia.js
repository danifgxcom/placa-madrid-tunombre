// Wikimedia only serves hotlinked (direct, non-PHP) thumbnail requests at a
// fixed set of "standard" widths - anything else returns a 400 error.
// https://www.mediawiki.org/wiki/Common_thumbnail_sizes
const STANDARD_WIDTHS = [20, 40, 60, 120, 250, 330, 500, 960, 1280, 1920, 3840];

// Converts a full-resolution Commons file URL into a thumbnail URL, so the
// app doesn't ship multi-megabyte originals just to show a small preview.
export function wikimediaThumbnail(url, width = 500) {
  const match = url.match(/^(https:\/\/upload\.wikimedia\.org\/wikipedia\/commons)\/([0-9a-f])\/([0-9a-f]{2})\/(.+)$/);
  if (!match) return url;
  const [, base, a, bb, filename] = match;
  const snapped = STANDARD_WIDTHS.find((standard) => standard >= width) || STANDARD_WIDTHS[STANDARD_WIDTHS.length - 1];
  return `${base}/thumb/${a}/${bb}/${filename}/${snapped}px-${filename}`;
}
