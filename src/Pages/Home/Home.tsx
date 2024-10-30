import AdsPost from "../../Components/AdsPost/AdsPost";
import AppBar from "../../Components/AppBar/AppBar";
import Comments from "../../Components/Comments/Comments";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <AppBar />
      <Comments/>
      {/* <AdsPost /> */}
      <Features />
      <Footer />
    </>
  );
};

export default Home;
