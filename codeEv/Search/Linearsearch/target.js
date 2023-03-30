function target(n, t) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] === t) {
      return i;
    }
  }
  return -1;
}
let n = [-5, 2, 10, 4, 6];
let t = 10;
// target(n,t)
console.log(target(n, t));

// time complexity
// Big-(O) = O(n)