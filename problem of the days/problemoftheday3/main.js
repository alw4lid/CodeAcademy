/* Rule == 1/3 * Ah */
/* A = Area */
/* h = Height */

const Volume = (h, r) => {
  const v = (1 / 3) * Math.PI * r ** 2 * h;
  return v;
};
console.log(Volume(7, 4));
