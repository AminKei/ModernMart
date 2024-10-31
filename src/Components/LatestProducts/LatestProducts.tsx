import Card from "../../BaseComponents/Ui/Card/Card";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
const LatestProducts = () => {
  return (
    <>
      <Swiper
        style={{
          padding: "20px",
        }}
        slidesPerView={5}
        spaceBetween={1}
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
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <div>
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
