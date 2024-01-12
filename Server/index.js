const express = require('express');
const app = express();
const paymentRoutes = require('./routes/payment');
const profileRoutes = require('./routes/profile');
const courseRoutes = require('./routes/course')
const UserRoutes = require('./routes/user')
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const ContactRoutes = require('./routes/Contact')





//middlewares
app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}))


  

app.use(fileupload({
    useTempFiles : true,
    tempFileDir : "/tmp",
}))


// app.use('/api/v1/course' , courseRoutes)
// app.use('/api/v1/payment' , paymentRoutes)

require('dotenv').config();
const port = process.env.PORT;

//connect with mongodb 
const {dbConnect} = require('./config/database')
dbConnect();
// connect with cloudinary
const {cloudinaryConnect} = require("./config/cloudinary");
cloudinaryConnect();


//mounting routes
app.use('/api/v1/auth' , UserRoutes)
app.use("/api/v1/profile" , profileRoutes)
app.use("/api/v1/course" , courseRoutes)
app.use("/api/v1/payment" , paymentRoutes)
app.use('/api/v1' , ContactRoutes)

app.listen(port, () =>{
    console.log(`server start at ${port} No.`)
})

app.get("/" , (req , res) => {
    return res.json({
        success : true,
        message : "This is the home page"
    })
})