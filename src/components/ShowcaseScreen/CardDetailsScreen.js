import React,{useState} from "react";
import "../../styles/showcaseScreen/Carddetailsscreen.css";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import Demo from "../../Assets/Demo.png"

function CardDetailsScreen() {
const location  = useLocation();
const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
 
  let item = location.state ? location.state.card : []; 
  console.log(item);
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="main-card-details-screen-page">
        <div className="card-container-card-details-screen">
          <div className="image-container-card-details-screen">
          {!imageLoaded && (
              <img
                className="dummy-image"
                src={Demo}
                alt=""
                style={{
                  width: "250px",
                  height: "300px",
                  objectFit: "fill",
                }}
              />
            )}
            <img
              className={`image-card-details-screen ${
                imageLoaded ? "loaded" : ""
              }`}
              src={`https://ipfs.io/ipfs/${item[2]}`}
              alt="img"
              style={{
                width: "250px",
                height: "380px",
                objectFit: "cover",
                display: imageLoaded ? "block" : "none",
              }}
              onLoad={handleImageLoad}
            />
          </div>
          <div className="content-card-details-screen">
            <div className="card-content-card-details-screen">
              <div className="card-title-card-details-screen">
                <h3>{item.title}</h3>
              </div>
              <br></br>
              <div className="card-body-card-details-screen">
                <p>
                  <b>Description:</b> &nbsp;
                  {item.description}
                </p>
                <p>
                  <b>Abstract:</b> &nbsp;
                  {item[2]}
                </p>
                <p>
                  <b>Reference: </b> &nbsp;
                  {item.references}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-details-screen-button-div">
          <div className="card-details-screen-button-div-i">
          <Link to={`https://ipfs.io/ipfs/${item[4]}`}>
              <button>
                View File &nbsp;
                <FontAwesomeIcon icon={faFile} />
              </button>
            </Link>
          </div>
          <div className="card-details-screen-button-div-ii">
            <Link to={item.github_link} target="_blank" rel="noopener noreferrer">
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