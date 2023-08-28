// Naive solution
// function BubbleSort(arr) {
//   console.log("bubble sort", arr);

//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       console.log(arr,arr[j],arr[j+1])
//         if(arr[j] > arr[j+1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
//   }
//   console.log('arr',arr);
//   return arr;
// }
// BubbleSort([37, 45, 29, 8]);

// Refactor
// function BubbleSort(arr) {
//   console.log("bubble sort", arr);

//   for (var i = arr.length; i > 0 ; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr,arr[j],arr[j+1])
//         if(arr[j] > arr[j+1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
//     console.log('one pass complete');
//   }
//   console.log('arr',arr);
//   return arr;
// }
// BubbleSort([37, 45, 29, 8]);

// Refactor with es6 2015
// function BubbleSort(arr) {
//   console.log("bubble sort", arr);
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);

//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//     console.log("one pass complete");
//   }
//   console.log("arr", arr);
//   return arr;
// }
// BubbleSort([37, 45, 29, 8]);

//optimized with noSwaps
function BubbleSort(arr) {
  console.log("bubble sort", arr);
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (var i = arr.length; i > 0; i--) {
    var noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false; 
      }
    }
    console.log("one pass complete");
    if (noSwaps) break;
  }
  console.log("arr", arr);
  return arr;
}
BubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
