const express = require('express')
const router = express.Router();

const {signUp , login , sendOtp} = require('../controllers/Auth')
const {auth , isAdmin , isStudent , isInstructor}  = require("../middlewares/auth");
const { resetPasswordToken } = require('../controllers/resetPassword');

router.post('/signup' , signUp)
router.post('/login',login)
router.post('/otp', sendOtp)


//password
router.post('/resetpassword' , resetPasswordToken)


module.exports = router;