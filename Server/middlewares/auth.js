const jwt = require("jsonwebtoken")
const User = require('../models/User');
require('dotenv').config();


//auth middlewares
exports.auth = async(req , res, next) => {
    try{
        const {token} = req.body || req.cookies.token || req.header("Authorisation").replace("Bearer ", "") ;
        console.log("Token-", token)
        if(!token) {
            return res.status(400).json({
                success : false , 
                message : "Token is not FOund"
            })
        }
        //verify the token
        try{
            const decode = jwt.verify(token , process.env.SECRET_kEY );
            req.user = decode;
            console.log("decode:", decode  )

             
                
            
        }catch(error){
            console.log(error)
            res.status(401).json({
                success : false, 
                message : "token is not valid"
            })
        }
        next();
    }catch(error){
        res.status(400).json({
            success : false,
            message : ""
        })
    }
}

//isStudent

exports.isStudent = async(req , res , next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(400).json({
                success : false,
                message : "this is procted route for student"
            })
        }
        next();
    }catch(error){
        res.status(400).json({
            success : false,
            message : "issue in validating the isStudent middleware"
        })
    }
}


//isAdmin

exports.isAdmin = async(req , res , next) => {
    try{
        if(req.user.role !== "Admin"){
            return res.status(400).json({
                success : false,
                message : "this is procted route for admin"
            })
        }
        next();
    }
    catch(error){
        res.status(400).json({
            success : false,
            message : "issue in validating the isAdmin middleware"
        })
    }
}
//isIntructor

exports.isInstructor = async(req, res , next) => {
    try{
        if(req.user.role !== "Instructor"){
            return res.status(400).json({
                success : false,
                message : "this is procted route for instructor"
            })
        }
        next();
    }
    catch(error){
        res.status(400).json({
            success : false,
            message : "issue in validating the isInstructor middleware"
        })
    }
}