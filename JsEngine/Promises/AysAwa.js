// 1. what is async?
// 2. what is await?
// 3. how async await works behind the scences
// 4. Example of using async/await.
// 5. Error Handling
// 6. Interviews
// 7. async/await vs promise.then/.catch
// my bonus question
// 8. In browser how the asynchronous (async / await) works ?

//1.what is async ?
// async is a keyword
// this async function it always return promise.
// it should be using before function


// var testProm = new Promise((resolve,reject)=>{
//     resolve('new promise function')
// })
// async function AsynchrounsFunc() {
//   return testProm;
// }
// const test = AsynchrounsFunc();
// console.log('test',test)
// console.log('valuecheck')

// 2.what is await?
// await is also a keyword
// you can use await keyword infront of promise
// it can be use inside a async function


// var testProm = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('new promise function')
//   },10000)
// })

// var testProm2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('new promise function')
//   },10000)
// })
// async function TestSync(){
//       const testvalue = await testProm;
//       console.log('test1')
//       console.log(testvalue)

//       const testvalue2 = await testProm2;
//       console.log('test2')
//       console.log(testvalue2)
// }
// TestSync();


// 3. how async await works behind the scences?
// example:-
// so,In These Below Function it is not waiting For Timeout seconds
// behind the scenes it works like this
// var testProm = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     resolve('new promise function')
//   },9000)
// })
// function TestSync(){
//       const testvalue = testProm;
//       console.log('test1')
//       console.log(testvalue)
// }
// TestSync();

// // 4.Example of using async/await.
//  async function TestingAS(){
//         const waiting = await fetch('https://jsonplaceholder.typicode.com/users')
//         const ResponseJson = await  waiting.json();
//         console.log('responseJson',ResponseJson);
// }
// TestingAS();

// 5. Error Handling
async function HandlingErrors() {
    try {
        const waiting = await fetch('https://jsonplaceholder.typicode.com/users')
        const waiting2 = await fetch('https://jsonplaceholder.typicode.com/todos')
        const responseJson1 = await waiting.json();
        const responseJson2 = await waiting2.json();
        console.log('response1', responseJson1);
        console.log('response2', responseJson2);

      // destructuring single index of nested data
        const [{address:{geo:myjio}}] = responseJson1;
        console.log('single',myjio);
       // destructuring Whole indexes of nested data
        let staticdata = responseJson1?.map(({address:{geo:{lat:gear}}})=>gear)
        // let staticdata = responseJson1?.map((hello)=>{
        //     return hello?.address?.geo?.lat;
        // })
        console.log('whole',staticdata)
    }
    catch (err) {
        console.log(err.message = "please solve this")
    }
}
HandlingErrors();

// 6. Interview Tips
// Async is  a keyword it always returns a promise
// await is aslo a keyword it can be used inside in async function


// 7. async/await vs promise.then/.catch
// two process are the same but better way to use  async and await

// my bonus question
// 8. In browser how the asynchronous (async / await) works ?
// Here is the some important points
//In JsEngine when async function is call automatically in call statck
//when await keyword line is getting then async function will suspend in callstack
//when await keyword is promise resolves then async function will move to the call stack again it calls