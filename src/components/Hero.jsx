import React from "react";
import heroImage from '../components/img/home page.svg'; 
import { Link } from "react-router-dom";

function HeroItem(){
    return(
              <div className="hero">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-lg-6">
                      <div className="intro-excerpt">
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
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-img-wrap">
                        <img src={heroImage} style={{ marginTop: '40px' }} className="img-fluid" alt="Hero" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            );
          }

export default HeroItem;