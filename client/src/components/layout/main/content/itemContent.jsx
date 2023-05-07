import { BsStar, BsCurrencyDollar } from 'react-icons/bs'
const ItemContent = ( { data } ) => {
    // const data = {
    //     title: "special cotton shirt for men asdsad asdasd asdsad asdasd asdasd asd asd hhhh",
    //     price: 15,
    //     description: "",
    //     slug: "special-cotton-shirt-for-men",
    //     category: {
    //     _id: "6455ce0bab0969018731db04",
    //     name: "men's fashion",
    //     slug: "mens-fashion",
    //     },
    //     image: "",
    // }

    return (
        <div className="flex flex-col gap-3 h-[460px] border-2 rounded-md">
            <img 
                src="https://cdn.myanimelist.net/images/characters/4/491833.jpg" alt=""
                className="object-cover h-64 m-2"
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
