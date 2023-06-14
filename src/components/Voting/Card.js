import React from "react";
import "../../styles/voting/card.css";
import abc from "../../Assets/sicentist using 1_1686046712622.png";
import logo from "../../Assets/Logo.png";
import Votingbtn from "./VotingBtn";
function Card() {
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
    }
  ];
  return (
    <div>
      <div className="title-container-quadratic-voting-page">
        {/* <h2 className="title">Research Forum</h2> */}
      </div>
      <div className="main-quadratic-voting-page">
        {cardData.map((card) => (
          <div className="card-container-quadratic-voting-page" key={card.id}>
            <div className="image-container-quadratic-voting-page">
              <img
                // className="image-container-of-card"
                src={card.img}
                alt="img"
                style={{
                  width: "380px",
                  height: "280px",
                  objectFit: "cover",
                }}
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
            <div className="card-btn-quadratic-voting-page pb-3 rounded-pill">
              <div>
                <button className="rounded-pill-quadratic-voting-page px-3">
                  View More
                </button>
              </div>
              <br />
              <div>
                <Votingbtn />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Card;
