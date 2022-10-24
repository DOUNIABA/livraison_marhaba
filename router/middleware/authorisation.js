
const authAcces = (permissions) =>{
    return (req, res, next) =>{
           const userRole = req.body.roleId
           if (permissions.includes(userRole)){
               next()
           }else{
               return res.status(401).json("you're not allowed")
           }
       }
   }
   module.exports = {authAcces}
   