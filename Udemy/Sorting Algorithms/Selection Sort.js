// function SelectionSort(arr) {
//   console.log("selection sort");
//   for (var i = 0; i < arr.length; i++) {
//     var lowest = i;
//     for (var j = i+1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }

//     if(i !== lowest){
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }

//   }
//   return arr;
// }
// SelectionSort([34, 22, 10, 19, 17]);

function SelectionSort(arr) {
  console.log("selection sort");
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }
  console.log('array',arr);
  return arr;
}
SelectionSort([34, 22, 10, 19, 17]);

//Time Complexity
//Big O(n^2)