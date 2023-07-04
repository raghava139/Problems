// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the
// length of the longest substring with all distinct characters


//my solution
function findLongestSubstring(String) {
  let start = 0;
  let longestLength = 0;
  const charMap = {};
  for (let end = 0; end < String.length; end++) {
    const currentChar = String[end];

    if (charMap[currentChar] >= start) {
      start = charMap[currentChar] + 1;
    }
    charMap[currentChar] = end;

    const currentLength = end - start + 1;
    longestLength = Math.max(longestLength, currentLength);
  }
  return longestLength;
}
findLongestSubstring("thisisawesome");
