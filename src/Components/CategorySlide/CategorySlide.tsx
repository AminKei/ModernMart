import "./CategorySlide.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const dataCategory = [
  {
    id: 1,
    Title: "Classic styles",
    ImageUrl: `${process.env.PUBLIC_URL}/images/1.png`,
  },
  {
    id: 2,
    Title: "Sport Shose",
    ImageUrl: `${process.env.PUBLIC_URL}/images/2.jpg`,
  },
  {
    id: 3,
    Title: "Formal Shose",
    ImageUrl: `${process.env.PUBLIC_URL}/images/3.png`,
  },
  {
    id: 4,
    Title: "Sport Shose",
    ImageUrl: `${process.env.PUBLIC_URL}/images/5.png`,
  },
  {
    id: 5,
    Title: "Sport Shose",
    ImageUrl: `${process.env.PUBLIC_URL}/images/1.png`,
  },
  {
    id: 6,
    Title: "Sport Shose",
    ImageUrl: `${process.env.PUBLIC_URL}/images/3.png`,
  },
  {
    id: 7,
    Title: "Sport Shose",
    ImageUrl: `${process.env.PUBLIC_URL}/images/4.png`,
  },
];

const CategorySlide = () => {
  return (
    <div className="conteiner-root">
      <div className="titles-top">
        <h2>All Category</h2>
        <p >See More</p>
      </div>
      <div className="swiper-container">
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
