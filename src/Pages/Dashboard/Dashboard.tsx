import { useRoutes } from "react-router-dom";
import Orders from "../../Components/OverviewDashbord/Orders/Orders";
import SideBar from "../../Components/SideBar/SideBar";
import TabBar from "../../Components/TabBar/TabBar";
import "./Dashboard.css";

const sidebarItems = [
  { label: "Orders", link: "/orders" },
  { label: "Favorites", link: "/favorites" },
  { label: "Addresses", link: "/addresses" },
  { label: "Information User", link: "/user-info" },
];

const tabs = [
  {
    name: "Orders",
    // content: <div>Hello and welcome to home page</div>,
  },
  {
    name: "Favorites",
    // content: <div>This is your profile.</div>,
  },
  {
    name: "Addresses",
    // content: <div>Here are your settings.</div>,
  },
  {
    name: "Logout",
    // content: <div>Here are your settings.</div>,
  },
];

const OrderTabs = [
  {
    name: "Orders",
    content: <div>Hello and welcome to home page</div>,
  },
  {
    name: "Favorites",
    content: <div>This is your profile.</div>,
  },
];

const Dashboard = () => {
  // const routeElements = useRoutes(routes);
  return (
    <div>
      <h2>Your Dashbord</h2>
      <hr />
      <p style={{ color: "gray" }}>Welcome</p>
      <h3>Hector Gomez</h3>
      {/* <div style={{width:"30%"}}>
        <hr />
      </div> */}
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <TabBar tabs={OrderTabs} /> */}
      </div>
      <div className="tabbar-mobile-view">
        <TabBar tabs={tabs} />
      </div>
      <div className="sidebar-other-view">
        <SideBar
          username="Json Martinez"
          items={sidebarItems}
          // onLogout={handleLogout}
        />
      </div>
    </div>
  );
};

export default Dashboard;
