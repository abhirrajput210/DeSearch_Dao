import {ethers} from "ethers";
import TokenABI from "../contract/artifacts/TokenABI.json";
import DataDaoABI from "../contract/artifacts/DataDaoABI.json";
import ResearcherABI from "../contract/artifacts/ResearcherABI.json";
export const TOKEN_ADDRESS = "0x457e213F4170844C58E4F9f5fA221D94F18a72A6";
export const DATA_DAO_ADDRESS = "0x85ea7294Fb575D63843FC6c4be63267D62b52479";
export const RESEARCHER_ADDRESS = "0xb84ceddac57DecACe29ad89073909795B1092d38";

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