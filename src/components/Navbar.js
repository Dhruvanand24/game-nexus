import React, { useEffect } from 'react';
import "../cssfiles/Navbar.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const navigate = useNavigate();
  const[search, setSearch] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (search.trim() !== '') {
      navigate(`/Search/${search}`);
    }
  };

  return (
    <div className='navbardiv'>
       <div className='logodiv'>
        <h2><span className='game'>Game</span>Nexus</h2>
       </div>
       <div className='searchdiv'>
        <input className='searchbar'value={search} onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={handleKeyPress} type='text' placeholder='search games here'></input>
        {
       <Link to={`/Search/${search}`} style={{textDecoration:"none"}}><button className='glow-on-hover'>Search</button></Link>}
       </div>
      
    </div>
  );
};

export default Navbar;