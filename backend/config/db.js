
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

module.exports = mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('not connected')
})
