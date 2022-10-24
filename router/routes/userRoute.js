
const user= require('../../controllers/userController')
const role=require('../../controllers/roleController')
const router =require('express').Router()
// const mdlwr=require('../middleware/auth')
const {authAcces}=require('../middleware/authorisation')

router.post('/api/auth/register',user.signup)
router.get('/api/auth/verify-email/:token',user.verifyEmail)
router.post('/api/auth/login',user.signin)
router.post('/create',role.createRole)

// router.get('/get',mdlwr.verify(['om@gmail.com']),(req,res)=>{
//     res.send('hello')
// })

router.get('/api/user/manager/me' ,authAcces("manager"),(req,res) => {
    res.send('hello manager')
})

router.get('/api/user/client/me' ,authAcces("client"),(req,res) => {
    res.send('hello client')
})

router.get('/api/user/livreur/me' ,authAcces("livreur"),(req,res) => {
    res.send('hello livreur')
})

module.exports= router
