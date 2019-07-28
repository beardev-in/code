// //Variable Types :::
// JavaScript is a dynamically-typed language.
// The type of the variable (defined using var or let keyword) can be assigned and
// changed at any time during the run-time of your application, after it was already
// compiled by browser’s JavaScript engine.
// The keywords var, let and const do not determine the variable’s type(strictly data type).
// Instead,
// they determine how the variable can be used: can it be used outside of the scope
// in which defined? Can it be re-assigned to another value during run-time? For
// example, var and let can, but const can’t.
//ES5 var :::
// The var keyword is still with us from original specification. You should probably
// start using let and const instead. For the most part it is still available but only
// to support legacy code.
//ES6 let:::
// let defines a variable but limits its use to the scope in which it was defined.
//ES6 const:::
// const is the same as let but you can’t re-assign it to a new value once defined.
//Scope Visibility Differences
//Rule1 : No Difference In Global Scope
// When variables are defined in global scope there is no differences between var, let
// and const in terms of scope visibility.
// Keywords let and const limit variable to the scope in which they were defined:
// Variables defined using let and const are not hoisted. Only var is.
// In Function Scope
// However, when it comes to functions, all variable types, including var remain
// limited to their scope:
// Closures
// A function closure is a function trapped inside another function:
var plus = (function(){
    var counter = 0;
    return function(){
        counter = counter+1;
        return counter;
    }
})();
plus(); //1
plus();//2
plus();//3
//-------------------------------------------------------------------------
//In Block-level Local Scope
//In Classes
class Cat{
    let property = 1;
    this.property = 2;
}
// The class scope is simply a placeholder. Trying to define variables directly in class
// scope will produce an error:
//Another Class Example:
class Cat{
    constructor(){
        let property = 1;   //local varaible
        this.something = 2; //object property
    }
    method(){
        console.log(this.property); //??
        console.log(this.something); //??
    }
}
var cat = new Cat();
// __________________________________________________________________
//ES6 const
// The const keyword is distinct from let and var.
// It requires assignment on definition:
let a;
console.log(a); //undefined
const b; //???
//const and Arrays
const A = [];
A[0] = "a"; //OK
A = [] ; //??
//const and Object Literals
const AA = {
    //there you go prash
}
//Rule 1 : Do not use var unless for some reason you want to hoist the variable name.
//Rule 2 : Do use let and const instead of var, wherever possible
//Rule 3 : Do use const to define constants such as PI, speed of light, tax rate, etc.
// – values that you know shouldn’t change during the lifetime of your application.