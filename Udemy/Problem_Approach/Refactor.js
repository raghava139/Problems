// write a function which takes in a string and returns counts of each character in the string.

var c = console.log.bind("string")

// SLOW Performance
function Refactor(str){
    var obj={};
    for(var i = 0 ; i< str.length; i++ ){
        var char = str[i].toLowerCase();
        if(/[a-z0-9]/.test(char)){
                if(obj[char]>0){
                    obj[char]++;
                }
                else{
                    obj[char]=1;
                }
        }
    }
    c('data',obj)
    return obj;
}
Refactor("Your PIN number is 1234!");

// SPEED PERFORMANCE
// function SpeedOfRefactor(str){
//     var obj={};
//     for(var char of str){
//         if(IsAlphaNumeric(char)){
//             char =char.toLowerCase();
//             obj[char]= ++obj[char] || 1
//         }
//     }
//     return obj;
// }
// SpeedOfRefactor("Your PIN number is 1234!");

// function IsAlphaNumeric(char) {
//     var code = char.charCodeAt(0);
//     if (!(code > 47 && code < 58) &&
//         !(code > 64 && code < 91) &&
//         !(code > 96 && code < 123)) {
//         return false;
//     }
//     return true;
// }
