import Content from "./content/content"
import NavMenu from "./navMenu"

const Main = () => {
    return (
        <div 
            className="
            container
            grid grid-cols-6 
            mx-auto border-2
            "
        >
            <NavMenu/>
            <Content/>
        </div>
    )
}

export default Main
