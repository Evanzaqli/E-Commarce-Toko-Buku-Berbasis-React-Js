import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { product } = location.state;
console.log (product)
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-details">
        <div className="checkout-item">
         
          <img src={product.image} alt={product.title} className="checkout-item-image" />
          <div className="checkout-item-details">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Rp {product.price}</p>
          </div>
        </div>
        <div className="checkout-summary">
          <h2>Ringkasan Pesanan</h2>
          <p>Total Harga: Rp {product.price}</p>
          <button className="checkout-button">Bayar Sekarang</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
