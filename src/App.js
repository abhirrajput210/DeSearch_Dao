import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import BecomeMemberPage from "./pages/BecomeMemberPage";
import ResearcherDashboardPage from "./pages/ResearcherDashboardPage";
import ShowcaseScreenPage from "./pages/ShowcaseScreenPage";
import UploadResearchPage from "./pages/UploadResearchPage";
import CardDetailsScreen from "./components/showcaseScreen/CardDetailsScreen";
import ContributorDashboardPage from "./pages/ContributorDashboardPage";
import QuadraticVotingPage from "./pages/QuadraticVotingPage";
import abc from "./Assets/sicentist using 1_1686046712622.png";
import logo from "./Assets/Logo.png";
import CrowdFundingPage from "./pages/CrowdFundingPage";
import BuyTokensPage from "./pages/BuyTokensPage";
import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Ethereum, Polygon, Mumbai } from "@thirdweb-dev/chains";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      img: abc,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Card Title 2",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Card Title 3",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry..",
    },
    {
      id: 4,
      title: "Card Title 4",
      img: abc,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
    <ThirdwebProvider
      supportedWallets={[metamaskWallet(), walletConnect()]}
      activeChain="polygon"
supportedChains={[Mumbai, Ethereum, Polygon]}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/showcase" element={<ShowcaseScreenPage />} />
          <Route path="/dao-member" element={<BecomeMemberPage />} />
          <Route path="/researcher" element={<ResearcherDashboardPage />} />
          <Route path="/upload-research" element={<UploadResearchPage />} />
          <Route
            path="/details/:id"
            element={<CardDetailsScreen cardData={cardData} />}
          />
          <Route
            path="/contributor-dashboard"
            element={<ContributorDashboardPage />}
          />
          <Route path="/quadratic-voting" element={<QuadraticVotingPage />} />
          <Route path="/crowd-funding" element={<CrowdFundingPage />} />
          <Route path="/buy-tokens" element={<BuyTokensPage />} />
        </Routes>
      </BrowserRouter>
      </ThirdwebProvider>
    </>
  );
}

export default App;
