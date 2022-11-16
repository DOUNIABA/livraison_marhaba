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
      html: "<h3>Bonjour </h3><p> Pour activer votre compte,veuillez cliquer sur ce lien: <a href=http://localhost:4000/api/auth/verify-email/"+token+"> clickez ici ! </a> ",
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
