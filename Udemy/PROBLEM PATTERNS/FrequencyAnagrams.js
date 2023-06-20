// Q.)Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman ?

function ValidAnagram(string1, string2) {
  let emptyObj1 = {};
  let emptyObj2 = {};

  if (string1.length !== string2.length) {
    return false;
  } else {
    for (let val of string1) {
      // emptyObj1[val] =(emptyObj1[val] || 0 ) + 1
      // console.log('val',val);
      emptyObj1[val] = (emptyObj1[val] || 0) + 1;
    }
    for (let value of string2) {
      emptyObj2[value] = (emptyObj2[value] || 0) + 1;
    }

    for (let key in emptyObj1) {
      // console.log('key',key);
      // console.log('object',emptyObj1);
      // console.log('emptyobj1',emptyObj1[key]);
      // console.log('emptyobj2',emptyObj2[key]);
      if (emptyObj1[key] !== emptyObj2[key]) {
        return false;
      }
    }
    return true;
  }
  // console.log('emptyobj---->1',emptyObj1);
  // console.log('emptyobj---->2',emptyObj2);
}
ValidAnagram("texttwisttime", "timetwisttext");
