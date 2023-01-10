const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const f = router.post("/contact", async (req, res) => {
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   auth: {
  //     user: "lukas8@ethereal.email",
  //     pass: "vhzEwRs7xwFJrsB3Ax",
  //   },
  // });

  // let message = {
  //   from: req.body.email,
  //   to: "support@defiwars.finance",
  //   subject: req.body.subject,
  //   html: req.body.message,
  // };

  // try {
  //   await transporter.sendMail(message, function (err, info) {
  //     if (err) {
  //       console.log(err);
  //       return res.json({ message: "Failed!" });
  //     } else {
  //       console.log("Email sent");
  //       return res.json({ message: "Success!" });
  //     }
  //   });
  // } catch (e) {
  //   console.log(e);
  // }

  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: "a485da7bebb68aad7b33205bef435057-c76388c3-ce2d38a5",
  });
  mg.messages
    .create("defiwars.finance", {
      from: req.body.email,
      to: ["support@defiwars.finance"],
      subject: req.body.subject ?? "",
      text: req.body.message,
    })
    .then((msg) => {
      console.log("success");
      console.log(msg);
      return res.json({ message: "Success!" });
    }) // logs response data
    .catch((err) => {
      console.log(err);
      return res.json({ message: "Failed!" });
    }); // logs any error`;
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", f);
app.listen(process.env.PORT || 5000, () => {
  console.log("connected");
});
