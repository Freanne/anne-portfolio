const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour gérer les soumissions du formulaire de contact
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Configurer Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'annemarieakoteg03@gmail.com', // Remplacez par votre email
      pass: 'momo2024anne', // Remplacez par votre mot de passe
    },
  });

  const mailOptions = {
    from: email,
    to: 'annemarieakoteg03@gmail.com', // Remplacez par votre email
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
