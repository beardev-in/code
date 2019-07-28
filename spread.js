/ES6
//Rest ans Spread
// An operator is often
// thought of as something that modifies a value. Rest and spread assign values.
//Rest (...)
let f = (...items) => items.map(item => console.log(item));

f(1,2,3,4,5)
//Another version
// let print = item => console.log(item);

// let f = (...items) => items.map(print);
// After arrow functions were introduced in EcmaScript 6, to further shorten code
// some started to name their variables using a single character:
let ff = (...i) => i.map(v => console.log(v));
ff(1,2,3,4,5);



// Both rest and spread syntax takes on the form of ...name. So what’s the
// difference?
// ...spread operator – expand iterables into one or more arguments.
// ...rest parameter – collect all remaining parameters (”the rest of”) into an array.


function sum(...args){
    console.log(args);
}
sum(1,2,3);

//But you cant do 
//...rest must be either the only arguments token, or the last one on
// the list. It cannot be the first argument or middle of many:
function sum(...args,b,c){}//?? 


//last is possible
function sum(a,b,...args){
    console.log(args);
}
sum(1,2,3,4,5);


//Spread operator

function print(a,...args){
    console.log(a);
    console.log(args);
}
print(...[1,2,3],4,5);

// Here, first ...spread forms a complete list of arguments: 1, 2, 3, 4, 5 and
// that’s what’s passed into the print function.
// Inside the function, a equals 1, and [2, 3, 4, 5] is ”the rest of” arguments.

// another example:
function print2(a,b,c,...args){ //rest
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(args);

}

print2(...[1,2,3],4,5); //spread

// Creating a sum() function with ...rest arguments

function sum(...arguments){
    let sum = 0;
    for(let arg of arguments){
        sum = sum + arg;
    }
    return sum;
}
sum(1,2,4);

//We can also use reduce to perform the above operation

function sum(...args){
    return args.reduce((x,v)=> x + v, 0)
}
console.log(sum(1,2,3,4,5,6,7));

//flattening arrays with ...spread

let names = ["felix","luna"];
const cats = [...names,'daisy'];
console.log(cats);

//let a = ...[1,2,3] //??