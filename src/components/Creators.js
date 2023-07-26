import React from 'react'
import "../cssfiles/Creators.css"

const Creators = (props) => {
  return (
    <div className='creatorsdiv'>
      <div className='imgcontainer'>
         <img style={{width:"100px"}} src={props.image}></img>
      </div>
      <p></p>
    
    </div>
  )
}

export default Creators
