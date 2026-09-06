//An Express application is an instance of the Express framework created using express(), which provides methods for defining routes, middleware, and server behavior.
const express = require('express')
const app = express()

//app.get() defines a route that handles HTTP GET requests for a specified URL path.
app.get('/', (req,res)=>{
    res.status(200).send('Home Page')
})

app.get('/about' ,(req,res)=>{
    res.status(200).send('About page')
})

//app.all:defines a route handler that is executed for all HTTP methods matching the specified path. It is commonly used for catch-all routes or logic that should apply to multiple HTTP methods.
app.all('/{*splat}' ,(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})


//app.listen():starts the Express server and makes it listen for incoming HTTP requests on a specified port.
app.listen(5050 , ()=>{
    console.log('server is listening on port 5050...');
})

//http methods 
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen