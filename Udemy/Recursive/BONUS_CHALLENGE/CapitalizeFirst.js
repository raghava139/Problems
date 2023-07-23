// write a recursive function called capitalizeFirst,Given an Array
// of Strings, capitalize the first letter of each string in the Array.

function capitalizeFirst(arr){
        if(arr.length === 0){
            // base case
          return [];
        }
        else{
           let conditionArray = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
           //recursive call
            let restCapital = capitalizeFirst(arr.slice(1));
            return [conditionArray, ...restCapital];
        }
}
capitalizeFirst(['car','taco','banana']);
// ['car','taco','banana']