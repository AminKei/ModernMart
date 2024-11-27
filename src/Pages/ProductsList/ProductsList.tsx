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

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("More Buy");
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

  // pagination :
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(
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
        <h4>Found {data?.length} results for Nike</h4>
        <div className="div-filter-mobile-view">
          <Button
            onClick={openModal2}
            width={200}
            bgColor="#000"
            color="white"
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
            The cheapest ones
          </Button>
          <Button
            onClick={() => setSortOption("More Expensive")}
            bgColor="#000"
            color="white"
          >
            The most expensive
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

      <div className="div-filter-conteiner">
        <FilterProducts />
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
