const mongoose = require('mongoose')
const mailSender = require('../utils/mailsender')



const OTPSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,

    },
    OTP : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
        expires : 5*60,
    } 

})


async function sendverificationEmail(email , otp) {
    try {
        const mailResponse = await mailSender(email , "verification Email from StudyNotion" , otp)
        console.log("Email send Successfully" ,mailResponse)
    }
    catch(error){
        console.log("error occur during sending mail" , error )
    }
}

OTPSchema.pre('save' , async function (next) {
   await sendverificationEmail(this.email , this.OTP)
   next();
}) 




module.exports = mongoose.model("OTP" , OTPSchema)