import React from "react";
import "../cssfiles/Card.css";


const Card = (props) => {
 
  return (
    <div className="card">
      <div className="bg">
        <div className="area">
          <div className="imagearea">
            <img  className= "image" src={props.image} loading="lazy" ></img>
          </div>
          <div className="name">
            <p>{props.name}</p>
          </div>
        </div>
      </div>

      <div className="blob"></div>
    </div>
  );
};

export default Card;
