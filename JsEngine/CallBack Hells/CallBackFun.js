// 0---> importance of CallBacks ( make an asynchronous function)
//1---->  issues with callbacks
// a.) callback hell  ( nested callbacks more) (Pyramid of Doom)
// b.) Inversion of control  ( control wil goes to previous function )



// Callback hell, also known as "pyramid of doom," 
// issue
// setTimeout(() => {
//     console.log("Step 1");
//     setTimeout(() => {
//       console.log("Step 2");
//       setTimeout(() => {
//         console.log("Step 3");
//         // ... more nested callbacks
//       }, 1000);
//     }, 1000);
//   }, 1000);
  
// solution
async function CallBacks(callback) {
  try {
    // console.log('callback',callback())
    const Response = await fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => console.log("data", res))
      .catch((err) => console.log("error"));
    
    
      callback();
  } catch (err) {
    console.log("err", err);
  }
}
CallBacks(function () {
  console.log("function Completed");
  
});
