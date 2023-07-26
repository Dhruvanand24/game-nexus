import React from "react";
import "../cssfiles/Search.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Similargames = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    async function getdata() {
      const data = await axios.get(
        
        `https://api.rawg.io/api/games/${id}/game-series?key=95f2c8e2be17420e87436b373a116be4`
      );
      setResult(data.data.results);
      console.log("data is", data);
      console.log("result is", result);
      setLoading(false);
    }
    getdata();
  }, [id]);
  return (
    <div className="detailMain">
      <Sidebar />
      <div className="searchpage">
        {loading ? (
          <Loader />
        ) : (
          <div className="searchitems">
            
            <div style={{marginTop:"20px", display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", marginLeft:"10px"}}className="secondaryarea">
              
              {result.map((element) => {
                return (
                 <Link to={`/details/${element.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> <Card name = {element.name} image = {element.background_image}/></Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Similargames;
