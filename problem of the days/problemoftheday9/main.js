function CountSubstring(s) {
  const n = s.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let lowercaseCount = 0;
    let uppercaseCount = 0;

    for (let j = i; j < n; j++) {
      if (s[j] === s[j].toLowerCase()) {
        lowercaseCount++;
      } else {
        uppercaseCount++;
      }

      if (lowercaseCount === uppercaseCount) {
        count++;
      }
    }
  }

  return count;
}

// Test the function with the given input
const inputString = "WomensDAY";
const output = CountSubstring(inputString);
console.log("There are", output, "substrings of the given string");
