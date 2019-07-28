//es6
//rest and spread operator (...)
//operator - modifies a value

//rest - represented with (...) collects the remaining the parameters. when you console.log the aarguements they are shown in the form of array


let f = (...items)=> items.map((item)=> console.log(item)); //you can use ... spread operator to accept multiple parameters without passing multiple arguements 
f(1,2,33,22)//will be read in ...

let f = (...items)=> { //...items is an array
    items.map((item)=> { //map accepts a call back which reads and loops through all the items
        console.log(item) //by () item you are catching each element and printing it
    })
}



let f = (...items) => items.map(print); 
let print = item => console.log(item);
f(1,2,33,22);

let a = (a,b,c,...items) => { //the first 3 parameters are now stored in a b and c and the REST are displayed
    a.map((item) => {
        console.log(item)
    })
}
f(1,2,33,22,44); 
//rest operator must be last formal parameter - cannot u=be used in the middle

//////////////////////////////////////////////////////////

//spread operator

function print(a,b,...args){ //the rest operator is used here to collect the remaining parameters into args
    console.log(a,b);
    console.log(args)
}
print(...[1,2,3],4,5)//the ... is spreading the elements, it expands iterables into one or more arguements. but it needs a variable to store it.


let names = ["felix","luna"];
const cat = [...names, 'daisy'];//spread operator works in a array
console.log(cat);

//////////////////////////////////////////////////////////

//destructuring '

[a,b] = [10,20]
console.log(a,b) //same as storing in var

//you can also use the rest operator for destructuring 
[a,b,...rest] = [10,20,30,40,50,60];
console.log(a);
console.log(b);
console.log(rest);

//object being destructured 

var a = {
    a : 1
}
console.log(a.a)//will give you one
//but this can be destructered into

var {a} = {a:1};
console.log(a); //will give the same output but this only works when the object and the property name are the same

//extract from multiple values - objects