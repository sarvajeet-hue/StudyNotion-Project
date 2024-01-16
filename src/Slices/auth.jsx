import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token : localStorage.getItem("token") ? (JSON.parse(localStorage.getItem('token'))) : null,
    image : localStorage.getItem('image') ? (JSON.parse(localStorage.getItem('image'))) : null,
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setToken : (state , action) => {
            state.token = action.payload
        },
        setImage : (state , action) => {
            state.image = action.payload
        }
    }
})

export const {setToken , setImage} = authSlice.actions;
export default authSlice.reducer;