//growing functions 
function printFarmInventory(cows, chickens) {
    let cowString = String(cows); //it calls the function in which the number is inputed but stringifies it so that it doesn't get added to the zeroes. 
    while (cowString.length < 3) {
    cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
    }
    printFarmInventory(7, 11);

    //007 Cows
    //011 Chickens

    function printZeroPaddedWithLabel(number, label) {
        let numberString = String(number);
        while (numberString.length < 3) {
        numberString = "0" + numberString;
        }
        console.log(`${numberString} ${label}`); //label inputs the second parameter of all the parameters 
        }
        function printFarmInventory(cows, chickens, pigs) {
        printZeroPaddedWithLabel(cows, "Cows");
        printZeroPaddedWithLabel(chickens, "Chickens");
        printZeroPaddedWithLabel(pigs, "Pigs");
        }
        printFarmInventory(7, 11, 3);

//way 3 of doing this
        function zeroPad(number, width) {
            let string = String(number);
            while (string.length < width) {
            string = "0" + string;
            }
            return string;
            }
            function printFarmInventory(cows, chickens, pigs) {
            console.log(`${zeroPad(cows, 3)} Cows`); //the 3 is being inputed to the width arguement 
            console.log(`${zeroPad(chickens, 3)} Chickens`);
            console.log(`${zeroPad(pigs, 3)} Pigs`);
            }
            printFarmInventory(7, 16, 3);

 //*********weresquirrel**********
 
/* While trying to access a property - using a dot, the word after the dot is the literal name of the property.
When using square brackets, the expression between the brackets is evaluated to
get the property name. If you want to extract the property named by the value held in
the binding i , you say value[i] . */

//we access the length property of the value in 'myString'. (myString.length)
//we access the max property of the value in math. (Math.max)
//.length, math.max, toUpperCase etc are methods. null does not have any properties.


//********method***********

//Properties that contain functions are generally called methods

/* Interestingly, even though the call to toUpperCase does not pass any argu-
ments, the function somehow has access to the string */

//************** */ call stack**********
/* in programming, is a data structure that allows you to push
values into it and pop them out again in the opposite order so that the thing
that was added last is removed first */

//**********object************
//Values of the type object are arbitrary collections of properties.
//There’s an Object.assign function that copies all properties from one object
//into another.

/* objects are mutable. You can change their properties, causing a single
object value to have different content at different times.*/

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

// → {a: 1, b: 3, c: 4}

//Object function - Object.assign, delete objectname.property, Object.keys

/*When you compare objects with JavaScript’s == operator, it compares by
identity: it will produce true only if both objects are precisely the same value.
Comparing different objects will return false as it points to a different object,
even if they have identical properties (they have different refernces)
 There is no “deep” comparison operation built into JavaScript, which
compares objects by contents. */

//********Array***********
//Arrays, then, are just a kind of object specialized for storing sequences of
//things. If you evaluate typeof [] , it produces "object"

//********The lycanthrope's log**********

let journal = [];
function addEvents(events, squirel){ //arguements which will store the addevents
    journal.push({events, squirel})  //the stored object gets pushed to journal
}
addEvents(['cycling', 'movie', 'popcorn', 'eat'], false)

//***********array looping***********

/*going over arrays one
element at a time is something that comes up a lot, and to do that you’d run
a counter over the length of the array and pick out each element in turn. */

for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    // Do something with entry
    }

    //orrrrr

    for (let entry of JOURNAL) { //entry - variable defination  it will loop over the elements of the value given after of
        console.log(`${entry.events.length} events.`);
        }
//shift and unshift
/*corresponding methods for adding and removing
things at the start of an array are called unshift and shift . 
*/
let todoList = [];
function remember(task) {//add tasks to the end of the queue by calling remember("xyz")
todoList.push(task);
}
function getTask() { //when you have pushed a new element in to the array and are ready to work with it you use getTask
                     //to get (and remove) the front item from the queue.
return todoList.shift(); //shift calls for the first element
}
function rememberUrgently(task) { //rememberUrgently function also adds a task but adds it to the front
todoList.unshift(task);
}
   
//what are events??? *******

//this keyword - references the object that is executing the current function.
 
var a = {
    title : 'b',
    c() {
        console.log(this) //this calls the object in which the function is present in
    }
};

a.c(); //calling the method

a.e = function(){
    console.log(this) //will return the same object a
}

a.e();

///

var video = {
    title : 'b',
    c() {
        console.log(this) //this calls the object in which the function is present in
    }
};

function Video(title){ //constructer function
    this.title = title;
    console.log(this);
}

let new1 = new Video('abhinav') //the new keyword creates a new epty object which acts as a container for the constructer function
//the this keyword points towards "Video" function

///
//this in method => refers to the object
//this in function => refers to the window object (global)
var video = {
    title : 'b',
    char : ['abhinav','reddy','17'],
    showChar() {
        this.char.forEach(function(char1){ //call back function
            console.log(this.title, char1); //will print each element in the array loop wise using the for each method
            //this which is being used in the call back function does not acces the video object but rather the global window object
            //for it access the present object, you can pass a second parameter other than the function, i.e 'this'
        
        }, this);
                          
    }
};

