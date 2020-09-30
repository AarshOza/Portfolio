const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: '465',
  ssl: 'true',
  auth: {
    user: 'aarshoza@gmail.com',
    pass: 'zjytkckjlzjpgvur'
  }
});
const mailOptions = {
  from: 'aarsh.140410116043@gmail.com',
  to: 'aarshoza@gmail.com',
  subject: 'New Message',
  text: 'Re Nacho' //text or html
};

transporter.sendMail(mailOptions, function (err, res) {
  if (err) {
    console.log('err is: ', err)
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