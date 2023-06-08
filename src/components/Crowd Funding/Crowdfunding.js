import React from "react";
import "../../styles/crowdfunding/crowdfundpage.css";

function Crowdfunding() {
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
          <button className="crowd-funding-button-iii">Fund to DAO</button>
        </div>
      </div>
    </div>
  );
}

export default Crowdfunding;
