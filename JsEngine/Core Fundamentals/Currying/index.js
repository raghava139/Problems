// currying
// 1--> currying in js transform a function with multiple arguments into an nested series of functions
// 2--> each taking a single agruemnt  ---> curryAdd(1)(2)(3);
// 3--> currying helps you avoid passing the same variable  multiple times --->return function(j,h)
// 4--> It helps you create a Higher order functions ( HOF )--->
// For  4th point ---> Higher Order Function
// function higherOrderFunction(callback, value) {
//   return callback(value);
// }

// function square(x) {
//   return x * x;
// }

// const result = higherOrderFunction(square, 5);
// console.log(result); //25


// let samplefunc=function(x,y){
//     console.log(x);
//     console.log(y);
//     console.log('value',x*y)//12
// }

// currying
// let takeExample = samplefunc.bind(this,2)
// takeExample(6);

function secondSample(h,j){
    console.log('h',h);
    console.log('j-out',j);
    return function(j,h){
        console.log('j-insd',j);
        console.log('h-insd',h);
        return function(k){
            // console.log('j-nest1',k());
            k();

            return function(varible){
                console.log('var',varible)
            }
        }
    }
}

let takeExampleSecond= secondSample(10,8);
function great1(){
    console.log('great');
}
let taketest = 'raghava'
takeExampleSecond(2,12)(great1)(taketest);


// function great1(){
//   console.log('great');
// }
// let taketest = 'raghava'

// let takeExampleSecond= secondSample(10,8)(2)(great1)(taketest);


//let's take an new example
// Here It is for Normal Functions
// With normal functions
// function processDataCurried(transformFunction) {
//     console.log('transformFunction',transformFunction);
//     return function (validateFunction) {
//         console.log('validateFunction',validateFunction);
//       return function (data) {
//         Transform the data
//         console.log('data',data)
//         const transformedData = transformFunction(data);
//         console.log('transformedData',transformedData);
//         Validate the transformed data
//         const isValid = validateFunction(transformedData);
  
//         console.log('isvalid',isValid)
//         Process the data based on validation
//         if (isValid) {  
//           return transformedData;
//         } else {
//           throw new Error('Data validation failed');
//         }
//       };
//     };
//   }

// Example transform function: Convert an array of strings to uppercase
// function transformToUppercase(data) {
//     return data.map((item) => item.toUpperCase());
//   }
  
//   Example validate function: Check if all elements are non-empty strings
//   function validateNonEmptyStrings(data) {
//     return data.every((item) => typeof item === 'string' && item.trim() !== '');
//   }
// Usage
// const processUpperCaseStrings = processDataCurried(transformToUppercase);

// Partial application: Apply the transform function
// const processAndValidate = processUpperCaseStrings(validateNonEmptyStrings)

// const inputArray = ['apple', 'banana', 'cherry'];
// const result = processAndValidate(inputArray);

// console.log('final-result',result);


// Here it is Arrow Functions for currying
// With currying
// const processDataCurried = (transformFunction,s) => validateFunction => data => {
//     // Transform the data
//     console.log("transform",transformFunction);
//     console.log('validatoin',validateFunction)
//     console.log('data',data)
//     console.log('second arg',s)
//     const transformedData = transformFunction(data);
  
//     // Validate the transformed data
//     const isValid = validateFunction(transformedData);
  
//     // Process the data based on validation
//     if (isValid) {
//       // Perform additional processing if needed
//       // ...
  
//       return transformedData;
//     } else {
//       throw new Error('Data validation failed');
//     }
//   };
  
//   // Example transform function: Convert an array of strings to uppercase
//   const transformToUppercase = (data) => data.map((item) => item.toUpperCase());
  
//   // Example validate function: Check if all elements are non-empty strings
//   const validateNonEmptyStrings = (data) => data.every((item) => typeof item === 'string' && item.trim() !== '');
  
//   // Usage
//   const processUpperCaseStrings = processDataCurried(transformToUppercase,'testing');
  
//   // Partial application: Apply the transform function
//   const processAndValidate = processUpperCaseStrings(validateNonEmptyStrings);
  
//   // Full application: Process and validate data
//   const inputArray = ['apple', 'banana', 'cherry'];
//   const result = processAndValidate(inputArray);
  
//   console.log(result); // If valid, prints: ['APPLE', 'BANANA', 'CHERRY']
  
