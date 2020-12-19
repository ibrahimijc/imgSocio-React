import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="white">
      <div className="nav-wrapper">
        <a href="/#" className="brand-logo left black-text">
          imgSocio
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
