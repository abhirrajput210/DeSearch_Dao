import React,{useState} from "react";
import "../../styles/crowdFunding/fundtodao.css";
import { tokenInstance, daoInstance } from '../contracts';
import { ethers } from 'ethers';
import {useAddress} from "@thirdweb-dev/react";


function Fundtodao() {
  const address = useAddress();
  const [fundAmount, setFundAmount] = useState(0);

  const fundToDAO = async () => {
    try {
      // Check if Ethereum is available in the browser
      const con = await daoInstance();
      

      const tx =  await con.fundDAO({
        value: ethers.utils.parseEther(fundAmount.toString()) // Convert to wei
      });
      
      
        // Wait for the transaction to be mined
        await tx.wait();

        // Reset the input field
        setFundAmount(0);

        // Show success message or perform any other necessary actions
        console.log("Funding successful!");
      } 
      
     catch (error) {
      console.error("Error funding DAO:", error);
    }
  };

  const handleFundAmountChange = (event) => {
    setFundAmount(event.target.value);
  };

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
          <input className="input-pay" type="number"
          value={fundAmount}
          onChange={handleFundAmountChange}></input>
        </div>
        <div className="fund-to-dao-iii">
          <button className="pay-btn" onClick={fundToDAO}>PAY</button>
        </div>
      </div>
    </div>
  );
}

export default Fundtodao;