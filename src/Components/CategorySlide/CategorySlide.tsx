import Card from "../../BaseComponents/Ui/Card/Card";
import "./CategorySlide.css";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const dataCategory = [
  {
    id: 1,
    Title: "Sport Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
  {
    id: 2,
    Title: "Formal Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
  {
    id: 3,
    Title: "Woman Formal Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
  {
    id: 4,
    Title: "Sport Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
  {
    id: 5,
    Title: "Formal Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
  {
    id: 6,
    Title: "Woman Formal Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
  {
    id: 7,
    Title: "Woman Formal Shose",
    ImageUrl:
      "https://assets.ajio.com/medias/sys_master/root/20240617/MmyX/667014fd1d763220fac52187/the-indian-garage-co-black-classic-men-slim-fit-shirt-with-patch-pocket.jpg",
  },
];

const CategorySlide = () => {
  return (
    <div className="conteiner-root">
      <div className="titles-top">
        <h2>All Category</h2>
        <p>See More</p>
      </div>
      <div className="swiper-container2">
        {dataCategory.map((item) => {
          return (
            <div className="item-cate">
              <img src={item.ImageUrl} alt={item.Title} />
              <h3 className="text-cate">{item.Title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySlide;
