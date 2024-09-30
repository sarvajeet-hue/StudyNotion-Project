
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchasedHistory : []
}

const purchaseHistorySlice = createSlice({
    name : "purchased History", 
    initialState , 
    reducers : {
        setPurchasedHistory : (state , action) => {
            state.purchasedHistory = action.payload
        }   
    }
})



export const {setPurchasedHistory} = purchaseHistorySlice.actions
export default purchaseHistorySlice.reducer