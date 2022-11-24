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
        return res.status(200).send('User already exist')        
        ls('email',body.email)
        const email= ls('email')
        const token= await jwt.sign({email},process.env.SECRET)
         ls('eml_token',token)
        sendEmail(email,ls('eml_token'))  
       const hash= await bcrypt.hash(body.password,10)
       body.password=hash
     const data= await User.create({...body, roleId:'6355d40ec510b624a5542a8a'})
     if(!data)                        
     return res.status(400).send('Your account has not created.')
     res.status(200).send('Your account has been created.Check your email!!')
}
  const verifyEmail = async (req,res) => {
    const token = req.params.token
     const vrf= jwt.verify(token,process.env.SECRET)
     req.email=vrf
     const confirm= await User.findOneAndUpdate({email:req.email.email},{status:"valid"})
     if(!confirm) return res.send('not comfirmed')
     res.redirect('http://localhost:3000/login')
} 

function gererateAccessToken (user,expirestime) 
{

 return jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:expirestime})
}

const signin=(req,res)=>{
  const {body}=req
  User.findOne({email: body.email})
  .populate({
      path: 'roleId',
      model: Role,
     })
    .then(e=>{
      const payload = e
      const status = e.status
  if(e){
   bcrypt.compare(body.password,e.password)
    .then(e=>{
        if(e && status == 'valid'){
          const token=jwt.sign({payload}, process.env.SECRET)
          ls('token',token)
          res.json({token:ls('token'),role:payload.roleId.name})
        }else{
          res.status(200).send('Invalid email or password!!')

        }
      }).catch(()=>{
          res.send('password not hashed')
      })
}else{
  res.send('not found')
}
  })
}

const ForgetPassword  = async(req, res) => 
{
  const user = await User.findOne({email:req.body.email})
  if(!user) res.send('invalide mail')
  ls('verifitoken',gererateAccessToken({id:user._id},"10m"))
  sendEmail(user.email,ls('verifitoken'),user.name,'to reset your password','/api/auth/forgetpassword/')  
  res.send("verifiez votre email <a href=https://mail.google.com/mail/u/0/#inbox >")  
}

const Logout = async(req,res)=>{
  localStorage.clear();
  res.send('logout');

}


module.exports= {signup,signin,verifyEmail,ForgetPassword,Logout}
