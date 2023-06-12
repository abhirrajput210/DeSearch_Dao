import React, { useState } from 'react';
import "../../styles/ContributorDashboardPage/ContributorResearchContribution.css";

function ContributorResearchContribution() {
  const initialFormData = {
    conResTitle: '',
    conResCategory: '',
    conResCpImage: '',
    conResAbstract: '',
    conResDetailedDesc: '',
    conResrwInput: '',
    conResFundsNeeded: '',
    conResGithubLink: '',
    conResReferences: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  // Fetch data from the server and update the form fields
  // Replace this with your actual fetch logic
  const fetchDataFromServer = () => {
    const fetchedData = {
      conResTitle: 'Prefilled Title',
      conResCategory: 'Prefilled Category',
      conResCpImage: 'Prefilled CoverPage Image',
      conResAbstract: 'Prefilled Abstract',
      conResDetailedDesc: 'Editable Detailed Description',
      conResrwInput: '', // No prefilled value for this field
      conResFundsNeeded: '', // No prefilled value for this field
      conResGithubLink: 'Editable GitHub Link',
      conResReferences: 'Editable References',
    };

    setFormData(fetchedData);
  };

  // Update only the editable fields
  const handleEditableFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Perform any additional actions here, such as sending the data to a server

    setFormData(initialFormData);
  };

  // Fetch data from the server when the component mounts
  React.useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <>
      <div className="conResPageBg">
        <div className="conResBg">
          <div className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <p className="conResHead">Contribute to Research Work</p>
            </div>
            <p className="text-center conResSubHead ">You must be a DAO Member to upload research work</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="conResTitle" className="form-label conResLabel">
                Title:
              </label>
              <input
                type="text"
                className="form-control conResInput"
                id="conResTitle"
                value={formData.conResTitle}
                readOnly // Make the field read-only
              />
            </div>

            <div className="mb-3">
              <label htmlFor="conResCategory" className="form-label conResLabel">
                Select your category:
              </label>
              <input
                type="text"
                className="form-control conResInput"
                id="conResCategory"
                value={formData.conResCategory}
                readOnly // Make the field read-only
              />
            </div>

            <div className="mb-3">
              <label htmlFor="conResCpImage" className="form-label conResLabel">
                CoverPage Image:
              </label>
              <input
                type="file"
                className="form-control conResInput"
                id="conResCpImage"
                disabled // Disable the file input
              />
            </div>

            <div className="mb-3">
              <label htmlFor="conResAbstract" className="form-label conResLabel">
                Abstract:
              </label>
              <input
                type="textarea"
                className="form-control conResInput"
                rows="2"
                id="conResAbstract"
                value={formData.conResAbstract}
                readOnly // Make the field read-only
              />
            </div>

            <div className="mb-3">
              <label htmlFor="conResDetailedDesc" className="form-label">
                <span className="conResDetailText"> Detailed Description: </span>
              </label>
              <textarea
                className="form-control conResInput"
                placeholder="Description"
                id="conResDetailedDesc"
                rows="3"
                value={formData.conResDetailedDesc}
                onChange={handleEditableFieldChange} // Handle changes for editable field
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="conResrwInput" className="form-label conResLabel">
                Research Work File:
              </label>
              <input
                type="file"
                className="form-control conResInput"
                id="conResrwInput"
                onChange={handleEditableFieldChange} // Handle changes for editable field
              />
            </div>

            <div className="mb-3">
              <label htmlFor="conResGithubLink" className="form-label conResLabel">
                Github Link:
              </label>
              <input
                type="text"
                className="form-control conResInput"
                id="conResGithubLink"
                value={formData.conResGithubLink}
                onChange={handleEditableFieldChange} // Handle changes for editable field
              />
            </div>

            <div className="mb-3">
              <label htmlFor="conResReferences" className="form-label conResLabel">
                References:
              </label>
              <input
                type="text"
                className="form-control conResInput"
                id="conResReferences"
                value={formData.conResReferences}
                onChange={handleEditableFieldChange} // Handle changes for editable field
              />
            </div>

            <div className="d-flex justify-content-center mt-3">
              <button type="submit" className="rounded-pill conResSubmit mr-3">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContributorResearchContribution;
