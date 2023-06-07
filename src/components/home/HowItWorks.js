import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../styles/home/HowItWorks.css";

const howWorksContent = [
  {
    head: "Connect your wallet:",
    content: "Connecting your wallet is the first step to using DeSearch Dao.",
  },
  {
    head: "Get started:",
    content:
      "Click on the ‘Get Started’ button to navigate to the research showcase page where all the researches are displayed.",
  },
  {
    head: "Become a Dao member:",
    content:
      "Become a DAO member to either add your own research work or contribute to the someone else’s research work.",
  },
  {
    head: "Researcher:",
    content:
      "Click on the 'Researcher' menu to navigate to the Researcher Dashboard Screen. Here, users can add their research work and view all the research they have added. Additionally, they can review requests from contributors who are interested in contributing to their research work.",
  },
  {
    head: "Contributor:",
    content:
      "Click on the 'Contributor' menu to navigate to the Contributor Dashboard screen. Here, users can browse through an extensive list of research projects and select the ones they want to contribute to. By clicking on a research project, users can send a contribution request to the owner, expressing their interest and intent. Furthermore, users have the ability to view the status of their requests.",
  },
  {
    head: "CrowdFunding:",
    content:
      "Click on the ‘CrowdFunding’ menu to navigate to the CrowdFunding Screen. Here, users should able to give funds to the DAO for the researches. DAO member then do quadratic voting to distribute this funds for all the research work which gets highest vote in quadratic voting process.",
  },
];

function HowItWorks() {
  return (
    <div className="">
      <div className="main-div">
        <div className="boxContent container-fluid px-4 px-md-5 pb-5">
          <div className="work-head">
            <p className=" d-flex justify-content-center">
              How DeSearch Dao Works?
            </p>
          </div>

          <div className="main-works-box d-flex">
            <div className="how-works-content align-self-stretch">
              <div>
                {howWorksContent.map((item, key) => (
                  <div className="mb-3 d-flex " index={key}>
                    <div className="pt-1">
                      {" "}
                      <i className="bi bi-square"></i>{" "}
                    </div>{" "}
                    &nbsp; &nbsp;{" "}
                    <div>
                      <span className="how-works-head">{item.head}</span> &nbsp;
                      <span className="how-works-sub-content">
                        {item.content}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
