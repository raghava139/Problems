// write a function called binarySearch which accepts a sorted array and
// a value and returns the index at which the value exists. Otherwise, return -1.
// example:--> binarySearch([1,2,3,4,5],2)//1

function binarySearch(arr,target) {
  console.log("binary search");

  let min = 0;
  let max = arr.length-1;
  console.log('min-->',min,'max-->',max);

  while(min <= max){
    let middle = Math.floor((min+max)/2);
    let currentElement = arr[middle];

    if(arr[middle] < target){
      min = middle + 1;
    }
    else if(arr[middle] > target){
      max = middle - 1; 
    }
    else{
      console.log('middle',middle);
      return middle;
    }
  }
  return -1;
}
binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],10);
