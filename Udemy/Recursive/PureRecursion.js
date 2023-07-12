function PureRecursion(arr){
    let newArr=[];

    //base condition
    if(arr.length ===0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr=newArr.concat(PureRecursion(arr.slice(1)));
    console.log(newArr);
    return newArr;
}
PureRecursion([1,2,3,4,5]);