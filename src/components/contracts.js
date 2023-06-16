import {ethers} from "ethers";
import TokenABI from "../contract/artifacts/TokenABI.json";
import DataDaoABI from "../contract/artifacts/DataDaoABI.json";
import ResearcherABI from "../contract/artifacts/ResearcherABI.json";
export const TOKEN_ADDRESS = "0x6F04385CF5501e9A66AE277bEA57965362248aA5";
export const DATA_DAO_ADDRESS = "0x26Baaf48a4EFD298BdB9a889eDDeD692919a7093";
export const RESEARCHER_ADDRESS = "0x564c88146De3C43B0d7e25Ba49beEe59B8De5d97";

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