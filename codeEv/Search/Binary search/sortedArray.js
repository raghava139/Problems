function sortedArray(arr,target){
    let leftIndex = 0
    let RightIndex =arr.length - 1
    
    while(leftIndex<=RightIndex){
        let middleIndex=Math.floor((leftIndex+RightIndex)/2)

        if(target===arr[middleIndex]){
            return middleIndex;
        }
        if(target< arr[middleIndex]){
            RightIndex= middleIndex - 1
        }
        else{
            leftIndex=middleIndex + 1
        }
    }
    return -1
}
let arr=[-5,2,4,6,10]
let target=10
console.log(sortedArray(arr,target));


// time complexity
// Big-O = O(log n) means if input size reduced by half

