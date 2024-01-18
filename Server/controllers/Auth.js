const User = require('../models/User');
const OTP = require('../models/OTP')
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const Profile = require('../models/Profile');



//OTP Generator

exports.sendOtp = async(req , res) => {
    try{
       
        const {email} = req.body;
       
       
        //validation
        const existedUser = await User.findOne({email})
        if(existedUser){
            return res.status(400).json({
                success : false,
                message : "User Already existed"
            })
        }
        // generator otp
        var otp = otpGenerator.generate(6 , {
            upperCaseAlphabets : false,
            lowerCaseAlphabets : false,
            specialChars : false
        })
        console.log("opt generated",otp)
        //check unique otp
        let result = await OTP.findOne({OTP : otp})

        while(result){
            otpGenerator.generate(6 , {
                upperCaseAlphabets : false,
                lowerCaseAlphabets : false,
                specialChars : false
            })
            result = await OTP.findOne({OTP : otp})

        } 

        //otp create in db

        const response = await OTP.create({email , OTP : otp })

        res.status(200).json({
            success : true,
            message : "Otp generated Successfully",
            otp,
        })



    }catch(error){
        console.log(error),
        res.status(400).json({
            success : false,
            message : "Otp was not generated Successfully",
        })

    }
}









//signup 

exports.signUp = async (req, res) => {
    try {
        const { firstname, lastname, email, password, confirmpassword , accountType , otp} = req.body;
        
        // validation

        if(!firstname || !lastname || !email || !password || !confirmpassword || !otp){
            return res.status(403).json({
                success : false , 
                message : "Please Fill all the Details for SignUp"
            })
        }
       
        if(password !== confirmpassword){
            return res.status(400).json({
                success : false, 
                message : "password and confirm password are not matched"
            })
        }

        const existedUser = await User.findOne({ email });
        if (existedUser) {
           return res.status(400).json({
                success: false,
                message: "User already Existed Go to login page"
            })
        }

        const recentOtp = await OTP.find({email}).sort({createdAt : -1}).limit(1);
        console.log("recent otp : " , recentOtp , recentOtp.length);
        //validate otp

        if(recentOtp.length === 0){
            return res.status(400).json({
                success : false,
                message : " Otp Not Found"
            })
        }
        else if(otp !== recentOtp[0].OTP){
            return res.status(400).json({
                success : false ,
                message : "Invalid Otp"
            })
        }

        let hashPassword;
        try {
            hashPassword = await bcrypt.hash(password, 10);
           
            
        } catch (error) {
            console.log("error in hashing password", error)

        }
        const profileDetails = await Profile.create({
            gender : null,
            dateOfBirth : null,
            about : null,
            contactNumber : null
        })

        const response = await User.create({ email, password: hashPassword, firstname, lastname , confirmpassword: hashPassword ,accountType ,additionalDetail : profileDetails._id , 
        image : `http://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastname}`
        })

        res.status(200).json({
            success: true,
            message: "Data created Successfully",
            res: response,
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: " Data not created into DB"
        })
    }


}

//login controller

exports.login = async (req , res) => {
    try{
        const { accountType , email , password} = req.body;
        if(!email || !password || !accountType){
            return res.status(400).json({
                success : false,
                message : "please fill the email and password"
            })
        }
        //validation
        const existedUser = await User.findOne({email})
        
        if(existedUser.accountType !== accountType){
            return res.status(400).json({
                success : false,
                message : "Please Enter Correct Position Of yours"
            })
        }
        if(!existedUser){
            return res.status(400).json({
                success : false,
                message : "please SignUp First"
            })
        }
        // if problem check here and write this under if condition
        const matchedPassword = await bcrypt.compare(password , existedUser.password)
        if(!matchedPassword) {
           return res.status(400).json({
                success : false,
                message : "please Enter Correct Password"
            })

        }
        const payload = {
            role : existedUser.accountType,
            email : existedUser.email,
            Id : existedUser._id
        }

        //create token 
        const token = jwt.sign(payload , process.env.SECRET_kEY , {expiresIn : 3*24*60*60*1000})
        console.log(token)

        existedUser.token = token;
        existedUser.password = undefined;

        const options = { 
            expires : new Date(Date.now() + 3*24*60*60*1000),
            httpOnly : true,
        }

        res.cookie( "token" , token ,options).status(200).json({
            success: true,
            message : "LoggedIN Successfully",
            User : existedUser,
            token : token
        })

    }
    catch(error){
        console.log(error)
        res.status(400).json({
            success : false,
            message : "Login was not successfully"
        })
    }
}



//Change password

exports.changePassword = async(req , res) => {
    try{
        const {email , password , confirmNewPassword} = req.body;
        //validation
        if(!email || !password || !confirmNewPassword){
            return res.status(401).json({
                success :false,
                message : "please enter all details"
            })
        }
        const existedUser = await User.findOne({email});
        if(!existedUser){
            return res.status(400).json({
                success : false,
                message : "please SignUp First"
            })
        }
        // if problem check here and write this under if condition
        const previousPassword = await bcrypt.compare(password , existedUser.password)
        if(!previousPassword){
            return res.status(400).json({
                success : false ,
                message : "please enter correct password"
            })
        }

        let newPassword = await bcrypt.hash(confirmNewPassword , 10);
        const updatedUser =  await User.updateOne({password : newPassword})

        res.status(200).json({
            success : true,
            message : "password updated successfully",
            user : updatedUser,
        })

    }catch(error){
        res.status(400).json({
            success : false,
            message : "Password not Updated"
        })
    }
}