import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import Test from "../test"
import Home from "./home"
import UserId from "./user/[id]"
import NavBar from "../components/layout/navBar"
import Footer from "../components/layout/footer"
import Header from "../components/layout/header"



const Router= () => {
    return (
        <div className="flex flex-col">
            <NavBar/>
            <Header/> 
            <Routes>
                <Route path="/" element={ <Navigate to="/home"/> }/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/user/:id" element={<UserId/>}/>
                <Route path="/test" element={<Test/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Router
