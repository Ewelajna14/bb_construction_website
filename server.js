const port = 3001;
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

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
        subject: `Message from: ${req.body.mailerInfo.fname + ' ' + req.body.mailerInfo.lname }`,
        text: `${req.body.mailerInfo.message + " " + req.body.mailerInfo.email + " "+ req.body.mailerInfo.phone}`,
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