import React from 'react'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import "../cssfiles/Screenshots.css";

const Screenshots = () => {
    const [loading, setLoading] = useState(false);
    const [ss, setSS] = useState([]);
   const {id} = useParams();
   useEffect(()=>{
    setLoading(true);
    async function getdata (){
        const ssget = await axios.get(
            `https://api.rawg.io/api/games/${id}/screenshots?key=95f2c8e2be17420e87436b373a116be4`
          );
          setSS(ssget.data.results);
          setLoading(false);
    }
    getdata();
    
   }, [])

  return (
    <div className='ssmain'>
        <Sidebar />
        <div className='screenshots1'>
            {
                loading? <Loader /> :
               ss.map((element)=>{
                 return(
                     <img className="ssimg"src={element.image} loading='lazy'></img>
                 )
               })
            }

        </div>
      
    </div>
  )
}

export default Screenshots
