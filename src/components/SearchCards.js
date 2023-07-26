import React from 'react'
import "../cssfiles/SearchCards.css"

const SearchCards = (props) => {
    console.log(props.name);
  return (
    <div className='searchcard'>
        <div className='searchimg'><img className = "img"src={props.image}>
        </img></div>
      <p style={{fontWeight:"bold", marginLeft:"20px"}}>{props.name}</p>
    </div>
  )
}

export default SearchCards
