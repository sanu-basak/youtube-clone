import { useDispatch } from "react-redux"
import {toggleMenu} from '../utils/appSlice'

const Header = () => {
    const dispatch = useDispatch()

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={toggleMenuHandler} className="h-8 cursor-pointer" alt="menu" src="https://tse2.mm.bing.net/th?id=OIP.8t6YKcKu6faLA6Kx2cbERAHaHa&pid=Api&P=0&h=180"/>
                <img className="h-8 mx-2" alt="logo" src="https://tse4.mm.bing.net/th?id=OIP.gdd5Vgi_qnWF2jFwlmygPAHaBp&pid=Api&P=0&h=180"/>
            </div>
            <div className="col-span-10 px-10">
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
                <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
            </div>
            <div>
                <img className="h-8 col-span-1" alt="usr-icon" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"/>
            </div>
        </div>
    )
}

export default Header