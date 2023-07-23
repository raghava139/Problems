// Write a recursive function called capitalizeWords. 
// Given an array of words,
// return a new array containing each word capitalized.


function capitalizeWords(arr){
     console.log('capital the all words',arr);

     if(arr.length === 0){
        return [];
     }
     else{
        let conditionArray = arr[0].toUpperCase();
        let restCapital = capitalizeWords(arr.slice(1));

        return [conditionArray , ...restCapital];
     }
}
capitalizeWords(['i', 'am', 'learning', 'recursion']);