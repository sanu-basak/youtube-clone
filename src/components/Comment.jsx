const Comment = ({data}) => {
    const {name,text,replies} = data
    return (
        <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
            <img className="h-8" alt="usr-icon" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"/>
            <div>
                <p>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment