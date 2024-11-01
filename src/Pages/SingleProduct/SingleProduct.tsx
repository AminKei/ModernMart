import React from "react";
// import { useHistory } from "react-router-dom"; // Assuming you are using react-router for navigation
import Button from "../../BaseComponents/Ui/Button/Button";
import "./SingleProduct.css";
import Footer from "../../Components/Footer/Footer";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";

const SingleProduct = () => {
  // const history = useHistory(); // For navigating back

  const handleBackClick = () => {
    // history.goeBack(); // Navigate back to the previous page
  };

  return (
    <>
      <p style={{ cursor: "pointer" }} onClick={handleBackClick}>
        Back
      </p>
      <div className="root-container-single-product">
        <div className="div-image-single">
          <img
            src={`${process.env.PUBLIC_URL}/images/image-single.png`}
            alt="Nike Shoes for men"
          />
        </div>
        <div className="div-info-single">
          <div>
            <p className="new-sin">New</p>
            <h1>Nike Shoes For Men</h1>
            <h1>$1,299</h1>
            <p style={{ color: "gray" }}>107293</p>
          </div>
          <div>
            <p>Relaxed fit</p>
            <p>Drop shoulder sleeves</p>
            <p>Elasticated neckline, hemline and cuffs</p>
            <p>Made in Russia</p>
          </div>
          <p>Size</p>
          <div>
            <Button width={300} height={50}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "30vh", marginBottom: "15vh" }}>
        <LatestProducts />
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;