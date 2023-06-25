// write a function called averagePair.
// Given a sorted array of integers and a target averagePair, determine if
//there is a pair of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the average target.

function averagePair(arr, target) {
  if (arr.length < 2) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2.0;
    if (average === target) {
      return true;
    }
    else if(average < target){
        left++;
    }
    else{
        right--;
    }
  }
  return false;
}
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19,50], 8);
