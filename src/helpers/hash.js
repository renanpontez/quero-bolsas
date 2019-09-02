export function hash(item) {
  let text = `${item.full_price}${item.course.name}${item.university.name}${item.start_date}`;
  let hash = 0;
  let chr;

  if (text.length === 0) return hash;

  for (var i = 0; i < text.length; i++) {
    chr = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  
  return hash;
}