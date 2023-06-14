import React, { useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import "../../styles/researcherDashboard/UploadResearch.css";

function UploadResearch() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    cpimage: null,
    abstract: "",
    detaileddesc: "",
    rwInput: null,
    fundsneeded: "",
    githublink: "",
    references: "",
    paymentOption: "free", // Default to 'free'
    researchCost: "", // Empty string initially
  });

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadImage = async (file) => {
    const output = await lighthouse.upload(
      file,
      "ab880e13.35438030dd3344b3baf4bfc3cdde574f",
      progressCallback
    );
    console.log("File Status:", output);

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );

    const cidUploadImage =
      "https://gateway.lighthouse.storage/ipfs/" + output.data.Hash;
    return cidUploadImage;
  };

  const uploadFile = async (file) => {
    const output = await lighthouse.upload(
      file,
      "ab880e13.35438030dd3344b3baf4bfc3cdde574f",
      progressCallback
    );
    console.log("File Status:", output);

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash
    );

    const cidUploadFile =
      "https://gateway.lighthouse.storage/ipfs/" + output.data.Hash;
    return cidUploadFile;
  };

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
      title: "",
      category: "",
      cpimage: null,
      abstract: "",
      detaileddesc: "",
      rwInput: null,
      fundsneeded: "",
      githublink: "",
      references: "",
      paymentOption: "free",
      researchCost: "",
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
            <p className="text-center researchSubHead ">
              You must be a DAO Member to upload research work
            </p>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                // value={formData.cpimage}
                onChange={(e) => uploadImage(e.target.files)}
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
                <span className="researchDetailText">
                  {" "}
                  Detailed Description:{" "}
                </span>
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
              <label htmlFor="rwInput" className="form-label researchLabel">
                Research Work File:
              </label>
              <input
                type="file"
                className="form-control researchInput"
                id="rwInput"
                // value={formData.rwInput}
                onChange={(e) => uploadFile(e.target.files)}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="paymentOption"
                className="form-label researchLabel"
              >
                Payment Option:
              </label>
              <div className="d-flex">
                <div className="form-check mr-3">
                  <input
                    type="radio"
                    id="paymentOption"
                    value="free"
                    checked={formData.paymentOption === "free"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="free" className="form-check-label">
                    Free
                  </label>
                </div>
                <div className="form-check" style={{ marginLeft: "20px" }}>
                  <input
                    type="radio"
                    id="paymentOption"
                    value="paid"
                    checked={formData.paymentOption === "paid"}
                    onChange={handleChange}
                    className="form-check-input"
                  />
                  <label htmlFor="paid" className="form-check-label">
                    Paid
                  </label>
                </div>
              </div>
            </div>

            {formData.paymentOption === "paid" && (
              <div className="mb-3">
                <label
                  htmlFor="researchCost"
                  className="form-label researchLabel"
                >
                  Research Cost:
                </label>
                <input
                  type="text"
                  className="form-control researchInput"
                  id="researchCost"
                  value={formData.researchCost}
                  onChange={handleChange}
                />
              </div>
            )}

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
              <button
                type="submit"
                className="rounded-pill researchSubmit mr-3"
              >
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
