import CountDown from "../../Components/CountDown/CountDown";
import NewArrival from "../../Components/NewArrival/NewArrival";
import "./playGround.css";

const PlayGround = () => {
  return (
    <div >
      {/* <NewArrival/> */}
      <CountDown targetDate="2025-3-10"/>
    </div>
  );
};

export default PlayGround;
