export default async function handler(req, res) {
  const nodemailer = require("nodemailer");

  if (req.method != "POST") {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "only post methods allowed" }));
  }

  if (req.method == "POST") {
    const email = req.body.email;
    const message = req.body.message;

    const emailBotPassword =
      process.env.EMAIL_BOT_PASSWORD || ".RandomPassWord.";

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

    transporter.sendMail(mailOptions, async function (err, info) {
      if (err) {
        console.log(err);
        await res.status(400).json(JSON.stringify({ err })).end();
      } else {
        console.log(info);
        await res.status(200).end();
        return;
      }
    });
  }
}
