import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bookmark, ShoppingCart } from "react-feather";

const ProductDetail = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:5100/api/product/${id}`);
        const book = response.data;
        setBookData(book);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchBookData();
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCartButton = () => {
    axios.post("http://localhost:5100/api/cart", bookData)
      .then((res) => {
        console.log("Added to cart successfully:", res.data);
        // Implement any additional logic upon successful addition to cart
      })
      .catch((err) => {
        console.error("Error adding to cart:", err);
        // Handle error state
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!bookData) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-5" style={{ backgroundColor: "white" }}>
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <img
                src={bookData.image}
                style={{ maxWidth: "50%", maxHeight: "100vh", marginTop: "20px", marginBottom: "20px" }}
                alt="Main Product"
              />
            </div>
          </aside>

          <main className="col-lg-6">
            <div className="ps-lg-3">
              <p className="author" style={{ fontSize: "15px" }}>{bookData.author}</p>
              <h4 className="title" style={{ fontWeight: "bold", color: "black" }}>{bookData.title}</h4>
              <div className="d-flex flex-row my-3">
                <div className="text-warning mb-1 me-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span className="ms-1">4.5</span>
                </div>
                <span className="text-muted">
                  <i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders
                </span>
                <span className="text-success ms-2">In stock</span>
              </div>
              <div className="mb-3">
                <span className="h5" style={{ fontSize: "15px", fontWeight: "bold" }}>{formatPrice(bookData.price)}</span>
                <span className="text-muted">/per buku</span>
              </div>
              <p>{bookData.description}</p>
              <div className="row">
                <div className="quantity-container">
                  <button className="quantity-btn" onClick={handleDecrement}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button className="quantity-btn" onClick={handleIncrement}>+</button>
                </div>
              </div>
              <hr />
              <a className="btn btn-warning shadow-0" style={{ background: "#f8b810", color: "white", margin: "10px", fontWeight: "bold" }}>BUY NOW</a>
              <a type="submit" className="btn btn-primary shadow-0" style={{ fontWeight: "bold", margin: "10px" }} onClick={addToCartButton}>
                <ShoppingCart /> ADD TO CART
              </a>
              <Bookmark />
            </div>
          </main>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8">
            <h3 style={{ fontWeight: "bold", color: "black" }}>Sinopsis</h3>
            <p>{bookData.synopsis}</p>
          </div>

          <div className="col-lg-4">
            <h4 style={{ fontWeight: "bold", color: "black" }}>Detail</h4>
            <div>{bookData.detail}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
