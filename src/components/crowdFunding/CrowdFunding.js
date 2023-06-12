import React, { useState } from "react";
import "../../styles/crowdfunding/crowdfundpage.css";
import Fundtodao from "../Crowd Funding/Fundtodao"; // Import the Fundtodao component

function Crowdfunding() {
  const [showFundtodao, setShowFundtodao] = useState(false); // State to control whether to show the Fundtodao component

  const handleFundtodaoClick = () => {
    setShowFundtodao(true); // Set the state to show the Fundtodao component
  };

  return (
    <div>
      <div className="main-crowd-funding-page">
        <div className="crowd-funding-title">
          <div className="crowd-funding-title-i">
            <h1 className="i-i-i">Crowdfunding for Change.</h1>
            <h5>
              <b>Join the movement, Make an impact</b>
            </h5>
          </div>
        </div>
        <div className="crowd-funding-content">
          <p className="crowd-funding-content-ii">
            By investing in the realm of research or decentralized autonomous
            organizations (DAOs), you hold the key to unlocking a world of
            possibilities. Your financial support fuels groundbreaking
            discoveries, fuels innovation, and empowers visionary thinkers. With
            each contribution, you become a vital catalyst for progress,
            propelling scientific breakthroughs, and technological advancements.
            Through funding research initiatives, you contribute to the
            advancement of knowledge, while supporting DAOs enables
            decentralized collaboration and transformative governance models.
            Join the movement of empowering researchers and DAOs, making a
            lasting impact on the future of innovation, technology, and society.
          </p>
        </div>
        <div className="crowd-funding-button">
          {/* Show the Fundtodao component when the button is clicked */}
          <button
            className="crowd-funding-button-iii"
            onClick={handleFundtodaoClick}
          >
            Fund to DAO
          </button>
          {/* Display the message when showFundtodao is true */}
          {showFundtodao && (
            <div className="scroll-message">
              Scroll for Fund to DAO &#128071;
            </div>
          )}
        </div>
      </div>
      <div className="fund-to-dao-show-component">
        {showFundtodao && <Fundtodao />}
      </div>
    </div>
  );
}

export default Crowdfunding;
