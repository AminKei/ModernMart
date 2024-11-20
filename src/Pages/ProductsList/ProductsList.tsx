import { useState } from "react";
import Button from "../../BaseComponents/Ui/Button/Button";
import CountDown from "../../Components/CountDown/CountDown";
import "./ProductsList.css";
import SortModal from "../../Components/ProductOrganizer/SortProducts/SortModal";
import Card from "../../BaseComponents/Ui/Card/Card";
import FilterProducts from "../../Components/ProductOrganizer/FilterProducts/FilterProducts";
import ToggleSwitch from "../../BaseComponents/Ui/ToggleSwitch/ToggleSwitch";
import Range from "../../BaseComponents/Ui/Range/Range";
import Dropdown from "../../BaseComponents/Ui/Dropdown/Dropdown";
import Modal from "../../Components/FilterModal/Modal";

const options = ["Area 1", "Area 2", "Area 3", "Any area"];

const ProductsList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Featured");

  const handleSortClick = () => {
    setModalOpen(isModalOpen === false ? true : false);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSortSelect = (option: string) => {
    setSortOption(option);
  };

  const [modalOpen2, setModalOpen2] = useState(false);

  const openModal2 = () => setModalOpen2(true);
  const closeModal2 = () => setModalOpen2(false);

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
            <div style={{ width:"300px"  }}>
              <FilterProducts />
            </div>
          </Modal>
        </div>
        {/* sort */}
        <Button
          onClick={handleSortClick}
          width={200}
          bgColor="#000"
          color="white"
          border="solid 1px white"
        >
          Sort by {sortOption} ▼
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Sort By :"
        >
          <p>Expensive</p>
        </Modal>
      </div>

      {/* products lis */}
      <div className="products-list-container">
        {Array.from({ length: 10 }).map((item, key) => (
          <Card
            imageUrl={`${process.env.PUBLIC_URL}/images/product.png`}
            title="Morning Set"
            description="Set of coffee and chocolate cookies as a top tier among our customers and a perfect way to start your day."
            // options={}
            price={160}
          />
        ))}
      </div>
      <div className="div-filter-conteiner">
        <FilterProducts />
      </div>
    </div>
  );
};

export default ProductsList;
