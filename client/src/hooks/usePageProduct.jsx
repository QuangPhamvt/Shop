import { useState, useEffect } from "react"
import { useDispatch  } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { axiosPageProduct } from "../store/products/productThunk"

export default function usePageProduct() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const limit = 10
    const dispatch = useDispatch()

    useEffect(() => {
        if(!(searchParams.get("page") === null)){
            dispatch(axiosPageProduct({ page, limit }))
            setSearchParams({ page})
            return
        }
        dispatch(axiosPageProduct({ page: 1, limit }))
        setPage(1)
        setSearchParams({ page: 1})
    }, [page, searchParams.get("page")])

    return [page, setPage]
}
