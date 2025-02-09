import Button from "../../BaseComponents/Ui/Button/Button";
import { useProfile } from "../../Hooks/Auth/useProfile";
import "./NavigationBar.css";
import { GoHome } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
const NavigationBar = () => {
  const { data } = useProfile();

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={() => (document.location = "/")}>
        <GoHome size={25} />
      </div>
      <div className="nav-item" onClick={() => (document.location = "/cart")}>
        <div className="cart-icon">
          <FiShoppingCart size={23} />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
      <div
        className="nav-item"
        onClick={() => (document.location = "/productslist")}
      >
        <BiCategory size={25} />
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
          <LuUser size={25} onClick={() => (document.location = "/login")} />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
