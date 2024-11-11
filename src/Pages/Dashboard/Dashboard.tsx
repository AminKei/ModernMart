import { useRoutes } from "react-router-dom";
import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import SideBar from "../../Components/SideBar/SideBar";
import TabBar from "../../Components/TabBar/TabBar";
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
    name: "Logout",
    content: <div>Here are your settings.</div>,
  },
];

const Dashboard = () => {
  return (
    <div>
      <h2>Your Dashbord</h2>
      <hr />
      <p style={{ color: "gray" }}>Welcome</p>
      <h3>Hector Gomez</h3>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default Dashboard;
