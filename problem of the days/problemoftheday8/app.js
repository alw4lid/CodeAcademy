function Linklist(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function Revers(inputArray, k) {
  const array = [...inputArray];

  Linklist(array, 0, k - 1);
  Linklist(array, k, array.length - 1);

  return array;
}

// Example input array: [1, 2, 3, 4, 5]
const inputArray = [1, 2, 3, 4, 5];
const k = 2;

const outputArray = Revers(inputArray, k);

console.log(outputArray.join(", "));
