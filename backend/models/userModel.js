const mongoose = require('mongoose')
const user = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    
    status:{
        type:String,
        default:"invalid",
    },

    token:{
        type:String,
    },

   roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
      },
    })

const User= mongoose.model('User', user)
module.exports=User
