import React, { useState } from "react";
import Showcase from "../navbar/Showcase";
import Daomember from "./Daomember";
import Crowdfunding from "../Crowd Funding/Crowdfunding";
import Voting from "../navbar/Voting";
import "../../styles/sidebar.css";
import Researcher from "./daomember/Researcher";
import Contributor from "./daomember/Contributor";
import Fundtodao from "../Crowd Funding/Fundtodao";
import Quadraticvoting from "../Voting/Quadraticvoting";

function Sidebar() {
  const [display, setDisplay] = useState({
    showcase: true,
    daomember: false,
    crowdfunding: false,
    quadraticvoting: false,
    researcher: false,
    contributor: false,
  });

  return (
    <div>
      <div className="main-pagesss">
        <div className="left-div">
          <ul>
            <li
              className="nav-list"
              onClick={() =>
                setDisplay({
                  showcase: true,
                  daomember: false,
                  crowdfunding: false,
                  quadraticvoting: false,
                  researcher: false,
                  contributor: false,
                })
              }
            >
              Showcase
            </li>
            <li
              className="nav-list"
              onClick={() =>
                setDisplay({
                  showcase: false,
                  daomember: true,
                  crowdfunding: false,
                  quadraticvoting: false,
                  researcher: false,
                  contributor: false,
                })
              }
            >
              DAO Member
            </li>
            {display.daomember && (
              <>
                <li
                  className="subnav-list"
                  onClick={() =>
                    setDisplay({
                      ...display,
                      researcher: true,
                      contributor: false,
                    })
                  }
                >
                  <div className="nav-list">Researcher</div>
                </li>
                <li
                  className="subnav-list"
                  onClick={() =>
                    setDisplay({
                      ...display,
                      researcher: false,
                      contributor: true,
                    })
                  }
                >
                  <div className="nav-list">Contributor</div>
                </li>
              </>
            )}
            <li
              className="nav-list"
              onClick={() =>
                setDisplay({
                  showcase: false,
                  daomember: false,
                  crowdfunding: true,
                  quadraticvoting: false,
                  researcher: false,
                  contributor: false,
                })
              }
            >
              Crowd Funding
            </li>
            <li
              className="nav-list"
              onClick={() =>
                setDisplay({
                  showcase: false,
                  daomember: false,
                  crowdfunding: false,
                  quadraticvoting: true,
                  researcher: false,
                  contributor: false,
                })
              }
            >
              Voting
            </li>
          </ul>
        </div>
        <div className="right">
          {display.showcase ? (
            <Showcase />
          ) : display.daomember ? (
            <Daomember />
          ) : display.crowdfunding ? (
            <Crowdfunding />
          ) : (
            // <Fundtodao />
            // <Voting />
            <Quadraticvoting />
          )}
          {display.daomember && display.researcher && <Researcher />}
          {display.daomember && display.contributor && <Contributor />}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
