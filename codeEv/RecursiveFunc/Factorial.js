function factorial(n){
    if(n === 0){
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(4));

// time complexity
// Big(O)-->O(n)--->linear
// if 'n' increases time is also increase