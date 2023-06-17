import React, { useState, useEffect } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import "../../styles/ResearcherDashboard/UploadResearch.css";
import { researcherInstance } from "../contracts";
import { ethers } from 'ethers';
import {useAddress} from "@thirdweb-dev/react";

function UploadResearch() {
  const address = useAddress();
  const [formData, setFormData] = useState({
    title: null,
    category: null,
    cpimage: null,
    abstract: null,
    detaileddesc: null,
    rwInput: null,
    githublink: null,
    references: null,
    paymentOption: "free", // Default to 'free'
    researchCost: null, // Empty string initially
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadImage = async () => {
    try {
      console.log("in upload image function");
      const file = formData.cpimage; // Access the file from the array
      const output = await lighthouse.upload(
        file,
        "ab880e13.35438030dd3344b3baf4bfc3cdde574f",
        progressCallback
      );
      console.log("File Status:", output);

      return output;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadFile = async () => {
    try {
      console.log("in upload image function");
      const file = formData.rwInput; // Access the file from the array
      const output = await lighthouse.upload(
        file,
        "ab880e13.35438030dd3344b3baf4bfc3cdde574f",
        progressCallback
      );
      console.log("File Status:", output);

      return output;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Perform any additional actions here, such as sending the data to a server

    // setFormData({
    //   title: "",
    //   category: "",
    //   cpimage: null,
    //   abstract: "",
    //   detaileddesc: "",  
    //   rwInput: null,
    //   fundsneeded: "",
    //   githublink: "",
    //   references: "",
    //   paymentOption: "free",
    //   researchCost: "",
    // });
  };

  const uploadResearchFunc = async (e) => {
    try {
      console.log("Form Data:", formData);
      const researchCost = Number(formData.researchCost);
      const outputCi = await uploadImage();
      const ci = outputCi.data.Hash;

      const outputRf = await uploadFile();
      const rf = outputRf.data.Hash;

      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
          console.log("Metamask is not installed, please install!");
        }
        const researchCost = ethers.BigNumber.from(formData.researchCost);
        const researcherCon = await researcherInstance();

        // Call the appropriate smart contract function based on payment option
        if (formData.paymentOption === "free") {
       const tx = await researcherCon.submitFreePaper(
        formData.title,
        formData.category,
        ci,
        formData.abstract,
        formData.detaileddesc,
        rf,
        formData.githublink,
        formData.references,
       );

       console.log(tx);
        await tx.wait();
        console.log(researcherCon);
      }else if (formData.paymentOption === "paid") {
        const tx = await researcherCon.submitPaidPaper(
          formData.title,
          formData.category,
          ci,
          formData.abstract,
          formData.detaileddesc,
          rf,
          researchCost,
          formData.githublink,
          formData.references,
          
        );

        console.log(tx);
        await tx.wait();
        console.log(researcherCon);
      }
    }
  }
    catch (error) {
      console.log(error);
    }
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
                onChange={(e) => {
                  setFormData({ ...formData, title: e.target.value });
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, category: e.target.value });
                }}
              >
                <option value="0">Select category</option>
                <option value="1">ABC</option>
                <option value="2">DEF</option>
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
                onChange={(e) => {
                  setFormData({ ...formData, cpimage: e.target.value });
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, abstract: e.target.value });
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, detaileddesc: e.target.value });
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, rwInput: e.target.value });
                }}
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
                    onChange={(e) => {
                      setFormData({ ...formData, paymentOption: e.target.value });
                    }}
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
                    onChange={(e) => {
                      setFormData({ ...formData, paymentOption: e.target.value });
                    }}
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
                  onChange={(e) => {
                    setFormData({ ...formData, researchCost: e.target.value });
                  }}
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
                onChange={(e) => {
                  setFormData({ ...formData, githublink: e.target.value });
                }}
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
                onChange={(e) => {
                  setFormData({ ...formData, references: e.target.value });
                }}
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
              <button type="submit" className="rounded-pill researchSubmit" onClick={uploadResearchFunc}>
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
