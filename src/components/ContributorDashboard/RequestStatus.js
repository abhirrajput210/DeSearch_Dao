import React from "react";
import "../../styles/ContributorDashboard/requeststatus.css";

// Dummy data
const dummyData = [
  {
    title: "Cyber Security",
    abstract: "Developing advanced encryption techniques  in a cloud computing environments.",
    contributionDetails: "This research focuses on enhancing cybersecurity measures in cloud computing environments through the development of advanced encryption techniques and effective intrusion detection systems to protect sensitive data from potential threats",
    requestStatus: "Pending",
  },
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

// // RequestStatus.js
// import React from "react";
// import "../../styles/ContributorDashboard/requeststatus.css";

// const dummyData = [
//   // Dummy data here
// ];

// function RequestStatus({ contributionDetail }) {
//   return (
//     <div>
//       <div className="card-display-request-status">
//         {dummyData.map((data, index) => (
//           <div key={index}>
//             <div className="card-request-status">
//               <div className="card-body-request-status">
//                 <div className="card-text-request-status">
//                   {/* Existing input fields */}
//                   <strong>Contribution Details:</strong> <br />
//                   <input
//                     className="input-request-status"
//                     type="text"
//                     readOnly
//                     value={data.contributionDetails}
//                   />
//                   <br />
//                   {/* Display the contributionDetail prop */}
//                   <strong>Your Contribution Details:</strong> <br />
//                   <input
//                     className="input-request-status"
//                     type="text"
//                     readOnly
//                     value={contributionDetail}
//                   />
//                   <br />
//                   {/* Remaining input fields */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RequestStatus;
