const express = require("express");
const cors = require("cors");

// const Mongoose = require('mongoose')
// Mongoose.connect('mongodb://127.0.0.1:27017/passkey').then(function(){
//     console.log('MongoDb connected')
// })

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;



//Install NodeMailer
const nodemailer = require("nodemailer");

app.post("/sendemail", (req, res) => {
  var gmail = req.body.gmail;
  var appPassword = req.body.appPassword;
  var subject = req.body.subject;
  var msg = req.body.msg;
  var emaillist = req.body.emaillist;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmail,
      pass: appPassword,
    },
  });

  new Promise(async function (resolve, reject) {
    try {
      for (let i = 0; i < emaillist.length; i++) {
        await transporter.sendMail({
          from: gmail,
          to: emaillist[i],
          subject: subject,
          text: msg,
        });
      }
      resolve("success");
    } catch (error) {
      reject(error);
    }
  })
    .then(() => {
      res.send({
        success: true,
        message: "Emails sent successfully",
      });
    })
    .catch((error) => {
      console.log(error);

      if (error.code === "EAUTH") {
        return res.send({
          success: false,
          message:
            "Gmail authentication failed. Please check your Gmail address and App Password.",
        });
      }

      return res.send({
        success: false,
        message: "Something went wrong while sending emails. Please try again.",
      });
    });
});

app.listen(PORT, function () {
  console.log("server started.. at 5000");
});
