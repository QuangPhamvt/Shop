import {CookiesProvider} from "react-cookie"
import Router from "./pages"

function App() {

    return (
        <CookiesProvider>
            <Router/>
        </CookiesProvider>
    )
}

export default App
