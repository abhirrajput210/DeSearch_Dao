import React, { useState } from 'react';
import '../../styles/navbar/Navbar.css';
import logo from '../../Assets/DesearchDaoLogo.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUser, faCoins, faVoteYea, faHome, faChevronDown,faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import ConnectButtonCustom from '../ConnectButtonCustom';

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
          <FontAwesomeIcon icon={faHome} className="icons" />
          <NavLink activeClassName="active" exact to="/">
            Home
          </NavLink>
        </li>

        <li>
          <FontAwesomeIcon icon={faChartLine} className="icons" />
          <NavLink activeClassName="active" to="/showcase">
            Showcase
          </NavLink>
        </li>

        <li
          className={`has-submenu ${submenuOpen ? 'open' : ''}`}
          onMouseEnter={handleSubmenuToggle}
          onMouseLeave={handleSubmenuClose}
        >
          <FontAwesomeIcon icon={faUser} className="icons" />
          <NavLink activeClassName="active" to="/dao-member">
            DAO Member<FontAwesomeIcon icon={faChevronDown} className="submenu-arrow" />
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
          <FontAwesomeIcon icon={faVoteYea} className="icons" />
          <NavLink activeClassName="active" to="/quadratic-voting">
            Quadratic Voting
          </NavLink>
        </li>
          </ul>
        </li>

        <li>
          <FontAwesomeIcon icon={faCoins} className="icons" />
          <NavLink activeClassName="active" to="/crowd-funding">
            Crowd Funding
          </NavLink>
        </li>

      </ul>

      <div style={{marginLeft:'-270px'}}>
              <ConnectButtonCustom />
      </div>
    </nav>
  );
}

export default Navbar;
