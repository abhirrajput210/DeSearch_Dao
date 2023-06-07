import React from "react";
import Navbar from "../components/navbar/Navbar";
import GetStarted from "../components/home/GetStarted";
import Sponsors from "../components/home/Sponsors";

function Home() {
  return (
    <div>
      <Navbar />
      <GetStarted />
      <Sponsors />
    </div>
  );
}

export default Home;
