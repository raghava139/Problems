// write a recursive function called reverse which accepts a
// string and returns a new string in reverse

// example
// reverse('awesome') // 'emosewa'

//functionality
function reverse(stringValue){
    console.log('reverse-function',stringValue.length);
    
    // Base Case
    if(stringValue.length <=1 ){
        return stringValue;
    }

    // recursive case
    return stringValue.slice(-1) + reverse(stringValue.slice(0,-1));
}
console.log("value",reverse("awesome"));