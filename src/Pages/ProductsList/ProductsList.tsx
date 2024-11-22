import { useState } from "react";
import Button from "../../BaseComponents/Ui/Button/Button";
import CountDown from "../../Components/CountDown/CountDown";
import "./ProductsList.css";
import Card from "../../BaseComponents/Ui/Card/Card";
import FilterProducts from "../../Components/ProductOrganizer/FilterProducts/FilterProducts";
import Dropdown from "../../BaseComponents/Ui/Dropdown/Dropdown";
import Modal from "../../Components/FilterModal/Modal";
import Footer from "../../Components/Footer/Footer";
import Pagination from "../../Components/Pagination/Pagination";
import { useProducts } from "../../Hooks/Products/useProducts";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
import { useAppNavigate } from "../../Hooks/Navigation/useAppNavigate";

const sortoption = ["More Buy", "More See", "Chipper", "More Expensive"];

const ProductsList = () => {
  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Define total pages

  const { data, error, isLoading } = useProducts();
  const { goToProductDetails } = useAppNavigate();

  {
    error && (
      <h4> A technical problem has occurred. Please try again later. </h4>
    );
  }

  return (
    <div>
      <div className="title-products-list">
        <h2>Buy the discount you have it</h2>
        <CountDown targetDate="2024-11-31T23:59:59" />
      </div>

      {/* filter & sort */}
      {/* filter */}

      <div className="products-list-sort-filter">
        <h4>Found 376 - results for Nike</h4>
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
        {/* sort */}
        <Dropdown label="Sort By:" options={sortoption} />
      </div>

      {/* products lis */}
      <div className="products-list-container">
        {isLoading && <Loader />}

        {data?.map((item, key) => {
          return (
            <Card
              key={key}
              imageUrl={item.images[0]}
              title={item.title}
              // description={item.description}
              // options={}
              price={item.price}
              onClick={() => goToProductDetails(item.id)}
            />
          );
        })}
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
