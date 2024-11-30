import SearchBar from "../SearchBar/SearchBar";
import "./AppBar.css";
const AppBar = () => {
  return (
    <div className="div-root-appbar">
      <div className="item-texts-appbar">
        <h4>ModernMart</h4>
        <div className="item-appbar">
          <p onClick={() => (document.location = "/productslist")}>Products</p>
          <p>Blogs</p>
          <p>Contact Us</p>
        </div>
      </div>
      <SearchBar />
      
    </div>
  );
};

export default AppBar;
