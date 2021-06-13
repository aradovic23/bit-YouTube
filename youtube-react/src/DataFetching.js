import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './datafetch.scss'




function DataFetching() {
    const ytApi = 'AIzaSyDqz_onjLHGVpN4Ji8LmLEk0a9StYBM_2c'
    const ytPath = `https://youtube.googleapis.com/youtube/v3/search?maxResults=15&q=jokic&type=video&part=snippet&key=${ytApi}`
    const [videos,setVideo] = useState([])
    useEffect(() => {
        axios.get(ytPath)
        .then(res => {
            console.log(res.data.items)
            setVideo(res.data.items)
            ;
        },[])
        
    },[])
    return (
        <div className='wrap-videos'>
        <div className='container'>
            {
       videos.map(video=>(
           <div key={video.id.videoId} className='card'>
                <img className="thumb" src={video.snippet.thumbnails.medium.url}></img>
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
           </div>
       
       ))
}
        </div>
        </div>
    )
}

export default DataFetching
