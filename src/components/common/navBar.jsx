import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({ user, basket }) => {
  return (
    <React.Fragment>
      <nav className="nav">
        <ul className="nav__login">
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
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink className="nav-link" to="/login">
                  <i className="fa fa-user" aria-hidden="true" /> Login
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
        <ul className="nav__links">
          <li className="nav__item">
            <NavLink className="nav-link" to="/shop">
              Shop
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav-link" to="/events">
              Events
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav-link basket" to="/basket">
              <i className="fa fa-shopping-basket" aria-hidden="true" />
              <span>
                {basket.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0)}
              </span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav-link" to="/checkout">
              Checkout
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

function mapStateToProps(state) {
  return { basket: state.basket };
}

export default connect(mapStateToProps)(NavBar);
