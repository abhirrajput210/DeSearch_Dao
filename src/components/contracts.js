import {ethers} from "ethers";
import TokenABI from "../contract/artifacts/TokenABI.json";
import DataDaoABI from "../contract/artifacts/DataDaoABI.json";
import ResearcherABI from "../contract/artifacts/ResearcherABI.json";
export const TOKEN_ADDRESS = "0x9aDB7948d3916b30d6846Dbd03734eA943aef713";
export const DATA_DAO_ADDRESS = "0xD860c23C447C27B5f332836B647D47bD93E3A5c8";
export const RESEARCHER_ADDRESS = "0xcDc1758997213dCd60ECd5D9bB19440b6748Ea7C";

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