const Role=require('../models/roleModel')
const createRole= (req,res)=>{
    const {body}=req
    
                Role.create({...body}).then(()=>{
                    res.json('created')
                })
                .catch(()=>{
                    res.json('not added')
                })
}
module.exports= {createRole}
    