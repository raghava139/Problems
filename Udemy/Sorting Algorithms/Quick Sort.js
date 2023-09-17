function Pivot(arr, start = 0, end = arr.length + 1) {
  console.log("quick sort", arr);

  //   function swapFunc(array, i, j) {
  //     var temp = array[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }

  const swapFunc = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  var pivotT = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivotT > arr[i]) {
      swapIdx++;
      swapFunc(arr, swapIdx, i);
      console.log("array inside", arr);
    }
  }
  swapFunc(arr, start, swapIdx);
  console.log("swapinde", swapIdx);
  console.log("array oustide", arr);

  return swapIdx;
}
// Pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quicksort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = Pivot(arr, left, right);
    //left
    let leftValue = quicksort(arr, left, pivotIndex - 1);
    //right
    let RightValue = quicksort(arr, pivotIndex + 1, right);
  }
  return arr;
}
quicksort([4, 6, 9, 1, 2, 5]);
