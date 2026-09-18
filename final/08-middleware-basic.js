const express = require('express')
const app = express()

const DateUrlTime = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method,url,time);
    // res.send('Testing')
    next()
}


app.get('/', DateUrlTime ,(req,res)=>{
      res.send('Home');    
})

app.get('/about',DateUrlTime , (req,res)=>{
      res.send('About');
    
})

app.listen(5050 , ()=>{
    console.log('server is listening on port 5050...');
})