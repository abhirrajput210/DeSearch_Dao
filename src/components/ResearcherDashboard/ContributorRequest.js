import React from 'react';
import "../../styles/researcherDashboard/ContributorRequest.css";

function ContributorRequest() {
  // Example data array
  const data = [
    {
      title: 'Title 1',
      abstract: 'Abstract 1',
      contributorAddress: 'Address 1',
      contributionDetails: 'Details 1',
    },
    {
      title: 'Title 2',
      abstract: 'Abstract 2',
      contributorAddress: 'Address 2',
      contributionDetails: 'Details 2',
    },
    
    // Add more data objects as needed
  ];

  return (
    <div>
      <div className='conreq-main'>
        {data.map((item, index) => (
          <div className='conreq-card-container' key={index}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label conreqLabel">
                Title:
              </label>
              <input
                type="text"
                className="form-control conreq-conreqInput"
                id="title"
                readOnly
                value={item.title}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="abstract" className="form-label conreqLabel">
                Abstract:
              </label>
              <textarea
                className="form-control conreq-conreqInput"
                rows="2"
                id="abstract"
                value={item.abstract}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contributorAddress" className="form-label conreqLabel">
                Contributor Address:
              </label>
              <input
                type="text"
                className="form-control conreq-conreqInput"
                id="contributorAddress"
                value={item.contributorAddress}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="contributionDetails" className="form-label conreqLabel">
                Contribution Details:
              </label>
              <textarea
                className="form-control conreq-conreqInput"
                rows="3"
                id="contributionDetails"
                value={item.contributionDetails}
              />
            </div>

            <div className='btnClass'>
              <div className="button-wrapper">
                <button type="submit" className="rounded-pill conreqSubmit mt-3">
                  Accept
                </button>
                <button type="submit" className="rounded-pill conreqSubmit mt-3 rejected">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContributorRequest;
