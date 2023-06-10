import React, { useState } from "react";
import "../../styles/quadraticVoting/VotingBtn.css";

function Votingbtn() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="wrapper">
      <span className="minus" onClick={decrementCount}>
        -
      </span>
      <span className="num">{count < 10 ? `0${count}` : count}</span>
      <span className="plus" onClick={incrementCount}>
        +
      </span>
    </div>
  );
}

export default Votingbtn;
