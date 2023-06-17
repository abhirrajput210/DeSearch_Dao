import React from "react";
import "../../styles/voting/QuadraticVoting.css";
import Card from "./Card";

function Quadraticvoting() {
  return (
    <div className="main-page-voting">
      <div className="main-page-voting-i">
        <div className="voting-page-title">
          <div className="voting-page-title-i">Quadratic Choice</div>
          <div className="voting-page-title-ii">
            Amplifying Votes for Equitable Decision-making
          </div>
          <br />
        </div>
        <br />
      </div>
      <div className="reseach-category-container">
        <Card />
      </div>
    </div>
  );
}

export default Quadraticvoting;
