// write a recursive function called isPalindrome which returns true
// if the string passed to it is a isPalindrome(reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome (stringValue){
    console.log('ispalindrome',stringValue);
    // Base Case 
    if(stringValue.length <=1 ){
        return true;
    }
    // Recursive case
    const firstChar = stringValue[0];
    const lastChar = stringValue[stringValue.length-1];
    
    if(firstChar === lastChar){
        const middlepart =stringValue.slice(1,-1);
        return isPalindrome(middlepart);
    }
    else{
        return false;
    }
}
isPalindrome('tacocat');