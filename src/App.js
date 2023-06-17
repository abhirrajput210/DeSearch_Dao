import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import BecomeMemberPage from "./pages/BecomeMemberPage";
import Card from "./components/voting/Card";
import ResearcherDashboardPage from "./pages/ResearcherDashboardPage";
import ShowcaseScreenPage from "./pages/ShowcaseScreenPage";
import UploadResearchPage from "./pages/UploadResearchPage";
import CardDetailsScreen from "./components/showcaseScreen/CardDetailsScreen";
import ContributorDashboardPage from "./pages/ContributorDashboardPage";
import QuadraticVotingPage from "./pages/QuadraticVotingPage";
import CrowdFundingResearcher from "./components/crowdFunding/CrowdFundingResearcher"
import abc from "./Assets/sicentist using 1_1686046712622.png";
import logo from "./Assets/Logo.png";
import CrowdFundingPage from "./pages/CrowdFundingPage";
import BuyTokensPage from "./pages/BuyTokensPage";
import ResearcherResearches from "./components/researcherDashboard/ResearcherResearches";
import {
  ThirdwebProvider,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Ethereum, Polygon, Mumbai } from "@thirdweb-dev/chains";

function App() {

  const filecoinCalibration = {
    id: 314159,
    name: 'Filecoin - Calibration ',
    network: 'Filecoin — Calibration testnet',
    nativeCurrency: {
      decimals: 18,
      name: 'tFIl',
      symbol: 'tFIL'
    },
    rpcUrls: {
      default: 'https://filecoin-calibration.chainup.net/rpc/v1'
    },
    testnet: true
  }

  return (
    <>
    <ThirdwebProvider
      supportedWallets={[metamaskWallet(), walletConnect()]}
      activeChain="polygon"
      supportedChains={[filecoinCalibration, Mumbai, Ethereum, Polygon]}
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
            path="/card-details"
            element={<CardDetailsScreen />}
          />
          <Route
            path="/contributor-dashboard"
            element={<ContributorDashboardPage />}
          />
          <Route path="/" elements={<Card />}/>
          <Route path="/quadratic-voting" element={<QuadraticVotingPage />} />
          <Route path="/crowd-funding" element={<CrowdFundingPage />} />
          <Route path="/buy-tokens" element={<BuyTokensPage />} />
          <Route path="/crowd-funding-researcher" element={<CrowdFundingResearcher />} />
          <Route path="/researcher-researches" element={<ResearcherResearches />} />
        </Routes>
      </BrowserRouter>
      </ThirdwebProvider>
    </>
  );
}

export default App;
