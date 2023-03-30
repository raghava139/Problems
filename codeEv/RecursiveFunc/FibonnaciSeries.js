function Fibonnaci(n) {
  if (n < 2) {
    return n;
  }
  return Fibonnaci(n-1) + Fibonnaci(n-2)
}
// Fibonnaci();
console.log(Fibonnaci(8));
// console.log(Fibonnaci(5));


// time complexity
// O(n)-->iterative
// O(2^n)-->recursive

// In big cheat sheet big-O(2^n) is horrible when compared to big-O(n)
//it means recursive is not good solution for fibonnac series