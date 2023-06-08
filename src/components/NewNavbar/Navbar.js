import React from 'react';
import "../../styles/Navbar/Navbar.css";
import logo from "../../Assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUser, faCoins, faVoteYea, faHome,faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav>
      <a href='index.html'>
        <img src={logo} height="80px" width="180px" alt='logoImg' />
      </a>

      <ul className='navbar'>
        <li>
          <FontAwesomeIcon icon={faHome} className='icons' />
          <a className='active' href='index.html'>Home</a>
        </li>

        <li>
          <FontAwesomeIcon icon={faChartLine} className='icons' />
          <a href='index.html'>Showcase</a>
        </li>

        <li className='has-submenu'>
          <FontAwesomeIcon icon={faUser} className='icons' />
          <a href='index.html'>DAO Member<FontAwesomeIcon icon={faChevronDown} className='submenu-arrow' /></a>
          <ul className='submenu'>
            <li>
              <a href='index.html'>Researcher</a>
            </li>
            <li>
              <a href='index.html'>Contributor</a>
            </li>
          </ul>
        </li>

        <li>
          <FontAwesomeIcon icon={faCoins} className='icons' />
          <a href='index.html'>Crowd Funding</a>
        </li>

        <li>
          <FontAwesomeIcon icon={faVoteYea} className='icons' />
          <a href='index.html'>Quadratic Voting</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
