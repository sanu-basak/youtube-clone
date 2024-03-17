import { useDispatch, useSelector } from "react-redux"
import {toggleMenu} from '../utils/appSlice'
import { useEffect, useState } from "react"
import { YOU_TUBE_SEARCH_API } from "../utils/constant"
import { cacheResults } from "../utils/searchSlice"

const Header = () => {
    const dispatch = useDispatch()
    const [searchQuery,setSearchQuery] = useState('')
    const [suggestions,setSuggestions] = useState(null)
    const [showSuggestions,setShowSuggestions] = useState(null)
    const searchCache = useSelector((store) => store.search)
    
    useEffect(() => {
        const timer = setTimeout( () =>  { 
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }else{
                getSearchSuggestion()
            }
           
        
        },200)
        return () => {
            clearTimeout(timer)
        }
    },[searchQuery])

    const getSearchSuggestion = async () => {
        const data = await fetch(YOU_TUBE_SEARCH_API+searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        dispatch(cacheResults({
            [searchQuery] : json[1]
        }))
    }

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
                <input 
                    className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
                    type="text" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className="border border-gray-400 p-2 rounded-r-full">Search</button>
            </div>
            {   showSuggestions && (
                <div className="fixed bg-white py-2 ml-96 mt-14 px-5 w-[38rem] shadow-lg rounded-lg border border-gray-600">
                    <ul>
                        {
                            suggestions?.map((item,index) => <li key={index} className="cursor-pointer py-2 shadow-sm hover:bg-gray-100">{item}</li>)
                        }
                    </ul>
                </div>
            )}
            <div>
                <img className="h-8 col-span-1" alt="usr-icon" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"/>
            </div>
        </div>
    )
}

export default Header