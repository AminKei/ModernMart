import Button from "../../BaseComponents/Ui/Button/Button";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <div className="not-found-container">
        <h1 className="not-found-header">404</h1>
        <p className="not-found-message">
          Oops! The page you are looking for does not exist.
        </p>
        <Button
          onClick={() => (document.location = "/")}
          width={300}
          bgColor="#000"
          color="#fff"
          border="solid 2px white "
        >
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
