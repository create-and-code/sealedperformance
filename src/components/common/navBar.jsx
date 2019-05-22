import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav__item">
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </li>
        {user && (
          <React.Fragment>
            <li className="nav__item">
              <NavLink className="nav-link" to="/profile">
                {user.name}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </li>
          </React.Fragment>
        )}
        {!user && (
          <React.Fragment>
            <li className="nav__item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
