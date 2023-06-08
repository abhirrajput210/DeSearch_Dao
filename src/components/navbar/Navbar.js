import React from "react";
import logo from "../../Assets/Logo.png";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
          <img src={logo} alt="Logo" />
          <div className="logoo">Desearch DAO</div>
        </div>
        <div class="connect-wallet">
          <button class="connect-btn">Connect Wallet</button>
        </div>
      </nav>
    </div>
  );
}
