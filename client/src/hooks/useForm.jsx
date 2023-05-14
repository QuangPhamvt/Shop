import {useState} from "react"
import {useDispatch} from "react-redux"



export const useForm = (data, axios) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState(data)

    //handleOnChange
    const handleOnChange = (event) => {
        const { name, value } = event.target
        return setInput( prev => ({...prev, [name]: value}))
    }
    //handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(axios(input))
    }
    return [input, handleOnChange, handleSubmit]
}



