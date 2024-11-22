import AdsPost from "../../Components/AdsPost/AdsPost";
import CategorySlide from "../../Components/CategorySlide/CategorySlide";
import Comments from "../../Components/Comments/Comments";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import HomeFirstLeyout from "../../Components/HomeImage/HomeFirstLeyout";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import NewArrival from "../../Components/NewArrival/NewArrival";
import TabBar from "../../Components/TabBar/TabBar";

const tabSlide = [
  { name: "Men's" },
  { name: "Women's" },
  { name: "Kids" },
  { name: "Accessories" },
];

const Home = () => {
  return (
    <>
      <HomeFirstLeyout />
      <div style={{ height: "10vh" }}>
        <TabBar tabs={tabSlide} />
      </div>
      <CategorySlide />
      <LatestProducts />
      <hr />
      <NewArrival />
      <hr />
      <LatestProducts />
      <hr />
      <Comments />
      <AdsPost />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
