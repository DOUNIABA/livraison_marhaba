
const express=require('express')
const router =express.Router()
  
const {getManager}=require ('../controllers/managerController')

router.get("/manager",getManager)

module.exports=router
