// write a function called minSubArrayLen which accepts two parameters
// an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of
// which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.


//My Solution
function minSubArrayLen(nums, target) {
  let minLength = Infinity;
  console.log('mi',minLength);
  let start = 0;
  let end = 0;
  let sum = 0;

  while (start < nums.length) {
    if (sum < target && end < nums.length) {
      sum += nums[end];
      end++;
    } else if (sum >= target) {
      minLength = Math.min(minLength, end - start);
      sum -= nums[start];
      start++;
    } else {
      break;
    }
  }
  console.log('minlength',minLength);
  return minLength === Infinity ? 0 : minLength;
}
minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
