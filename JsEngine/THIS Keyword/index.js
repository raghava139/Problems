// "use strict"

// This Keyword
// -------------
// This is global space
// This is inside a function
// ThiS iS strict mode - (this Subsitution)
// This value depends on how this is called (window)
// This inside a object's method
// call apply bind methods (sharing methods)
// This inside arrow function 
// This inside nested arrow Function
// This inside Dom

// This is global space
console.log(this); // globalobject ---> window (this is inside browser),nodejs ---> global


// This is inside a function
// -----------------------------
// The value depends on strict / non-strict mode
// ThiS inside  non-strict mode - (this Subsitution)
// IF the value of "this" keyword is undefined or null
// "This" keyword will be replaced with glabal object only in non-strict mode
function x() {
    // var x = 10;
    console.log(this);
}
// x();

// This value depends on how the function is called (window)
x(); // without any refernce
window.x();//it refers to global object


// This inside a object's method
var obj = {
    a: 10,
    x: function () {
        console.log(this) // Here this refers to object
    }
}
obj.x();

// call apply bind methods (sharing methods)
// OverRiding The "this" keyword to passing an object using call,apply,bind
const student = {
    name: 'raghavendra',
    printName: function () {
        console.log(this);
        // console.log(this.age);
    }
}
// student.printName();
const student2 = {
    name: 'rajeshbabu',
    age: '20'
}
student.printName.call(student2)


// This inside arrow function 
// Arrow function they don't provide their own 'this' keyword binding
const something = () => {
    console.log('arrow-->', this)
}
something();

const studentSOm = {
    name: 'raghavendra',
    printName: () => {
        console.log('object-arrow', this);
        // console.log(this.age);
    }
}
studentSOm.printName();


// This inside nested arrow Function
const NEstedstudentSOm = {
    name: 'raghavendra',
    printName: function() {
        // enclosing the lexical Context
        console.log('nest-',this)
        const y = () => {
            console.log('nesting arrow', this)
        }
        y();
    }
}
NEstedstudentSOm.printName();


// This inside Dom
// The value is reference to the  " HTML Element "
function testfunc(t){
    console.log(t)
}
