// Why having a single thread is a limitation?
// Imagine, for example, a complex image transformation algorithm that’s running in the browser.

// While the Call Stack has functions to execute, the browser can’t do anything else — it’s being blocked. This means that the browser can’t render, it can’t run any other code, it’s just stuck. And here comes the problem — your app UI is no longer efficient and pleasing.

// Your app is stuck.


// ajax(..) is some arbitrary Ajax function given by a library
var response = ajax('https://example.com/api');

console.log(response);
// `response` won't have the response



//A simple way of “waiting” for an asynchronous function to return its result is to use a function called callback:

ajax('https://example.com/api', function(response) {
    console.log(response); // `response` is now available
});


//----

function first() {
    console.log('first');
}
function second() {
    console.log('second');
}
function third() {
    console.log('third');
}
first();
setTimeout(second, 1000); // Invoke `second` after 1000ms
third();

// -----------------------

// We’ll start with a somewhat of an odd claim — despite allowing async JavaScript code (like the setTimeout we just discussed), until ES6, JavaScript itself has actually never had any direct notion of asynchrony built into it. The JavaScript engine has never done anything more than executing a single chunk of your program at any given moment.

// For more details on how JavaScript engines work (Google’s V8 specifically), check one of our previous articles on the topic.

// So, who tells the JS Engine to execute chunks of your program? In reality, the JS Engine doesn’t run in isolation — it runs inside a hosting environment, which for most developers is the typical web browser or Node.js. Actually, nowadays, JavaScript gets embedded into all kinds of devices, from robots to light bulbs. Every single device represents a different type of hosting environment for the JS Engine.

// The common denominator in all environments is a built-in mechanism called the event loop, which handles the execution of multiple chunks of your program over time, each time invoking the JS Engine.

// -----
// This means that the JS Engine is just an on-demand execution environment for any arbitrary JS code. It’s the surrounding environment that schedules the events (the JS code executions).

// -----

// So, for example, when your JavaScript program makes an Ajax request to fetch some data from the server, you set up the “response” code in a function (the “callback”), and the JS Engine tells the hosting environment:
// “Hey, I’m going to suspend execution for now, but whenever you finish with that network request, and you have some data, please call this function back.”


// -----
console.log('Hi');
setTimeout(function cb1() { 
    console.log('cb1');
}, 5000);
console.log('Bye');

//-------------------------


console.log('Hi');
setTimeout(function() {
    console.log('callback');
}, 0);
console.log('Bye');