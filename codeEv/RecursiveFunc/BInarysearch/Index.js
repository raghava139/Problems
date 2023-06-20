function recursive_binary_search(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  //base case infinity can stop
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  //target===Middleindex
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  // target is lessthan middleIndex then go to left half in an array
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } 
   // target is greaterthan middleIndex then go to right half in an array
  else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}
console.log(recursive_binary_search([-5, 2, 4, 6, 10], 10));
