// write a function called linearsearch which accepts an array and
// a value and returns the index at which the value exists.If the value does
// not exist in the array, return -1.
// Don't use indexOf to implement the function!

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    var arrValue=arr[i];
    if (arrValue == target) {
      return i;
    }
  }
  return -1;
}
linearSearch([10, 15, 20, 25, 30], 15);
// complexity is ---> o(n)