import React from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import "../cssfiles/Screenshots.css";
import "../cssfiles/Videos.css";

const Videos = () => {
    const [loading, setLoading] = useState(false);
    const [vid, setVid] = useState([]);
   const {id} = useParams();
   useEffect(()=>{
    setLoading(true);
    async function getdata (){
        const vidget = await axios.get(
            `https://api.rawg.io/api/games/${id}/movies?key=95f2c8e2be17420e87436b373a116be4`
          );
          setVid(vidget.data.results);
          setLoading(false);
    }
    getdata();
    
   }, [])

  return (
    <div className='ssmain'>
        <Sidebar />
        <div className='videos1'>
        {vid.map((element) => {
                  return (
                    <div className="videoplayer1">
                      <video
                        height={"500"}
                        poster={element.preview}
                        controls
                        muted
                        loop
                        
                      >
                        <source src={element.data.max}></source>
                      </video>
                    </div>
                  );
                })}
        </div>
      
    </div>
  )
}

export default Videos
