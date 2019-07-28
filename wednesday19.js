var obj = {
    a : 2,
    d : 1,
}
console.log("print before delete", obj);
delete obj.a; //delete can only work on property level and not reference level, an entire object cannot be deleted
console.log("print after delete", obj); 

//in operator - searches for the property name if used on object level
"c" in {"a":1, "b":2} //will give false as the c property is not present in the object
"2" in [a, b, c]//will give false as the index of the array is checked 

//length operator 
"length" in [] //will give true as it checks for object, and an array is an object. 

//Arithmetic
//+ - * / % ++ --
//Play around with post and pre increment/decrement operators

//String


//Comparision
// ==  === != !==  >  <  >=  <=
//== V/S ===

//== Operator Usage
1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'}; 
object1 == object2 //false
0    == undefined  // false
null == undefined  // true


//=== Operator Usage
3 === 3   // true
3 === '3' // false
0 === false //false
1 === true //false
null === undefined //false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 //false

// http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html


//Logical Operators
//&&  ||  !


//BITWISE
// &  |  ^  ~  <<   >>

//typeof
typeof Object;
typeof new Object();

//Ternary ? :


//delete

//in

"c" in {a:1, "b":2, "c":3}
//It checks only object property names
// The in operator, when used together with arrays, will check if an index exists.
// Note, it is ignorant of actual value (in either arrays or objects.)
"c" in ["a","b","c"]; //false
0 in ["a","b","c"]; //true


// You can check for properties on built-in data types. The length property is native
// to all arrays:

"length" in [];
"length" in [1,2,3,4];


// The ”length” property does not exist natively on an object unless it’s added explicitly:

"length" in {}; //false
"length" in {"length" : 1}; //true


"constructor" in Object;
"prototype" in Object;
