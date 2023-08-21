function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

function longestPalindromicSubstring(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const palindrome1 = expandAroundCenter(s, i, i);
    const palindrome2 = expandAroundCenter(s, i, i + 1);

    if (palindrome1.length > longest.length) {
      longest = palindrome1;
    }
    if (palindrome2.length > longest.length) {
      longest = palindrome2;
    }
  }

  return longest;
}

const inputString = "aaabbaa";
const output = longestPalindromicSubstring(inputString);
console.log("Output:", output);
