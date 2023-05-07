import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {axiosAllProducts} from "../../../../store/products/productThunk"
import ItemContent from "./itemContent"

const Content = () => {
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(axiosAllProducts())
    }, [])
    console.log(useSelector( store => store.product.data ));
    const arr = useSelector( store => store.product.data )
    return (
        <div 
            className="
                
                col-span-5
                grid grid-cols-4 gap-2
                mx-2
            "
        >
                {arr.map((state,index)=> <ItemContent key={index} data={state} />)}
        </div>
    )
}

export default Content
