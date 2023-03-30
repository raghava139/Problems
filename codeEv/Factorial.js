function Factorial(n) {
  let result = 1;
  for (i = 2; i <= n; i++) {
    let first =result
    result = result * i;
  }
  return result;
}
// palindrome();
// console.log(palindrome(2));
console.log(Factorial(4));//4*3*2*1=24

// timecomplexity
// big=O(n)