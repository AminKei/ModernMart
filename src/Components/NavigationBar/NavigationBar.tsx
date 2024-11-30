import Button from "../../BaseComponents/Ui/Button/Button";
import { useProfile } from "../../Hooks/Auth/useProfile";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { data } = useProfile();


  const cart = JSON.parse(localStorage.getItem("cart") || "[]");


  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={() => (document.location = "/")}>
        <img src={`${process.env.PUBLIC_URL}/icons/home.png`} />
      </div>
      <div className="nav-item" onClick={() => (document.location = "/cart")}>
        <div className="cart-icon">
          <img src={`${process.env.PUBLIC_URL}/icons/Frame.png`} />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
      <div
        className="nav-item"
        onClick={() => (document.location = "/productslist")}
      >
        <img src={`${process.env.PUBLIC_URL}/icons/categoris.png`} />
      </div>
      <div className="nav-item">
        {data ? (
          <img
            src={data.avatar}
            id="id-avatar-navi"
            alt=""
            onClick={() => (document.location = "/dashboard")}
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/icons/Frame3.png`}
            onClick={() => (document.location = "/login")}
          />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
