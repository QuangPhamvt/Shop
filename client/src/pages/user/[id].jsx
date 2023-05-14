import {useParams } from "react-router-dom"
import {useForm} from "../../hooks/useForm";
import {axiosLoginAuth} from "../../store/authentication/authThunk";
const UserId = () => {
    const id = useParams().id === 'login' ? 'login' : 'register'
    let data = {}
    if (id === 'login') 
        data = {
            label: 'Đăng nhập',
            isRegister: false,
            button: {
                btnOne: 'Đăng Nhập',
                btnTwo: 'Đăng Ký'
            }
        }
    else
        data = {
            label: 'Đăng Ký',
            isRegister: true,
            button: {
                btnOne: 'Đăng Ký',
                btnTwo: 'Đăng Nhập'
            }
        }

    const [input, handleOnChange, handleSubmit] = useForm({
        email: "",
        password: "",
    }, axiosLoginAuth)

    return (
        <div className="h-[600px] bg-primary">
            <div className="container grid grid-cols-2 mx-auto h-full justify-items-center content-center">
                <div className="col-span-1">

                </div>
                <div className=" bg-white h-[500px] w-[500px] rounded-2xl">
                    <form onSubmit={handleSubmit} className="flex flex-col m-14 gap-3">
                        <label htmlFor="" className=""><h3>{data.label}</h3></label>
                        <input 
                            type="text" 
                            name="email" 
                            className="border-2 h-12 pl-2 rounded-xl focus:outline-none"
                            value={input.email}
                            placeholder='email'
                            onChange={handleOnChange}
                        />
                        <input 
                            type="password" 
                            name="password"  
                            className="border-2 h-12 pl-2 rounded-xl focus:outline-none"
                            value={input.password}
                            placeholder='password'
                            onChange={handleOnChange}
                        />
                        { data.isRegister &&
                            <input 

                                type="password" 
                                name=""  
                                className="border-2 h-12 pl-2 rounded-xl focus:outline-none"
                                value={null}
                                placeholder='password'
                            />
                        }
                        <button type="submit" className="border-2 h-12 pl-2 rounded-xl focus:outline-none bg-slate-100">{data.button.btnOne}</button>
                        <div className="flex flex-row justify-between items-center">
                            <div className="border-[1px] w-2/5 h-0"></div>
                            <p>Hoặc</p>
                            <div className="border-[1px] w-2/5 h-0"></div>
                        </div>
                        <div className="relative">
                            <button className="absolute bg-slate-100 w-36 h-10 rounded-xl right-4">{data.button.btnTwo}</button>
                        </div> </form>

                </div>
            </div>
        </div>
    )
}

export default UserId
