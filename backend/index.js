
const express = require('express')
const cors =require('cors')
const app = express()  
const db = require('./config/db')
const userRouter = require('./router/routes/userRoute')
const CatchError = require('./router/middleware/errorhandling')
const RouteErrorHandler= require('./router/middleware/routerMiddeleware')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(userRouter)
app.use(CatchError)
app.use(RouteErrorHandler)


app.listen(4000)
