import {ethers} from "ethers";
import TokenABI from "../contract/artifacts/TokenABI.json";
import DataDaoABI from "../contract/artifacts/DataDaoABI.json";
import ResearcherABI from "../contract/artifacts/ResearcherABI.json";
// export const TOKEN_ADDRESS = "0x457e213F4170844C58E4F9f5fA221D94F18a72A6";
export const TOKEN_ADDRESS = "0x7de92203E91A48b6C705a44f5cf0977FA0ec5026";
// export const DATA_DAO_ADDRESS = "0x2dc86b08a9e49Cf0BCbdA5E9D2cC82f3Ca56a503";
export const DATA_DAO_ADDRESS = "0xEd89444CE97046ef8c9A452879e7346B79a6f5ac";
// export const RESEARCHER_ADDRESS = "0xb84ceddac57DecACe29ad89073909795B1092d38";
export const RESEARCHER_ADDRESS = "0x7Aa89f308401f789c0237746Da1bA47d6c09Cc6C";

export const tokenInstance = async () => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
            console.log("Metamask is not installed, please install!");
        }
        const con = new ethers.Contract(
            TOKEN_ADDRESS,
            TokenABI,
            signer
        );
        // console.log(con);
        return con;
    } else {
        console.log("error");
    }
};

export const daoInstance = async () => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
            console.log("Metamask is not installed, please install!");
        }
        const con = new ethers.Contract(
            DATA_DAO_ADDRESS,
            DataDaoABI,
            signer
        );
        // console.log(con);
        return con;
    } else {
        console.log("error");
    }
};

export const researcherInstance = async () => {
    const { ethereum } = window;
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        if (!provider) {
            console.log("Metamask is not installed, please install!");
        }
        const con = new ethers.Contract(
            RESEARCHER_ADDRESS,
            ResearcherABI,
            signer
        );
        // console.log(con);
        return con;
    } else {
        console.log("error");
    }
};