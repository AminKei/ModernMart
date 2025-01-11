import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import "./Dashboard.css";
import Favorites from "../../Components/OverviewDashbord/Favorites/Favorites";
import { useProfile } from "../../Hooks/Auth/useProfile";
import Information from "../../Components/OverviewDashbord/Information/Information";
import PlaceLoad from "../../BaseComponents/Ui/LoadTemplate/PlaceLoad/PlaceLoad";
import Button from "../../BaseComponents/Ui/Button/Button";
import { StorageKey } from "../../Config";

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

  const Logout = () => {
    localStorage.removeItem(StorageKey.User_Token);
    document.location.href = "/register";
  };

  return (
    <div>
      <h2>Your Dashbord</h2>
      <hr />
      <div className="div-root-dashboard">
        <div style={{}}>
          <p style={{ color: "gray" }}>Welcome</p>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <img
              src={data?.avatar}
              style={{ borderRadius: "100px" }}
              width={40}
              height={40}
              alt=""
            />
            {isLoading ? <PlaceLoad /> : <p> {data?.name}</p>}
          </div>
          {isLoading ? <PlaceLoad /> : <p>Email : {data?.email}</p>}
          {isLoading ? <PlaceLoad /> : <p>Password: {data?.password}</p>}
          {isLoading ? <PlaceLoad /> : <p>Role: {data?.role}</p>}
          <p>Address : Isfahan Najaf Abad Yazdanshar Bostan 19 </p>
          <Button width={300} onClick={Logout}>
            Logout
          </Button>
          <Orders />
        </div>
        <div className="div-root-dash-fevo">
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
