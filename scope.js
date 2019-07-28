//Scope :::
// Scope is simply the area enclosed by {} brackets.

// There are 3 unique scope types:
//1. The global scope, 
//2.block scope and 
//3.function scope

//variable definitions - case sensitivity
//variables are case sensitive
let a = 1;
let A = "hello";


//Variable  Definitions

// Variables can be defined using var, let or const keywords.
// Of course, if you tried to refer to a variable that wasn’t defined anywhere, you
// would generate a ReferenceError error ”variable name is not defined”:


//Prior to let and const the traditional model allowed only var definitions:

var apple = 1;
{
    console.log(apple);
}

// Here apple is defined in global scope. But it can also be accessed from an inner
// block-scope. Anything (even a function definition) defined in global scope becomes
// available anywhere in your program. The value propagates into all inner scopes.
// When a variable is defined in global scope using var keyword, it also automatically
// becomes available as a property on window object.


// Hoisting::::
// If apple was defined using var keyword inside a block-scope, it would be hoisted
// back to global scope! Hoisting simply means ”raised” or ”placed on top of”.

//Note : Hoisting is limited to variables defined using var keyword and 
// function name defined using function keyword.


// Variables defined using let and const are not hoisted and their use remains limited
// only to the scope in which they were defined.


// As an exception, variables defined var keyword inside function-level scope are not
// hoisted. Commonly, when we talk about hoisting block-scope is implied.


// Likewise, variables defined in global scope will propagate to pretty much every
// other scope defined in global context, including block-level scope, for-loop scope,
// function-level scope, and event callback functions created using setTimeout,
// setInterval or addEventListener functions.


console.log(apple);
{
    var apple = 1;
}

// Variable apple is hoisted to global scope. But the value of the hoisted variable is
// now undefined – not 1. Only its name definition was hoisted.
// Hoisting is like a safety feature. You should not rely on it when writing code. You
// may not retain the value of a hoisted variable in global scope, but you will still
// save your program from generating an error and halting execution flow.

// -----------------------------------------------------------------------------------------------

//Function Name Hoisting:::
// Hoisting also applies to function names. But variable hoisting always takes precedence. 

fun();
function fun(){
    console.log("Hello from fun() function.");
};

//Note that the function was defined after it was called. This is legal in JavaScript.


function fun(){
    console.log("Hello from fun() function 1.");
}

//now same as
var fun = function(){
    console.log("Hello from fun() function 2.");
}
// It is possible to assign an anonymous function expression to a variable name.
// It’s important to note, however, that anonymous functions that were assigned to
// variable names are not hoisted unlike named functions.

// This valid JavaScript code will not produce a function redefinition error. The
// function will be simply overwritten by second definition.

// Having said this, what do you think will happen if we call fun() at this point?

// Now check with following code

function fun(){
    console.log("Hello from fun() function 1.");
}

function fun(){
    console.log("Hello from fun() function 2.");
}

// However, this is still perfectly valid code – no error is generated. Whenever you
// have two function defined using function keyword and they happen to share the
// same name, the function that was defined last will take precedence.

//Now

var fun = function(){
    console.log("Hello from fun() function 1.");
}

function fun(){
    console.log("Hello from fun() function 2.");
}



// And now let’s call fun() to see what happens in this case:

//Bingo :  variable name will take precedence over function definitions
// even if it was defined prior to the second function definition with the same name:


// Now Lets see the order in which JavaScript hoists variables and functions. Functions
// are hoisted first. Then variables.

fun();
var fun = function(){
    console.log("Hello from fun() function 1.");
}

function fun(){
    console.log("Hello from fun() function 2.");
}

// ------------------------------------

// Call fun() again


// ------------------------------------------------------------------------------

//DEFINING VARIABLES INSIDE  FUNCTION SCOPE

// At this point you might want to know that variables defined inside a function will
// be limited only to the scope of that function. Trying to access them outside of
// the function will result in a reference error:

function fun(){
    var apple = 1;
}
console.log(apple);
Colla