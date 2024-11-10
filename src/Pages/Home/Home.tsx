import Button from "../../BaseComponents/Ui/Button/Button";
import Card from "../../BaseComponents/Ui/Card/Card";
import AdsPost from "../../Components/AdsPost/AdsPost";
import AppBar from "../../Components/AppBar/AppBar";
import CategorySlide from "../../Components/CategorySlide/CategorySlide";
import Comments from "../../Components/Comments/Comments";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import HomeFirstLeyout from "../../Components/HomeImage/HomeFirstLeyout";
import HomeImage from "../../Components/HomeImage/HomeFirstLeyout";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import NewArrival from "../../Components/NewArrival/NewArrival";

const Home = () => {
  return (
    <>
      <AppBar />
      <HomeFirstLeyout />
      {/* <CategorySlide/> */}
      <hr />
      <LatestProducts />
      <hr />
      {/* <AdsPost /> */}

      <Comments/>
      {/* <NewArrival/> */}
      <hr />
      <LatestProducts />
      <hr />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
