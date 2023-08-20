// Given a sortedArray of integers, write a function called search that accepts a values and returns the index 
// where the value passed to the function is located.
// If the value is not found, return -1

// naive solution--->linear search -time complexity--->o(n)
// function sortedArray(arr,val){
    
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]===val){
//             console.log(i)
//             return i;
//         }
//     }
//     return -1
// }
// sortedArray([2,3,5,6,8,10,16,145,32],145);


// REFACTOR SOLUTION --->binary search-->time complexity --->(logn)
function Search(arr,val){

    let min = 0;
    let max = arr.length-1;
     
    while(min <= max){
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle]
        
        if(arr[middle] < val){
            min = middle + 1;
        }
        else if(arr[middle] > val){
            max = middle - 1; 
        }
        else{
            console.log(middle);
            return middle;
        }
    }
    return -1
}
Search([2,3,5,6,8,10,145,16,32],145);
