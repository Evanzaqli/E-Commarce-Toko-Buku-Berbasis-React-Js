import React from "react";
import { buku2,buku3,buku4,cross} from '../pages/index';
import { Link } from "react-router-dom";
function FavoritItem() {
    return (
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Find your favorite book in this site.</h2>
              <p className="mb-4">
                With e-books, you can bring your book collection to your mobile device or tablet. Enjoy reading on the go,
                in the park, or at work without having to carry around multiple physical books.
              </p>
              <p><a href="shop.html" className="btn">Explore</a></p>
            </div>
  
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <Link to="/Detail"><img src={buku2} style={{ height: '250px' }} className="img-fluid product-thumbnail" alt="They Both Die At The End" /></Link>
                <h3 className="product-title">They Both Die At The End</h3>
                <strong className="product-price">Rp 120.000</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
  
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src={buku3} style={{ height: '250px' }} className="img-fluid product-thumbnail" alt="The Art Of War" />
                <h3 className="product-title">The Art Of War</h3>
                <strong className="product-price">RP 99.000</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
  
            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="cart.html">
                <img src={buku4} style={{ height: '250px' }} className="img-fluid product-thumbnail" alt="A Court Of Thorns" />
                <h3 className="product-title">A Court Of Thorns</h3>
                <strong className="product-price">RP 87.000</strong>
                <span className="icon-cross">
                  <img src={cross} className="img-fluid" alt="Cross Icon" />
                </span>
              </a>
            </div>
  
          </div>
        </div>
      </div>
    );
  }

export default FavoritItem