const port = 3001;
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
   });


   let transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.WORD
    }
  });

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });


   app.post("/send", function (req, res) {
    let mailOptions = {
        from: "castaneis@outlook.com",
        to: process.env.EMAIL,
        subject: "Nodemailer API",
        text: "Hi from your nodemailer API",
       };


   transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
   });

})