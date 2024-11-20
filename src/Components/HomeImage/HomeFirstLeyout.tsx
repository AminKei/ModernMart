import Button from "../../BaseComponents/Ui/Button/Button";
import "./HomeFirstLeyout.css";
const HomeFirstLeyout = () => {
  return (
    <div className="div-container">
      <h1 className="title">
        The New Bohemian: This year, we’re seeing a resurgence of bohemian
        aesthetics with a contemporary twist. Jewelry trends on the Fall 2024
        runways showcased intricate designs and artisanal
      </h1>
      <img
        width={1760}
        src={`${process.env.PUBLIC_URL}/images/HomeImage.png`}
        alt="Bohemian Style"
        className="center-image"
      />
      <div className="banner">
        <div className="overlay">
          <div className="center-button">
            <Button
              onClick={() => (document.location = "/productslist")}
              bgColor="#000"
              color="white"
              border="solid 2px white"
              width={340}
            >
              Bid on OpenSea
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstLeyout;
