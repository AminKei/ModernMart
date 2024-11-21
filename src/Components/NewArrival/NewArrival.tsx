import "./NewArrival.css";

const NewArrival = () => {
  return (
    <>
      <div className="grid-gallery">
        <div className="grid-item">
          <img
            src="https://www.realmenrealstyle.com/wp-content/uploads/2023/07/Dark-for-dress.jpg"
            alt="Model 1"
          />
          <div className="detels-item">
            <h2>Sport Collections</h2>
            <p>the must -have sportswear for the modern athlete</p>
            <a>Shop Now</a>
          </div>
        </div>
        <div className="grid-item">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-female-basketball-player_23-2151098134.jpg?t=st=1731938989~exp=1731942589~hmac=4c92791c7b5741372869bdd72e2496c563b607c3f47afe4e7eb642f8e5346cf5&w=1480"
            alt="Model 2"
          />
          <div className="detels-item">
            <h2>Sport Collections</h2>
            <p>the must -have sportswear for the modern athlete</p>
            <a>Shop Now</a>
          </div>
        </div>

        <div className="grid-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/4.png`}
            alt="Model 4"
          />
          <div className="detels-item">
            <h2>Sport Collections</h2>
            <p>the must -have sportswear for the modern athlete</p>
            <a>Shop Now</a>
          </div>
        </div>
        <div className="grid-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/1.jpg`}
            alt="Model 5"
          />
          <div className="detels-item">
            <h2>Sport Collections</h2>
            <p>the must -have sportswear for the modern athlete</p>
            <a>Shop Now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
