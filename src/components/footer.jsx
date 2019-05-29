import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul className="social">
          <li>
            <a href="https://www.facebook.com/sealedperformance/">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sealedperformance/">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="mailto:hello@sealedperformance.co.uk">
              <i className="fa fa-envelope" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <div className="footerlinks">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
          Copyright © 2019 Sealed Performance Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
