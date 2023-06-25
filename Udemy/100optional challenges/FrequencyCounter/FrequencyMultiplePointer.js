// Implement a function called areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among
// the arguments passed in.
// you can solve this using the frequency counter pattern OR the multiple pointers
// pattern.

// naive solution
function areThereDuplicates(x) {
  let emptyobj1 = {};
  for (let i = 0; i < arguments.length; i++) {
    emptyobj1[arguments[i]]
      ? (emptyobj1[arguments[i]] += 1)
      : (emptyobj1[arguments[i]] = 1);
  }
  for (let j = 0; j < Object.keys(emptyobj1).length; j++) {
    let ValuesOfObj= Object.values(emptyobj1)[j]
    if (ValuesOfObj >= 2) {
      return true;
    }
  }
  return false;
}
areThereDuplicates(1, 2, 4, 4);

//refactor solution 
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }
