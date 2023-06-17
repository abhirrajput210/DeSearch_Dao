import React, { useState, useEffect } from "react";
import "../../styles/becomeMember/BecomeDaoMember.css";
import { tokenInstance, daoInstance } from '../contracts';
import { ethers } from 'ethers';
import {useAddress} from "@thirdweb-dev/react";

function BecomeDaoMember() {
  const [tokenValue, setTokenValue] = useState(0);
  const [tokenAvailable,setTokenAvailable] = useState(0);
  const [loading, setLoading] = useState(false);
  const address = useAddress();

  const handleTokenChange = (event) => {
    setTokenValue(event.target.value);
    console.log("Token Inputed",tokenValue);
  };

  const getUserCreditDetails = async () => {
    try {
        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            if (!provider) {
                console.log("Metamask is not installed, please install!");
            }
            const con = await tokenInstance();
            const totalCredits = await con.balanceOf(address);
            const creditsInDecimal = (parseInt(totalCredits._hex, 16)/Math.pow(10,18));
            setTokenAvailable(creditsInDecimal);
            console.log("Credits Available",creditsInDecimal);
            // console.log(totalCredits)
            return tokenAvailable;
        }
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    getUserCreditDetails()
}, [tokenAvailable])

const addMemberFunc = async () => {
  try {
      const { ethereum } = window;
      if (ethereum) {
        console.log("Token Entered",tokenValue)
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          if (!provider) {
              console.log("Metamask is not installed, please install!");
          }
          const daoCon = await daoInstance();
          setLoading(true);
          const addMember = await daoCon.addMember(tokenValue);
          await addMember.wait();
          console.log("Output", addMember);
          
          console.log(addMemberFunc.value);
          setLoading(false);
          alert("Congratulations! You are now a DAO member!");
      }
  } catch (error) {
    setLoading(false);
      console.log(error);
  }finally {
    setLoading(false); // Set loading back to false after transaction completes
  }
}

  return (
    <>
      <div className="container-fluid BDMPageBg">
        <div className="pb-4">
          <div className="BDMPage-head pb-3 pb-sm-4 d-flex justify-content-center align-items-center">
            <div className="become-member-head text-center">
              BECOME A DAO MEMBER
            </div>{" "}
          </div>
          <p className="mini-title-of-dao-member-page">
            Enter Tokens to become a DAO member (Minimum 50 tokens required)
          </p>
          <div className="d-lg-flex row pb-4 align-items-center BDMPage-form-content justify-content-around">
            <div className="BDMPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
              <form className="BDMPage-form-main">
                <div className="form-group-BDMPage row mb-4">
                  <div className="col-12 col-md-6 BDMPage-LabelTitle">
                    <label for="formGroupExampleInput">No. of Tokens:</label>
                  </div>
                  <div className="col-12 col-md-6 ">
                    <input
                      type="number"
                      class="TokenAmtInput-class"
                      id="formGroupExampleInput"
                      placeholder="Enter your tokens"
                      value={tokenValue}
                      onChange={handleTokenChange}
                    />
                  </div>
                </div>
                <div className="form-group-BDMPage row mb-4">
                  <div className="col-12 col-md-6 BDMPage-LabelTitle">
                    <label for="formGroupExampleInput2">Token Available</label>
                  </div>
                  <div className="col-12 col-md-6 ">
                    <input
                      type="text"
                      class="form-control-plaintext"
                      id="formGroupExampleInput2"
                      value={tokenAvailable}
                      
                    />
                  </div>
                </div>
                <div className="MemberBuyTokenBtn-class">
                  <div className="MemberBuyTokenBtn row">
                    <button
                      type="button"
                      className="BuyTokenBtn col-12 col-md-10"
                      onClick={addMemberFunc}
                      disabled={loading} // Disable the button while loading is true
                    >
                      {loading ? "Loading..." : "Become Member"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default BecomeDaoMember;
