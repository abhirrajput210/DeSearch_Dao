import React, { useState } from "react";
import Card from "../voting/Card";
import abc from "../../Assets/sicentist using 1_1686046712622.png";
import logo from "../../Assets/Logo.png";
// import Votingbtn from "../Voting/Votingbtn";
import "../../styles/contributorDashboard/activeresearches.css";
// import Quadraticvoting from "../Voting/Quadraticvoting";

function ActiveResearches() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [contributionDetail, setContributionDetail] = useState("");

  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      img: abc,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Card Title 2",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Card Title 3",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry..",
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
              Cancel
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
              <h3>Enter Your Contribution Detail</h3>
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
