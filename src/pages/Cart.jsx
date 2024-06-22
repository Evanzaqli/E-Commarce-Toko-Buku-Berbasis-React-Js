import React, { useEffect, useState } from "react";
import "../components/css/cart.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trash2 } from "react-feather"


function Cart() {
  const [cartItems, setCartItems] = useState([
    
  ]);
  const [tax, setTax] = useState(2.0);

  const handleQuantityChange = (id, newQuantity) => {
    let val
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
         val = newQuantity;
      }
      return item;
    });
    setCartItems(updatedItems);
    updateTotalPrice(updatedItems);
  };

  const handleRemoveItem = (id) => {
    axios.delete(`http://localhost:3500/cart/${id}`)
      .then(() => {
        axios.get("http://localhost:3500/cart")
          .then((res) => {
            setCartItems(res.data);
          })
          .catch((err) => {
            console.log('Gagal memperbarui data keranjang:', err);
          });
      })
      .catch((err) => {
        console.log('Gagal menghapus item:', err);
      });
  };
  

  const updateTotalPrice = (items) => {
    let total = 0;
    items.forEach(item => {
      total += item.price * 1;
    });
    return total;
  };

  const Checkout=()=>{
    window.location.href='Checkout'
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      currencyDisplay: "symbol",
    }).format(price);
  };

  const totalPrice = updateTotalPrice(cartItems);
  const finalPrice = totalPrice + tax;

  useEffect(() => {
    axios.get("http://localhost:3500/cart")
    .then((res) => {
      setCartItems(res.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <section className="bg-light my-5">
      <div className="container">
        <div className="row">
          {/* cart */}
          <div className="col-lg-9">
            <div className="card border shadow-0">
              <div className="m-4">
                <h4 className="card-title mb-4">Your shopping cart</h4>
                {cartItems.map(item => (
                  <div className="row gy-3 mb-4 d-flex" style={{ alignItems: 'center' }} key={item.id}>
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <div className="product-img d-flex" style={{ alignItems: 'center' }}>
                            <img
                              src={item.image}
                              className="img-fluid rounded-3"
                              style={{ width: '125px', height: '125px', objectFit: "contain" }}
                              alt={item.name}
                            />
                          </div>
                          <div className="product-info" style={{ marginLeft: '20px', }}>
                            <a href="#" className="nav-link" style={{ fontWeight: 'bold' }}>
                              {item.title}
                            </a>
                            <p className="text-muted">{item.author}</p>
                            <p className="text-muted">{item.details}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div>
                      <input
                        className="quantity-input"
                        style={{ borderRadius: "5px" }}
                        type="number"
                        value={1}
                        min="1"
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                         autoComplete="off" // Tambahkan autocomplete="off" atau sesuai dengan kebutuhan
                      />
                      </div>
                      <div>
                        <span className="price">{formatPrice(item.price * 1)}</span>
                        <br />
                        <small className="text-muted text-nowrap">{formatPrice(item.price)} / per buku</small>
                      </div>
                    </div>
                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div className="float-md-end">
                        <Trash2/>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-top pt-4 mx-4 mb-4">
                <p>
                  <i className="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks
                </p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                </p>
              </div>
            </div>
          </div>
          {/* cart */}

          {/* summary */}
          <div className="col-lg-3">
            <div className="card shadow-0 border">
              <div className="card-body">
              <h4 className="card-title mb-4">Order Summary</h4>
              <hr style={{fontSize:'20px',color:"black"}}></hr>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2">{formatPrice(totalPrice)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-2">TAX:</p>
                  <p className="mb-2">{formatPrice(tax)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="mb-2">Total price:</p>
                  <p className="mb-2 fw-bold">{formatPrice(finalPrice)}</p>
                </div>

                <div className="mt-3">
                  <button className="btn btn-success w-100 shadow-0 mb-2" style={{ backgroundColor: '#006769', borderRadius: "5px", border: '0' }} onClick={Checkout}>
                    Checkout
                  </button>
                  <Link className="btn w-100 mt-2" to="/Shop" style={{ backgroundColor: ' #f9bf29', borderRadius: "5px", border: '0' }}>
                    Back to shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* summary */}
        </div>
      </div>
    </section>
  );
}

export default Cart;
