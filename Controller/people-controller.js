let {people} = require('../data')


//GET 
const getPerson = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

//POST
const createPerson = (req,res)=>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
}

//POST (Postman)
 const createPersonPostman = (req,res) => {
    const {name} = req.body
     if(!name){
        return res
        .status(400)
        .json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,data :[...people,name]})
}

//PUT
const updatePerson =(req,res)=>{
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
}

//DELETE
const deletePerson =(req,res)=>{
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
}

module.exports ={
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}