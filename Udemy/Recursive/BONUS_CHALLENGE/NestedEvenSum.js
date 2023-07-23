// write a recursive function called nestedEvenSum.
// Return the sum of all even numbers is an object which may 
// contain nested objects.

function nestedEvenSum(obj){
    console.log('nestedevensum',obj);
    let sum = 0;
    function traverse(obj){
        for(let key in obj){
            console.log('key',key);
            console.log('obj',obj);
            if(typeof obj[key] === "object"){
                console.log('obj[key] inside',obj[key]);
                traverse(obj[key]);
            }
            else if(typeof obj[key] === "number" &&  obj[key] % 2 === 0){
                sum += obj[key];
            }
        }
    }
    traverse(obj);
    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
};
  
nestedEvenSum(obj1);