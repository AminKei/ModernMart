import React from "react";
import "./CategorySlide.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import TabBar from "../TabBar/TabBar";

const dataCategory = [
  {
    id: 1,
    Title: "Kids Dress",
    ImageUrl: "https://pngimg.com/d/nike_PNG4.png",
  },
  {
    id: 2,
    Title: "Men's style",
    ImageUrl:
      "https://img.freepik.com/premium-photo/portrait-two-handsome-men-doing-modeling-dark-skinned-people-generative-ai_704724-8008.jpg",
  },
  {
    id: 3,
    Title: "Women's style",
    ImageUrl:
      "https://media.istockphoto.com/id/537892088/photo/classy-stylish-girl.jpg?s=612x612&w=0&k=20&c=tILekpWzJJza9F8otOy4Mg32IB7sh13G_YQi7tTgdCE=",
  },
  {
    id: 4,
    Title: "Kids's style",
    ImageUrl:
      "https://img.freepik.com/premium-photo/young-fashionable-boy-dressed-trendy-winter-outfit-strolling-sidewalk-holding_938957-60081.jpg?semt=ais_hybrid",
  },
  {
    id: 5,
    Title: "Perfum & Cosmetics",
    ImageUrl:
      "https://www.woodberg.de/cdn/shop/files/Fischersund-No-101-02_d25d9c7e-b319-4f8a-ade5-382dd63ff027.jpg?v=1720122660&width=1000",
  },
  {
    id: 6,
    Title: "Royal  Categoris",
    ImageUrl:
      "https://dt66ikht21gkc.cloudfront.net/img/homepage/red_carpet-desktop.jpg",
  },
  {
    id: 7,
    Title: "Perfum & Cosmetics",
    ImageUrl:
      "https://dt66ikht21gkc.cloudfront.net/img/homepage/red_carpet-desktop.jpg",
  },
  {
    id: 8,
    Title: "Mens & Women's",
    ImageUrl:
      "https://www.woodberg.de/cdn/shop/files/Fischersund-No-101-02_d25d9c7e-b319-4f8a-ade5-382dd63ff027.jpg?v=1720122660&width=1000",
  },
  {
    id: 9,
    Title: "Kids's style",
    ImageUrl:
      "https://img.freepik.com/premium-photo/young-fashionable-boy-dressed-trendy-winter-outfit-strolling-sidewalk-holding_938957-60081.jpg?semt=ais_hybrid",
  },
  {
    id: 10,
    Title: "Kids's style",
    ImageUrl:
      "https://img.freepik.com/premium-photo/young-fashionable-boy-dressed-trendy-winter-outfit-strolling-sidewalk-holding_938957-60081.jpg?semt=ais_hybrid",
  },
];



const CategorySlide = () => {
  return (
    <>
      
      <div className="category-list">
        {dataCategory.map((category) => (
          <div
            key={category.id}
            className="category-item"
            // onClick={() => onCategorySelect(category.id)}
            role="button" // Added role for accessibility
            tabIndex={0} // Added tabIndex for keyboard navigation
            onKeyPress={(e) => {
              // Added key press event for accessibility
              if (e.key === "Enter" || e.key === " ") {
                // onCategorySelect(category.id);
              }
            }}
          >
            <img
              src={category.ImageUrl}
              alt={category.Title} // Changed from Title to title
              className="category-image"
            />
            <span className="category-name">{category.Title}</span>{" "}
            {/* Changed from Title to title */}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySlide;
