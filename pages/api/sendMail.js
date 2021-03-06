export default async function handler(req, res) {
  const nodemailer = require("nodemailer");

  if (req.method != "POST") {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "only post methods allowed" }));
  }

  if (req.method == "POST") {
    const email = req.body.email;
    const message = req.body.message;

    const emailBotPassword = process.env.EMAIL_BOT_PASSWORD;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "portfolioemailbot@gmail.com",
        pass: emailBotPassword, //emailBotPassword,
      },
    });

    const mailOptions = {
      from: `${email}`, // sender address
      to: "kubasmetana@seznam.cz", // list of receivers
      subject: `Email from ${email}`, // Subject line
      text: `${message}`, // plaintext body
      html: `<div>${message}</div>`, // html body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        res.status(400).json(JSON.stringify({ err }));
      } else {
        console.log(info);
        res.status(200).json(JSON.stringify({ info }));
      }
    });
  }
}
