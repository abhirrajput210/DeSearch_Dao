import React, { useState } from 'react';
import ContributorRequest from './ContributorRequest';
import ResearcherResearches from './ResearcherResearches';
import '../../styles/researcherDashboard/MainResearcherDashboard.css';

function MainResearcherDashboard() {
  const [activeComponent, setActiveComponent] = useState('researches');

  const handleResearchesClick = () => {
    setActiveComponent('researches');
  };

  const handleContributorRequestClick = () => {
    setActiveComponent('contributors');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'researches':
        return <ResearcherResearches />;
      case 'contributors':
        return <ContributorRequest />;
      default:
        return <ResearcherResearches />;
    }
  };

  return (
    <div>
      <div className="researcher-dashboard-main-class-title-container">
        <h2 className="researcher-dashboard-main-class-title">Researcher Dashboard</h2>
        
      </div>

      <div className="researcher-dashboard-main-class">
        <div className="researcher-dashboard-main-class-btn row">
          <button
            type="button"
            className={`researcher-research-btn col-12 col-md-5 ${activeComponent === 'researches' ? 'active' : ''}`}
            onClick={handleResearchesClick}
          >
            My Researches
          </button>
          <button
            type="button"
            className={`contributor-request-btn col-12 col-md-5 ${activeComponent === 'contributors' ? 'active' : ''}`}
            onClick={handleContributorRequestClick}
          >
            Contributors Requests
          </button>
        </div>
      </div>

      <div>{renderComponent()}</div>
    </div>
  );
}

export default MainResearcherDashboard;
