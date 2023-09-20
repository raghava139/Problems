//get Digit Number(using index)
function getDigit(num, i) {
//   console.log('getdigit',Math.floor(Math.abs(num)/Math.pow(10,i)) % 10)
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// getDigit(7323,3);

// get digit count means length
function digitCount(num) {
  if (num == 0) return 1;
//   console.log('digitcount',Math.floor(Math.log10(Math.abs(num))) + 1);
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(1222);

//find the max value of an array
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  console.log("maxdigit", maxDigits);
  return maxDigits;
}
// mostDigits([23,567,89,1234567890,90]);

function radixSort(nums) {
  let maxdigitcount = mostDigits(nums);

  for (let k = 0; k < maxdigitcount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digitValue = getDigit(nums[i], k);
      digitBuckets[digitValue].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
    console.log("digit buckets", digitBuckets);
  }
  console.log("nums", nums);
  return nums;
}
radixSort([23, 345, 567, 12, 2345, 9852]);
