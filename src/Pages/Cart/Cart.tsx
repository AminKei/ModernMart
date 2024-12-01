import Button from "../../BaseComponents/Ui/Button/Button";
import ItemProduct from "../../BaseComponents/Ui/ItemProduct/ItemProduct";
import "./Cart.css";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const totalOrderPrice = cart.reduce((total: number, product: any) => {
    if (product && product.price) {
      return total + product.price;
    }
    return total;
  }, 0);

  const handleDelete = (index: number) => {
    const updatedCart = cart.filter((_: any, i: any) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // Optionally, you can trigger a re-render or state update to reflect changes
    window.location.reload(); // Reloading the page to reflect changes
  };


  return (
    <div>
      <h2>Shopping Continue</h2>
      <hr />
      <p>You have {cart.length} items in your cart</p>

      <div className="root-conters">
        {cart.length === 0 ? (
          <p>
            Your cart is empty{" "}
            <a href="/productslist">return to products list</a>
          </p>
        ) : (
          <div className="conteiner-items">
            {cart.map((product: any, key: any) => {
              if (
                !product ||
                !product.description ||
                !product.images ||
                !product.images[0] ||
                !product.price ||
                !product.title
              ) {
                console.error(`Invalid product at index ${key}:`, product);
                return null;
              }

              return (
                <ItemProduct
                  key={key}
                  description={product.description}
                  image={product.images[0]}
                  price={product.price}
                  title={product.title}
                  onDecrease={() => undefined}
                  onDelete={() => handleDelete(key)}
                  onIncrease={() => undefined}
                  quantity={1}
                />
              );
            })}
          </div>
        )}

        {/* Checkout */}
        <div className="conteiner-checkout">
          <h3>Payment details</h3>
          <div className="item-checkout">
            <h4>All Order :</h4>
            <span>${totalOrderPrice.toFixed(2)}</span>
          </div>
          <div className="item-checkout">
            <h4>Delivery :</h4>
            <span>$20.00</span>
          </div>
          <div className="item-checkout">
            <h4>Discount :</h4>
            <span>$10.00</span>
          </div>
          <hr />
          <div className="item-total">
            <h4>Payment :</h4>
            <span>${(totalOrderPrice + 20 - 10).toFixed(2)}</span>
          </div>
          <Button height={45} className="button-checkout">
            Checkout
          </Button>
        </div>
        <div className="mobile-divces-checkout">
          <span>${(totalOrderPrice + 20 - 80).toFixed(2)}</span>
          <Button height={45} className="button-checkout2">
            Checkout
          </Button>
        </div>
        {/* Checkout */}
      </div>
    </div>
  );
};

export default Cart;
