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
  const [sortOption, setSortOption] = useState("More Buy"); // Default sort option  
  const { data, error, isLoading } = useProducts();  
  const { goToProductDetails } = useAppNavigate();  

  if (error) {  
    return <h4>A technical problem has occurred. Please try again later.</h4>;  
  }  

  // Calculate total pages based on the length of the data  
  const totalPages = Math.ceil((data?.length || 0) / PRODUCTS_PER_PAGE);  

  // Sorting logic  
  const sortedProducts = [...(data || [])].sort((a, b) => {  
    switch (sortOption) {  
      case "More Buy":  
        return b.price - a.price; // Assuming buyCount is a property  
      case "More See":  
        return b.price - a.price; // Assuming viewCount is a property  
      case "Cheaper":  
        return a.price - b.price;  
      case "More Expensive":  
        return b.price - a.price;  
      default:  
        return 0;  
    }  
  });  

  // Get the products for the current page after sorting  
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
        <Dropdown label="Sort by" options={["More Buy", "More See", "Cheaper", "More Expensive"]} />
        
        {/* <div className="sort-buttons">  
          <Button onClick={() => setSortOption("More Expensive")}>More Expensive</Button>  
          <Button onClick={() => setSortOption("Cheaper")}>Cheaper</Button>  
          <Button onClick={() => setSortOption("More Buy")}>More Buy</Button>  
          <Button onClick={() => setSortOption("More See")}>More See</Button>  
        </div>   */}
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