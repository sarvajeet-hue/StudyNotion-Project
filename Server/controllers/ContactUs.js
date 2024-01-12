const ContactUs = require('../models/ContactUs')

exports.ContactUsController = async(req , res) => {
    try{
        const {firstname , lastname , email , message} = req.body;
        if(!firstname || !lastname || !email || !message){
            return res.status(400).json({
                success : false , 
                message : "please fill all the details in contactus form"
            })
        }

        const response = await ContactUs.create({
            firstname , 
            lastname , 
            email, 
            message
        })

        res.status(200).json({
            success : true, 
            message : "Contact Us form created Successfully",
            response
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success : false , 
            message : "issue occur while creating contact us"
        })
    }
}