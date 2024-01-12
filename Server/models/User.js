const mongoose = require("mongoose");
const {mailSender} = require('../utils/mailsender')

const UserSchema = new mongoose.Schema({
    firstname : {
        type : String, 
        required : true,
    },
    lastname : {
        type:String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required :true,
    },
    confirmpassword : {
        type : String,
        required :true,
    },
    accountType : {
        type : String,
        enum : ['Admin' , 'Student' , 'Instructor']
    },
    additionalDetail : {
        type : mongoose.Schema.Types.ObjectId,
       
        ref : "Profile"
    },
    courses : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Course"
        }
    ],
    image : {
        type : String,
        
    },
    token : {
        type : String , 
        
    },
    resetpasswordExpires : {
        type : Date,

    },
    coureseProgress : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "CourseProgress"
        }
    ]


})

async function sendverificationEmail(email ,password) {
    try {
        const mailResponse = await mailSender(email , "Password Updated Successfully" ,password)
        console.log("Email send Successfully" ,mailResponse)
    }
    catch(error){
        console.log("error occur during sending mail" , error )
    }
}


UserSchema.post('updateOne ', async function (next) {
    await sendverificationEmail(this.email , this.password);
    next();
})


module.exports = mongoose.model('User' , UserSchema)