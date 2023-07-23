// write a recursive function called someRecursive which accepts an
// array and a callback. The function returns true if a single value in The
// array returns true when passed to the callback. Otherwise it returns false.
function someRecursive(arr,callback){
    console.log('someRecursivefunction');

    // Base case --> If the array is empty--->return false
    if(arr.length === 0 ){
        return false;
    }


    if(callback(arr[0])){
        return true;
    }
    else{
        return someRecursive(arr.slice(1),callback)
    }
}

const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4],isOdd);
someRecursive([4, 6, 8],isOdd);