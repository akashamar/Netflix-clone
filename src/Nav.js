import React, { useState, useEffect } from "react";
import "./Nav.css";
import Logo from "./Logo/Netflix_Logo.png";

function Nav() {
  const [show, handelShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else handelShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={Logo} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
