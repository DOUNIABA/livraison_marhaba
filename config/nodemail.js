
const nodemailer = require("nodemailer");
const ls = require("local-storage");

  let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user:"dounia0bahassane@gmail.com", 
      pass: "yevrbburodfcoizj", 
    },
  });  
  
     exports.sendEmail = (email,token)=>{
     transporter.sendMail({
      from: "dounia0bahassane@gmail.com", 
      to: email,
      subject: "confirmation email",
      html: "<h3>HELLO </h3><p> Please click here to confirm your email: <a href=http://localhost:8000/api/auth/verify-email/"+token+"> here </a> ",
    },
    (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(" send");
        }
    })
   
  }

   