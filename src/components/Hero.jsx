import React from "react";
import { motion } from "framer-motion";
import heroImage from '../components/img/home page.svg'; 
import { Link } from "react-router-dom";

function HeroItem() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <motion.div 
              className="intro-excerpt"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>
                Buy and sell your textbooks <span className="d-block">for the best price</span>
              </h1>
              <p className="mb-4">
                Experience the convenience of borrowing e-books anytime, anywhere, with just a few clicks.
              </p>
              <p>
                <Link className="btn btn-secondary me-2" to="/Shop">Shop Now</Link>
                <Link className="btn btn-white-outline" to="/Home">Explore </Link>
              </p>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div 
              className="hero-img-wrap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src={heroImage} style={{ marginTop: '40px' }} className="img-fluid" alt="Hero" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
