import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:3500/products`);
        const books = response.data.products;
        const book = books.find(book => book.id === parseInt(id));
        setBookData(book);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookData();
  }, [id]);

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="glory" style={{ marginTop: "30px" }}>
        <div className="main-7" style={{ position: "relative" }}>
          <img src={bookData.image} alt="Book Image" />
        </div>
        <div className="main-8">
          <h1>{bookData.title}</h1>
          <p>{bookData.description}</p>
          <p>{bookData.detail ? bookData.detail : "No details available."}</p>
        </div>
      </div>

      <div className="descmain row justify-content-center">
        <div className="desc-1 col-md-12">
          <h2>Synopsis</h2>
          <p>{bookData.description}</p>
        </div>

        <div className="col-md-12 text-center mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="main-row justify-content-center">
              <div className="col-auto me-4">
                <p>Rp {bookData.price}</p>
              </div>
            </div>
            <div className="col-auto me-4">
              <button className="btn btn-primary">Buy</button>
            </div>
            <div className="col-auto me-4">
              <button className="icon-button" data-feather="bookmark"></button>
            </div>
            <div className="col-auto me-4">
              <button className="icon-button" data-feather="shopping-cart"></button>
            </div>
            <div className="col-auto me-4">
              <button className="icon-button" data-feather="share"></button>
            </div>
          </div>
        </div>

        <div className="desc-2 col-md-12">
          <h2>Details</h2>
          <p>{bookData.detail ? bookData.detail : "No details available."}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
