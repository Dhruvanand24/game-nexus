import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../cssfiles/Cardarea.css";
import { pageNumber } from "./Context";
import { cardData } from "./Context";
import Loader from "./Loader";
import { Link } from "react-router-dom";


const Cardarea = () => {
  const { page, setPage } = useContext(pageNumber);
  const { data, setData } = useContext(cardData);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    console.log("cardarea",page);
    setLoading(true)
    async function getdata() {
      const dataget = await axios.get("https://api.rawg.io/api/games", {
        params: {
          key: "95f2c8e2be17420e87436b373a116be4",
          page: page,
          page_size: 9,
        },
      });
      setData(dataget.data.results);
      console.log("printing", data);
      setLoading(false);
    }
    getdata();
  }, [page, setPage]);
  
  return (
    <div className="cardarea">
      {loading? <Loader /> :
       data.map((element,i)=>{
        return (
          <Link to={`/details/${element.id}`}><Card key={i} name={element.name} image={element.background_image} />
        </Link>)
       })
      }
    </div>
  );
};

export default Cardarea;
