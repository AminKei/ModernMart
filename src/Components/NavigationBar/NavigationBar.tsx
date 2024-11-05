import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="bottom-nav">
      <div className="nav-item" onClick={() => (document.location = "/")}>
        <img src={`${process.env.PUBLIC_URL}/icons/home.png`} />
      </div>
      <div className="nav-item"  onClick={() => (document.location = "/cart")}>
        <div className="cart-icon">
          <img src={`${process.env.PUBLIC_URL}/icons/Frame.png`} />
          <span className="cart-count">2</span>
        </div>
      </div>
      <div className="nav-item">
        <img src={`${process.env.PUBLIC_URL}/icons/Frame2.png`} />
      </div>
      <div className="nav-item" onClick={() => (document.location = "/login")}>
        <img src={`${process.env.PUBLIC_URL}/icons/Frame3.png`} />
      </div>
    </div>
  );
};

export default NavigationBar;
