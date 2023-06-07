import React from "react";
import Navbar from "../components/navbar/Navbar";
import GetStarted from "../components/home/GetStarted";
import Sponsors from "../components/home/Sponsors";
import HowItWorks from "../components/home/HowItWorks";

function Home() {
  return (
    <div>
      <Navbar />
      <GetStarted />
      <HowItWorks />
      <Sponsors />
    </div>
  );
}

export default Home;
