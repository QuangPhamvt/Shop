import Content from "./content/content"
import NavMenu from "./navMenu"

const Main = () => {
    return (
        <div 
            className="container grid grid-cols-6 mx-auto mt-4 h-[1600px]">
            <NavMenu/>
            <Content/>
        </div>
    )
}

export default Main
