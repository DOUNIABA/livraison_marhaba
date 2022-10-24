// const User = require("../models/userModel")

const User = require("../models/userModel")

// const signup=(req,res)=>{
//     const {body}=req
//     const user=User.findeOne({email:body.emial})
//     if(user)
//     res.send('email deja existe')
//     ls('email',body.email)
//     const email=ls('email')
//     const token = jwt.sign({email},process.env.SECRET)
//     ls('eml_token',token)
//     const hash=bcrypt.hash(body.password)
//     body.hash=hash
//     const data=User.create({...body})
//     if(!data)
//     return res.send('not created')
//     res.send('created')
// }

// const singnin=(req,res)=>{
//     const {body}=req
//     User.fideOne({email:body.emial}).then(e=>{
//         const payload=e
//         if(e){
//             bcrypt.compare(body.password,e.password)
//             .then(e=>{
//                 if(e){
//                     const token = jwt.sign({payload},process.env.SECRET)
//                     ls('token',token)
//                     res.send(ls('token'))
//                 }else{
//                     res.send('invalid')
//                 }
//             }).catch(()=>{
//                 res.send('not hashed')
//             })
//         }else{
//             res.send('not found')
//         }
//     })

// }

// const verifyEmail=async (req,res)=>{
//     const token=req.params.tokenconstvrf=jwt.verify(token,process.env.SECRET)
// }


const verifyEmail=async(req,res)=>{
    const token=req.params.token
    const vrf=jwt.verify(token,prcess.env.SECRET)
    req.email=vrf
    const confirm=await User.findOneAndUpdate({email:req.email.email},{status:"valid"})
    if(!confirm) return res.send('not confirmed'
    res.send('confirmed'))
}


module.exports=mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log('connected')
}).catch(()=>{
    console.log('non connecté')
})