import React from "react";
import filecoin from "../../Assets/Sponsors/filecoin.png";
import saturn from "../../Assets/Sponsors/saturn.png";
import ens from "../../Assets/Sponsors/ens.png";
import push from "../../Assets/Sponsors/push.png";
import lighthouse from "../../Assets/Sponsors/lighthouse.png";
import spheron from "../../Assets/Sponsors/spheron.png";
import "../../styles/home/sponsor.css";

function Sponsors() {
  return (
    <div className="sponsor-page">
      <h2 className="sponsor-title">Powered By</h2>
      <div className="sponsor-images">
        {/* <div className="i-i"> */}
        <div className="images-sponsors">
          <img className="imagess" src={filecoin} alt="not found" />
        </div>
        <div className="images-sponsors">
          <img className="imagess" id="push-image" src={push} alt="not found" />
        </div>

        <div className="images-sponsors">
          <img className="imagess" src={ens} alt="not found" />
        </div>
        {/* </div> */}
        {/* <div className="i-iii"> */}
        <div className="images-sponsors">
          <img className="imagess" src={saturn} alt="not found" />
        </div>

        <div className="images-sponsors">
          <img className="imagess" src={lighthouse} alt="not found" />
        </div>
        <div className="images-sponsors">
          <img
            className="imagess"
            id="push-image"
            src={spheron}
            alt="not found"
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Sponsors;
