import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosAuth from "../../api/axiosAuth";
const {
    loginAuth,
} = axiosAuth


export const axiosLoginAuth = createAsyncThunk(
    'authentication/axiosLoginAuth',
    async (data) => {
        const response = await loginAuth(data)
        return response.data
    }
)

