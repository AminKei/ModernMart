import { useState } from "react";
import "./SearchBar.css";
import Input from "../../BaseComponents/Ui/Input/Input";
import { useProducts } from "../../Hooks/Products/useProducts";
import { useAppNavigate } from "../../Hooks/Navigation/useAppNavigate";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";

const SearchBar = () => {
  const { data, error, isLoading } = useProducts();

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredProducts =
    data?.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const { goToProductDetails } = useAppNavigate();

  return (
    <div
      style={{
        position: "absolute",
        right: "30px",
        display: "flex",
        top: "50px",
      }}
    >
      {!isOpen && (
        <img
          onClick={toggleModal}
          src={`${process.env.PUBLIC_URL}/icons/search.png`}
          alt="Search Icon"
        />
      )}
      {isOpen && (
        <div className="modal-overlay2">
          <div className="modal2">
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/icons/search-black.png`}
                alt=""
              />
              <Input
                autoFocus
                color="black"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Type your search here..."
                className="search-input"
              />
            </div>

            <img
              onClick={handleCloseModal}
              src={`${process.env.PUBLIC_URL}/icons/close.png`}
              alt=""
            />
          </div>
          {searchTerm.length > 0 && filteredProducts.length > 0 && (
            <div className="result-search">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => goToProductDetails(product.id)}
                >
                  <p style={{ fontSize: "12px" }}>{product.title}</p>
                  <p style={{ color: "gray", fontSize: "10px" }}>
                    {product.category.name}
                  </p>
                </div>
              ))}
            </div>
          )}
          {searchTerm.length > 0 && filteredProducts.length === 0 && (
            <div className="result-search">
              <Loader />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
