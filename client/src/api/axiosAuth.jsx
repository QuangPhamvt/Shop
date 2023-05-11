import axiosClient from "./axiosClient"

const axiosAuth = {
    loginAuth: ( data ) =>  {
        const url = "/users/login"
        return axiosClient.post(url, data, { withCredentials: true, })
    }
}


export default axiosAuth
