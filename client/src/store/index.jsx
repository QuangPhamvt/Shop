import { configureStore } from "@reduxjs/toolkit"; 
import product from './products/productSlice.jsx'

const store = configureStore({
    reducer: {
        product,
    },
})


export default store
