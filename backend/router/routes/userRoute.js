const user= require('../../controllers/userController')
const role=require('../../controllers/roleController')
const router =require('express').Router()
const {authAcces}=require('../middleware/authorisation')

router.post('/api/auth/register',user.signup)
router.get('/api/auth/verify-email/:token',user.verifyEmail)
router.post('/api/auth/login',user.signin)
router.get('/api/auth/logout',user.Logout)

router.post('/create',role.createRole)

router.get('/api/user/manager/me' ,authAcces("manager"),(req,res) => {
    res.json({message: true})
})

router.get('/api/user/client/me' ,authAcces("client"),(req,res) => {
    res.json({message: true})
})

router.get('/api/user/livreur/me' ,authAcces("livreur"),(req,res) => {
    res.json({message: true})
})
module.exports= router