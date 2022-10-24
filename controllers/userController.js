
const User=require('../models/userModel')
const Role=require('../models/roleModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv = require('dotenv')
const ls=require('local-storage')
const {sendEmail} =require('../config/nodemail')


const signup= (req,res)=>{
 const {body}=req

   try{
    const user =User.findOne({email:body.email})
      if(user){
      const token=jwt.sign({_id:user._id},process.env.SECRET)
      user.token = token
      bcrypt.hash(body.password,10).then(hashpassword=>
      {
        body.password=hashpassword
        User.create({...body}).then(()=>{
            res.json('created')
            sendEmail(body.email,token)  
        })
       })
   }}
   catch(err){
    return res.status(400).send({message: err})
   }     
  }

  const verifyEmail = async (req,res) => {
    const token = req.params.token
    const user= await User.findOne({token: token})
      user.status = "valid"
     await user.save()
      res.send('email is valide')
} 

const signin=(req,res)=>{
    const {body}=req
    User.findOne({email:body.email}).populate({
        path: 'roleId',
        model: Role,
       }).then(e=>{
        res.send(e)
        const payload=e
    if(e){
     bcrypt.compare(body.password,e.password).then(e=>{
          if(e){
            const token=jwt.sign({payload},process.env.SECRET)
            ls('token',token)
            res.send(ls('token'))

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

module.exports= {signup,signin,verifyEmail}
