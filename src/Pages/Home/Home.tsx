import Card from "../../BaseComponents/Ui/Card/Card";
import AdsPost from "../../Components/AdsPost/AdsPost";
import AppBar from "../../Components/AppBar/AppBar";
import Comments from "../../Components/Comments/Comments";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";

const Home = () => {
  return (
    <>
      <AppBar />
      <LatestProducts />
      {/* <Comments/> */}
      {/* <AdsPost /> */}
      <Features />
      <Footer />
    </>
  );
};

export default Home;
