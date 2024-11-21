import "./Comments.css";
import CommentApi from "./CommentApi.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
import ItemComments from "../../BaseComponents/Ui/ItemComments/ItemComments";

const Comments = () => {
  return (
    <div className="comment-contiener">
      <div className="div-titles-commenets">
        <h3>User Comments</h3>
        <p>Show more</p>
      </div>
      <Swiper
        style={{ height: "730px" }}
        slidesPerView={3}
        grid={{
          rows: 3,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@2": {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {CommentApi.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              {" "}
              <ItemComments
                name={item.author}
                rating={item.rating}
                text={item.text}
              />{" "}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Comments;
