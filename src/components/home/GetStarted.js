import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/getstarted.css";
import image from "../../Assets/sicentist.png";
import layer from "../../Assets/layer.png";
function GetStarted() {
  return (
    <div className="main-getstart">
      <div className="get-start">
        <div className="get-start-i">
          <div className="title-div">
            <div className="title-div-i">
              <h1>Welcome to Desearch DAO</h1>
            </div>
            <div className="title-div-ii">
              <p>
                Empowering the Scientific Community with Decentralization and
                Equitable Peer Review
              </p>
            </div>
            <div className="button-start">
              <Link to="/showcase">
                <button className="btn-start">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="get-start-ii">
          <img className="img-get-start" src={image} alt="not found" />
        </div>
      </div>
    </div>
  );
}
export default GetStarted;
