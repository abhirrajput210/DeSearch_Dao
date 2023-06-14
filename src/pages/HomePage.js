import React from "react";
import GetStarted from "../components/home/GetStarted";
import Sponsors from "../components/home/Sponsors";
import HowItWorks from "../components/home/HowItWorks";

function HomePage() {
  return (
    <div>
      <GetStarted />
      <HowItWorks />
      <Sponsors />
    </div>
  );
}

export default HomePage;
