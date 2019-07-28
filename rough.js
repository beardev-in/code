//number of nways to integrate js file in webpage: script (types of tags: babel, module, etc.)
//script with src attribute, i.e external sources
//node program without webpage

/*
console.time();
var abj = {
    fname = "abhi",
    lname = "reddy",
};

//3) use strict - delete obj.fname, obj.lname (can only be used on objects and not variables as they are stored in the memory)
console.log(ogj);

if(obj){
    console.table(obj) //potrays objects in table format 
    console.timeEnd(); //calculates the amount of time taken to run the program
    //the table looks different in console
}
//else{
    console.log("object is missing")
    //console.error("object is missing") throws an error (custom error)
}
*/
//paste it on console to throw styled error when console is opened
const warningTitleCSS = 'color:red; font-size:60px; font-weight: bold; -webkit-text-stroke: 1px black;';
      const warningDescCSS = 'font-size: 18px;';
      console.log('%cStop!', warningTitleCSS);
      console.log("%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account.", warningDescCSS);
      console.log('%cSee https://www.facebook.com/selfxss for more information.', warningDescCSS);
//how to disable right click on website
document.addEventListener('contextmenu', event => event.preventDefault()); //paste in console


/* 3) explain about use "strict
using strict (cannot use undeclared variables, deleting objects is not allowed)
1 - duplicate paramters for functions is also not allowed
"use strict"
function gg(t1,t1){
    return t1+t1;
}
console.log(gg(2,3));
*/


 //will not work if you use "use strict"
/* 4)literal in javascript - literal is in anything in fixed value

types - 1. numeric literals - 1,3,54,4 
        2. string literals - "some text"
        3. array literals - [abhi, reddy, 4]
        4. object literals - {}
        5. boolean literals - true, false
        6. function literals - function(){}
*/


/* 5) console.log(typeof())

how do we check type of array literals??
type of array exception - use .length (which is one the most common method used in arrays)
   *console.log(typeof(x.lenght))* - will give you "number" are the type of any .length is a numerical
        
*/

//REPL - READ-EVAL-PRINT-LOOP
//difference bw programming, scripting, shell, markup language 


/*6) type coercions (concept which works with different literals)
     how to add an array to an object?? []+{}
     -[object,Object]
*/

// 7) diff bw defination vs declaration (do we need in js), assigning values to variable, 
//   declaration - data type of the variable, javascript is a dynamically typed language therefore data types can be re declared
 
 let number; //defination 
 var number = 22; //def + assigning, java script being dynamic allows you to change the variables data types, like rn its is a numeric data tyep but it can be chaged in an array too.

 /* 8) passing values by reference 

 */
 let x = {
     p : 1
 };
console.log(x.p,x.q);

let y = x; //it creates a soft link to the memory location of x
console.log(y.p);//it does not copy or store data
z = y ;
z.p = 4;
console.log(z.p); //will give you 4 as the object is being replaced

/* 8) scope quirks 

quirk1: let and const inside a function vs global variable.
    - A variable defined using let or const keywordd cannot coexist with global variable of the same name
    - scoping : whatever is inside curly braces 
*/

    let a = 'global a'
    let b = 'global b' //global variables
    function x(){
    console.log("x() : global b = "+ b);
    console.log("x() : global a = "+ a);
    let a = 1; //error because let does not allow you to re define the variable
    }
    console.log(x());

// 9) scope quirk 2- var latches onto window and this object but let and const do not. 

/* 10) definations made with var let const keywords return undefined because they behave only as value assignments, the value is only simply stored in the variable name;
   giving any statement in js always returns undefined (statements are basically instructions) and expressions return value.
   -an empty array is an expression 
   -an empty object is a statement (it will will give undefined)
   -anything that relates to var, let, const is a statement (returns undefined)
   -other all arwe expressions (returns values)

   **let e = new Number(23);**
   -[Number: 23]

   a function is also a statement if not called.   
   but a function without var is an expression.
*/

/* 11) primitive types: null, undefined, number, bigint, string.

typeof(null) - object
typeof(undefined) - undefined
typeof Number - function (prototype function
typeof Infinity - number
typeof NaN - number

-let n = new number(23);
  -undefined
-typeof n
  -object
-type of n.value()
  -number

typeof 1000n
-bigint

*/

// 12) a symbol is used to define public and private object properties

let sym = symbol("sym"); //cannot use new as symbol is not a constructor, symbol always creates a unique id.
console.log(sym);

//Symbols
// The Symbol primitive provides a way to define a completely unique key.
// Symbol doesn’t have a constructor and cannot be initialized using new keyword:

let sym = new Symbol('sym'); //TypeError because Symbol has no constuctor

let sym =  Symbol('sym'); //create a new symbol with a unique ID

// The ID, however, is not the used-defined string "sym", it is created internally.
// This is demonstrated in the following example.
// At first it might be surprising that the following statement evaluates to false:

Symbol("sym") === Symbol("sym"); //false

// Whenever you call Symbol(’sym’) a unique symbol is created. The comparison
// is made between two logically distinct IDs and therefore evaluates to false.


// Symbols can be used to define private object properties. This is not the same
// as regular (public) object properties. However, both public and private properties
// created with symbols can live on the same object:

/*
let sym = Symbol("unique");
let bol = Symbol("distrinct");
let one = Symbol("only-one");
let obj = {
    property: "regular property",
    [sym]:1,
    [bol]:2
};
Collapse

*/

// Symbols can be used to define private object properties. This is not the same
// as regular (public) object properties. However, both public and private properties
// created with symbols can live on the same object:

let sym = Symbol("unique");
let bol = Symbol("distrinct");
let one = Symbol("only-one");
let obj = {
    property: "regular property",
    [sym]:1,
    [bol]:2
};
obj[one] = 3;

// Here we created an object obj, using object literal syntax, and assigned one of
// its properties property to a string, while second property was defined using the
// [sym] symbol created on the first line. [sym] was assigned value of 1. Second
// symbol property [bol] was added in the same way and assigned value of 2.
// Third object symbol property [one] was added directly to the object via obj[one].

//Printing the object shows both private and public properties:

console.log(obj);

// Private (symbol-based) properties are hidden from Object.entries, Object.keys
// and other iterators (for example for...in loop):
for(let prop in obj){
    console.log(prop + ": "+ obj[prop]);
    //property : regular property
};
//and
console.log(Object.entries(obj));
//.length - access only public props.
console.log(JSON.stringify(obj));

// Why would we want to hide symbol-based properties from JSON stringify?
// Actually it makes sense. What if our object needs to have private properties that
// are only relevant to how that object works, and not what data it represents? These
// private properties can be used for miscellaneous counters or temporary storage.
// The idea behind private methods or properties is to keep them hidden from the
// outside world. They are only needed for internal implementation. 
// Private implementation is rarely important when it comes to marshalling objects.



// But symbols can be exposed via Object.getOwnPropertySymbols method:
console.log(Object.getOwnPropertySymbols(obj));

// Note that you probably shouldn’t use Object.getOwnPropertySymbols to expose properties that are intended to be private. Debugging should be the only use
// case for this function.
// You can use symbols to separate your private and public properties. This is
// like separating ”goats from the sheep” because even though they provide similar functionality, symbols will not be taken into account when used in iterators or
// console.log function.


// Symbols can be used whenever you need unique ID

const seasons = {
    Winter : Symbol("Winter"),
    Spring: Symbol("Spring"),
    Summer : Symbol("Summer"),
    Autumn : Symbol("Autumn")
};
// Global Symbol Registry
// As we saw earlier Symbol("string") === Symbol("string") is false because
// two completely unique symbols are created.

// But there is a way to create string keys that can overwrite symbols created using
// the same name. There is a global registry for symbols, that can be accessed using
// methods Symbol.for and Symbol.keyFor.
let sym = Symbol.for("age");
let bol = Symbol.for("age");
obj[sym] = 20;
obj[bol] = 25;

console.log(obj[sym]); 

// The private symbolic object property obj[sym] outputs the value of 25 (which
//     was originally assigned to obj[bol]) when it was defined, because both variables
//     sym and bol are tied to the same key "age" in global symbol registry.
//     In other words the definitions share the same key.

// 13) how do you tell if two objects are equal?

var obj={a:1,b:2};
var obj1={a:1, b:2};
obj == obj1; //will give false as the memory space used and the memory allocation address is different

// 14) constructer and instances (the constructor function is the defination of a custom object type. Instance is the object that was instantiated from the constructor function using the new operator)

let Pancake = function(){
  this.number = 0;
  this.bake = function(){
      console.log("\n Baking the pancake ...");
      this.number++;
  };
}
let pancake = new Pancake(); //the entire pancake function is being encapsulated into an object
pancake.bake();
pancake.bake();
pancake.bake();
console.log(pancake.number);

console.log(Pancake.constructor);//.constructer finds the parent constructer of the parent of the user defined variable 
console.log(pancake.constructor);

// Executing Methods On Primitive Types
// Parenthesis And Object Property Access
// The parenthesis operator gives you control over which statement should evaluate
// first. That’s its primary purpose.
// For example statement 5 * 10 + 2 is not the same as 5 * (10 + 2).
// But sometimes it is used to access a member method or property. Which is
// demonstrated in the next source code listing.
// You can execute methods directly on the literal values of primitive types. Which
// automatically converts them to objects, so that the method can be executed.
// In some cases – like with the primitives of type "number" – we must first wrap
// the literal value in parenthesis, or you’ll freeze your program.

1.oString(); //cannot execute 

new Number(1).toString();

(1).toString() //using (), you can convert numberic literal to object

//you dont need (), to execute methods on strings
"prashanth".toUpperCase();

("prashanth").toUpperCase(); // Both works

// 15) Executing Methods On Primitive Types
// Parenthesis And Object Property Access
// The parenthesis operator gives you control over which statement should evaluate
// first. That’s its primary purpose.
// For example statement 5 * 10 + 2 is not the same as 5 * (10 + 2).
// But sometimes it is used to access a member method or property. Which is
// demonstrated in the next source code listing.
// You can execute methods directly on the literal values of primitive types. Which
// automatically converts them to objects, so that the method can be executed.
// In some cases – like with the primitives of type "number" – we must first wrap
// the literal value in parenthesis, or you’ll freeze your program.

1.toString(); //cannot execute 

new Number(1).toString();

(1).toString() //using (), you can convert numberic literal to object

//you dont need (), to execute methods on strings
"prashanth".toUpperCase();

("prashanth").toUpperCase(); // Both works

// 16) Chaining Methods
// Because in JavaScript functions can return this keyword, or any other value,
// including functions, it’s possible to chain multiple methods using the dot operator.

"hello".toUpperCase().substr(1,4);

//Try a().b().c() - chain function to print that
//Good Example is express()

// 17) Guess The Output ... Thats the JS for you :D
console.log(null+{}+true+[]+[5]);


// A string? This might seem confusing. After all, not a single value in this statement
// is a string! So how did that happen?
// Answer: When + operator encounters objects of incompatible type, it will attempt
// to coerce those objects to their values in string format. In this case, leaving us
// with a new statement: "null[object Object]" + true + [] + [5].
// Furthermore, when + operator encounters a string at least on one side of the
// operator, it will try to coerce the other side to string and perform string addition.
// Calling .toString on true results in "true". Calling .toString on empty array
// brackets [] when the other side of operator is also a string evaluates it to "" which
// is why it appears missing from the result. And finally adding [5] to a string calls
// [5].toString which results in "5".

//Classic Examples of type coercions

let a = true + 1;

let b = true + true;

let c = true + false;

let d = "Hello" + " " + "there.";

let e = "Username" + 1523462;

let f = 1/"String";

let g = NaN === NaN;

let h = [1] + [2];

let i = Infinity;

let j = [] + [];

let h = [] + {};

// JavaScript will try to come up with best value available if you supply meaningless
// combinations of types to some of its operators.
// After all, what would it mean to ”add” an object literal {} to an array []? Exactly
// – it doesn’t make any sense. But by evaluating to object [] at least we don’t
// break the code in that one little odd case where it may happen.


// This safety mechanism will prevent the program from breaking. In reality, however,
// these types of cases will almost never happen. We can treat majority of these cases
// as examples – not something you should be actually trying to do in code.

let A = Boolean(true); 

let B = Boolean([]); 

let C = Boolean({});

let D = Boolean(NaN);

let E = Boolean(null);

let F = Boolean(1-1);

let G = Boolean(Infinity);

let H = Boolean();

let I = Boolean(undefined);

let J = Boolean("");

// In all these cases we supplied an array literal {} and an object literal [] to
// Boolean constructor. What does this mean? Not much, but the point is that at
// least it evaluates to true in this odd case.
// This is just a safety net to prevent bugs

// Meaningless values still evaluate to either true or false, because these are the
// only values available for boolean types.
// Other built-in data type constructors behave in the same way. JavaScript will try
// to coerce to an ideal value specific to that type.



// 18) Type Coercion
// Coercion is the process of converting a value from one type into another. For
// example, number to string, object to string, string to number (if the entire string
// consists of numeric characters) and so on...
// But when values are used together with different operators not all cases are
// straightforward to the untrained eye.
// To someone new to the language, the following logic might seem obscure:

[] == [];   //false

// Let’s say that it is false because two instances of [] are not the same, because
// JavaScript == operator tests objects by reference and not by value.

let aa = [];
aa == aa; //true

// //But this statement evaluates to true because variable a points to the same instance
// of the array literal. They refer to the same location in memory.


// But what about cases like this? Even though you would never write code like this
// in production environment, it calls for understanding of type coercion:

true+false; //1


// And here’s the absolute classic:

NaN == NaN; //false

const s = "text";
console.log(-s); //NaN - refer unary + and unary- from MDN


Number("text"); //NaN
Number("1");    //1


// Number And String Arithmetics

"1"+1; 
"1" + "1";
1+"1";
1+2+"3";
1+"ol";

// //Associativity Rules
// Operators follow specific associativity rules. Like + and most other operators, the
// arithmetic addition operator (+) is evaluated from left to right:


1+1; //2 - Left to Rigt


// But the assignment operator is evaluated in right to left order:

let N = 2;  //undefined 

// Note that in example above, while N is assigned value of 2, the statement itself
// evaluates to undefined.