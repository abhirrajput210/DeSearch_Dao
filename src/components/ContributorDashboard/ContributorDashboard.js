import React, { useState } from "react";
import "../../styles/ContributorDashboard/contributordashboard.css";
import RequestStatus from "./RequestStatus";
import ActiveResearches from "./ActiveResearches";
// import Quadraticvoting from "../Voting/Quadraticvoting";

function ContributorDashboard() {
  const [activeComponent, setActiveComponent] = useState("activeresearches");

  const handleActiveResearchesClick = () => {
    setActiveComponent("activeresearches");
  };

  const handleRequestStatusClick = () => {
    setActiveComponent("requeststatus");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "activeresearches":
        return <ActiveResearches />;
      case "requeststatus":
        return <RequestStatus />;
      default:
        return <activeResearches />;
    }
  };
  return (
    <div>
      <div className="contributor-dashboard-main-class-title-container">
        <h2 className="contributor-dashboard-main-class-title">
          Contributor Dashboard
        </h2>
      </div>

      <div className="contributor-dashboard-main-class">
        <div className="contributor-dashboard-main-class-btn row">
          <button
            type="button"
            className={`contributor-active-research-btn col-12 col-md-5 ${
              activeComponent === "activeresearches" ? "active" : ""
            }`}
            onClick={handleActiveResearchesClick}
          >
            Active Researches
          </button>
          <button
            type="button"
            className={`contributor-request-status-btn col-12 col-md-5 ${
              activeComponent === "requeststatus" ? "active" : ""
            }`}
            onClick={handleRequestStatusClick}
          >
            Request Status
          </button>
        </div>
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
}

export default ContributorDashboard;
