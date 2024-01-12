const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/Course');
const otpTemplate = require('../mail/templates/EmailVerificationTemplate');

require('dotenv').config();

const mailSender = async (email, title, body) => {
    try {

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,

            }
        })

        let info = await transporter.sendMail({
            to: `${email}`,
            from: "StudyNotion || BY - Sarvajeet",
            subject: `${title}` ,
            html: otpTemplate(body),
        })

       
        console.log( "INfo-->", info)
        return info;
    }
    catch (error) {
        console.log(error)
    }
}



module.exports = mailSender;