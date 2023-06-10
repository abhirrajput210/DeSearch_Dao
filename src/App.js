import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from "./pages/Home";
import BecomeMember from "./pages/BecomeMember";
import ResearcherDashboard from "./pages/ResearcherDashboard";
import ShowcaseScreenPage from "./pages/ShowcaseScreenPage";
import UploadResearchPage from "./pages/UploadResearchPage";
import ContributorResearchContribution from "./components/researcherDashboard/ContributorResearchContribution";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/showcase" element={<ShowcaseScreenPage />} />
        <Route path="/dao-member" element={<BecomeMember />} />
        <Route path="/researcher" element={<ResearcherDashboard />} />
        <Route path="/upload-research" element={<UploadResearchPage />} />
        <Route path="/contribute-research" element={<ContributorResearchContribution />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
