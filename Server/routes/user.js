const express = require('express')
const router = express.Router();

const {signUp , login , sendOtp , updateProfilePhoto} = require('../controllers/Auth')
const {auth , isAdmin , isStudent , isInstructor}  = require("../middlewares/auth");
const { resetPasswordToken } = require('../controllers/resetPassword');



router.post('/signup' , signUp)
router.post('/login', login)
router.post('/otp', sendOtp)
router.post('/updateProfile' , auth ,  updateProfilePhoto)

//password
router.post('/resetpassword' , resetPasswordToken)


module.exports = router;