import React, { useState } from 'react';
import "../../styles/researcherDashboard/UploadResearch.css";

function UploadResearch() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    cpimage: '',
    abstract: '',
    detaileddesc: '',
    rwfile: '',
    fundsneeded: '',
    githublink: '',
    references: '',
  });

  const handleChange = (e) => {
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

    setFormData({
        title: '',
        category: '',
        cpimage: '',
        abstract: '',
        detaileddesc: '',
        rwfile: '',
        fundsneeded: '',
        githublink: '',
        references: '',
      });
  };

  return (
    <>
      <div className="researchPageBg">
        <div className="researchBg">
          <div className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <p className="researchHead">Upload Research Work</p>
            </div>
            <p className="text-center researchSubHead ">You must be a DAO Member to upload research work</p>
          </div>
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label htmlFor="title" className="form-label researchLabel">
                Title:
              </label>
              <input
                type="text"
                className="form-control researchInput"
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label researchLabel">
                Select your category:
              </label>
              <select
                className="form-select researchInput"
                id="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select category</option>
                <option value="ABC">ABC</option>
                <option value="DEF">DEF</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="cpimage" className="form-label researchLabel">
                CoverPage Image:
              </label>
              <input
                type="file"
                className="form-control researchInput"
                id="cpimage"
                value={formData.cpimage}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="abstract" className="form-label researchLabel">
                Abstract:
              </label>
              <input
                type="textarea"
                className="form-control researchInput"
                rows="2"
                id="abstract"
                value={formData.abstract}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="detaileddesc" className="form-label">
                <span className="researchDetailText"> Detailed Description: </span>
              </label>
              <textarea
                className="form-control researchInput"
                placeholder="Description"
                id="detaileddesc"
                rows="3"
                value={formData.detaileddesc}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="rwfile" className="form-label researchLabel">
                Research Work File:
              </label>
              <input
                type="file"
                className="form-control researchInput"
                id="rwfile"
                value={formData.rwfile}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fundsneeded" className="form-label researchLabel">
                Funds Needed:
              </label>
              <input
                type="text"
                className="form-control researchInput"
                id="fundsneeded"
                value={formData.fundsneeded}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="githublink" className="form-label researchLabel">
                Github Link:
              </label>
              <input
                type="text"
                className="form-control researchInput"
                id="githublink"
                value={formData.githublink}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="references" className="form-label researchLabel">
                References:
              </label>
              <input
                type="text"
                className="form-control researchInput"
                id="references"
                value={formData.references}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="rounded-pill researchSubmit mr-3">
              Draft
            </button>
            <div className="mx-2"></div>
            <button type="submit" className="rounded-pill researchSubmit">
              Publish
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UploadResearch;
