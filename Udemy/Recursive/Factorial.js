// Normal Way
// function Factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     // let value= i;
//     total *= i;
//   }
//   return total;
// }
// Factorial(3);

function Factorial(num) {
  if (num === 1) return 1;
    let first = num;
    // let second = num * Factorial(num-1);
  return num * Factorial(num - 1);
}
Factorial(10);