function isPrime(n){
    if(n<2){
        return false;
    }
    // for(let i=2;i<n;i++){
    //     if(n%2 === 0){
    //         return false;
    //     }
    // }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%2 === 0){
            return false;
        }
    }
    return true;
}
// isPrime(4);
console.log(isPrime(100));



// timecomplexity
// big=O(sqrt(n))