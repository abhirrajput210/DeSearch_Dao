import React from "react";
import { useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import "../../styles/crowdfunding/CrowdFundingResearcher.css";

function CrowdFundingResearcher() {
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
    });
  };

  return (
    <>
      <div className="cfrPageBg">
        <div className="cfrBg">
          <div className="text-center">
            <div className="d-flex justify-content-center align-items-center">
              <p className="cfrHead">Upload Research Work For CrowdFunding</p>
            </div>
            <p className="text-center cfrSubHead ">
              You must be a DAO Member to upload research work
            </p>
          </div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="title" className="form-label cfrLabel">
                Title:
              </label>
              <input
                type="text"
                className="form-control cfrInput"
                id="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="category" className="form-label cfrLabel">
                Select your category:
              </label>
              <select
                className="form-select cfrInput"
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
              <label htmlFor="cpimage" className="form-label cfrLabel">
                CoverPage Image:
              </label>
              <input
                type="file"
                className="form-control cfrInput"
                id="cpimage"
                // value={formData.cpimage}
                onChange={(e) => uploadImage(e.target.files)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="abstract" className="form-label cfrLabel">
                Abstract:
              </label>
              <input
                type="textarea"
                className="form-control cfrInput"
                rows="2"
                id="abstract"
                value={formData.abstract}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="detaileddesc" className="form-label">
                <span className="cfrDetailText"> Detailed Description: </span>
              </label>
              <textarea
                className="form-control cfrInput"
                placeholder="Description"
                id="detaileddesc"
                rows="3"
                value={formData.detaileddesc}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="rwInput" className="form-label cfrLabel">
                Research Work File:
              </label>
              <input
                type="file"
                className="form-control cfrInput"
                id="rwInput"
                // value={formData.rwInput}
                onChange={(e) => uploadFile(e.target.files)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="fundsneeded" className="form-label cfrLabel">
                Funds Needed:
              </label>
              <input
                type="text"
                className="form-control cfrInput"
                id="fundsneeded"
                value={formData.fundsneeded}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="githublink" className="form-label cfrLabel">
                Github Link:
              </label>
              <input
                type="text"
                className="form-control cfrInput"
                id="githublink"
                value={formData.githublink}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="references" className="form-label cfrLabel">
                References:
              </label>
              <input
                type="text"
                className="form-control cfrInput"
                id="references"
                value={formData.references}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex justify-content-center mt-3">
              <div className="mx-2"></div>
              <button type="submit" className="rounded-pill cfrSubmit">
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CrowdFundingResearcher;
