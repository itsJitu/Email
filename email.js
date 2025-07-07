const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
    service: "gmail",
  auth: {
    user: "userakashnettechinnov123@gmail.com",           // ✅ Your real Gmail
    pass: "tnvp dxtm ywis hayh",              // ✅ Not your real password
  },
});

const mailOptions = {
    to: "diwakarkumar9451@gmail.com",
    subject: "Order not confirm",
   // text: "This is my first email through nodemailer"
   html: `
   <body>
    <div>
        <h1 style="color : red";>Email Heading</h1>
        <table>
            <thead>
                <tr>
                    <td>Yomtfjhffhhjugbjkh</td>
                    <td>items</td>
                </tr>
            </thead>
        </table>
    </div>
   </body>`
};

mailer.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log("❌ Error Sending Email:", err);
    } else {
        console.log("✅ Email Sent Successfully:", info);
    }
});
