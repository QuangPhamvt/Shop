import {createSlice} from "@reduxjs/toolkit";
import {axiosAllProducts} from "./productThunk";


const initialState = {
    data: [],
    success: false,
    message: "",
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(axiosAllProducts.fulfilled, (state, action) => {
                const { data } = action.payload
                return { ...state, data }
            })
    }
})


const product = productSlice.reducer
export default product
