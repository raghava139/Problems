// Using Normal Functions
// let sumFunc = function (a) {
//     console.log('a', a)
//     return function (b) {
//         console.log('b', b)
//         if (b) {
//             return sumFunc(a + b);
//         }
//         return a
//     }

// }
// console.log(sumFunc(1)(2)(3)(4)());

// Using Arrow Functions
// let sumFunc = (a) => {
//     console.log('a', a)
//     return  (b) => {
//         console.log('b', b)
//         if (b) {
//             return sumFunc(a + b);
//         }
//         return a
//     }

// }
// console.log(sumFunc(1)(2)(3)(4)());

// Using Single Line Arrow Functions
let sumFunc = (a) => (b) => b ? sumFunc(a+b) : a ;
console.log(sumFunc(1)(2)(3)(4)());