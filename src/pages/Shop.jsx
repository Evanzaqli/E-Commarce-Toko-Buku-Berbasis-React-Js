import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../components/css/Shop.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination'; 

function Shop() {
  const url = "http://localhost:3500/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const getDataProduct = async () => {
    const response = await fetch(url);
    const dataProduct = await response.json();
    setProducts(dataProduct);

    const uniqueCategories = [
      "All Books",
      ...new Set(dataProduct.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    getDataProduct();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Books" || product.category === selectedCategory;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col-4 mt-3">
          <input
            className="form-control mb-3"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <h2>Category</h2>
          <ul className="list-group">
            {categories.map((category) => (
              <li
                key={category}
                className={`list-group-item ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="d-flex  mt-4">
            <Pagination>
              <Pagination.Prev
                onClick={() =>
                  setCurrentPage((prevPage) =>
                    prevPage > 1 ? prevPage - 1 : prevPage
                  )
                }
              />
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() =>
                  setCurrentPage((nextPage) =>
                    nextPage < totalPages ? nextPage + 1 : nextPage
                  )
                }
              />
            </Pagination>
          </div>
        </div>
        <div className="col-8 mt-3">
          <div className="row">
            {currentProducts.map((product) => (
              <div className="col-lg-3" key={product.id}>
                <CardProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  author={product.author}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
}

function CardProduct(props) {
  const navigate = useNavigate();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleBuyNow = () => {
    navigate("/Checkout", { state: { product: props } });
  };
  
  return (
    <Card style={{ width: "183px" }}>
      <Container>
        <Link to={`/ProductDetail/${props.id}`}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <Card.Title style={{fontSize:"15px"}}>{props.title}</Card.Title>
          <Card.Text>{props.author}</Card.Text>
          <p className="price">{formatPrice(props.price)}</p>
        </Card.Body>
      </Container>
      <Button className="Buy" onClick={handleBuyNow}>Buy Now</Button>
    </Card>
  );
}

export default Shop;
