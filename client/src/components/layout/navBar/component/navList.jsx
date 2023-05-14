import {BsFillCartFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import Home from "../../../../pages/home"
const NavList = () => {
    return (
        <div className="col-span-3 grid grid-cols-6 content-center justify-items-center">
            <ul className="col-span-5 flex flex-row px-4 w-full border-r-2 border-black justify-between ">
                <li ><Link to="/home" >Trang chủ</Link></li>
                <li ><Link to="/user/login" >Đăng NHập</Link></li>
                <li ><Link to="/user/register" >Đăng ký</Link></li>
            </ul>
            <BsFillCartFill className="text-2xl"/>
        </div>
    )
}

export default NavList
