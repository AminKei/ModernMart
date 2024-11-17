import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import "./Dashboard.css";
import Favorites from "../../Components/OverviewDashbord/Favorites/Favorites";
import Addresses from "../../Components/OverviewDashbord/Addresses/Addresses";
import TabBar from "../../Components/TabBar/TabBar";

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
    content: <Addresses />,
  },
];

const Dashboard = () => {
  return (
    <div>
      <h2>Your Dashbord</h2>
      <hr />
      <p style={{ color: "gray" }}>Welcome</p>
      <p>Hector Martinez</p>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default Dashboard;
