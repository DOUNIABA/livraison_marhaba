

// const jwt=require('jsonwebtoken')
// const dotenv=('dotenv')
// const ls=require('local-storage')
// function verify(access){
//     return (req,res,next)=>{
//         if(ls('token')){
//             if(jwt.verify(ls('token'),process.env.SECRET)){
//               req.user=token
//               if(access.includes(req.user.user.email)){
//                 next()
//               }else{
//                 res.send('anauthorised')
//               }
//             }
//         }else{
//             res.send('anauthenticated')
//         }
//     }
// }
// module.exports={verify}

