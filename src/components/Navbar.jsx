import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/books.png';
import userIcon from './img/user.svg';
import cartIcon from './img/cart.svg';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false)

  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  const registerHandleClose = () => setShowRegister(false);
  const registerHandleShow = () => setShowRegister(true);

  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="60px" />
            <span className='logo'>LiteraryLoom</span>
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

          <div className="collapse navbar-collapse justify-content-center" id="navbar">
            <ul className="navbar-nav custom-navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact us</Link>
              </li>
            </ul>

            <ul className="navbar-nav custom-navbar-cta ms-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <img src={cartIcon} height="18px" width="20px" alt="Cart" />
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleShow}>
                  <img src={userIcon} height="18px" width="20px" alt="User" />
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={registerHandleShow}>
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Login show={showLogin} handleClose={handleClose} />
      <SignUp show={showRegister} handleClose={registerHandleClose} />
    </>
  );
}

export default Navbar;
