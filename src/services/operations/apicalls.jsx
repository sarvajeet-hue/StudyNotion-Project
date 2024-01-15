
import toast from "react-hot-toast";
import axios from "axios";
import { setToken } from "../../Slices/auth";


export const login = (data , navigate) => {

    
    return async (dispatch) => {
        try{
            toast.loading("Loading...")
            const response = await axios.post("http://localhost:4000/api/v1/auth/login" , data);
                 toast.dismiss()
                
                 
        
                 console.log("LOGIN API RESPONSE............", response)
                
                 if(!response.data.success){
                  
                    throw new Error(response.data.message) 
                    
                  
                 }

                 toast.success("Logged in ")
                 dispatch(setToken(response.data.token))

                 localStorage.setItem("token", JSON.stringify(response.data.token));

                 navigate("/dashboard/my-profile")
            }
           
            catch(error){
            console.log(error)
        }
    }
}