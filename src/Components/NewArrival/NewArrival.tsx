import Button from "../../BaseComponents/Ui/Button/Button";
import "./NewArrival.css";

const dataNewArrival = [
  {
    title: "Graphic Cart RTX 4090 Gameing",
    price: 500,
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2018/08/geforce-rtx-2080-gallery-b.jpg",
  },
  {
    title: "Graphic Cart GTX 3060 Gameing",
    price: 400,
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2018/08/geforce-rtx-2080-gallery-b.jpg",
  },
  {
    title: "Graphic Cart RTX 2050 Gameing",
    price: 300,
    image:
      "https://cdn.wccftech.com/wp-content/uploads/2018/08/geforce-rtx-2080-gallery-b.jpg",
  },
];

const NewArrival = () => {
  return (
    <div className="new-arrival-container">
      <img
        src={`${process.env.PUBLIC_URL}/images/poster.jpeg`}
        alt=""
        className="image-postere"
      />

      <div className="bottom-slide">
        <h1>
          More Sensitive <br />
          communication
        </h1>
        <Button color="black" width={300}>
          Know more about that
        </Button>
      </div>

      <div className="root-slides-rtx">
        {dataNewArrival.map((item) => {
          return (
            <div className="top-slide">
              <img src={item.image} alt="" className="image-postere" />
              <div className="caption-slide-items">
                <h3>{item.title}</h3>
                <h3>${item.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrival;
