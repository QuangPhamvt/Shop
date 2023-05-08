import {Navigate, Route, Routes, useNavigate} from "react-router-dom"
import Home from "./home"



const Router= () => {
    return (
        <Routes>
            <Route path="/" element={ <Navigate to="/home"/> }/>
            <Route path="/home" element={<Home/>}>
            </Route>
        </Routes>
    )
}

export default Router
