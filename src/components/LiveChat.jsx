import { useDispatch, useSelector } from "react-redux"
import ChatMessage from "./ChatMessage"
import { useEffect, useState } from "react"
import { addMessage } from "../utils/chatSlice"
import { generateMessage,generateName } from "../utils/helper"

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState('')
    const dispatch = useDispatch()

    const chatMessages = useSelector((store) => store.chat.message)

    useEffect(() => {
        console.log('API Polling')
        const timer = setTimeout(() => {
            dispatch(addMessage({
                name: generateName(),
                text: generateMessage()
            }))
        },200)

        return () => {
            clearInterval(timer)
        }
    },[])

    return (
        <>
         <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div>
            {
                chatMessages.map((chat,index) =>  <ChatMessage key={index} name={chat.name} message={chat.text}/>)
            }
            </div>
        </div>
         <form className="w-full p-2 ml-2 border border-black" onSubmit={(e) => {
            e.preventDefault()
            dispatch(addMessage({
                name: 'Sanu Kumar',
                text: liveMessage
            }))
            setLiveMessage('')
        }}>
                <input className="w-96" type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}/>
                <button className="px-2 mx-2 bg-green-600">Send</button>
            </form>
        </>
       
    )
}

export default LiveChat