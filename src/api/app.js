const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const sendGrid = require('@sendgrid/mail');;
const dotenv = require('dotenv');

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

dotenv.config();

const transporter = require('./config');

const app = express();


// app.use(bodyParser.json());

app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// app.get('/api', (req, res, next) => {
//   res.send('API Status: Running')
// });

app.post('/send',(req,res) => {
  console.log(req.body);

  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: '465',
      ssl: 'true',
      auth:{
        user:'aarshoza@gmail.com',
        password: 'zjytkckjlzjpgvur'
      }
    });
    var text = req.body.email + 'has sent you an email from portfolio with message' + req.body.message
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: 'Message from portfolio',
      text: req.body.message, //text or html
      html: `<i>${req.body.email}</i> has sent you an email from portfolio with message<br /> <b>Content: </b>${req.body.message}`
    };

    transporter.sendMail(mailOptions, function (err, res) {
      if (err) {
        console.log('err is: ',err)
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  }
   catch (error) {
  res.status(500).send({
    success: false,
    message: 'Something went wrong. Try again later'
  });
}
});

// app.post('/api/email', (req, res, next) => {
//   console.log(req.body);
//   sendGrid.setApiKey('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');

//   const msg = {
//     to: 'aarshoza@gmail.com',
//     from: req.body.email,
//     subject: 'Contact from Portfolio',
//     text: req.body.message
//   }

//   sendGrid.send(msg)
//     .then(result => {
//       res.status(200).json({
//         success: true
//       });
//     })
//     .catch(err => {
//       console.log('error', err);
//       res.status(401).json({
//         success: false
//       });
//     });
// })

// app.post('/send', (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });



app.listen(3030,() => {
  console.log('server start on port 3000');
});