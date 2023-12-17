let prom1 = async function () {
    try {
        let waiting1 = await fetch('https://fakestoreapi.com/products/1');
        let waiting2 = await waiting1.json();
        return waiting2;
    }
    catch (err) {
        // console.log('err', err);
        throw err;
    }
}
let prom2 = async function () {
    try {
        let waiting1 = await fetch('https://fakestoreapi.com/products');
        let waiting2 = await waiting1.json();
        return waiting2;
    }
    catch (err) {
        // console.log('err', err);
        throw err;
    }
}
let prom3 = async function () {
    try {
        let waiting1 = await fetch('https://fakestoreapi.com/products/categories');
        let waiting2 = await waiting1.json();
        return waiting2;
    }
    catch (err) {
        // console.log('err', err);
        throw err;
    }
}

// let prom1 = new Promise(async (resolve, reject) => {
//     let waiting1 = await fetch('https://fakestoreapi.com/products/1');
//     let waiting2 = await waiting1.json();
//     resolve(waiting2);
// })
// let prom2 = new Promise(async (resolve, reject) => {
//     let waiting1 = await fetch('https://fakestoreapi./products');
//     let waiting2 = await waiting1.json();
//     resolve(waiting2);
// })
// let prom3 = new Promise(async (resolve, reject) => {
//     let waiting1 = await fetch('https://fakestoreapi.com/products/categories');
//     let waiting2 = await waiting1.json();
//     resolve(waiting2);
// })
// 1.promise.all()
// Promise.all([prom1(),prom2(),prom3()])
//     .then((result) => console.log(result))
//     .catch((err) => console.log('prom-eror', err))


// 2.Promise.allSettled()
// Promise.allSettled([prom1(), prom2(), prom3()])
//     .then((result) => console.log(result))
//     .catch((err) => console.log('prom-eror', err))

// 3.Promise.race()
// Promise.race([prom1(), prom2(), prom3()])
//     .then((result) => console.log(result))
//     .catch((err) => console.log('prom-eror', err))


// 4.Promise.any()
Promise.any([prom1(), prom2(), prom3()])
    .then((result) => console.log(result))
    .catch((err) => console.log('prom-eror', err?.errors))