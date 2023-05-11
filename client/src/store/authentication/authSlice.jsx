import { createSlice } from "@reduxjs/toolkit"
import {axiosLoginAuth} from "./authThunk"



const initialState = {
    data: [],
    success: false,
    message: "",
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState ,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(axiosLoginAuth.fulfilled, (state, actions) => {
                console.log(actions.payload);
                const { success, message } = actions.payload
                return { ...state, success, message }
            })
    }
})


const authentication = authenticationSlice.reducer
export default authentication



