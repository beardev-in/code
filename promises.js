const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
        console.log('resolving the promise ...');
        resolve('Hello, Promises!');
    }
    reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Two functions 
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// Same as above, written concisely
myPromise.then((resolvedValue) => {
    console.log(resolvedValue);
}, (error) => {
    console.log(error);
});
//.then() accepts two callbacks. The first callback is invoked when the promise is resolved. 
//The second callback is executed when the promise is rejected.
// Output (in 90% of the cases)

// resolving the promise ...
// Hello, Promises!
// Hello, Promises!

/*A promise can only succeed(resolved) or fail(reject) once. It cannot succeed or fail twice, 
neither can it switch from success to failure or vice versa. If a promise has succeeded or 
failed and you later add a success/failure callback (i.e a .then), the correct callback will be called, 
even though the event took place earlier.*/

const myProimse = new Promise((resolve, reject) => {
    if (Math.random() * 100 < 90) {
      reject(new Error('The promise was rejected by using reject function.'));
    }
    throw new Error('The promise was rejected by throwing an error');
  });
  
  myProimse.then(
    () => console.log('resolved'), 
    (error) => console.log(error.message)
  );
  
  // Output (in 90% of cases)
  
  // The promise was rejected by using reject function.
