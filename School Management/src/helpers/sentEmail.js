//Email Helper
const nodemailer = require("nodemailer");
exports.sentEmail = async (config, body, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: '"Programmer Anto" programmeranto@gmail.com',
        to: config.email,
        subject: body.subject,
        html: body.html,
    });

    await transporter.verify(function (error, success) {
        if (error) {
            res.send({ status: 401, message: 'Email Sent Failed..' });
        }
        else {
            return res.send({ status: 200, message: 'Email Sent Sucessfully..' });
        }
    });
}