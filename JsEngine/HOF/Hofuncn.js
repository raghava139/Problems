//reduce tips
let arr = [1, 3, 5, 6, 4];

// function TestLoop() {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(TestLoop());

// const RedFunc = arr.reduce(function (accurate, current) {
//   accurate = accurate + current;
//   return accurate;
// }, 0);

// console.log(RedFunc);

let TestForReduce = [
  {
    firstName: "raghava",
    age: 25,
  },
  {
    firstName: "rajesh",
    age: 28,
  },
  {
    firstName: "dinesh",
    age: 26,
  },
  {
    firstName: "kiran",
    age: 28,
  },
];

// let ageCalcu = TestForReduce.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(ageCalcu);

// // filter
// let nameCalc = TestForReduce.filter((Main) => Main.age > 26).map(
//   (x) => x.firstName
// );
// console.log(nameCalc);

// //reduce
// let GetNames = TestForReduce.reduce((acc, curr, index) => {
//   if (curr.age > 26) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(GetNames);

//without methods

// function basedOnLoop() {
//   let EmptyArray = [];
//   for (let i = 0; i < TestForReduce.length; i++) {
//     console.log(TestForReduce[i].age);
//     if (TestForReduce[i].age > 26) {
//       EmptyArray.push(TestForReduce[i]?.firstName);
//     }
//   }
//   return EmptyArray;
// }
// console.log(basedOnLoop());
