import { configureStore } from "@reduxjs/toolkit"; 
import product from './products/productSlice.jsx'
import authentication from "./authentication/authSlice.jsx";

const store = configureStore({
    reducer: {
        product,
        authentication,
    },
})


export default store
