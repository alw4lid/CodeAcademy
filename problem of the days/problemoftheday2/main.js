var userArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function twoSum(Array, no) {
  for (i = 0; i < Array.length; i++) {
    for (a = i + 1; a < Array.length; a++) {
      if (Array[i] + Array[a] === no) {
        console.log(" " + Array[i] + " + " + Array[a]);
      }
    }
  }
}
twoSum(userArray, 19);
