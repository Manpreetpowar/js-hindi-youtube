// Premitive           -- Call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt,
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(anotherId);

// Reference Type (Non primitive)

// Array, Objects, Functions

const fruits = ["apple", "banana", "orange"];

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) is aapko kisi b variables ki copy milti hai, Heap (Non-Primitive) isme original value ka refrence milta hai

let myName = "Manpreet";
let anotherName = myName;
anotherName = "Rohit";

// console.log(myName);
// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "Manpreet@test.com";

console.log(userOne.email);
console.log(userTwo.email);

