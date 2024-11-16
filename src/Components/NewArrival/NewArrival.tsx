import Button from "../../BaseComponents/Ui/Button/Button";
import "./NewArrival.css";

const NewArrival = () => {
  return (
    <div className="Home-leyout-container">
      <img
        // autoPlay
        // src={`${process.env.PUBLIC_URL}/images/home.png`}
        // src="https://cdn.dribbble.com/userupload/15873864/file/original-2c36b3ac457dff7d61274b88c32dc342.mp4"
        src="https://cdn.dribbble.com/users/702789/screenshots/14756278/media/fbb76b1ba34cd605cb2ca17c3eed0ec8.png"
        // src="https://cdn.dribbble.com/users/702789/screenshots/14756278/media/935b39c5609c4e281b02b22d13c2e2a0.png?resize=1200x900&vertical=center"
        className="img-conteinered"
      />

      <div className="div-right-home">
        <div className="div-shild2">
          <h2>Galliz Silvers</h2>
          <p>ampid your smail with our personality glizz</p>
          <h1>$430.00</h1>
          <Button>Buy Now</Button>
        </div>
        <div className="div-shild1">
          <h2>Sterling Silver</h2>
          <p>
            Explore our Sterling Silver and Gold Plated necklaces and pendants.
            Our modern yet classic designs feature
          </p>
        </div>
      </div>
      <div className="div-bottom-home">
        <h1>
          Spanke your shine <br /> with hip-hop jewelry Buy now
        </h1>
        <Button width={300}> SHOP NOW </Button>
      </div>
    </div>
  );
};

export default NewArrival;
