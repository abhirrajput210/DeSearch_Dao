import React,{useState,useEffect} from "react";
import { Link, Route, Routes} from "react-router-dom";
import CardDetailsScreen from "./CardDetailsScreen";
import "../../styles/ShowcaseScreen/ShowcaseScreen.css";
import { researcherInstance } from "../contracts";
import { ethers } from 'ethers';
import { useNavigate } from "react-router-dom";
import Demo from "../../Assets/Demo.png"

function ShowcaseScreen() {
  const navigate = useNavigate()
  const [allPData, setAllPData] = useState([]);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    fetchAllPapers();
  }, []);

  const fetchAllPapers = async () => {
    const con = await researcherInstance();

    const paidPapersLength = await con.paidPaperCount();
    const freePapersLength = await con.freePaperCount();

    const paidPapers = [];  
    const freePapers = [];

    
    for (let i = 0; i < paidPapersLength; i++) {
      const paperPaid = await con.getPaidPaper(i);
      paidPapers.push(paperPaid);
    }

    for (let i = 0; i < freePapersLength; i++) {
      const paperFree = await con.getFreePaper(i);
      freePapers.push(paperFree);
    }

    const allPapers = [...paidPapers, ...freePapers];
    console.log("All Papers",allPapers);
    setAllPData(allPapers);
  };

  return (
    <div>
      <div className="title-container-show-case-screen">
        <h2 className="title-show-case-screen">Research Forum</h2>
      </div>
      <div className="main-show-case-screen">
        {allPData.map((item,key) => (
          <div className="card-container-show-case-screen" key={key}>
            <div className="image-container-show-case-screen">
            {!imageLoaded && (
              <img
                className="dummy-image"
                src={Demo}
                alt=""
                style={{
                  width: "250px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            )}
            <img
              className={`image-card-details-screen ${
                imageLoaded ? "loaded" : ""
              }`}
              src={`https://ipfs.io/ipfs/${item[2]}`}
              alt="img"
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                display: imageLoaded ? "block" : "none",
              }}
              onLoad={handleImageLoad}
            />
            </div>
            <div className="card-content-show-case-screen">
              <div className="card-title-show-case-screen">
                <h3>{item.title}</h3>
              </div>
              <div className="card-body-show-case-screen">
                <p>{item.description}</p>
              </div>
            </div>
            <div className="card-btn-show-case-screen pb-3 rounded-pill">
              <button onClick={() => navigate("/card-details", {state:{card:item}})}>View More </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowcaseScreen;
