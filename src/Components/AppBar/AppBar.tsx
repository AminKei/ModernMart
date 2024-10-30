import Input from "../../BaseComponents/Ui/Input/Input";
import "./AppBar.css";
const AppBar = () => {
  return (
    <div className="div-root-appbar">
      <div className="item-texts-appbar">
        <h4>/ModernMart</h4>
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
    </div>
  );
};

export default AppBar;
