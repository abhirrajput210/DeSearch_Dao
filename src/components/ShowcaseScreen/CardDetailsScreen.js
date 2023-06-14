import React from "react";
import "../../styles/showcaseScreen/Carddetailsscreen.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function CardDetailsScreen({ cardData }) {
  const { id } = useParams();

  // Find the corresponding card based on the provided ID
  const card = cardData.find((card) => card.id === parseInt(id, 10));

  if (!card) {
    return <div>Card not found.</div>;
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="main-card-details-screen-page">
        <div className="card-container-card-details-screen">
          <div className="image-container-card-details-screen">
            <img
              className="image-card-details-screen"
              src={card.img}
              alt="img"
              style={{ width: "100%", height: "380px", objectFit: "cover" }}
            />
          </div>
          <div className="content-card-details-screen">
            <div className="card-content-card-details-screen">
              <div className="card-title-card-details-screen">
                <h3>{card.title}</h3>
              </div>
              <br></br>
              <div className="card-body-card-details-screen">
                <p>
                  <b>Description:</b> &nbsp;
                  {card.description}
                </p>
                <p>
                  <b>Abstract:</b> &nbsp;
                  {card.abstract}
                </p>
                <p>
                  <b>Category: </b> &nbsp;
                  {card.category}
                </p>
                <p>
                  <b>Reference: </b> &nbsp;
                  {card.category}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-details-screen-button-div">
          <div className="card-details-screen-button-div-i">
            <Link>
              <button>
                View File &nbsp;
                <FontAwesomeIcon icon={faFile} />
              </button>
            </Link>
          </div>
          <div className="card-details-screen-button-div-ii">
            <Link>
              <button>
                Open GitHub &nbsp;
                <FontAwesomeIcon icon={faGithubSquare} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetailsScreen;
