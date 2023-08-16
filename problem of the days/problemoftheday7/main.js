function getLeader(arr) {
  const n = arr.length;
  let currentLeader = arr[n - 1];
  const leaderno = [currentLeader];

  // Iterate through the array from right to left
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] >= currentLeader) {
      currentLeader = arr[i];
      leaderno.push(currentLeader);
    }
  }

  return leaderno.reverse();
}

const myarr = [16, 17, 4, 3, 5, 2];
const leaderArray = getLeader(myarr);

console.log("Input array:", myarr);
console.log("leaderno:", leaderArray);
