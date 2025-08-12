const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ton.email@gmail.com",
    pass: "mot_de_passe_application"
  }
});

let mailOptions = {
  from: "ton.email@gmail.com",
  to: "destinataire@example.com",
  subject: "Test Node.js",
  text: "Bonjour, ceci est un email envoyé avec Node.js !"
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Erreur :", err);
  } else {
    console.log("Email envoyé :", info.response);
  }
});
