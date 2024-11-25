import Button from "../../BaseComponents/Ui/Button/Button";
import "./SingleProduct.css";
import Footer from "../../Components/Footer/Footer";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import { useSearchParams } from "react-router-dom";
import SizeElement from "../../Components/SizeElement/SizeElement";
import LikeElement from "../../Components/LikeElement/LikeElement";
import { useProductById } from "../../Hooks/Products/useProducts";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
import PlaceLoad from "../../BaseComponents/Ui/LoadTemplate/PlaceLoad/PlaceLoad";

const SingleProduct = () => {
  const handleBackClick = () => {
    // history.goeBack();
  };

  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("id");

  const { data, error, isLoading } = useProductById(selectedId);

  return (
    <>
      <div className="root-container-single-product">
        {isLoading && <Loader />}
        <div className="div-image-single">
          <img
            src={data?.images[0]}
            onError={(e) => {
              e.currentTarget.src =
                "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
            }}
          />
        </div>
        <div className="div-info-single">
          <div>
            <p className="new-sin">New</p>
            {isLoading ? <PlaceLoad /> : <h3>{data?.title}</h3>}

            <h1>${data?.price}</h1>
            <p style={{ color: "gray" }}>107293</p>
          </div>
          <div className="nots-single">
            {isLoading ? <PlaceLoad /> : <p>{data?.description}</p>}

            <p>Elasticated neckline, hemline and cuffs</p>
          </div>
          <SizeElement sizes={["XS", "S", "M"]} label="Size" />
          <LikeElement />
          <div>
            <Button width={330} height={50}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20vh", marginBottom: "15vh" }}>
        <hr />
        <LatestProducts />
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
