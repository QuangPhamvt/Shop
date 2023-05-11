import { useSelector} from "react-redux"
import ItemContent from "./itemContent"
import usePageProduct from "../../../../hooks/usePageProduct"



const Content = () => {
    const [page, setPage] = usePageProduct()

    const arr = useSelector( store => store.product.data.data ) || []
    return (
            <div className="col-span-5 flex flex-col gap-3">
                <div className="grid grid-cols-4 gap-2 mx-2">
                    {arr.map((state,index)=> <ItemContent key={index} data={state} />)}
                </div>
                <div className="flex justify-center gap-28">
                    <button onClick={() => setPage(page - 1)}>lui</button>
                    <button onClick={() => setPage(page + 1)}>tien</button>
                </div>
            </div>

    )
}

export default Content
