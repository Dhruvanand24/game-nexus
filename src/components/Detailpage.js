import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../cssfiles/Detailpage.css";
import axios from "axios";
import Loader from "./Loader";
import { pageNumber } from "./Context";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';



const Detailpage = () => {
  const { page, setPage } = useContext(pageNumber); //page number state
  const [data, setData] = useState({}); //details of the game
  const { id } = useParams(); //id of the game as a parameter
  const [loading, setLoading] = useState(false); //loader state
  const [publish, setPublish] = useState([]); //list of publishers
  const [developer, setDeveloper] = useState([]); //list of developers
  const [platforms, setPlatforms] = useState([]); //list of platforms
  const [esrb, setEsrb] = useState("NA"); //age rating
  const [genres, setGenres] = useState([]); //list of genres
  const [vid, setVid] = useState([]); //list of all videos of the game
  const [ss, setSS] = useState([]); // list of all screenshots of the game
  const [store, setStore] = useState([]); //list of stores.
  const [storelink, setStoreLink] = useState([]);
  const [creators, setCreators] = useState([]);


  useEffect(() => {
    setLoading(true); //setting loader true untill data is fetched
    async function getdata() {
      const dataget = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=95f2c8e2be17420e87436b373a116be4`
      ); //fetching details of the game from api
      const vidget = await axios.get(
        `https://api.rawg.io/api/games/${id}/movies?key=95f2c8e2be17420e87436b373a116be4`
      ); //fetching videos of the game from api
      const ssget = await axios.get(
        `https://api.rawg.io/api/games/${id}/screenshots?key=95f2c8e2be17420e87436b373a116be4`
      ); //fetching screenshots of the game from api
      //setting all the data in the state
      const storeget = await axios.get(
        `https://api.rawg.io/api/games/${id}/stores?key=95f2c8e2be17420e87436b373a116be4`
      );
      const creatorsget = await axios.get(
        `https://api.rawg.io/api/games/${id}/development-team?key=95f2c8e2be17420e87436b373a116be4`
      );
      console.log("creators are",creatorsget.data.results);
      setData(dataget.data);
      setPublish(dataget.data.publishers);
      setDeveloper(dataget.data.developers);
      setPlatforms(dataget.data.parent_platforms);
      setVid(vidget.data.results);
      setSS(ssget.data.results);
      setStore(dataget.data.stores);
      setCreators(creatorsget.data.results);
      setStoreLink(storeget.data.results);
      if (dataget.data.esrb_rating != null) {
        setEsrb(dataget.data.esrb_rating.name);
      } //if rating is null, esrb rating is NA(prevents error)
      setGenres(dataget.data.genres);
      setLoading(false);
      console.log("data is", dataget.data);
      console.log(storelink);
    }
    getdata();
  }, []);

  return (
    <div className="detailMain">
      <Sidebar />
      <div className="detailpage">
        {loading ? (
          <Loader />
        ) : (
          <div className="details">
            <div className="left">
              <div className="imageareadetail">
                <img
                  className="imageclass"
                  src={data.background_image}
                  loading="lazy"
                />
              </div>
              <div className="gamename">
                <p className="title">{data.name}</p>
              </div>
              <div className="box">
                <div className="publisher">
                  <b style={{ color: "grey" }}>Publisher:</b>
                  {publish.map((names) => {
                    //show list of publishers
                    return (
                      <u>
                        <p>{names.name}</p>
                      </u>
                    );
                  })}
                </div>
                <div className="developer">
                  <b style={{ color: "grey" }}>Developer:</b>
                  {developer.map((names, i) => {
                    //show list of developers
                    return (
                      <u>
                        <p key={i}>{names.name}</p>
                      </u>
                    );
                  })}
                </div>
                <div className="platforms">
                  <i>
                    <b style={{ color: "grey" }}>
                      <SportsEsportsIcon />
                      Platforms:
                    </b>
                  </i>
                  {platforms.map((name) => {
                    //show list of platforms
                    return (
                      <p className="platformclass">{name.platform.name}</p>
                    );
                  })}
                </div>
                <div className="ratingarea">
                  <p
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      marginLeft: "3px",
                    }}
                  >
                    Metacritic Score:
                  </p>
                  <p
                    className="platformclass"
                    style={{ marginLeft: "10px", color: "white" }}
                  >
                    {data.metacritic}
                  </p>
                  <p
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      marginLeft: "30px",
                    }}
                  >
                    Age Rating:
                  </p>
                  <p
                    className="platformclass"
                    style={{ marginLeft: "10px", color: "white" }}
                  >
                    {esrb}
                  </p>
                  <p
                    style={{
                      color: "grey",
                      fontWeight: "bold",
                      marginLeft: "30px",
                    }}
                  >
                    Release Date:
                  </p>
                  <p
                    className="platformclass"
                    style={{ marginLeft: "10px", color: "white" }}
                  >
                    {data.released}
                  </p>
                </div>

                <div className="platforms">
                  <i>
                    <b style={{ color: "grey" }}>Genres:</b>
                  </i>
                  {genres.map((name) => {
                    return <p className="platformclass">{name.name}</p>;
                  })}
                </div>
              </div>
              <div
                className="aboutarea"
                dangerouslySetInnerHTML={{ __html: data.description }}
              ></div>
              <Link to={`/Similargames/${id}`}><h4>Show Games of same series</h4></Link>
            </div>
            {/* right container start */}
            <div className="right">
              <div>
                {vid.slice(0, 2).map((element) => {
                  return (
                    <div className="videoplayer">
                      <video
                        height={"280"}
                        poster={element.preview}
                        controls
                        muted
                        loop
                        autoPlay
                      >
                        <source src={element.data.max}></source>
                      </video>
                    </div>
                  );
                })}
              </div>
              <div>
                {vid.length === 0 ? (
                  <p></p>
                ) : (
                  <Link
                    to={`/Videos/${data.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <p
                      style={{
                        color: "grey",
                        cursor: "pointer",
                        userSelect: "none",
                      }}
                    >
                      View all Videos
                    </p>
                  </Link>
                )}
              </div>

              <div>
                {ss.slice(0, 4).map((element) => {
                  return (
                    <img
                      className="screenshots"
                      src={element.image}
                      loading="lazy"
                    ></img>
                  );
                })}
                <div>
                  {ss.length === 0 ? (
                    <p></p>
                  ) : (
                    <Link
                      to={`/Screenshots/${data.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <p
                        className="viewimg"
                        style={{
                          color: "grey",
                          cursor: "pointer",
                          userSelect: "none",
                          marginTop: "10px",
                        }}
                      >
                        View all images
                      </p>
                    </Link>
                  )}
                </div>
              </div>
              <p style={{ color: "white", fontWeight: "bolder" }}>
                Where to buy
                <ShoppingCartIcon />
              </p>
              <div className="stores">
                {store.map((element) => {
                  const link = storelink.find(
                    (links) => links.store_id === element.store.id
                  ); //finding the url from storelink array
                  console.log("link is", link);
                  return (
                    <div className="store">
                      <a
                        href={link ? link.url : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <p>{element.store.name}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
              <p style={{ color: "white", fontWeight: "bolder" }}>
                Creators
                
              </p>
              
              <div className="creators">
                
              {
              creators.slice(0,3).map((creator) => {
                //show list of platforms
                return (
                  <div>
                    <img style={{width:"150px", height:"200px", marginLeft:"10px", borderRadius:"10px"}} src={creator.image}></img>
                    <h6 style={{color:"white"}}>{creator.name}</h6>
                  </div>
                );
               
              })
              }
             
            </div>
            </div>
           
            {/* right container end */}

            
          </div>
        )}
      </div>
    </div>
  );
};

export default Detailpage;
