// write a function which takes in a string and returns counts of each character in the string.
// Your PIN number is 1234!
// Break_It("Your PIN number is 1234!");
Break_It("Your PIN number is 1234!");
function Break_It(str){
    console.log('dd',str)
    // Break It Down--->
    // console.log('str',str);

    //1--> make an object to return at end
    //2--> loop over string, for each character...
        //2.1--> if the char is a number/letter AND is a key in object, add one to count
        //2.2--> if the char is a number/letter AND not in object , add it to object and set value to 1,
        //2.3--> if the character is something  else(space, period,etc...,) don't do anything
    //3--> return object at end

//starts
    //1--> make an object to return at end
    var result={};
    // 2--> loop over string, for each character...
    for(var i=0; i < str.length; i++){
        var char = str[i].toLowerCase();
        //2.1--> if the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0){
            result[char]++;
        }
        //2.2--> if the char is a number/letter AND not in object , add it to object and set value to 1,
        else{
            result[char]=1;
        }
        //2.3--> if the character is something  else(space, period,etc...,) don't do anything
    }
    //3--> return object at end
    return result;
}