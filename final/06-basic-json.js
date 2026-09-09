const express = require('express')
const app = express()

const {products} = require('./data')  //importing from data.js file

app.get('/',(req,res)=>{
    res.json(products)   // res.json([{name:'Sajal',age:20},{name:'Pranav',age:22}])
})

app.listen(5050 , ()=>{
    console.log('server is listening on port 5050...');
})

