////////////////////////////////////////functions

function abc(){
    return argument[0]+argument[1];
}
abc(1,2); //adding without passing arguememnts 
//argument is an object

function abc(func){ //you can pass a function as an arguement and invoke it inside that function.
    func();
}
console.log(abc());

//////////////////////////////////////
function Orange(name){
    this.fname = fname;
    console.log(this)
}
Orange();
console.log(this);

//a high order function is a function that takes a function as one of its parameters or returns a function.