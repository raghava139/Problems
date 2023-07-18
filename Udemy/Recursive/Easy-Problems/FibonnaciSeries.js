// write a recursive function called fib which accepts a number and
// returns the nth number in the Fibonacci sequence, Recall that the 
// Fibonacci  sequence is the sequence of whole numbers 1,1,2,3,5,8,... which
// starts with 1 and 1, and where every number thereafter is equal to the sum 
// of the previous two numbers.

// function fib(n) {
//  console.log('fib');
//    // Base cases---->Return 1 for the first two numbers in the Fibonacci sequence
//         if(n===1 || n===2){
//             return 1;
//         }
//     // Recursive call---> fibonacci Formula----> Fn=F(n-1) + F(n-2);
//         return fib(n-1) + fib(n-1);
// }
// fib(4);

// UDEMY SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}