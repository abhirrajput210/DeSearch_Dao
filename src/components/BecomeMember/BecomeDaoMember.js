import React, { useState } from "react";
import "../../styles/BecomeMember/BecomeDaoMember.css";

function BecomeDaoMember() {
  const [tokenValue, setTokenValue] = useState(0);

  const handleTokenChange = (event) => {
    setTokenValue(event.target.value);
  };

  const handleBuyToken = () => {
    const totalAmount = tokenValue * 1000;
    alert(`Total Amount: ${totalAmount}`);
  };
  return (
    <>
      <div className="container-fluid BDMPageBg">
        <div className="pb-4">
          <div className="BDMPage-head pb-3 pb-sm-4 d-flex justify-content-center align-items-center">
            <div className="become-member-head text-center">
              BECOME A DAO MEMBER{" "}
            </div>{" "}
          </div>

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
                    <label for="formGroupExampleInput2">Total Amount:</label>
                  </div>
                  <div className="col-12 col-md-6 ">
                    <input
                      type="text"
                      class="form-control-plaintext"
                      id="formGroupExampleInput2"
                      value={1000}
                      readOnly
                    />
                  </div>
                </div>
                <div className="MemberBuyTokenBtn-class">
                  <div className="MemberBuyTokenBtn row">
                    <button
                      type="button"
                      className="MemberBuyTokenBtn col-12 col-md-10"
                      onClick={handleBuyToken}
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

export default BecomeDaoMember;
