import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import SideBar from "../../Components/SideBar/SideBar";
import "./Dashboard.css";
import Favorites from "../../Components/OverviewDashbord/Favorites/Favorites";
import Addresses from "../../Components/OverviewDashbord/Addresses/Addresses";

const tabs = [
  {
    name: "Orders",
    content: <Orders />,
  },
  {
    name: "Favorites",
    content: <Favorites />,
  },
  {
    name: "Addresses",
    content: <Addresses />,
  },
  {
    name: "Information",
  },
];

const Dashboard = () => {
  return (
    <div >
      <h2>Your Dashbord</h2>
      <hr />
      <p style={{ color: "gray" }}>Welcome</p>
      <SideBar username="Hector Gomez" items={tabs} />
    </div>
  );
};

export default Dashboard;
