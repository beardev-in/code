// Destructuring is often used to extract object properties to a matching name:

let {oranges} = {oranges : 1};
console.log(oranges); // var oranges = { oranges : 1}

//Order doesn't matter
let fruit_basket = {
    apples : 0,
    grapes : 1,
    mangoes : 3
};
let {grapes} = fruit_basket;
console.log(grapes); //??

//Extract from multiple values. Grab apples and oranges and count them:
let {apples,oranges} = {apples : 1, oranges : 2};

console.log(apples+oranges); //??

// Destructuring is not implicitly recursive, second-level objects are not scanned:

let {apples,oranges} = {apples : 1, inner : {oranges : 2} };

console.log(oranges); //???

//it’s possible to extract directly from object’s inner properties:

let deep = {
    basket : {
        fruit : {
            name : "orange",
            shape : "round",
            weight : 0.2
        }
    }
}

let {name, shape, weight} = deep.basket.fruit;

console.log(name); //??
console.log(shape); //??
console.log(weight); //??

//If variable is not found in object, you will end up with undefined. For example, if

let {apples} = {oranges : 1};
console.log(apples); //??


// It is possible to destructure and rename at the same time:

let { automobile : car} = { automobile : "Tesla"};
console.log(car); //??


//Merging objects with ...spread

let a = {p : 1, q:2, m: ()=>{}};
let b = {r : 3, s:4, n: ()=>{}};

let c = {...a, ...b};

console.log(c); //???


//another example

let a = {
    nest : {
        nest : {
            eggs : 10
        }
    }
};
let b = { eggs : 5};
let c = {...a, ...b};
console.log(c);

// Merging arrays with ...spread

let a=[1,2,0];
let b=[3,4];
let c=[...a,...b];
console.log(c);