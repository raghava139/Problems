// Orders
// create Order
// payment Order
// summary order
// update wallet

function createOrder(x) {
  // Create a New Promise
  let promise = new Promise((resolve, reject) => {
    if (x == 20) {
      let y = ["arry1", "arry2"];
      resolve(y);
    } else {
      let Err = new Error("Error in Create Order");
      reject(Err);
    }
  });
  return promise;
}
let x = 20;

function Payment(y) {
  //another way of creating promise
  return new Promise((resolve, reject) => {
    let testing=20
    if (testing == 20 ) {
      resolve("1000");
    } else {
      let Err = new Error("error in payment");
      reject(Err);
    }
  });
}

// error handling and promise chaining
createOrder(x)
  .then((data) => {
    console.log(data);
    return data;
  })
  .then((test) => {
    console.log(test)
    return Payment(test);
  })
  .then((d) => {
    console.log(d);
    return d;
  })
  .catch(function (err) {
    console.log("err", err?.message);
  });
