// To Resolve the issue for callback hell and inversion of control ----> use Promises
// nested callback hell issue --->  use Promise Chaining

function createorder() {
  try {
    const CreateOrderFunc = fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return CreateOrderFunc;
  } catch (err) {
    console.log("error", err);
  }
}

function paymentOrder() {
  try {
    const paymentOrderFunc = fetch("https://fakestoreapi.com/products/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      });
    return paymentOrderFunc;
  } catch (err) {
    console.log("error", err);
  }
}

//promise chaining
createorder()
  .then((create) => {
    console.log("create", create);
    return create;
  })
  .then(() => {
    return paymentOrder();
  })
  .then((payment) => {
    console.log("payment", payment);
  })
  .catch((err) => console.log(err));
