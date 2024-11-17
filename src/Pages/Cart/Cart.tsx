import Button from "../../BaseComponents/Ui/Button/Button";
import ItemProduct from "../../BaseComponents/Ui/ItemProduct/ItemProduct";
import "./Cart.css";

const productsCart = [
  {
    id: 1,
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-4090-product-photo-001.png",
    title: "Graphic cart gameing RTX 3060",
    caption: "For all devisec and graphic designers nothing sumuels martinez",
    price: 500,
    quantity: 1,
  },
  {
    id: 2,
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-4090-product-photo-001.png",
    title: "Graphic cart gameing RTX 4090",
    caption: "For all devisec and graphic designers nothing sumuels martinez",
    price: 500,
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-4090-product-photo-001.png",
    title: "Graphic cart gameing GTX 2050",
    caption: "For all devisec and graphic designers nothing sumuels martinez",
    price: 500,
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-4090-product-photo-001.png",
    title: "Graphic cart gameing GTX 2050",
    caption: "For all devisec and graphic designers nothing sumuels martinez",
    price: 500,
    quantity: 1,
  },

  {
    id: 3,
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-4090-product-photo-001.png",
    title: "Graphic cart gameing GTX 2050",
    caption: "For all devisec and graphic designers nothing sumuels martinez",
    price: 500,
    quantity: 1,
  },
  {
    id: 3,
    image:
      "https://images.nvidia.com/aem-dam/Solutions/geforce/ada/news/rtx-40-series-graphics-cards-announcements/geforce-rtx-4090-product-photo-001.png",
    title: "Graphic cart gameing GTX 2050",
    caption: "For all devisec and graphic designers nothing sumuels martinez",
    price: 500,
    quantity: 1,
  },
];
const Cart = () => {
  return (
    <div>
      <h2>Shopping Continue</h2>
      <hr />
      {/* <h4>Shopping cart</h4> */}
      <p>You have 3 item in your cart</p>

      <div className="root-conters">
        <div className="conteiner-items">
          {productsCart.map((item, key) => {
            return (
              <ItemProduct
                description={item.caption}
                image={item.image}
                price={item.price}
                title={item.title}
                onDecrease={() => alert("-")}
                onDelete={() => alert("-")}
                onIncrease={() => alert("-")}
                quantity={1}
              />
            );
          })}
        </div>

        {/* checkout */}
        <div className="conteiner-checkout">
          <h3>Payment details</h3>
          <div className="item-checkout">
            <h4>All Order :</h4>
            <span>$1100.00</span>
          </div>
          <div className="item-checkout">
            <h4>Delivery :</h4>
            <span>$20.00</span>
          </div>
          <div className="item-checkout">
            <h4>Discount :</h4>
            <span>$80.00</span>
          </div>
          <hr />
          <div className="item-total">
            <h4>Payment :</h4>
            <span>$1300.00</span>
          </div>
          <Button height={45} className="button-checkout">
            Checkout
          </Button>
        </div>
        <div className="mobile-divces-checkout">
          <span>$1300.00</span>
          <Button height={45} className="button-checkout2">
            Checkout
          </Button>
        </div>
        {/* checkout */}
      </div>
    </div>
  );
};

export default Cart;
