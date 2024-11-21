import Button from "../../BaseComponents/Ui/Button/Button";
import "./AdsPost.css";
const AdsPost = () => {
  return (
    <div className="Home-leyout-container">
      <img
        src="https://cdn.dribbble.com/users/702789/screenshots/14756278/media/fbb76b1ba34cd605cb2ca17c3eed0ec8.png"
        className="img-conteinered"
      />

      <div className="div-right-home">
        <div className="div-shild2">
          <h2>Galliz Silvers</h2>
          <p>ampid your smail with our personality glizz</p>
          <h1>$430.00</h1>
          <Button>
            <svg
              width="23"
              height="23"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 12v10H4V12"></path>
              <path d="M2 7h20v5H2z"></path>
              <path d="M12 22V7"></path>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
          </Button>
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
        <Button width={250}> SHOP NOW </Button>
      </div>
    </div>
  );
};

export default AdsPost;
