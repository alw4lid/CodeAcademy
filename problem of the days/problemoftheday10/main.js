function containsAllInRange(arr, a, b) {
  const rangeArray = [];

  for (let i = a; i <= b; i++) {
    rangeArray.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    if (rangeArray.indexOf(arr[i]) === -1) {
      return false;
    }
  }

  return true;
}

const array = [3, 5, 4, 6, 7];
const a = 3;
const b = 7;
const result = containsAllInRange(array, a, b);

console.log(
  result
    ? "Array contains all elements in the range."
    : "Array does not contain all elements in the range."
);
