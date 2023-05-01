const express = require('express')
const route = require('./src/routes/route.js')
const cors = require('cors')

const app = express()
require("dotenv").config()

app.use(express.json())
app.use(cors())

app.use('/' , route)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running in port ${process.env.PORT}`)
})