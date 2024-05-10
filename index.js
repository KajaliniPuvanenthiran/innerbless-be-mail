const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();


// creaating app
const app = express();
app.use(express.json());
app.use(cors());

// endpoint for send an email
app.post('/send', (req, res) => {
  const { name, phoneNumber, address, guardianName, guardianPhoneNumber, description, receiver } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS, // Your Gmail email address
      pass: process.env.EMAIL_APP_PASSKEY // Your Gmail password
    }
  });

  // Define email content
  let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: receiver,
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Phone Number: ${phoneNumber}
      Address: ${address}
      Guardian Name: ${guardianName}
      Guardian Phone Number: ${guardianPhoneNumber}
      Description: ${description}
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
