// Path-specific middleware is middleware mounted on a specific path using app.use(path, middleware). It runs for requests whose URL matches that path and its sub-paths.

// Route-specific middleware is middleware passed directly to a route such as app.get(path, middleware, handler), causing it to execute only for that particular route.

// req => middleware => res

const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

// app.use('/api',logger)   ---> it will apply to both , api/products and api/items....Jitni requests /api se start hoti hain, un par logger middleware chalao. baki '/' or '/about' par nhi chalegaa....

app.use([logger,authorize])


app.get('/' , (req,res)=>{
      res.send('Home');    
})

app.get('/about', (req,res)=>{
      res.send('About');
    
})
app.get('/api/products',(req,res)=>{
      res.send('products');    
})

app.get('/api/items', (req,res)=>{
      res.send('items');
    
})


app.listen(5050 , ()=>{
    console.log('server is listening on port 5050...');
})