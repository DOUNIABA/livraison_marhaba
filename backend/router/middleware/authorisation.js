
const jwt = require("jsonwebtoken");
const ls = require("local-storage");

const authAcces = (permissions) =>{
    return (req, res, next) =>{
            const token = ls('token')
            const userRole = jwt.verify(token, process.env.SECRET)
           if (permissions==userRole.payload.roleId.name){
               next()
           }else{
               return res.status(401).json("you're not allowed")
           }
       }
   }
   module.exports={authAcces}
   