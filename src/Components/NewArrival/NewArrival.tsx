import Button from "../../BaseComponents/Ui/Button/Button";
import "./NewArrival.css";

// const dataNewArrival = [
//   {
//     title: "Graphic Cart RTX 4090 Gameing",
//     price: 500,
//     image:
//       "https://cdn.wccftech.com/wp-content/uploads/2018/08/geforce-rtx-2080-gallery-b.jpg",
//   },
//   {
//     title: "Graphic Cart GTX 3060 Gameing",
//     price: 400,
//     image:
//       "https://cdn.wccftech.com/wp-content/uploads/2018/08/geforce-rtx-2080-gallery-b.jpg",
//   },
//   {
//     title: "Graphic Cart RTX 2050 Gameing",
//     price: 300,
//     image:
//       "https://cdn.wccftech.com/wp-content/uploads/2018/08/geforce-rtx-2080-gallery-b.jpg",
//   },
// ];

const NewArrival = () => {
  return (
    <div className="new-arrival-container">
      <video src={`${process.env.PUBLIC_URL}/images/4.mp4`} autoPlay controls></video>
    </div>
  );
};

export default NewArrival;
