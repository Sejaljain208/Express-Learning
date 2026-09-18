const authorize = (req,res,next) => {

    // console.log(req.query);
    
    const {user} = req.query;

    if(user === 'john'){
        req.user = {name:'john',id:3}
        next()
    }
    else{
       res.status(401).send('Unathorize')
    }
    // console.log('authorize')
    // next()
    
}

module.exports = authorize