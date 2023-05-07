import {BsFillCartFill} from "react-icons/bs"
const NavList = () => {
    return (
        <div className="col-span-3 grid grid-cols-6 content-center justify-items-center">
            <ul className="col-span-5 flex flex-row px-4 w-full border-r-2 border-black justify-between ">
                <li>Trang chủ</li>
                <li>Đăng nhập</li>
                <li>Đăng ký</li>
            </ul>
            <BsFillCartFill className="text-2xl"/>
        </div>
    )
}

export default NavList
