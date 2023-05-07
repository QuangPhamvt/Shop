import NavBar from "../../components/layout/navBar"
import Header from "../../components/layout/header"
import Main from '../../components/layout/main'
import Footer from "../../components/layout/footer"
import {Route, Routes} from "react-router-dom"



const Home = () => {
    return (
        <div className="flex flex-col">
            <NavBar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home
