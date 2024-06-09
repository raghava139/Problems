x = 50;
console.log(x)
var x ;
console.log(x);

async function APiCalls() {
    console.log("api-calls");
 
    try {
        const responseAPI = await fetch('https://jsonplaceholder.typicode.com/users');
        const ConvTojson = await responseAPI.json();
        console.log('conver', ConvTojson);
    }
    catch (err) {
        console.log('error in catch', err);
    }
}
APiCalls();