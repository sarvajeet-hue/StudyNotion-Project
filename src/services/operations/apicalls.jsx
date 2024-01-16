
import toast from "react-hot-toast";
import axios from "axios";
import { setImage, setToken } from "../../Slices/auth";


export const login = (data , navigate) => {

    
    return async (dispatch) => {
        
        
            try{
               
               
            const response = await axios.post("http://localhost:4000/api/v1/auth/login" , data);
                 
                
                 
        
                 console.log("LOGIN API RESPONSE............", response)
                
                 if(!response.data.success){
                  
                     throw new Error(response.data.message) 
                    
                  
                 }

                 toast.success("Logged in ")
                 dispatch(setToken(response.data.token))

                 dispatch(setImage(response.data.User.image))
                 localStorage.setItem('image' , JSON.stringify(response.data.User.image))

                 localStorage.setItem("token", JSON.stringify(response.data.token));

                 navigate("/dashboard/my-profile")
            }catch (error) {
                // Display toast error message from the API response
                if (error.response) {
                    toast.error(error.response.data.message);
                    
                    
                } else {
                    // Display a generic error message for other errors
                    toast.error("An error occurred during login");
                }
                console.error("Login error:", error);
            }
            
            
        
    }
}




export const sendOtp = (data , navigate) => {
    return async (dispatch) => {
        try{
            
            console.log("Data.email-->",data.email)
            const email = data.email
            const response = axios.post("http://localhost:4000/api/v1/auth/otp" ,{email} )
            console.log(response)

            
            
            navigate("/verifymail")
        }
        catch(error){
            console.log(error) 
            toast.error(error.response.data.message)  
        }
    }
}