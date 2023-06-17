import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardDetailsScreen from "../ShowcaseScreen/CardDetailsScreen";
import "../../styles/voting/card.css";
import abc from "../../Assets/sicentist using 1_1686046712622.png";
import logo from "../../Assets/Logo.png";
import Votingbtn from "./Votingbtn";
import { daoInstance, researcherInstance } from "../contracts";
import Winner from "./Winner";

// function Winner({ winners }) {
//   return (
//     <div className="winner-container">
//       <h3 id="winner-title">Top 3 Researches:</h3>
//       {winners.map((winner, index) => (
//         <li key={index}>{winner}</li>
//       ))}
//     </div>
//   );
// }

function Card() {
  const navigate = useNavigate();
  const [allPData, setAllPData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [totalVotes, setTotalVotes] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    fetchAllPapers();
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fetchAllPapers = async () => {
    // Fetch the data from the contract
    const con = await daoInstance();
    const daoCon =  await researcherInstance();
    const paidPapersLength = await daoCon.paidPaperCount();
    const freePapersLength = await daoCon.freePaperCount();
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

    // Fetch the total votes for each researcher
    const totalVotes = [];
    for (const paper of allPapers) {
      const researcherAddress = paper.researcherAddress;
      // Call the getTotalVotesForResearcher function in your smart contract
      const totalVotesForResearcher = await con.getTotalVotesForResearcher(
        researcherAddress
      );
      totalVotes.push(totalVotesForResearcher);
    }
    setTotalVotes(totalVotes);

    // Determine the top 3 researchers with the highest votes
    const sortedVotes = [...totalVotes].sort((a, b) => b - a);
    const top3Winners = sortedVotes
      .slice(0, 3)
      .map((votes, index) => allPapers[index].researcherName);
    setWinners(top3Winners);
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
            <div className="total-votes-display-input">
              <label>Total Votes:</label>
              <input
                className="input-of-total-votes"
                type="text"
                value={totalVotes[key] || 0}
                readOnly
              />
            </div>
          </div>
        ))}
      </div>
      <div className="winner-component-of-voting">
        <h1 id="winner-title class" className="winner-winner">
          Winner
        </h1>
        
        <Winner />
      </div>
    </div>
  );
}

export default Card;