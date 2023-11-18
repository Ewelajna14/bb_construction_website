const port = 3001;
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());


   let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APPPASS,
    }
  });


  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });


   app.post("/send", function (req, res) {
    let mailOptions = {
        from: req.body.mailerInfo.email,
        to: process.env.EMAIL,
        subject: `Double B Construction - message from: ${req.body.mailerInfo.fname + ' ' + req.body.mailerInfo.lname }`,
        html: `<p>Message: ${req.body.mailerInfo.message}</p><p>Email: ${req.body.mailerInfo.email} </p><p> Phone: ${req.body.mailerInfo.phone}</p>`
        //text: `${req.body.mailerInfo.message + " " + req.body.mailerInfo.email + " "+ req.body.mailerInfo.phone}`,
       };


       transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          res.json({
            status: "fail",
          });
        } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
        }
      })

})


app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});