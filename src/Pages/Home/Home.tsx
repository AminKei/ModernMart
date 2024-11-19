import AdsPost from "../../Components/AdsPost/AdsPost";
import CategorySlide from "../../Components/CategorySlide/CategorySlide";
import Comments from "../../Components/Comments/Comments";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import HomeFirstLeyout from "../../Components/HomeImage/HomeFirstLeyout";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import NewArrival from "../../Components/NewArrival/NewArrival";

const Home = () => {
  return (
    <>
      <HomeFirstLeyout />
      <CategorySlide />
      <hr />
      <LatestProducts />
      <hr />
      <NewArrival/>
      <hr />
      <LatestProducts />
      <hr />
      <AdsPost />
      <Comments/>

      {/* <hr /> */}
      {/* <LatestProducts /> */}
      {/* <hr /> */}
      <Features />
      <Footer />
    </>
  );
};

export default Home;
