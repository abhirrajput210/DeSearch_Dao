import React, { useState } from "react";
import "../../styles/ContributorDashboard/contributordashboard.css";
import RequestStatus from "./RequestStatus";
import ActiveResearches from "./ActiveResearches";
// import Quadraticvoting from "../Voting/Quadraticvoting";

function ContributorDashboard() {
  const [activeComponent, setActiveComponent] = useState("activeResearches");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <div className="contributor-main-page">
        <div className="contributor-main-page-heading">
          Collaborative Workspace
        </div>
        <div className="contributor-main-page">
          <div className="contributor-main-page-button-container">
            <div className="contributor-active-request-button">
              <button
                className="contributor-active-request-btn"
                id="contributor-page-btn"
                onClick={() => handleButtonClick("activeResearches")}
              >
                Active Request
              </button>
            </div>
            <div className="contributor-request-status-button">
              <button
                className="contributor-request-status-btn"
                id="contributor-page-btn"
                onClick={() => handleButtonClick("requestStatus")}
              >
                Request Status
              </button>
            </div>
          </div>
          <div className="show-contributor-component">
            {activeComponent === "activeResearches" && <ActiveResearches />}
            {activeComponent === "requestStatus" && <RequestStatus />}
            {/* Render other components based on the activeComponent state */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContributorDashboard;
