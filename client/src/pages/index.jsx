import {Navigate, Route, Routes, } from "react-router-dom"
import Test from "../test"
import Home from "./home"
import NavBar from "../components/layout/navBar"
import Footer from "../components/layout/footer"
import Header from "../components/layout/header"
import User from "./user"



const Router= () => {
    return (
        <div className="flex flex-col">
            <NavBar/>
            <Header/> 
            <Routes>
                <Route path="/" element={ <Navigate to="/home"/> }/>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/user" element={<User/>}>

                    <Route index="/" element={<User/>}/>
                    <Route path=":id" element={<Home/>}></Route>
                </Route>
                <Route path="/test" element={<Test/>}/>
            </Routes>
            <Footer/>
        </div>
    )
}

export default Router
