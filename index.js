
const express = require('express')
const app = express()  
const db = require('./config/db')
const userRouter = require('./router/routes/userRoute')
const CatchError = require('./router/middleware/errorhandling')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRouter)

app.use(CatchError)

app.listen(8000)
