import React, { useState } from "react";
import "../../styles/voting/VotingBtn.css";
import Web3 from "web3";
import { ethers } from "ethers";
import { useAddress } from "@thirdweb-dev/react";
import { daoInstance } from "../contracts";

function VotingBtn() {
  const [count, setCount] = useState(0);
  const address = useAddress();

  const incrementCount = () => {
    if (count < 4) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const voteForProject = async () => {
    try {
      const projectId = 0; // Replace with the actual project ID
      const voteAmount = count;
      const con = await daoInstance();
      const tx = await con.voteForProject(projectId, voteAmount);

      await tx.wait();

      // Handle successful vote
      console.log("Vote successful!");
    } catch (error) {
      // Handle error
      console.error("Error voting:", error);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="wrapper">
        <span className="minus" onClick={decrementCount}>
          -
        </span>{" "}
        <span className="num">{count < 10 ? `0${count}` : count}</span>
        <span className="plus" onClick={incrementCount}>
          +
        </span>
        <div className="button-of-voting">
          <button
            className="vote-button-of-voting-in-card"
            onClick={voteForProject}
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default VotingBtn;
