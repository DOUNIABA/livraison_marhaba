
const nodemailer = require("nodemailer");
  let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user:"dounia0bahassane@gmail.com", 
      pass: "yevrbburodfcoizj", 
    },
  });
     exports.sendEmail = (email,activemail)=>{
    transporter.sendMail({
      from: "dounia0bahassane@gmail.com", 
      to: email, 
      subject: "confirmer email",
      html: "<h3>HELLO </h3><p> Please click <a href=http://localhost:8080/api/auth/configiration/"+activemail+ "> here </a> to ",
    },
    (error,info)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log(" send");
        }
    })
  }
  // module.exports = {sendEmail}
  