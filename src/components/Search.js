import React from "react";
import "../cssfiles/Search.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import SearchCards from "./SearchCards";
import Sidebar from "./Sidebar";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    setLoading(true);
    async function getdata() {
      const data = await axios.get(
        `https://api.rawg.io/api/games?key=95f2c8e2be17420e87436b373a116be4&search=${name}`
      );
      setResult(data.data.results);
      console.log("data is", data);
      console.log("result is", result);
      setLoading(false);
    }
    getdata();
  }, [name]);
  return (
    <div className="detailMain">
      <Sidebar />
      <div className="searchpage">
        {loading ? (
          <Loader />
        ) : (
          <div className="searchitems">
            <div className="secondaryarea">
            <h3 style={{color:"white", marginTop:"10px"}}>Showing results for {name}</h3>
              {result.map((element) => {
                return (
                 <Link to={`/details/${element.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> <SearchCards name = {element.name} image = {element.background_image}/></Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
