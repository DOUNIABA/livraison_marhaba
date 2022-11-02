

const User=require('../models/userModel')
const Role=require('../models/roleModel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv = require('dotenv')
const ls=require('local-storage')
const {sendEmail} =require('../config/nodemail')

const signup = async (req,res)=>{
  const {body}=req
     const user = await User.findOne({email:body.email})
       if(user) 
        return res.status(400).send('user exist already')
        ls('email',body.email)
        const email= ls('email')
        const token= await jwt.sign({email},process.env.SECRET)
         ls('eml_token',token)
 
        sendEmail(email,ls('eml_token'))
       const hash= await bcrypt.hash(body.password,10)
       body.password=hash
     const data= await User.create({...body, roleId:'6355d40ec510b624a5542a8a'})
     if(!data)                        
     return res.send('not created')
     res.send('created')
}
   
  const verifyEmail = async (req,res) => {
    const token = req.params.token
     const vrf= jwt.verify(token,process.env.SECRET)
     req.email=vrf
     const confirm= await User.findOneAndUpdate({email:req.email.email},{status:"valid"})
     if(!confirm) return res.send('not comfirmed')
     res.send('comfirmed')
} 

const signin=(req,res)=>{
  const {body}=req
  User.findOne({email: body.email}).populate({
      path: 'roleId',
      model: Role,
     })
     .then(e=>{
      const payload = e
  if(e){
   bcrypt.compare(body.password,e.password).then(e=>{
        if(e){
          const token=jwt.sign({payload}, process.env.SECRET)
          ls('token',token)
          res.send(ls('token')) 
        }else{
          res.send('invalid')
        }
      }).catch(()=>{
          res.send('password not hashed')
      })
}else{
  res.send('not found')
}
  })
}
module.exports= {signup,signin,verifyEmail}
