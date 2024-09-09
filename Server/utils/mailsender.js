const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/Course');
const otpTemplate = require('../mail/templates/EmailVerificationTemplate');

require('dotenv').config();

const mailSender = async (email, title, body) => {
    try {
        // Configure the transporter with appropriate settings
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, // Ensure this is set correctly in your .env file
            port: 587, // Default SMTP port; adjust if needed (e.g., 465 for SSL)
            secure: false, // Set to true if using port 465, false for port 587
            auth: {
                user: process.env.MAIL_USER, // Ensure this environment variable is correctly set
                pass: process.env.MAIL_PASS, // Ensure this environment variable is correctly set
            },
        });

        // Define the email options
        let info = await transporter.sendMail({
            from: `"StudyNotion || BY - Sarvajeet" <${process.env.MAIL_USER}>`, // Correctly formatted from field
            to: email,
            subject: title,
            html: otpTemplate(body), // Ensure otpTemplate is defined and returns valid HTML
        });

        console.log("Email sent successfully:", info);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Optionally re-throw the error for handling elsewhere
    }
};



module.exports = mailSender;