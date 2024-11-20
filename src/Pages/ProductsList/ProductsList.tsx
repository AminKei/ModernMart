import { useState } from "react";
import Button from "../../BaseComponents/Ui/Button/Button";
import CountDown from "../../Components/CountDown/CountDown";
import "./ProductsList.css";
import SortModal from "../../Components/SortModal/SortModal";
import Card from "../../BaseComponents/Ui/Card/Card";
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
    // Implement any additional sorting logic here
  };

  return (
    <div>
      <div className="title-products-list">
        <h2>Buy the discount you have it</h2>
        <CountDown targetDate="2024-11-31T23:59:59" />
      </div>
      <h4>Found 376 - results for Nike</h4>

      {/* filter & sort */}
      <div className="products-list-sort-filter">
        <Button
          width={300}
          bgColor="#000"
          color="white"
          border="solid 1px white"
        >
          Filter
        </Button>
        <Button
          onClick={handleSortClick}
          width={300}
          bgColor="#000"
          color="white"
          border="solid 1px white"
        >
          Sort by {sortOption} ▼
        </Button>
        <SortModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSortSelect={handleSortSelect}
        />
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
    </div>
  );
};

export default ProductsList;
