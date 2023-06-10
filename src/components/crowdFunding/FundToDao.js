import React from "react";
import "../../styles/crowdFunding/FundToDao.css";

function Fundtodao() {
  return (
    <div>
      <div className="fund-to-dao-main-page">
        <div className="fund-to-dao-i">
          <h1>
            <b>Invest in DAO</b>
          </h1>
        </div>
        <div className="fund-to-dao-ii">
          <label>Enter Fund Amount</label>
          <br />
          <input className="input-pay"></input>
        </div>
        <div className="fund-to-dao-iii">
          <button className="pay-btn">PAY</button>
        </div>
      </div>
    </div>
  );
}

export default Fundtodao;
