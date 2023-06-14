import React from "react";
import "../../styles/researcherDashboard/ResearcherResearches.css";
import logo from "../../Assets/sicentist using 1_1686046712622.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function ResearcherResearches() {
  const navigate = useNavigate();

  const researchesData = [
    {
      id: 1,
      title: "Research 1",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Research 2",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Research 2",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      title: "Research 1",
      img: logo,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    // Add more research data as needed
  ];

  const handleAddResearch = () => {
    navigate("/upload-research"); // Replace '/upload-research' with the actual route/path of the UploadResearch page
  };

  return (
    <div>
      <div className="add-research-container">
        <button
          className="add-research-button rounded-pill"
          onClick={handleAddResearch}
        >
          <span className="add-research-icon">
            <FontAwesomeIcon icon={faPlus} className="icons-add-research" />
          </span>{" "}
          Add Researches
        </button>
      </div>

      <div className="rrMain">
        {researchesData.map((research) => (
          <div className="rr-card-container" key={research.id}>
            <div className="rr-image-container">
              <img
                src={research.img}
                alt="img"
                style={{ width: "100%", height: "200px", objectFit: "fill" }}
              />
            </div>

            <div className="rr-content-container">
              <div className="rr-content-title">
                <h3>{research.title}</h3>
              </div>

              <div className="rr-content-description">
                <p>{research.description}</p>
              </div>

              <div className="rr-content-btn mt-2 pb-3 rounded-pill">
                <button className="rounded-pill px-3">View More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearcherResearches;
