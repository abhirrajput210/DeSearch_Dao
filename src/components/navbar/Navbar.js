import React, { useState, useEffect } from "react";
import "../../styles/Navbar/Navbar.css";
import logo from "../../Assets/DesearchDaoLogo.png";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUser,
  faCoins,
  faVoteYea,
  faChevronDown,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
// import ENS, { getEnsAddress } from "@ensdomains/ensjs";

// const ens = new ENS({ provider, ensAddress: getEnsAddress("1") });

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenuOpenCf, setSubmenuOpenCf] = useState(false);
  const [submenuOpenDm, setSubmenuOpenDm] = useState(false);
  const address = useAddress();

  console.log("Address :", address);

  const verifyNavbar = async () => {
    try {
      if (address) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyNavbar();
  }, [address]);

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(false);
  };

  const handleSubmenuToggleCf = () => {
    setSubmenuOpenCf(!submenuOpenCf);
  };

  const handleSubmenuCloseCf = () => {
    setSubmenuOpenCf(false);
  };

  const handleSubmenuToggleDm = () => {
    setSubmenuOpenDm(!submenuOpenDm);
  };

  const handleSubmenuCloseDm = () => {
    setSubmenuOpenDm(false);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} height="80px" width="150px" alt="logoImg" />
      </Link>

      <ul className="navbar">
        {isAuthenticated ? (
          <>
            <li>
              <NavLink activeClassName="active" to="/showcase">
                <FontAwesomeIcon icon={faChartLine} className="icons" />
                Showcase
              </NavLink>
            </li>

            <li
              className={`has-submenu ${submenuOpenDm ? "open" : ""}`}
              onMouseEnter={handleSubmenuToggleDm}
              onMouseLeave={handleSubmenuCloseDm}
            >
              {/* <NavLink to="/dao-member"> */}
              <FontAwesomeIcon icon={faUser} className="icons" />
              Dao Member
              {/* </NavLink> */}
              <FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
              <ul className="submenu">
                <li>
                  <NavLink activeClassName="active" to="/buy-tokens">
                    <FontAwesomeIcon icon={faUserGraduate} className="icons" />
                    Buy Tokens
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/dao-member">
                    <FontAwesomeIcon icon={faUser} className="icons" />
                    Become Member
                  </NavLink>
                </li>
              </ul>
            </li>
            <li
              className={`has-submenu ${submenuOpen ? "open" : ""}`}
              onMouseEnter={handleSubmenuToggle}
              onMouseLeave={handleSubmenuClose}
            >
              {/* <NavLink to="/dao-member"> */}
              <FontAwesomeIcon icon={faUser} className="icons" />
              Community
              {/* </NavLink> */}
              <FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
              <ul className="submenu">
                <li>
                  <NavLink activeClassName="active" to="/researcher">
                    <FontAwesomeIcon icon={faUserGraduate} className="icons" />
                    Researcher
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contributor-dashboard">
                    <FontAwesomeIcon icon={faUser} className="icons" />
                    Contributor
                  </NavLink>
                </li>
                <li>
                  <FontAwesomeIcon icon={faVoteYea} className="icons" />
                  <NavLink
                    exact
                    activeClassName="active"
                    to="/quadratic-voting"
                  >
                    Quadratic Voting
                  </NavLink>
                </li>
              </ul>
            </li>

            <li
              className={`has-submenu ${submenuOpenCf ? "open" : ""}`}
              onMouseEnter={handleSubmenuToggleCf}
              onMouseLeave={handleSubmenuCloseCf}
            >
              <FontAwesomeIcon icon={faCoins} className="icons" />
              CrowdFunding
              <FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
              <ul className="submenu">
                <li>
                  <NavLink activeClassName="active" to="/crowd-funding">
                    <FontAwesomeIcon icon={faUserGraduate} className="icons" />
                    For Dao
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName="active"
                    to="/crowd-funding-researcher"
                  >
                    <FontAwesomeIcon icon={faUser} className="icons" />
                    For Researcher
                  </NavLink>
                </li>
              </ul>
            </li>
          </>
        ) : (
          <li>
            <NavLink activeClassName="active" to="/showcase">
              <FontAwesomeIcon icon={faChartLine} className="icons" />
              Showcase
            </NavLink>
          </li>
        )}
        <ConnectWallet
          theme="light"
          style={{ height: "50px" }}
          // onConnect={verifyNavbar}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
