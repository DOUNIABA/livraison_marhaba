
function ErrorHandler(err,req,res,next){
   console.log(err)
   res.status(500).send({message:'something went wrong'})
}
