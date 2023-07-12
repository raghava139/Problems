// write a function called sameFrequency.Given two positive integers,
// find out if the two numbers have the same frequency of digits.

//Naive Solution
function sameFrequency(string1, string2) {
  let FirstObject = {};
  let SecondObject = {};

  let firstString = `${string1}`;
  let secondString = `${string2}`;
  for (let x of firstString) {
    FirstObject[x] ? (FirstObject[x] += 1) : (FirstObject[x] = 1);
    
  }
  for (let y of secondString) {
    SecondObject[y] ? (SecondObject[y] += 1) : (SecondObject[y] = 1);
  }
  for (let Key in FirstObject) {
    console.log(FirstObject[Key])
    if (FirstObject[Key] != SecondObject[Key]) {
      return false;
    }
  }
  console.log('first-solution',FirstObject)
  console.log('second-solution',SecondObject)
  return true;
}
sameFrequency(122, 221);


///refactor solution
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
  
//   let countNum1 = {};
//   let countNum2 = {};
  
//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
  
//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
  
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }
 
//   return true;
// }