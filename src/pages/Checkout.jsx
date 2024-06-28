import React, { useEffect, useState } from 'react';

function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const tax = 2.0; // Menambahkan konstanta pajak

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];
    setCheckoutItems(items);
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      currencyDisplay: "symbol",
    }).format(price);
  };

  const subtotal = checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalPayment = subtotal + tax;

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Checkout form</h2>
      </div>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text" style={{color:"black"}}>Your cart</span>
            <span className="badge bg-primary rounded-pill">{checkoutItems.length}</span>
          </h4>
          <ul className="list-group mb-3">
            {checkoutItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between lh-sm" key={item.id}>
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">{item.details}</small>
                </div>
                <span className="text-muted">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Tax</span>
              <strong>{formatPrice(tax)}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total Payment</span>
              <strong>{formatPrice(totalPayment)}</strong>
            </li>
          </ul>
          <button className="w-100 btn btn-danger btn-lg" style={{backgroundColor:"#006769"}} type="submit">
            Place Order
          </button>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3" style={{color:"black"}}>Billing address</h4>
          <form className="needs-validation" noValidate>
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="firstName" placeholder="" required />
                <div className="invalid-feedback">Valid full name is required.</div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Phone Number</label>
                <input type="text" className="form-control" id="lastName" placeholder="" required />
                <div className="invalid-feedback">Valid Phone number is required.</div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-muted"></span></label>
                <input type="email" className="form-control" id="email" placeholder="" />
                <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
              </div>
              <div className="col-12">
                <label htmlFor="address" className="form-label">Delivery Address</label>
                <input type="text" className="form-control" id="address" placeholder="" required />
                <div className="invalid-feedback">Please enter your shipping address.</div>
              </div>
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Province</label>
                <input type="text" className="form-control" id="province" placeholder="" />
                <div className="invalid-feedback">Please select a valid country.</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">Postal Code</label>
                <input type="text" className="form-control" id="postalCode" placeholder="" />
                <div className="invalid-feedback">Please provide a valid state.</div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address" />
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info" />
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr className="my-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              <div className="form-check">
                <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                <label className="form-check-label" htmlFor="credit">Indomaret</label>
              </div>
              <div className="form-check">
                <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                <label className="form-check-label" htmlFor="debit">Qris</label>
              </div>
            </div>
            <hr className="my-4" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
