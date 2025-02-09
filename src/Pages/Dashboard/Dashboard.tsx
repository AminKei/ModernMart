import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import "./Dashboard.css";
import Favorites from "../../Components/OverviewDashbord/Favorites/Favorites";
import { useProfile } from "../../Hooks/Auth/useProfile";
import Information from "../../Components/OverviewDashbord/Information/Information";
import PlaceLoad from "../../BaseComponents/Ui/LoadTemplate/PlaceLoad/PlaceLoad";
import Button from "../../BaseComponents/Ui/Button/Button";
import { StorageKey } from "../../Config";
import TabBar from "../../Components/TabBar/TabBar";

const tabsDashboard = [
  {
    name: "Information",
    content: <Information />,
  },
  {
    name: "Fevorites",
    content: <Favorites />,
  },
];
const Dashboard = () => {
  const { data, isLoading, error } = useProfile();

  const Logout = () => {
    localStorage.removeItem(StorageKey.User_Token);
    document.location.href = "/register";
  };

  return (
    <div>
      <h2>Your Dashbord</h2>
      <TabBar tabs={tabsDashboard} />
    </div>
  );
};

export default Dashboard;
