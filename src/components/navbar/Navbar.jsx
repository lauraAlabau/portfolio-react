import React from "react";

import { GitHub, LinkedIn} from "@material-ui/icons";
import "./navbar.scss";

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div id="navbar" className={menuOpen && "active"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Laura Alabau
          </a>
          <a href="!#" className="itemContainer">
            <GitHub className="icon1" />
          </a>
          <a href="!#" className="itemContainer">
            <LinkedIn className="icon2" />
          </a>
        </div>
        <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
