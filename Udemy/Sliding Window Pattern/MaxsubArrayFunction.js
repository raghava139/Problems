// write a function called maxsubarraysum which accepts an array integers and a number called 'n'.
// The function should calculate the maximum sum of 'n'.
// consecutive elements in the array


//Naive Solution
// function MaxsubArrayFunction(arr, num) {
//   console.log("length", arr.length);
//   console.log("numValue", num);

//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;

//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   console.log('max',max)
//   return max;
// }
// MaxsubArrayFunction([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// Refactor Solution
function maxsubarraysum(arr , num){

    let maxSum = 0;
    let tempSum=0;

    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum=maxSum;
    for(let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum =  Math.max(maxSum,tempSum);
    }
    console.log('maxsum',maxSum);
    return maxSum;
}
maxsubarraysum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)