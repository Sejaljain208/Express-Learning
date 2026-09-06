//An Express application is an instance of the Express framework created using express(), which provides methods for defining routes, middleware, and server behavior.
const express = require('express')
const path = require('path')

const app = express()

//setup static and middleware
app.use(express.static('./public'))

// app.get('/' , (req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//     adding to static assets
//     SSR
// })

app.all('/{*splat}' ,(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5050 , ()=>{
    console.log('server is listening on port 5050...');
})

