// Premitive           -- Call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt,
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(anotherId);

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