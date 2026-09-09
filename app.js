const express = require('express')
const app = express()

const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Welcome</h1><a href="/api/products">products</a>') 
})

app.get('/api/products' ,(req,res)=>{
    const newProduct = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })

    res.json(newProduct)
})

//route parameter
app.get('/api/products/:productID' ,(req,res)=>{
    // console.log(req);
    // console.log(req.params);
   
   const {productID } = req.params
   const singleProduct = products.find((product) => product.id === Number(productID))

   if(!singleProduct){
    return res.status(404).send('Product Does not Exist')
   }

    return res.json(singleProduct)
})

app.get('/api/products/:productID/review/:reviewID',(req,res)=>{
    console.log(req.params);
    res.send('hello world')
})

//query parameter
app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query);
    const {search ,limit} = req.query;
    let sortedproduct = [...products];
    
    if(search){
        sortedproduct = sortedproduct.filter((product)=>{
          return product.name.startsWith(search)
        })
    }
    
    if(limit){
        sortedproduct =sortedproduct.slice(0,Number(limit))
    }
    if(sortedproduct.length < 1){
        // res.status(200).send('no products matched your search')
        return res.status(200).json({success:true,data:[]})
    }    
    return res.status(200).json(sortedproduct)
})

app.listen(5050 , ()=>{
    console.log('server is listening on port 5050...');
})

// try these routes
// localhost:5050/api/v1/query?name=john&id=2
// localhost:5050/api/v1/query?search=a&limit=2
// http://localhost:5050/api/v1/query?search=a
// http://localhost:5050/api/v1/query?limit=2
// http://localhost:5050/api/v1/query?limit=2&search=a