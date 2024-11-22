import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import "./Dashboard.css";
import Favorites from "../../Components/OverviewDashbord/Favorites/Favorites";
import TabBar from "../../Components/TabBar/TabBar";
import { useProfile } from "../../Hooks/Auth/useProfile";
import Information from "../../Components/OverviewDashbord/Information/Information";

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
    name: "Information",
    content: <Information />,
  },
];

const Dashboard = () => {
  const { data } = useProfile();

  return (
    <div>
      <h2>Your Dashbord</h2>
      <hr />
      <p style={{ color: "gray" }}>Welcome</p>
      <p>{data?.name}</p>
      <TabBar tabs={tabs} />
    </div>
  );
};

export default Dashboard;
