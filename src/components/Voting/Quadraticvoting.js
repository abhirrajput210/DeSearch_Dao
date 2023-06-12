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
        <div className="category-div">
          {/* <label for="cars">Choose: </label> */}
          <select className="option-btn" name="category">
            <option value="1">category-1</option>
            <option value="2">category-2</option>
            <option value="3">category-3</option>
            <option value="4">category-4</option>
          </select>
        </div>{" "}
        <br />
      </div>
      <div className="reseach-category-container">
        <Card />
      </div>
    </div>
  );
}

export default Quadraticvoting;
