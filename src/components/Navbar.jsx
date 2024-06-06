import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo4 2.svg'
import userIcon from './img/user.svg';
import cartIcon from './img/cart.svg';

function Navbar() {
  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" width="80px" />
          <span></span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="custom-navbar-nav navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./Shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./contact">Contact us</Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="#">
                <img src={userIcon} height="18px" width="20px" alt="User" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="./cart">
                <img src={cartIcon} height="18px" width="20px" alt="Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;