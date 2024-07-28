import React from "react";
import "./topbar.scss";
import {
  Person,
  Mail,
  Link,
  LinkedIn,
  GitHub,
  Instagram,
} from "@material-ui/icons";
const Topbar = ({ menuOpen, setMenuOpen }) => {
  function clickTheHame() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Darpan Rajput.
          </a>

          <div className="item-Container">
            <Person className="icon" />
            <span>+91 789456123</span>
          </div>

          <div className="item-Container" style={{ cursor: "pointer" }}>
            <Mail className="icon" />
            <span
              onClick={(e) => {
                window.location.href = "mailto:darpan.rajput412@gmail.com";
                e.preventDefault();
              }}
            >
              darpanrajput412@gmail.com
            </span>
          </div>

          <div
            className="item-Container"
            style={{
              cursor: "pointer",
            }}
          >
            <LinkedIn className="icon" />
            <span
              onClick={(e) => {
                e.preventDefault();
                const newWindow = window.open(
                  "https://linkedin.com/in/darpan-rajput-768b23195",
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.opener = null;
              }}
            >
              LinkedIn
            </span>
          </div>
          <div
            className="item-Container"
            style={{
              cursor: "pointer",
            }}
          >
            <GitHub className="icon" />
            <span
              onClick={(e) => {
                e.preventDefault();
                const newWindow = window.open(
                  "https://github.com/darpanrajput?tab=repositories",
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.opener = null;
              }}
            >
              Github
            </span>
          </div>
          <div
            className="item-Container"
            style={{
              cursor: "pointer",
            }}
          >
            <Instagram className="icon" />
            <span
              onClick={(e) => {
                e.preventDefault();
                const newWindow = window.open(
                  "https://www.instagram.com/devatindia/",
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.opener = null;
              }}
            >
              Instagram
            </span>
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
