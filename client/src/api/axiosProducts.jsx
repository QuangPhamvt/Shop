import axiosClient from "./axiosClient";



const axiosProducts= {
    getAll: () => {
        const url = '/products'
        return axiosClient(url)
    },
    getPage: (params) => {
        const url = '/products'
        return axiosClient(url, params)
    }
}


export default axiosProducts
