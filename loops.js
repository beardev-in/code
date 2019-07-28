//for..of
let string = text;
for(let value of string){
    console.log(value);//will extract each element from the string 
}
//t e x t

let obj = {
    a:1,
    b:2,
    c:3,
}
for(let value of obj){
    console.log(obj); //will not work as object is not iterable 
}
//iterables - systematically organised with indexes example - arrays and strings.

//for..of loops and objects converted to iterables
let enumerable = {
    property: 1,
    method : ()=>{}
};
/*
for(let key of Object.keys(enumerable)){ //converting objects into iterables
    console.log(key);
} // - property method
*/
for(let key of Object.values(enumerable)){ //converting objects into iterables
    console.log(key);
} //

let obj = {
    a:1,
    b:2,
    c:3,
    method: ()=>{}
};
for(let value in obj){
    console.log(value, obj[value]); //will print the properties 
} //value prints the props on LHS and obj[value] prints the props on RHS
 
////////////////////////////////////

var fruit = [
    { name: "apple", count:13 },
    { name: "pear", count:1 },
    { name: "watermelon", count:3 },
    { name: "orrange", count:23 },
    { name: "lemon", count:14 },   
]; //sorting




////////////////////////////////////////
var a = ['apple', 'bannana', 'pear'];

/*
let print = (item, index, object)=>{
    console.log(item, index, object)
} 
a.forEach(print);
*/

a.forEach((item, index)=>{
    console.log(item, index)
});

///////////////////////////////////////////
//array.every always gives boolean

function isBelowThreshold(currentvalue){
    return currentvalue < 40;
}
var array1 = [10, 20, 30, 40];
console.log(array1.every(isBelowThreshold));//.every helps checks if the given array meets the condition or not
//even if one of its elements doesnt, it gives false

//////////////////////////////////////////
var numbers = [10, 20, 30, 40];
let condition = value => value<10;
let some = numbers.some(condition);//checks if atleast 1 element meets the condition 
let every = numbers.every(condition);//checks if the condition is true for all elements in array

////////////////////////////////////////
//ES10: Array.flat()

let multi = [1,2,3,[4,5,6,[4,6,4,[5,6]]]];
console.log(multi.flat(Infinity)); //makes it into a 1d array.



