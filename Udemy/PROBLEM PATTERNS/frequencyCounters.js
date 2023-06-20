// write a function called same, which accepts two arrays the function should
// return true if every value in the array has it's corresponding value squared
// in the second array.The Frequency of values must be the same.


// with nested loops in jquery  
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i=0;i<arr1.length;i++){
//         let correctIndex = arr2.indexOf(arr1[i]**2)
//         if(correctIndex === -1){
//              return false;
//         }
//         arr2.splice(correctIndex,1);
//     }
//     return true;
// }
// same([1,2,3,2],[9,1,4,4]);


//fast code without nested loops 
function same(arr1,arr2){
        if(arr1.length !== arr2.length){
            return false;
        }
        let FrequencyCounter1={};
        let FrequencyCounter2={};
        for(let val of arr1){
            FrequencyCounter1[val] =(FrequencyCounter1[val] || 0 ) + 1
        }
        for(let val of arr2){
            FrequencyCounter2[val] = (FrequencyCounter2[val] || 0) +1
        }
        for(let key in FrequencyCounter1){
            if(!(key ** 2 in FrequencyCounter2)){
                return false;
            }
            if(FrequencyCounter2[key ** 2] !== FrequencyCounter1[key]){
                return false;
            }
        }
        console.log('frequency counter-1',FrequencyCounter1)
        console.log('frequency counter-2',FrequencyCounter2)
        return true;
}
same([1,2,3,2],[9,1,4,4])