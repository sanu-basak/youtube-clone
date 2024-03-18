
const ChatMessage = ({name,message}) => {

   
    return (
        <div className="flex items-center shadow-sm p-2">
            <img className="h-8" alt="usr-icon" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"/>
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage