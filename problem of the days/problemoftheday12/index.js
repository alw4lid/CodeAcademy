function alternatePositiveNegative(arr) {
  const positiveNumbers = [];
  const negativeNumbers = [];

  for (const num of arr) {
    if (num > 0) {
      positiveNumbers.push(num);
    } else {
      negativeNumbers.push(num);
    }
  }

  const finalArray = [];
  let i = 0;
  let j = 0;

  while (i < positiveNumbers.length && j < negativeNumbers.length) {
    finalArray.push(positiveNumbers[i]);
    finalArray.push(negativeNumbers[j]);
    i++;
    j++;
  }

  while (i < positiveNumbers.length) {
    finalArray.push(positiveNumbers[i]);
    i++;
  }

  while (j < negativeNumbers.length) {
    finalArray.push(negativeNumbers[j]);
    j++;
  }

  return finalArray;
}

const inputArr = [9, 4, -2, -1, 5, 0, -5, -3, 2];
const resultArr = alternatePositiveNegative(inputArr);
console.log(resultArr);
