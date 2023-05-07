import axios from "axios";
import Cookies from "js-cookie";
import queryString from "query-string";



const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
})


// config request
axiosClient.interceptors.request.use( config => {
    const authToken = Cookies.get('authToken')
    if( authToken )
        config.headers['Authorization'] = `Bearer ${authToken}`
    return config
} )


//config response
axiosClient.interceptors.response.use( config => {
    return config
} )


export default axiosClient


