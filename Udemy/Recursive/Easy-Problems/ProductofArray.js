// write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// my solution
// function productOfArray(arr) {  
//     console.log('array',arr);
//     if(arr.length == 0){
//         return null
//     }
//     else{
//         const someVar = arr.reduce((a,b)=>{
//             return a*b
//         })
//         return someVar;
//     }
// }
// productOfArray([1, 2, 3]);
// time complexity ---> o(n)

// chatgpt solution
function productOfArray(arr) {
    if (arr.length === 0) {
      return 1; // Base case: empty array has a product of 1
    } else {
      return arr[0] * productOfArray(arr.slice(1)); // Recursive case
    }
  }
productOfArray([1,2,3]);
