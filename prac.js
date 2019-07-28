const express = require ("express");
const exphbs = require('express-handlebars')

const app = express();

//handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main' //creating a main view
}));
app.set('view engine', 'handlebars');

//middleware -are functions that have access to the request object (req), the response object (res)
app.use(function(req, res, next){ //used for password authentication.
    req.name = "abhinav";         //puts log info into req.user and that can be used anywhere
    next();
});

//If the current middleware function does not end the request-response cycle, it must call
// next() to pass control to the next middleware function. Otherwise, the request will be left hanging.



//index routes (http request made to servers - get request(directed to the web page like when clicking a url or link))
//post request - made to update something on the server or the database (used mostly in web form submission)
//put request - to update a resource already on the server
//delete request

app.get('/', (req, res)=>{
    console.log(req.name);
    res.send("hello");
})

//about route
app.get('/about', (req, res)=>{
    res.send("about");
})


const port = 4000;
app.listen(port, ()=>{
    console.log(`server started on port ${port}`)//it will  show cannot get on the console as the '/' (home rout)
    //is not defined
});

/*in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body – refactor
With express you can read any data inside HTTP request, such as headers req.headers (array), you can read the body of the http packet as req.body explained by @CleanCrispCode and you can read as query parameter req.query.variable, 
It helps since express automatically transforms the request in javascript objects this might be one of the many reasons we have to use body parser, but it doesn't say what it does, i.e. that HTTP request and response objects are
 streams and that they're not 'readable' as single object like res.body without the entire stream being buffered into res.body first. */ 