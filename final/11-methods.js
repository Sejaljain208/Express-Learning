const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended : false}))

//parse json 
app.use(express.json())

//GET methods
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

//Post method
app.post('/api/people' ,(req,res)=>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
     if(!name){
        return res
        .status(400)
        .json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,data :[...people,name]})
})

app.post('/login',(req,res)=>{
     const {name} = req.body;
     if(name){
        return res.status(200).send(`<h1>Welcome ${name}</h1>`) 
     }
       res.status(401).send('<h1>Please provide credentials</h1>')
})

//PUT methods
app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    // console.log(id,name);
    // res.send(name); 
    // res.json({success:true,person:name})

    const p = people.find((p)=>p.id === Number(id))

    if(!p){
        return res.status(404).json({success:false , msg :`no person with id ${id}`})
    }
    const newPeople = people.map((p)=>{
      if(p.id === Number(id)) {
        p.name = name
      } 
      return p
    })
    res.status(200).json({success:true,data:newPeople})
})

//DELETE Methods
app.delete('/api/people/:id',(req,res)=>{
      const p = people.find((p)=>p.id === Number(req.params.id))

    if(!p){
        return res.status(404).json({success:false , msg :`no person with id ${req.params.id}`})
    }

    const newPeople = people.filter(
        (p)=>p.id !== Number(req.params.id)
    )

    return res
    .status(200)
    .json({success:true,data:newPeople})
})

app.listen(5050,()=>{
    console.log("Server is listening on the port 5050......");
})