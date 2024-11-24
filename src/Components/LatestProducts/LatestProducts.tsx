import Card from "../../BaseComponents/Ui/Card/Card";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./LatestProducts.css";
import CountDown from "../CountDown/CountDown";
import { useProducts } from "../../Hooks/Products/useProducts";
import { useAppNavigate } from "../../Hooks/Navigation/useAppNavigate";
const LatestProducts = () => {
  const { data, error, isLoading } = useProducts();

  const { goToProductDetails } = useAppNavigate();

  return (
    <>
      <div className="titles-top-lasted">
        <h2>
          Don't miss the latest products!{" "}
          <p onClick={() => (document.location = "/productslist")}>See More</p>
        </h2>
        <CountDown targetDate="2025-3-10" />
      </div>

      <Swiper
        style={{
          padding: "20px",
          marginBottom: "5vh",
        }}
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          "@1.75": {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.slice(0, 15).map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Card
                onClick={() => goToProductDetails(item.id)}
                key={index}
                imageUrl={item.images[0]}
                title={item.title}
                options={["sugar", "vanilla aroma", "cherry jam", "cinnamon"]}
                price={item.price}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestProducts;
