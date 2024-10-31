import { useState } from "react";  
import "./SearchBar.css";  

const SearchBar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleSearch = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <div className="search-container">  
      {!isOpen && (  
        <div className="search-icon" onClick={toggleSearch}>  
          <img src={`${process.env.PUBLIC_URL}/icons/search.png`} alt="Search Icon" />  
        </div>  
      )}  
      {isOpen && (  
        <>  
          <div className="div-search-input">  
            <img src={`${process.env.PUBLIC_URL}/icons/search-black.png`} alt="Search Input Icon" />  
            <input  
              type="text"  
              placeholder="Search For Product, actions"  
              className="search-input"  
            />  
            <img src={`${process.env.PUBLIC_URL}/icons/close.png`} alt="Close Icon" onClick={toggleSearch} />  
          </div>  
          <div className="search-dropdown">  
            <div className="last-search">  
              <h6>Last search:</h6>  
              <ul className="item-search-lasted">  
                <li>shoes man</li>  
                <li>shoes Women</li>  
                <li>sport shoes</li>  
                <li>kids shoes</li>  
              </ul>  
            </div>  
            <div className="results">  
              <p>Formal Shoe man</p>  
              <p>Formal Shoe man in Demerail</p>  
              <p>Formal Shoe man in Demerail</p>  
            </div>  
          </div>  
        </>  
      )}  
    </div>  
  );  
};  

export default SearchBar;