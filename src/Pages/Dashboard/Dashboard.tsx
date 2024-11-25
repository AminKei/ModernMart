import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import "./Dashboard.css";
import Favorites from "../../Components/OverviewDashbord/Favorites/Favorites";
import TabBar from "../../Components/TabBar/TabBar";
import { useProfile } from "../../Hooks/Auth/useProfile";
import Information from "../../Components/OverviewDashbord/Information/Information";
import Loader from "../../BaseComponents/Ui/LoadTemplate/Loader/Loader";
import PlaceLoad from "../../BaseComponents/Ui/LoadTemplate/PlaceLoad/PlaceLoad";

const tabs = [
  {
    name: "Orders",
    content: <Orders />,
  },
  {
    name: "Information",
    content: <Information />,
  },
  {
    name: "Favorites",
    content: <Favorites />,
  },
];

const Dashboard = () => {
  const { data, isLoading, error } = useProfile();

  return (
    <div>
      <h2>Your Dashbord</h2>
      <hr />
      <p style={{ color: "gray" }}>Welcome</p>
      {isLoading ? <PlaceLoad /> : <p>{data?.name}</p>}

      <TabBar tabs={tabs} />
    </div>
  );
};

export default Dashboard;
