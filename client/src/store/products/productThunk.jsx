import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosProducts from "../../api/axiosProducts";

const {
    getAll,
    getPage,
} = axiosProducts

export const axiosAllProducts = createAsyncThunk(
    'product/axiosAllProducts',
    async () => {
        const response = await getAll()
        return response.data
    }
)
