import "./CategorySlide.css";

const dataCategory = [
  {
    id: 1,
    Title: "Mes's Dress",
    ImageUrl: `${process.env.PUBLIC_URL}/images/1.png`,
    caption: "the best kids dress modern mart",
  },
  {
    id: 2,
    Title: "Men's style",
    ImageUrl: `${process.env.PUBLIC_URL}/images/3.png`,
    caption: "the best kids dress modern mart",
  },
  {
    id: 3,
    Title: "Women's style",
    ImageUrl: `${process.env.PUBLIC_URL}/images/2.jpg`,
    caption: "the best kids dress modern mart",
  },
  {
    id: 4,
    Title: "Kids's style",
    ImageUrl: `${process.env.PUBLIC_URL}/images/1.png`,
    caption: "the best kids dress modern mart",
  },
  {
    id: 4,
    Title: "Kids's style",
    ImageUrl: `${process.env.PUBLIC_URL}/images/1.jpg`,
    caption: "the best kids dress modern mart",
  },
  {
    id: 4,
    Title: "Kids's style",
    ImageUrl: `${process.env.PUBLIC_URL}/images/2.jpg`,
    caption: "the best kids dress modern mart",
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
            role="button"
            tabIndex={0}
          >
            <img src={category.ImageUrl} className="category-image" />
            <div>
              <span className="category-name">{category.Title}</span>{" "}
              <p>{category.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategorySlide;
