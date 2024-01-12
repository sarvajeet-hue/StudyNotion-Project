const express = require("express");
const router = express.Router();

const {auth , isAdmin , isStudent , isInstructor}  = require("../middlewares/auth")
const {updateProfile ,deleteProfile ,getAllUserDetails } = require('../controllers/Profile')

router.post('/updateprofile', auth , isAdmin , updateProfile)
router.get("/getalluserdetails", auth , getAllUserDetails);

module.exports = router;
