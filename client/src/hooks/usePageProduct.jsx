import { useState, useEffect } from "react"
import { useDispatch  } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { axiosPageProduct } from "../store/products/productThunk"

export default function usePageProduct() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(1)
    const limit = 10
    const dispatch = useDispatch()
    console.log(1);
    useEffect(() => {
        console.log(2);
        dispatch(axiosPageProduct({ page, limit }))
        setSearchParams({ page, limit})
    }, [page])
    return [page, setPage]
}
