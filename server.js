
const express = require('express')
const app = express()

const macarons = require('./macarons.json')

app.use(express.static('public'))

app.get('/api/macarons', (req,res)=>{
    res.json(macarons)
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})
