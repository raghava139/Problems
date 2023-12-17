// There is Four('4') Major Promise API's
// 1.Promise.all();
// 2.Promise.allSettled();
// 3.Promise.race();
// 4.Promise.any();

//ALl Can Be takes an array of promises

//what is the meant by settled ?
// settled means either Resolve ( OR ) Reject

//Lingos
//success  ---x---  failure
//resolve  ---x---  reject
//fullfilled  ---x--- rejected


let P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 Success');
    }, 500)
})
let P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P2 Success');
    }, 900)
})
let P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P3 Success');
    }, 800)
})

// 1.Promise.all() :- ---> Promise.all with an iterable (in this case, an array) of promises
// ----------------
// I---> If in these Promise.all(). If all of them get successful---> it returns you an array of all the promises.
// II --> If any of them was failure -->  it quickly returns the result of fails
// III -->If all of them get successful---> it returns you an array of all the promises--> with after seconds was completed.

// Promise.all([P1,P2,P3]).then((result)=>{
//   console.log('result',result);
// }).catch((err)=>{
//     console.error(err)
// })

// 2.Promise.allSettled() :-
// ----------------------
// I---> This one also similar to Promise.all()---||
// II--> But Here, If any of them is rejects it shows particular error along with success of API's [success,fail,success].
// III --> It waits for all promises either resolve or reject
// Promise.allSettled([P1,P2,P3]).then((result)=>{
//   console.log('result',result);
// }).catch((err)=>{
//     console.error(err)
// })

// 3.Promise.race() :-
// ----------------------
// I---> Here the Promise.race() is nothing but racing
// II---> when the first settled(resolve [or] reject) value can show the result
// Promise.race([P1, P2, P3]).then((result) => {
//     console.log('race-success', result)
// }).catch((err) => {
//     console.log('err', err)
// })


// 4.Promise.any() :-
// -------------------
// I---> Here the Promise.any() is similar to Promise.race()
// II--> But here the Trick is when the first settled "success" value can show the result
// III--> For Example---> If all Promises can reject---> It shows the Aggregate Error in console --> look like [error1, error2, error3]
// IV---> Aggregate Error means multiple errors( several errors ) need to wrapped into an single error [error1, error2, error3].
// V---> The AggregateError has a errors property that provides an array of individual reasons for each rejected promise. This allows you to inspect all the reasons for rejection.
// Promise.any([P1,P2,P3]).then((result)=>{
//     console.log('result',result)
// }).catch((err)=>{
//     console.log('err',err.errors)
// })