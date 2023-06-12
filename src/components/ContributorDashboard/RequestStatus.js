import React from "react";
import "../../styles/ContributorDashboard/requeststatus.css";

// Dummy data
const dummyData = [
  {
    title: "Sample Title 1",
    abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    contributionDetails: "Sample contribution details ",
    requestStatus: "Pending",
  },
  {
    title: "Sample Title 2",
    abstract: "Sed do eiusmod tempor incididunt ut labore et dolore mag.",
    contributionDetails: "Sample contribution details 2",
    requestStatus: "Approved",
  },
  {
    title: "Sample Title 2",
    abstract: "Sed do eiusmod tempor incididunt ut labore et dolore mag.",
    contributionDetails: "Sample contribution details 2",
    requestStatus: "Approved",
  },
  // Add more dummy data entries as needed
];

function RequestStatus() {
  return (
    <div>
      <div className="card-display-request-status">
        {dummyData.map((data, index) => (
          <div key={index}>
            <div className="card-request-status">
              <div className="card-body-request-status">
                <div className="card-text-request-status">
                  <strong>Title:</strong> <br />
                  <input
                    className="input-request-status"
                    type="text"
                    readOnly
                    value={data.title}
                  />
                  <br />
                  <strong>Abstract:</strong> <br />
                  <input
                    className="input-request-status"
                    type="text"
                    readOnly
                    value={data.abstract}
                  />
                  <br />
                  <strong>Contribution Details:</strong> <br />
                  <input
                    className="input-request-status"
                    type="text"
                    readOnly
                    value={data.contributionDetails}
                  />
                  <br />
                  <strong>Request Status:</strong> <br />
                  <input
                    className="input-request-status"
                    type="text"
                    readOnly
                    value={data.requestStatus}
                  />
                  <br />
                  <br />
                  <div className="contribute-btn-request-status">
                    <a href="#" className="btn btn-primary">
                      Contribute
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RequestStatus;
