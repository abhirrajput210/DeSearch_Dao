import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import CardDetailsScreen from "../ShowcaseScreen/CardDetailsScreen";
import "../../styles/voting/card.css";
import abc from "../../Assets/sicentist using 1_1686046712622.png";
import logo from "../../Assets/Logo.png";
import Votingbtn from "./Votingbtn";
import { researcherInstance } from "../contracts";

function Card() {
  const navigate = useNavigate();
  const [allPData, setAllPData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetchAllPapers();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fetchAllPapers = async () => {
    // Fetch the data from the contract
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

    // Set the fetched data in the state
    setAllPData(allPapers);
  };

  return (
    <div>
      <div className="title-container-quadratic-voting-page">
        {/* <h2 className="title">Research Forum</h2> */}
      </div>
      <div className="main-quadratic-voting-page">
        {allPData.map((card, key) => (
          <div className="card-container-quadratic-voting-page" key={key}>
            <div className="image-container-quadratic-voting-page">
              {!imageLoaded && (
                <img
                  src={abc}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "fill",
                  }}
                />
              )}
              <img
                className={`image-container-of-card ${
                  imageLoaded ? "loaded" : ""
                }`}
                src={`https://ipfs.io/ipfs/${card[2]}`}
                alt="img"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "fill",
                  display: imageLoaded ? "block" : "none",
                }}
                onLoad={handleImageLoad}
              />
            </div>
            <div className="card-content-quadratic-voting-page">
              <div className="card-title-quadratic-voting-page">
                <h5>{card.title}</h5>
              </div>
              <div className="card-body-quadratic-voting-page">
                <p>{card.description}</p>
              </div>
            </div>
            <div>
              <Votingbtn />
            </div>
            <div className="card-btn-quadratic-voting-page pb-3 rounded-pill">
              <div className="view-more-btn-of-voting">
                <button
                  onClick={() =>
                    navigate("/card-details", { state: { item: card } })
                  }
                >
                  View More{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
