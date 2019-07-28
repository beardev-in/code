let miles = [5,1,2,4,0];
A=0;
for(let i=o; i<miles.length; i++){
    A = A+miles[i];
}

//reducer
const R = (accumulator, value)=> accumulator+value;
const result = miles.reduce(R);//reduces all the elements of an array and passes the first element of an array and adds it to its index number
//5+0=5=>accumulator, 5+1=6=>accumulator, 6+2=8=>accumulator....//value is taken as 0 if not passed
console.log(result);//12

//you can write your code within script tags, but it will be exectuted as and when it is being simulatneously downloaded into the
//browser.  
