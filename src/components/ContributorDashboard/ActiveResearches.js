import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import abc from "../../Assets/sicentist using 1_1686046712622.png";
import logo from "../../Assets/Demo.png";
// import Votingbtn from "../Voting/Votingbtn";
import "../../styles/ContributorDashboard/activeresearches.css";
// import Quadraticvoting from "../Voting/Quadraticvoting";

function ActiveResearches() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [contributionDetail, setContributionDetail] = useState("");

  const cardData = [
    {
      id: 1,
      title: "Cyber Security",
      img: logo,
      description:
        "Developing advanced encryption techniques  in a cloud computing environments.",
    },
  ];

  const handleRequestContribute = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const handleContributionDetailChange = (event) => {
    setContributionDetail(event.target.value);
  };

  const handlePopupSubmit = () => {
    // Perform submit logic here
    console.log("Contribution detail:", contributionDetail);
    // Close the popup
    setShowPopup(false);
  };

  const handlePopupCancel = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <div>
      <div className="main-active-researchers">
        {cardData.map((card) => (
          <div className="card-container-active-researchers" key={card.id}>
            <div className="image-container-active-researchers">
              <img
                src={card.img}
                alt="img"
                style={{
                  width: "100%",
                  height: "210px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="card-content-active-researchers">
              <div className="card-title-active-researchers">
                <h5>{card.title}</h5>
              </div>
              <div className="card-body-active-researchers">
                <p>{card.description}</p>
              </div>
            </div>
            <div className="card-btn-active-researchers pb-3 rounded-pill">
              <div>
                <button
                  className="rounded-pill px-3"
                  onClick={() => handleRequestContribute(card)}
                >
                  Request for Contribute
                </button>
              </div>
              <br />
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedCard && (
        <div className="popup">
          <div className="popup-content">
            <button className="cancel-button" onClick={handlePopupCancel}>
              <FontAwesomeIcon icon={faTimes} /> {/* Cancel icon */}
            </button>
            <h2 className="popup-title">Contribution Detail</h2>
            <div className="popup-card-details">
              <div className="popup-image-container">
                <img
                  src={selectedCard.img}
                  alt="Card"
                  className="popup-image"
                />
              </div>
              <div className="popup-card-info">
                <h3>{selectedCard.title}</h3>
                <p>{selectedCard.description}</p>
              </div>
            </div>
            <div className="popup-input-container">
              <h5>Enter Your Contribution Detail</h5>
              <input
                type="textarea"
                value={contributionDetail}
                onChange={handleContributionDetailChange}
              />
            </div>
            <button className="popup-submit-button" onClick={handlePopupSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveResearches;

// ActiveResearches.js
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import abc from "../../Assets/sicentist using 1_1686046712622.png";
// import logo from "../../Assets/Logo.png";
// import "../../styles/ContributorDashboard/activeresearches.css";
// import RequestStatus from "./RequestStatus"; // Import the RequestStatus component

// function ActiveResearches() {
//   const [showPopup, setShowPopup] = useState(false);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [contributionDetail, setContributionDetail] = useState("");

//   const cardData = [
//     // Card data here
//   ];

//   const handleRequestContribute = (card) => {
//     setSelectedCard(card);
//     setShowPopup(true);
//   };

//   const handleContributionDetailChange = (event) => {
//     setContributionDetail(event.target.value);
//   };

//   const handlePopupSubmit = () => {
//     // Perform submit logic here
//     console.log("Contribution detail:", contributionDetail);
//     // Close the popup
//     setShowPopup(false);
//   };

//   const handlePopupCancel = () => {
//     // Close the popup
//     setShowPopup(false);
//   };

//   return (
//     <div>
//       <div className="main-active-researchers">{/* Card data mapping */}</div>

//       {showPopup && selectedCard && (
//         <div className="popup">{/* Popup content */}</div>
//       )}

//       {/* Pass contributionDetail to the RequestStatus component */}
//       <RequestStatus contributionDetail={contributionDetail} />
//     </div>
//   );
// }

// export default ActiveResearches;
