// write a recursive function called flatten which accepts an arrays
// and return new array with all values flattened.
function flatten(arr){
    // console.log('arr',arr.flat(Infinity));
    const flattened = [];
    for(let i = 0; i < arr.length ; i++){
        if(Array.isArray(arr[i])){
            const flattenedSubArray = flatten(arr[i]);
            flattened.push(...flattenedSubArray);
        }
        else{
            flattened.push(arr[i]);
        }
    }
    console.log('flattened',flattened);
    return flattened;
}   
flatten([1, 2, 3, [4, 5] ]);