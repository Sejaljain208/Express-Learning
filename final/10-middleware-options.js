// req => middleware => res

// 1 . use vs route
// 2 . options - our own / express / third party
// Middleware
    // │
    // ├── 1. Our own / Custom middleware
    // ├── 2. Express / Built-in middleware
    // └── 3. Third-party middleware

// app.use([logger,authorize])    ----> Custom middleware
// app.use(express.static('./public'))  ----> Express/ Built in middleware
// app.use(express.static('./public'))  ----> Express/ Built in middleware
// app.use(morgan('dev))  ----> Third -party  middleware need to be install from npm as a package


const express = require('express')
const app = express()
const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')

app.use(morgan('tiny'))

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