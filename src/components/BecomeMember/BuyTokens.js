import React, { useState } from 'react'
import { ethers } from 'ethers';
import { tokenInstance } from '../contracts';
import "../../styles/becomeMember/BuyTokens.css"
import {useAddress} from "@thirdweb-dev/react";


function BuyTokens() {
    const [numOfTokens, setNumOfTokens] = useState("0");
    const address = useAddress();
    
    const buyTokens = async () => {
      try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          if (!provider) {
            console.log("Metamask is not installed, please install!");
            return;
          }
          const conToken = await tokenInstance();
          const tokenPrice = await conToken.tokenPrice();
          const ethAmount = ethers.utils.parseEther(numOfTokens).mul(tokenPrice);
  
          const transaction = await conToken.buyTokens(numOfTokens, {
            value: ethAmount,
          });
          await transaction.wait();
          console.log("Tokens purchased successfully!");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        <div className="container-fluid BTPageBg">
          <div className="pb-4">
          <div className="text-center" style={{marginTop:"100px",paddingTop:"100px"}}>
              <div className="d-flex justify-content-center align-items-center">
                <p className="BuyTokenHead">Buy Tokens</p>
              </div>
              <p className="text-center BuyTokenSubHead ">
                You Need To Buy Tokens For Becoming A Dao Member
              </p>
            </div>
  
            <div className="d-lg-flex row pb-4 align-items-center BTPage-form-content justify-content-around">
              <div className="BTPage-box-bg mb-lg-0 mb-sm-4 mb-4 align-self-stretch py-5 px-4">
                <form className="BDMPage-form-main">
                  <div className="form-group-BTPage row mb-4">
                    <div className="col-12 col-md-6 BDMPage-LabelTitle">
                      <label for="formGroupExampleInput">No. of Tokens:</label>
                    </div>
                    <div className="col-12 col-md-6 ">
                      <input
                        type="number"
                        class="BTTokenAmtInput-class"
                        id="formGroupExampleInput"
                        placeholder="Enter your tokens"
                        value={numOfTokens}
                        onChange={(e) => {
                          setNumOfTokens(e.target.value);
                        }}
                      />
                    </div>
                  </div>
  
                  <div className="BuyTokenBtn-class">
                    <div className="BuyTokenBtn row">
                      <button
                        type="button"
                        className="BuyTokenBtn col-12 col-md-10"
                        onClick={buyTokens}
                      >
                        Buy Token
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

export default BuyTokens;
