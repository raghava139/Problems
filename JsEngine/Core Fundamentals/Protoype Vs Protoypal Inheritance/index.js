//prototype
// It attaches an object to your original object
// Whenever you create anything in js even an variable also they get access to some of the hidden properties and methods.

//prototype inheritance
// which means objects can inherit properties and behavior directly from other objects.
//  This concept is known as prototypal inheritance. 
// Each object can serve as the prototype for another object, forming a chain.
// example of prototypal inheritance
// let NewObj = {
//     firstName: 'raghavendra',
//     lastName: 'yallamanda',
//     city: 'hyd'
// }
// let NewObj2 = {
//     firstName: 'rajesh',
//     lastName: 'yallamanda'
// }
// NewObj2.__proto__ = NewObj;      //// It is Huge Performance Issue.  // It is Only for Demonstrate(explain) Purpose.


// Prototypal Chain
// 1.arrays
// 2.objects
// 3.functions


// 1.arrays
// let myArray = ['raghava','rajesh']
// myArray.__proto__  //has its own prototype is nothing but Array.prototype
// myArray.__proto__.__proto__  //has its own prototype nothing but Object.prototype
// myArray..__proto__.__proto__.__proto__ //has its own prototype it is " null " 
// it is known as prototype chain.

// 2.objects
// let NewObj = {
//     firstName: 'raghavendra',
//     lastName: 'yallamanda',
//     city: 'hyd'
// }
// NewObj.__proto__   //has its own prototype nothing but Object.prototype
// NewObj.__proto__.__proto__     //has its own prototype it is " null " 
// it is known as prototype chain.

// 2.functions
// function testingPurpose(){

// }
// testingPurpose.__proto__   //has its own prototype nothing but function.prototype
// testingPurpose.__proto__.__proto__     //has its own prototype nothing but Object.prototype
// testingPurpose.__proto__.__proto__.__proto__     //has its own prototype it is " null " 
// it is known as prototype chain.

// --------------------------------------------------------------------------------------------------

let myArray = ['raghava','rajesh']

// let NewObj={
//     firstName:'raghavendra',
//     lastName:'yallamanda'
// }

// function testfunc(){

// }


// example of prototypal inheritance
let NewObj = {
    firstName: 'raghavendra',
    lastName: 'yallamanda',
    city: 'hyd'
}
let NewObj2 = {
    firstName: 'rajesh',
    lastName: 'yallamanda'
}

NewObj2.__proto__ = NewObj;

// function default value setting to prototype for all functions
Function.prototype.testTobind = function () {
    console.log("hello raghava")
}

function testfunc() {

}

function testfunc2() {

}

