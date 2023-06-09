import React from "react";
import Navbar from "../components/navbar/Navbar";
import GetStarted from "../components/home/GetStarted";
import Sponsors from "../components/home/Sponsors";
import HowItWorks from "../components/home/HowItWorks";
// import Sidebar from "../components/SideBar/Sidebar";
import ContributorDashboard from "../components/ContributorDashboard/ContributorDashboard";
import ActiveResearches from "../components/ContributorDashboard/ActiveResearches";
import Crowdfunding from "../components/Crowd Funding/Crowdfunding";

function Home() {
  return (
    <div>
      <Navbar />
      <Crowdfunding />
      {/* <ActiveResearches /> */}
      {/* <Sidebar /> */}
      {/* <ContributorDashboard /> */}
      {/* <GetStarted />
      <HowItWorks />
      <Sponsors /> */}
    </div>
  );
}

export default Home;
