let Romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let s = "III";
console.log(s.length);

console.log(Romans.hasOwnProperty(s));
let y = parseInt("III");
console.log(y);
const app = function () {
  console.log(Romans);
};
app();
