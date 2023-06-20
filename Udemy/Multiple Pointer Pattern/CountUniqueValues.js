// Multiple Pointers ----> countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array,
// but it will always be sorted.

// my Solution
// function countUniqueValues(MyArray) {
//   let emptyObj1 = {};

//   for (let i = 0; i < MyArray.length; i++) {
//     let letter = MyArray[i];
//     emptyObj1[letter] ? (emptyObj1[letter] += 1) : (emptyObj1[letter] = 1);
//   }
//   let keysLength = 0;
//   for (let keys in emptyObj1) {
//     if (emptyObj1.hasOwnProperty(keys)) {
//       keysLength++;
//     }
//   }
//   return keysLength;
// }
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

// Refactor solution from udemy

function countUniqueValues(arr){
  if (arr?.length == 0) return 0;
  var i = 0;
  for(var j = 1; j < arr?.length; j++){
    // console.log('arr',i)
    if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j];
    }
  }
  console.log(i+1);
  // console.log('i',i+1,'j',j);
  return i+1;

}
countUniqueValues([1,1,2,3,3,4,5,6,6,7])
// countUniqueValues([])