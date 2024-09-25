const express = require("express");
const app = express();
const paymentRoutes = require("./routes/payment");
const profileRoutes = require("./routes/profile");
const courseRoutes = require("./routes/course");
const UserRoutes = require("./routes/user");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const ContactRoutes = require("./routes/Contact");
const Razorpay = require("razorpay");

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

// app.use('/api/v1/course' , courseRoutes)
// app.use('/api/v1/payment' , paymentRoutes)

require("dotenv").config();
const port = process.env.PORT;

//connect with mongodb
const { dbConnect } = require("./config/database");
dbConnect();
// connect with cloudinary
const { cloudinaryConnect } = require("./config/cloudinary");
cloudinaryConnect();

//mounting routes
app.use("/api/v1/auth", UserRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1", ContactRoutes);

app.listen(port, () => {
  console.log(`server start at ${port} No.`);
});

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "This is the home page",
  });
});

app.post("/order", async (req, res) => {
  try {

    const options = req.body;
    console.log("options:", options)
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    
    const order = await razorpay.orders.create(options);

    if (!order) {
      res.status(404).json({
        message: "ORder was not created",
      });
    }

    res.status(200).json({
      message: "Order created succesfully",
      order: order,
    });
  } catch (error) {
    console.log("error in creating the order", error);
  }
});
