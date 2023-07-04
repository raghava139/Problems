// write a function called isSubsequence
// which takes in two strings and checks whether the characters in the first string
// form a Subsequence of the characters in the second string.In other words,
// the function should check whether the characters in the first string
// appear somewhere in the second string, without their order changing.

// function isSubsequence(firstString, secondString) {
//   console.log("first", firstString);
//   console.log("second", secondString);

//   let first = 0;
//   let emptyArray = [];
//   for (let i = 0; i < secondString.length; i++) {

//     let checkFirstStringIndex=firstString[first]
//     let checkSecondStringIndex=secondString[i]

//     if (firstString[first] == secondString[i]) {
//       emptyArray.push(i);
//       first++; 
//     }

//   }
// }
// isSubsequence("abc", "acb");

function isSubsequence(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
  
    let i = 0; 
    let j = 0; 

    while (i < len1 && j < len2) {
        let string1 = str1[i];
        let string2 = str2[j];
      if (str1[i] === str2[j]) {
        i++;
      }
      j++;
    }
    return i === len1;
  }
  isSubsequence('abc', 'acrabadabrca');