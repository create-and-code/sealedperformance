import React from "react";
import NavBar from "./common/navBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-9">
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
