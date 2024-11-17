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

const dataCategory = [
  {
    id: 1,
    Title: "Kids Dress",
    ImageUrl:
      "https://image.hm.com/assets/hm/f7/27/f72751d0bf611298a04004f01036afc0420e6069.jpg?imwidth=1536",
  },
  {
    id: 2,
    Title: "Men's Dtyle",
    ImageUrl:
      "https://img.freepik.com/premium-photo/portrait-two-handsome-men-doing-modeling-dark-skinned-people-generative-ai_704724-8008.jpg",
  },
];

const Home = () => {
  return (
    <>
      {/* <AppBar /> */}
      <HomeFirstLeyout />
      <CategorySlide categories={dataCategory} onCategorySelect={() => {}} />
      <hr />
      <LatestProducts />
      <hr />
      {/* <AdsPost /> */}

      {/* <Comments/> */}
      {/* <NewArm rival/> */}
      {/* <hr /> */}
      {/* <LatestProducts /> */}
      {/* <hr /> */}
      <Features />
      <Footer />
    </>
  );
};

export default Home;
