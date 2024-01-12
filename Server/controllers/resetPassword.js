const User = require('../models/User');
const mailsender = require('../utils/mailsender');
const bcrypt = require("bcrypt");
const crypto = require("crypto")
const {passwordUpdated} = require("../mail/templates/passwordUpdate");



// forgot password
exports.resetPasswordToken = async (req, res) => {
    try {
        const { email } = req.body;

        //validation

        const existedUser = await User.findOne({ email })
        if (!existedUser) {
            return res.status(401).json({
                success: false,
                message: "Your Email was not Registered with us"
            })
        }
        //create token 
        const token = crypto.randomUUID();
        //update token and expiring time in user db
        const updatedDetails = await User.findOneAndUpdate({email : email} , {token : token , resetpasswordExpires : Date.now() + 5*60*1000} , {new :true})
        // generating link 
        const link = `http://localhost:3000/update-password/${token}`

        

        // sending mail

        await mailsender(email , "password reset link" , `password reset link click here ${link}`)

        res.status(200).json({
            success : true,
            message : "Email send Successfully please change your password"
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            
            success : false, 
            message : "issue in forgeting password"
        })
    }
}

//forget password change

exports.resetPassword = async (req , res ) => {
    try{
        const {password ,token ,  confirmPassword} = req.body;
        if(!password || !confirmPassword){
            return res.status(401).json({
                success : false ,
                message : "please fill all the fields"
            })
        }
        if(password !==confirmPassword){
            return res.status(401).json(
                {
                    success : false,
                    message : "please enter correct confirmpassword"
                }
            )
        }
        const userDetails = await User.findOne({token : token})
        if(!userDetails){
            return res.status(400).json({
                success : false ,
                message : "Invalid token please regenerate it"
            })
        }

        if(userDetails.resetpasswordExpires < Date.now()){
            return res.status(400).json({
                success : false, 
                message : "Token is expired"
            })
        }
        let hashPassword;
        try{
         hashPassword = await bcrypt.hash(confirmPassword ,10);
        }catch(error){
            res.status(400).json({
                success : false,
                message : "error in hashing confirm password"
            })
        }




        const updatedDetails = await User.findOneAndUpdate({token : token} , {password : hashPassword} , {new:true})

        res.status(200).json(
            {success : true,
            message : "password updated Successfully",
            user : updatedDetails
        })
    }catch(error){
        res.status(590).json({
            success : false,
            message : "password not updated"
        })
    }
}