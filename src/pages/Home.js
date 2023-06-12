import React from "react";
import Navbar from "../components/navbar/Navbar";
import GetStarted from "../components/home/GetStarted";
import Sponsors from "../components/home/Sponsors";
import HowItWorks from "../components/home/HowItWorks";
import ContributorDashboard from "../components/ContributorDashboard/ContributorDashboard";
import ActiveResearches from "../components/ContributorDashboard/ActiveResearches";
import Crowdfunding from "../components/Crowd Funding/Crowdfunding";
import ShowcaseScreen from "../components/ShowcaseScreen/ShowcaseScreen";
import Quadraticvoting from "../components/Voting/Quadraticvoting";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <ShowcaseScreen /> */}
      {/* <Crowdfunding /> */}
      {/* <Quadraticvoting /> */}
      {/* <ActiveResearches /> */}
      {/* <ContributorDashboard /> */}
      {/* <GetStarted />
      <HowItWorks />
      <Sponsors /> */}
    </div>
  );
}

export default Home;
