import {useState} from 'react'
import { BsStar, BsCurrencyDollar } from 'react-icons/bs'
const ItemContent = ( { data } ) => {

    const [loading, setLoading] = useState(true)
    return (

        <div className={`flex flex-col gap-3 h-[460px] border-[1px] rounded-md bg-white`}>
            <img 
                src={data["thumbnail"]} alt=""
                className={`object-cover h-64 m-2 ${loading ? 'hidden' : 'block'}` }
                onLoad={() => setLoading(false)}
            />
            <p className="m-2 line-clamp-2 ">{data.title}</p>
            <p className='mx-2 flex flex-row items-center'>
                <span>4.8 &nbsp;</span>
                <BsStar/>
                <span className='ml-3 pl-3 border-l-2'>{`stolen: ${600}`}</span>
            </p>
            <p className='flex flex-row items-center m-3 text-xl font-medium text-red-400'>{data.price}<BsCurrencyDollar/></p>
        </div>
    )
}

export default  ItemContent
