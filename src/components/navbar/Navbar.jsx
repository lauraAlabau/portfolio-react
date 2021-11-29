import React from "react";

import { Person, Mail } from "@material-ui/icons";
import "./navbar.scss";

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div id="navbar" className={menuOpen && "active"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Laura Alabau
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>123456789</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mail@mail.com</span>
          </div>
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
