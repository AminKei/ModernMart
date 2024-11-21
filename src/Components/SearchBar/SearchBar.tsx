import { useState } from "react";
import "./SearchBar.css";
import Input from "../../BaseComponents/Ui/Input/Input";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [overview, setOverView] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSearchTerm(""); // Clear the search term on close
  };

  return (
    <div
      style={{
        position: "absolute",
        right: "30px",
        display: "flex",
        top: "50px",
      }}
    >
      {!isOpen && ( // Only render the button if the modal is not open
        <img
          onClick={toggleModal}
          src={`${process.env.PUBLIC_URL}/icons/search.png`}
          alt="Search Icon"
        />
      )}
      {isOpen && (
        <div className="modal-overlay2">
          <div className="modal2">
            <div style={{alignItems:"center", display:'flex', justifyContent:'center'}}>
              <img
                src={`${process.env.PUBLIC_URL}/icons/search-black.png`}
                alt=""
              />
              <Input
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
          {searchTerm.length > 0 && (
            <div className="result-search">
              <p>Nothig</p>
              <p>Nothig mangemant</p>
              <p>Nothig sozuki marinos</p>
              <p>Nothig hector gomez</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
