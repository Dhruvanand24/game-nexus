import React from "react";
import Cardarea from "./Cardarea";
import "../cssfiles/Contentarea.css"
import Pagination from "./Pagination";

const Contentarea = () => {
  return (
    <div className="contentarea">
      <div className="title">
        <p>Games</p>
      </div>
      <Cardarea />
      <Pagination />
      
      
    </div>
  );
};

export default Contentarea;
