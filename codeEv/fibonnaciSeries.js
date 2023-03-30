function fibonnaciSeries(n){
    const fib=[0,1]
    for(let i=2;i<n;i++){
        // let one=fib[i]
        // let two=fib[i-1]
        // let three=fib[i-2]
        fib[i]=fib[i-1] + fib[i-2]
    }
    return fib;
}
fibonnaciSeries(8)
console.log(fibonnaciSeries(8))//[0,1,1,2,3,5,8......etc.,],

// calculation of fibonnaciSeries
//0+1=1
//1+1=2
//1+2=3
//2+3=5
//3+5=8
//5+8=13

// timecomplexity
// big=O(n)