import React, { useState } from "react";
import "../../styles/Navbar/Navbar.css";
import logo from "../../Assets/DesearchDaoLogo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUser,
  faCoins,
  faVoteYea,
  faHome,
  faChevronDown,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import ConnectButtonCustom from "../ConnectButtonCustom";

function Navbar() {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleSubmenuClose = () => {
    setSubmenuOpen(false);
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} height="80px" width="180px" alt="logoImg" />
      </Link>

      <ul className="navbar">
        <li>
          <NavLink activeClassName="active" to="/showcase">
            <FontAwesomeIcon icon={faChartLine} className="icons" />
            Showcase
          </NavLink>
        </li>

        <li
          className={`has-submenu ${submenuOpen ? "open" : ""}`}
          onMouseEnter={handleSubmenuToggle}
          onMouseLeave={handleSubmenuClose}
        >
          <NavLink activeClassName="active" to="/dao-member">
            <FontAwesomeIcon icon={faUser} className="icons" />
            DAO Member
            <FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
          </NavLink>
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
              <NavLink activeClassName="active" to="/quadratic-voting">
                <FontAwesomeIcon icon={faVoteYea} className="icons" />
                Quadratic Voting
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink activeClassName="active" to="/crowd-funding">
            <FontAwesomeIcon icon={faCoins} className="icons" />
            Crowd Funding
          </NavLink>
        </li>
      </ul>

      <div style={{ marginLeft: "-270px" }}>
        <ConnectButtonCustom />
      </div>
    </nav>
  );
}

export default Navbar;
