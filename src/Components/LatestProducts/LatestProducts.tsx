import Card from "../../BaseComponents/Ui/Card/Card";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./LatestProducts.css";
const LatestProducts = () => {
  return (
    <>
      <div className="titles-top-lasted">
        <h2>Don't miss the latest products!</h2>
        <h2>Conut Down</h2>
        <p>See More</p>
      </div>

      <Swiper
        style={{
          padding: "20px",
        }}
        slidesPerView={5}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
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
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div onClick={()=>document.location = "/singleproduct"}>
              <Card
                imageUrl="https://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-12.png"
                title="Morning Set"
                description="Set of coffee and chocolate cookies as a top tier among our customers and a perfect way to start your day."
                options={["sugar", "vanilla aroma", "cherry jam", "cinnamon"]}
                price={125}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default LatestProducts;
