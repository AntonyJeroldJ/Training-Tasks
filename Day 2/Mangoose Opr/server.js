const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/user'
const app = express()
mongoose.connect(url)
const con = mongoose.connection

con.on('open', function(){
    console.log("conneced")
}) 
app.use(express.json())
const userRouter = require('./routers/router_urls')
app.use('/user',userRouter)

app.listen(9000, () =>{
    console.log('hello')
})