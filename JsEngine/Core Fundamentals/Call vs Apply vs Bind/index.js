//In these call vs apply vs bind method 
// call & apply & bind methods all takes first argument as "this" key  and second argument takes values
// call and bind takes similar but the bind method it creates new copy for new variable.

// call --> somefuncn.call(this, arg1,arg2)
// bind --> let x = somfuncn.bind(this, arg1,arg2)
// appy --> somefuncn.apply(this, [])

// Example:-

let name1 = {
    firstName: 'raghavendra',
    lastName: 'yallamanda',
}

let name2 = {
    firstName: 'rajeshbabu',
    lastName: 'yallamanda',

}

let printfunction =  function (test1, test2) {
    console.log(this.firstName + ' ' + this.lastName + "  " + test1 + " " + test2)
}

printfunction.call(name1, 'name1','n3')
printfunction.call(name2, 'name2','n4')
printfunction.apply(name1, ['name1','n3'])
let newCreateFunc= printfunction.bind(name2, 'bind2','b2')
// console.log('newCreateFunc',newCreateFunc);
newCreateFunc();

