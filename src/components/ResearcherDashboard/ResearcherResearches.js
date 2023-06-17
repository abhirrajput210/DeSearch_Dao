import React, { useState, useEffect } from "react";
import "../../styles/researcherDashboard/ResearcherResearches.css";
import logo from "../../Assets/sicentist using 1_1686046712622.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { researcherInstance } from "../contracts";
import { ethers } from 'ethers';
import {useAddress} from "@thirdweb-dev/react";
import Demo from "../../Assets/Demo.png"

function ResearcherResearches() {
  const [allPData, setAllPData] = useState([]);
  const navigate = useNavigate();
  const address = useAddress();
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
      const paperPaid = await con.getPaidPaper(i,{ from: address });
      paidPapers.push(paperPaid);
    }

    for (let i = 0; i < freePapersLength; i++) {
      const paperFree = await con.getFreePaper(i,{ from: address });
      freePapers.push(paperFree);
    }

    const allPapers = [...paidPapers, ...freePapers];
    console.log("All Papers", allPapers);
    setAllPData(allPapers);
  };

  const handleAddResearch = () => {
    navigate("/upload-research"); // Replace '/upload-research' with the actual route/path of the UploadResearch page
  };

  return (
    <div>
      <div className="add-research-container">
        <button
          className="add-research-button rounded-pill"
          onClick={handleAddResearch}
        >
          <span className="add-research-icon">
            <FontAwesomeIcon icon={faPlus} className="icons-add-research" />
          </span>{" "}
          Add Researches
        </button>
      </div>

      <div className="rrMain">
        {allPData.map((item, key) => (
          <div className="rr-card-container" key={key}>
            <div className="rr-image-container">
            {!imageLoaded && (
              <img
                className="dummy-image"
                src={Demo}
                alt=""
                style={{
                  width: "100%",
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

            <div className="rr-content-container">
              <div className="rr-content-title">
                <h3>{item.title}</h3>
              </div>

              <div className="rr-content-description">
                <p>{item.description}</p>
              </div>

              <div className="rr-content-btn mt-2 pb-3 rounded-pill">
              <button onClick={() => navigate("/card-details", {state:{card:item}})}>View More </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearcherResearches;
