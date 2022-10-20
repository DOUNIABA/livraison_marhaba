
const user= require('../../controllers/userController')
const role=require('../../controllers/roleController')
const router =require('express').Router()
const mdlwr=require('../middleware/auth')
const midel=require('../middleware/authorisation')

router.post('/api/auth/register',user.signup)

// router.post('api/auth/confirmation/:)
router.post('/api/auth/login',user.signin)

router.post('/create',role.createRole)

router.get('/get',mdlwr.verify(['om@gmail.com']),(req,res)=>{
    res.send('hello')
})



module.exports= router
