const express = require('express')
const router = express.Router()
const addNumber = require('../controllers/addNumber.js')


router.get('/test', (req,res)=>{
    res.send('Okay !')
})

router.post('/addNumber', addNumber);

module.exports = router