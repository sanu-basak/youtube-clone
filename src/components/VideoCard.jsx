const VideoCard = ({info}) => {
    
    const {snippet,statistics} = info
    const {channelTitle,title,thumbnails} = snippet
    return (
        <div className="p-2 m-2 w-72 shadow-lg rounded-xl">
            <img alt="thumbnail" src={thumbnails.high.url}/>
            <ul>
                <li>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard