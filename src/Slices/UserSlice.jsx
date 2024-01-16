import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user :  localStorage.getItem("User") ? (JSON.parse(localStorage.getItem("User"))) : null
}

const userSlice = createSlice({
    name : "User",
    initialState : initialState,
    reducers : {
        setUser : (state , action) => {
            state.user = action.payload;
            
        },

        
        
    },
    
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;