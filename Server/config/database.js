const mongoose = require('mongoose');

require('dotenv').config();

exports.dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL , {
    useNewUrlParser :true,
    useUnifiedTopology : true,
    })
    .then(()=>{console.log("db connection successfully")})
    .catch((error)=>{
        console.log("issue in connecting with db")
        console.log(error)
        process.exit(1);
    })
}