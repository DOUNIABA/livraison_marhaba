
const express = require('express')
const app = express()  
const db = require('./config/db')
const userRouter = require('./router/routes/userRoute')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRouter)

app.listen(8000)
