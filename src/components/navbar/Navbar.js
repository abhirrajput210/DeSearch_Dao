import React from 'react';
import logo from "../../Assets/Logo.png"

function Navbar() {
  return (
    <div>
       <nav class="navbar">
        <div class="logo">
          <img src={logo} alt="Logo"/>
        </div>
        <div class="connect-wallet">
          <button class="connect-btn">Connect Wallet</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar;
