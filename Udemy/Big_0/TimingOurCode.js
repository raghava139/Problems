// // slower code
// function addUpto(n){
//     let total = 0;
//     for(let i=1;i<=n;i++){
//         total +=i;
//     } 
//     return total;
// }

// var t1=performance.now();
// console.log('t1-->',t1);
// addUpto(1000000000)
// var t2=performance.now();
// console.log('t2-->',t2);
// console.log(`time-elapsed : ${(t2-t1)/1000}seconds`);

//faster code
function addUptoFaster(n){
    return n* (n+1)/2
}
var t1=performance.now();
console.log('t1-->',t1);

addUptoFaster(1000000000)

var t2=performance.now();
console.log('t2-->',t2);
console.log(`time-elapsed : ${(t2-t1)/1000}seconds`);
