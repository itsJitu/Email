const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
    host: "localhost",
    port: "1025", // fixed: use number
    secure: false
});

const mailOptions = {
    from: "do-not-reply@mystore.com",
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
                    <td>s no</td>
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
