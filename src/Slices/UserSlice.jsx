import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user :  localStorage.getItem("User") ? (JSON.parse(localStorage.getItem("User"))) : null,

    signupData : null
}

const userSlice = createSlice({
    name : "User",
    initialState : initialState,
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload;
            
        },

        setSignUpData : (state , action) => {
            state.signupData = action.payload
        }

        
        
    },
    
})

export const {setUser , setSignUpData} = userSlice.actions;
export default userSlice.reducer;