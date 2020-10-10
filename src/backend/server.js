var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 465,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
    var name = req.body.FullName
    var email = req.body.Email
    var message = req.body.Message
    var content = `name: ${name} \n email: ${email} \n  message: ${message}`
  
    var mail = {
      from: name,
      to: creds.USER,  
      subject: 'New message through personal website',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
            status: 'fail'
            })
        } else {
            res.json({
            status: 'success'
            })
        }

        //auto reply message
        transporter.sendMail({
            from: creds.USER,
            to: email,
            subject: "Email sent successfully!",
            text: `Thank you for contacting me! I will get back to you as soon as possible! \n\nEmail details\nName: ${name}\n Email: ${email}\n Message: ${message}`
        }, function(error, info){
            if(error) {
            console.log(error);
            } else{
            console.log('Message sent: ' + info.response);
            }
        });
	});
})
  
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use('/', router)
  app.listen(3002)