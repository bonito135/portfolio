export default function handler(req, res) {
  const nodemailer = require("nodemailer");

  if (req.method != "POST") {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "only post methods allowed" }));
  }

  if (req.method == "POST") {
    const email = req.body.email;
    const message = req.body.message;

    const PASSWORD = process.env.password;

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "portfolioemailbot@gmail.com",
        pass: ".RandomPassWord.",
      },
      secure: true,
    });

    const mailOptions = {
      from: `${email}`, // sender address
      to: "kubasmetana@seznam.cz", // list of receivers
      subject: `Email from ${email}`, // Subject line
      text: `${message}`, // plaintext body
      html: `<div>${message}</div>`, // html body
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });

    res.statusCode = 200;
    res.write(JSON.stringify({ status: 200, emailSent: true }));
    res.end();
  }
}
