import React from "react";
import "../cssfiles/Sidebar.css";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FilterListIcon from '@mui/icons-material/FilterList';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}><div className="glow-on-hover"><HomeIcon />Home</div></Link>
      <div className="glow-on-hover"><StarIcon />Favourites</div>
      <div className="glow-on-hover"><ReviewsIcon />Reviews</div>
      <div className="glow-on-hover"><SportsEsportsIcon/>Platforms</div>
      <div className="glow-on-hover"><FilterListIcon />Genre</div>
      
     
    </div>
  );
};

export default Sidebar;
