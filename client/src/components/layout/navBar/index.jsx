import NavBarSearch from "./component/navBarSearch"
import NavList from "./component/navList"

const NavBar= () => {
    return (
        <nav className="fixed h-14 w-screen border-b-2 bg-[#ffffff]">
            <div className="container grid grid-cols-12 mx-auto h-full content-center">
                <div className="col-span-1">Logo</div>
                <NavBarSearch/>
                <NavList/>
            </div>
        </nav>
    )
}

export default NavBar
