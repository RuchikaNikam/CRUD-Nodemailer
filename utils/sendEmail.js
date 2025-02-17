const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (to, subject, html) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject,
        html,
    });
};

module.exports = sendEmail;
// In this example, we have a sendEmail function that uses the nodemailer package to send an email. The function takes three arguments: to, subject, and html. The function creates a nodemailer transporter using the Gmail service and the email credentials from the .env file. It then sends an email using the sendMail method of the transporter.