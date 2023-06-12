import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import HomePage from "./pages/HomePage";
import BecomeMemberPage from "./pages/BecomeMemberPage";
import ResearcherDashboardPage from "./pages/ResearcherDashboardPage";
import ShowcaseScreenPage from "./pages/ShowcaseScreenPage";
import UploadResearchPage from "./pages/UploadResearchPage";
import CardDetailsScreen from "./components/showcaseScreen/CardDetailsScreen";
import abc from "./Assets/sicentist using 1_1686046712622.png";
import logo from "./Assets/Logo.png";

function App() {
  const cardData = [
    {
      id: 1,
      title: 'Card Title 1',
      img: abc,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 2,
      title: 'Card Title 2',
      img: logo,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: 3,
      title: 'Card Title 3',
      img: logo,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry..',
    },
    {
      id: 4,
      title: 'Card Title 4',
      img: abc,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/showcase" element={<ShowcaseScreenPage />} />
        <Route path="/dao-member" element={<BecomeMemberPage />} />
        <Route path="/researcher" element={<ResearcherDashboardPage />} />
        <Route path="/upload-research" element={<UploadResearchPage />} />
        {/* <Route path="/details/:id" element={<CardDetailsScreen />} /> */}
        <Route path="/details/:id" element={<CardDetailsScreen cardData={cardData} />} />
        {/* <Route path="/contributor-dashboard" element={<ContributorDashboardPage />} /> */}
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
