import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "../components/css/Shop.css";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
          <h2>Kategori</h2>
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
        </div>
        <div className="col-8 mt-3">
          <div className="row">
            {currentProducts.map((product) => (
              <div className="col-lg-3" key={product.id}>
                <CardProduct
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <Link
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </Link>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <Link
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <Link
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

function CardProduct(props) {
  const navigate = useNavigate();
  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product: props } });
  };
  return (
    <Card style={{ width: "190px" }}>
      <Container>
        <Link to={`/ProductDetail/${props.id}`}>
          <Card.Img variant="top" src={props.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <p className="price">{formatPrice(props.price)}</p>
        </Card.Body>
      </Container>
      <Link to="./Checkout"><Button className="Buy" onClick={handleBuyNow}>Buy Now</Button></Link>
    </Card>
  );
}

export default Shop;
