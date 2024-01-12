import { combineReducers } from "@reduxjs/toolkit";
import userSliceReducer from '../Slices/UserSlice';


export const rootReducer  = combineReducers({
    user : userSliceReducer,
})