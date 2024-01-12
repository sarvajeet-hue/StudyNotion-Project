const express = require('express');

const router = express.Router();
const {auth , isAdmin , isStudent , isInstructor}  = require("../middlewares/auth")

const {createCourses ,getAllCourses , getCourseDetails} = require('../controllers/Course');
const {createCategory , showAllCategories} = require('../controllers/Category');
const {createSection} = require("../controllers/Section");



router.post('/createcourse' ,auth , isInstructor , createCourses )
router.get("/getallcourses" , getAllCourses)
router.get("/getcoursesdetails" , auth , isStudent , getCourseDetails)

//categories

router.post('/createcategory' , auth , isInstructor ,createCategory )


router.get('/showallcategories' , showAllCategories);

//section

router.post('/createsection' , createSection )


module.exports = router