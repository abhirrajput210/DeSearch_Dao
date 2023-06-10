import React from "react";
import logo from "../../Assets/Logo.png";
import "../../styles/navbar.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <img src={logo} alt="Logo" />
          <div className="logoo">Desearch DAO</div>
        </div>
        <div class="connect-wallet">
          <ConnectButton />
          {/* <button class="connect-btn">Connect W</button> */}
        </div>
      </nav>
    </div>
  );
}
