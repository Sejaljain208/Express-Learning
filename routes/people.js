const express = require('express')
const router = express.Router()

const {
    getPerson,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson} = require('../Controller/people-controller')

// router.get('/',getPerson)                      //get method
// router.post('/' ,createPerson)                 //Post method   
// router.post('/postman',createPersonPostman)
// router.put('/:id', updatePerson)               //PUT methods
// router.delete('/:id', deletePerson)            //DELETE Methods
               //or
router.route('/').get(getPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router 
