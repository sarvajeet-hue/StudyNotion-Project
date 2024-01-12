const express = require('express');

const router = express.Router();
const {auth , isAdmin , isStudent , isInstructor}  = require("../middlewares/auth")

const {capturePayment ,verifySignature} = require('../controllers/Payment')
router.post('/payment' , auth , isStudent ,capturePayment)
router.post('/verifysignature', verifySignature)




module.exports = router