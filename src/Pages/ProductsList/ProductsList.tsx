import { useState } from "react";
import Button from "../../BaseComponents/Ui/Button/Button";
import CountDown from "../../Components/CountDown/CountDown";
import "./ProductsList.css";
import Card from "../../BaseComponents/Ui/Card/Card";
import FilterProducts from "../../Components/ProductOrganizer/FilterProducts/FilterProducts";
import Modal from "../../Components/FilterModal/Modal";
import Footer from "../../Components/Footer/Footer";
import Pagination from "../../Components/Pagination/Pagination";
import { useProducts } from "../../Hooks/Products/useProducts";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
import { useAppNavigate } from "../../Hooks/Navigation/useAppNavigate";
import Dropdown from "../../BaseComponents/Ui/Dropdown/Dropdown";

const PRODUCTS_PER_PAGE = 12;

const ProductsList = () => {
  const [modalOpen2, setModalOpen2] = useState(false);
  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("More Buy");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const { data, error, isLoading } = useProducts();
  const { goToProductDetails } = useAppNavigate();

  if (error) {
    return <h4>A technical problem has occurred. Please try again later.</h4>;
  }

  const totalPages = Math.ceil((data?.length || 0) / PRODUCTS_PER_PAGE);

  // Sorting logic
  const sortedProducts = [...(data || [])].sort((a, b) => {
    switch (sortOption) {
      case "Cheaper":
        return a.price - b.price;
      case "More Expensive":
        return b.price - a.price;
      default:
        return 0;
    }
  });
  // Filter products by price range
  const filteredProducts = sortedProducts.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  // Pagination
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div>
      <div className="title-products-list">
        <h2>Buy the discount you have it</h2>
        <CountDown targetDate="2024-11-31T23:59:59" />
      </div>

      {/* filter & sort */}
      <div className="products-list-sort-filter">
        <h4>Found {filteredProducts.length} results for Find it</h4>
        <div className="div-filter-mobile-view">
          <Button
            className="menu-button"
            onClick={toggleSidebar}
            width={200}
            bgColor="#000"
            color="white"
            fontSize={14}
            border="solid 1px white"
          >
            Filter
          </Button>
          <Modal isOpen={modalOpen2} onClose={closeModal2} title="Filter bg">
            <div style={{ width: "300px" }}>
              <FilterProducts />
            </div>
          </Modal>
        </div>

        {/* sort component */}
        <Dropdown label={sortOption}>
          <Button
            onClick={() => setSortOption("Cheaper")}
            bgColor="#000"
            color="white"
          >
            cheapest
          </Button>
          <Button
            onClick={() => setSortOption("More Expensive")}
            bgColor="#000"
            color="white"
          >
            expensive
          </Button>
          <Button bgColor="#000" color="white">
            More Buy
          </Button>
          <Button bgColor="#000" color="white">
            More See
          </Button>
        </Dropdown>
        {/* end sort component */}
      </div>

      {/* products list */}
      <div className="products-list-container">
        {isLoading && <Loader />}
        {paginatedProducts.map((item, key) => (
          <Card
            key={key}
            imageUrl={item.images[0]}
            title={item.title}
            price={item.price}
            onClick={() => goToProductDetails(item.id)}
          />
        ))}
      </div>

      {/* filter */}

      <div className="div-filter">
        <div>
          {/* Sidebar */}
          <div className={`sidebar ${isOpen ? "open" : ""}`}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>Property Filter</h4>
              <p style={{ color: "gray" }}>Reset all</p>
            </div>
            <div className="ranges-prices">
              <label>Min Price: ${minPrice}</label>
              <input
                className="slider"
                type="range"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
              <label>Max Price: ${maxPrice}</label>
              <input
                className="slider"
                type="range"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
            <FilterProducts />
          </div>

          {isOpen && <div className="overlay2" onClick={toggleSidebar}></div>}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default ProductsList;
