import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  function clickTheHame() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>

          <div className="item-Container">
            <Person className="icon" />
            <span>+91 789456123</span>
          </div>

          <div className="item-Container">
            <Mail className="icon" />
            <span>darpanrajput412@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={clickTheHame}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
