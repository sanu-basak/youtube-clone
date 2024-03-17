import { useEffect, useState } from "react"
import {YOU_TUBE_API} from '../utils/constant'
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer = () => {
    const [videos,setVideos] = useState([])

    const getYouTubeVideos = async () => {
        const data = await fetch(YOU_TUBE_API)
        const json = await data.json()
        // console.log(json.items)
        setVideos(json.items)

    }

    useEffect(() => {
        getYouTubeVideos()
    },[])

    return (
        <div className="flex flex-wrap">
            {
                videos.map((video) => 
                    <Link to={"/watch?v="+video.id}><VideoCard key={video.id} info={video}/></Link>
                )
            }
            
        </div>
    )
}


export default VideoContainer