import {ethers} from "ethers";
import TokenABI from "../contract/artifacts/TokenABI.json";
export const TOKEN_ADDRESS = "0x5Ef413c894b8e5C9E3020dA1fe21306EfED03923";

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