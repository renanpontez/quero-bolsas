export function sortByCollegeName(a, b) {
  if (a.university.name < b.university.name)
     return -1;
  if (a.university.name > b.university.name)
    return 1;
  return 0;
}