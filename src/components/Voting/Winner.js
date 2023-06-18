import React from "react";
import "../../styles/voting/winner.css";
import Demo from "../../Assets/Demo.png"
function Winner({ winners }) {
  // Dummy data for the three winners
  const dummyWinners = [
    {
      image: Demo,
      title: "CyberSecurity",
      abstract: "Developing advanced encryption techniques  in a cloud computing environments.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      totalVotes: 10,
    },
    {
      image: Demo,
      title: "Winner 2",
      abstract: "Developing advanced encryption techniques  in a cloud computing environments.",
      totalVotes: 8,
    },
  ];
  return (
    <>
      <div>
        <h3 id="winner-title">Top 3 Researches:</h3>
      </div>
      <div className="winner-container">
        {dummyWinners.map((winner, index) => (
          <div key={index} className="dummy-winner-card">
            <img src={winner.image} alt={winner.title} />
            <h4>{winner.title}</h4>
            <p>{winner.abstract}</p>
            <p>Total Votes: {winner.totalVotes}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Winner;