
const User=require('../models/userModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv = require('dotenv')
const ls=require('local-storage')
const {sendEmail} =require('../config/nodemail')
 
const signup= (req,res)=>{
    const {body}=req
   try{
    bcrypt.hash(body.password,10).then(e=>{
        body.password=e

        User.create({...body}).then(()=>{
            res.json('created')
            // console.log( sendEmail(body.email,token)  )
            sendEmail(body.email,body.password)  
        })
        })
   }catch(error){
    return res.status(400).send({message: error})
   }     
}

const get =  (req,res) => 
  { 
     User.find().populate({
      path: 'roleId',
      model: Role,
      populate:{path:"user",model:"User"}
     })
} 

const signin=(req,res)=>{
    const {body}=req
    User.findOne({email:body.email}).then(e=>{
        const payload=e
    if(e){
     bcrypt.compare(body.password,e.password).then(e=>{

          if(e){
            const token=jwt.sign({payload},process.env.SECRET)
            ls('token',token)
            res.send(ls('token'))
            // res.json({body})

          }else{
            res.send('invalid')
          }
        }).catch(()=>{
            res.send('not hashed')
        })
}else{
    res.send('not found')
}
    })
}


module.exports= {signup,signin,get}
