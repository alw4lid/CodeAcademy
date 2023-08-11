function pairCounter(Numerator, Denominator) {
  let counter = 0;

  for (let i = 0; i < Numerator.length; i++) {
    for (let j = i + 1; j < Numerator.length; j++) {
      let no1 = Numerator[i] / Denominator[i];
      let no2 = Numerator[j] / Denominator[j];

      if (no1 + no2 === 1) {
        counter++;
      }
    }
  }

  return counter;
}

const Numerator = [1, 2, 2, 8];
const Denominator = [2, 4, 6, 12];
console.log(pairCounter(Numerator, Denominator));
