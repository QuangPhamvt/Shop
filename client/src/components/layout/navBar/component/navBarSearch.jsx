import {BsSearch} from 'react-icons/bs'

const NavBarSearch = () => {
    return (
        <div className="col-span-8">
            <div className='flex flex-row gap-4 justify-center items-center h-10 w-3/4 border-2 rounded-lg'>
                <BsSearch />
                <input type="text" name="" id="" placeholder='Rẻ mỗi ngày, không chỉ một ngày' className='w-[620px] focus:outline-none border-r-2'/>
                <button>Tìm kiếm</button>
            </div>
        </div>
    )
}

export default NavBarSearch
