import Input from "../../BaseComponents/Ui/Input/Input";
import SearchBar from "../SearchBar/SearchBar";
import "./AppBar.css";
const AppBar = () => {
  return (
    <div className="div-root-appbar">
      <div className="item-texts-appbar">
        <h4>ModernMart</h4>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          {/* <p>Personal</p> */}
          {/* <p>Blogs</p> */}
          {/* <p>Contact Us</p> */}
        </div>
      </div>
      {/* <Input placeholder="Search" /> */}
      <SearchBar/>
    </div>
  );
};

export default AppBar;
